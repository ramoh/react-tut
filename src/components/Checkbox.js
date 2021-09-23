import React, { useEffect, useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked ? "Yes,Checked" : "No, not checked");
  });

  useEffect(() => {
    localStorage.setItem("checkbox-value", checked);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      ></input>
      &nbsp;{checked ? "checked" : "not checked"}
    </>
  );
}
