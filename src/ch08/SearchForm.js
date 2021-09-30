import React, { useState } from "react";

export default function SearchForm({ value = "", onSearch = (f) => f }) {
  const [name, setName] = useState(value);
  return (
    <div>
      <br></br>
      <input
        style={{ marginRight: 12 }}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button
        type="button"
        onClick={() => {
          onSearch(name);
          setName("");
        }}
      >
        Search User
      </button>
    </div>
  );
}
