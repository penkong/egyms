import { useCallback, useEffect, useState } from "react";

// ---

import { HomeStyled } from "./Home.styled";
import { IResponseRandomUsers } from "../../types";
import { UserProvider, ButtonCustom } from "../../components";

// ---

const url = process.env.REACT_APP_RAND!;

export const Home = () => {
  // local states
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<IResponseRandomUsers["results"]>([]);

  // fetcher for info ----> it will be in a service
  const getRandomUsers = useCallback(async () => {
    const res = await fetch(
      `${url!}?seed=foober&page=${page}&results=5&inc=name,picture,gender,email,phone`
    );
    const { results } = (await res.json()) as IResponseRandomUsers;
    setUsers(results);
  }, [page]);

  // logic method for render more info
  const pageTurnMethod = useCallback((val: "pre" | "next") => {
    if (val === "pre" && page === 1) return;
    if (val === "pre") setPage(() => page - 1);
    if (val === "next") setPage(() => page + 1);
  }, [page]);

  // life cycle allow to get user on load or on changes in states
  useEffect(() => {
    getRandomUsers().catch((e) => console.log(e));
  }, [getRandomUsers, page]);

  return (
    <HomeStyled>
      <div className="cardContainer flex flex-wrap justify-center items-center">
        {users.map((user) => (
          <UserProvider key={user.email} user={user} />
        ))}
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <ButtonCustom fn={() => pageTurnMethod("pre")} text="previous" />
        <ButtonCustom fn={() => pageTurnMethod("next")} text="next" />
      </div>
    </HomeStyled>
  );
};
