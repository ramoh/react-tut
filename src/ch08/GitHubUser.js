import React, { useEffect, useState } from "react";

async function getUserInfo(login) {
  const res = await fetch(`https://api.github.com/users/${login}`);
  const userData = await res.json();
  return userData;
}
function GitHubUser({ login }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    getUserInfo(login).then(setData).catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
}

export default function App() {
  const [user, setUser] = useState();

  return (
    <>
      <button onClick={() => setUser(prompt("Enter git hub user id"))}>
        Get User{" "}
      </button>
      <GitHubUser login={user} />
    </>
  );
}
