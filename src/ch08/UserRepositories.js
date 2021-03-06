import React from "react";
import Fetch from "./Fetch";
import { RepoMenu } from "./RepoMenu";
export default function UserRepositories({ login, repo, onSelect = (f) => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => {
        if (!data || data.length === 0) return <p>No Repositories found</p>;
        return (
          <RepoMenu
            repositories={data}
            seleted={repo}
            onSelect={onSelect}
          ></RepoMenu>
        );
      }}
    ></Fetch>
  );
}
