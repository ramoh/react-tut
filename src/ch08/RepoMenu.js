import React, { useEffect } from "react";
import { useIterator } from "./use-iterator";

export function RepoMenu({ repositories, seleted, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(
    repositories,
    seleted ? repositories.findIndex((repo) => repo.name === seleted) : null,
  );
  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);
  return (
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
  );
}
