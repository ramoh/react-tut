import React, { useState } from "react";
import GHUser from "./GHUser";
import SearchForm from "./SearchForm";

export default function App() {
  const [login, setLogin] = useState();

  return (
    <>
      <SearchForm value={login} onSearch={setLogin}></SearchForm>
      <GHUser login={login} />
    </>
  );
}
