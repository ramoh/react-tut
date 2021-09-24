import React, { useEffect, useReducer } from "react";

export default function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    console.log(checked ? "Yes,Checked" : "No, not checked");
  });

  useEffect(() => {
    localStorage.setItem("checkbox-value", checked);
  });

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}></input>
      &nbsp;{checked ? "checked" : "not checked"}
    </>
  );
}
