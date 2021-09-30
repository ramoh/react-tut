import React from "react";
import Fetch from "./Fetch";

function UserDetail({ data }) {
  return (
    <div className="githubUser" style={{ paddingTop: 20 }}>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default function GHUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetail}
    />
  );
}
