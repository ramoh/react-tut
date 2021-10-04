import React, { useState } from "react";
import GHUser from "./GHUser";
import RepositoryReadme from "./RepositoryReadme";
import SearchForm from "./SearchForm";
import UserRepositories from "./UserRepositories";

export default function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  const handleSearch = (login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  };

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch}></SearchForm>
      {login && <GHUser login={login} />}
      {login && (
        <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      )}
      {login && repo && <RepositoryReadme login={login} repo={repo} />}
    </>
  );
}
