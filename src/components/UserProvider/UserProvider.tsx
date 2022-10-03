import { FC } from "react";

// ---

import { IRandomUser } from "../../types";
import { UserProviderStyled } from "./UserProvider.styled";

// ---

type LocalProps = "name" | "picture" | "gender" | "email" | "phone";
interface IProps {
  user: Pick<IRandomUser, LocalProps>;
}

// ---
{
  /* <div
className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
style={{ backgroundImage: "url('/img/card-left.jpg')" }}
title="Woman holding a mug"
></div> */
}

export const UserProvider: FC<IProps> = ({ user: { name, picture } }) => {
  const showInfoMethod = () => {};
  return (
    <UserProviderStyled className="w-[70%]">
      <div
        onClick={showInfoMethod}
        className="userHeader cursor-pointer rounded-lg hover:bg-slate-100 flex flex-row justify-around items-center m-0.5 bg-slate-300"
      >
        <img
          alt="A baby smiling with a yellow headband."
          src={picture.medium}
          sizes="70vmin"
        />

        <div>
          {name.title} {name.first} {name.last}
        </div>
      </div>

      <div className="userInfo"></div>
      {/* <div className="max-w-sm w-full lg:max-w-sm">
       
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {`${name.title} ${name.first} ${name.last}`}
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div> */}
    </UserProviderStyled>
  );
};
