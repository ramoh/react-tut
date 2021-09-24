import React, { useEffect, useState } from "react";

export default function Phrase() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  // No dependieces array means the effect will be rendered on initial render.
  // this is extremely usefull for first render. If you return the a function from the effect
  // then function will be invoked when component is removed
  useEffect(() => {
    console.log("Welcome to phrase component");
    return () => console.log("Goodbye from phrase componet");
  }, []);

  return (
    <>
      <label>Favourite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}
