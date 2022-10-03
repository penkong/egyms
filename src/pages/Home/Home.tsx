import { useCallback, useEffect, useState } from "react";

// ---

import { HomeStyled } from "./Home.styled";
import { UserProvider } from "../../components";
import { IResponseRandomUsers } from "../../types";

// ---

const url = process.env.REACT_APP_RAND!;

export const Home = () => {
  const [users, setUsers] = useState<IResponseRandomUsers["results"]>([]);

  const getRandomUsers = useCallback(async () => {
    const res = await fetch(
      url! + "?seed=foober&page=1&results=5&inc=name,picture,gender,email,phone"
    );
    const { results } = (await res.json()) as IResponseRandomUsers;
    setUsers(results);
  }, []);

  useEffect(() => {
    getRandomUsers().catch((e) => console.log(e));
  }, [getRandomUsers]);

  return (
    <HomeStyled>
      <div className="cardContainer flex flex-wrap justify-center items-center">
        {users.map((user) => (
          <UserProvider key={user.email} user={user} />
        ))}
      </div>
      <div className="paginantion"> i am pagination</div>
    </HomeStyled>
  );
};
