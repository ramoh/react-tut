import React from "react";
import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";

function UserDetail({ data }) {
  return (
    <div className="githubUser" style={{ paddingTop: 20 }}>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      ></UserRepositories>
    </div>
  );
}

export default function GHUser({ login }) {
  if (!login) return <p> Enter the guthub user login and press search</p>;
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetail}
    />
  );
}
