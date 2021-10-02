import React, { useEffect } from "react";
import RepositoryReadme from "./RepositoryReadme";
import { useIterator } from "./use-iterator";

export function RepoMenu({ repositories, login, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(repositories);
  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <div
          style={{
            width: 250,
            maxWidth: 250,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "InfoBackground",
          }}
        >
          <p>{name}</p>
        </div>
        <button onClick={next}>&gt;</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <RepositoryReadme login={login} repo={name} />
      </div>
    </div>
  );
}
