import { FC, useState } from "react";

// ---

import { IRandomUser } from "../../types";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";
import { UserProviderStyled } from "./UserProvider.styled";

// ---

type LocalProps = "name" | "picture" | "gender" | "email" | "phone";
interface IProps {
  user: Pick<IRandomUser, LocalProps>;
}

// ---

export const UserProvider: FC<IProps> = ({
  user: { name, picture, email, gender , phone },
}) => {
  const [more, setMore] = useState(false);

  const showInfoMethod = () => setMore(() => !more)

  const renderInfoRow = () => {
    return more ? (
      <div className="flex flx-row w-full justify-evenly mt-2 items-center ">
        <div>
        <div className="gender">{gender}</div>
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
        </div>
        <ButtonCustom fn={showInfoMethod} text="hide"/>
      </div>
    ) : (
      <ButtonCustom fn={showInfoMethod} text="more"/>
    )}

  return (
    <UserProviderStyled className="m-1 rounded-2xl cursor-pointer p-1 pt-2 w-[90%] md:w-[40%] lg:w-[30%] bg-slate-200 hover:bg-slate-100 h-56">
      <div className="userHeader rounded-lg flex flex-row justify-around items-center m-0.5">
        <img
          className="rounded-lg"
          alt={email}
          src={picture.large}
          srcSet={`${picture.medium} 780w,${picture.large} 1024w`}
          width="100px"
          height="100px"
        />

        <div>
          {name.title} {name.first} {name.last}
        </div>
      </div>
      {renderInfoRow()}
    </UserProviderStyled>
  );
};
