import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import GHUser from "./GHUser";
import { token } from "./github-token.json";
import { List } from "./RenderProperty";
import SearchForm from "./SearchForm";

const query = `
query findRepos($login:String!) {
    user(login:$login) {
        login
        name
        location
        avatar_url: avatarUrl
        repositories(first:100) {
            totalCount
            nodes {
                name
            }
        }
    }
}
`;

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default function App() {
  const [login, setLogin] = useState("ramoh");
  const [userData, setUserData] = useState();

  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [login]);

  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <SearchForm value={login} onSearch={setLogin}></SearchForm>
      <GHUser {...userData}></GHUser>
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={(repo) => <span>{repo.name}</span>}
      ></List>
    </>
  );
}
