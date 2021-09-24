import React, { useState } from "react";
import { PureCat } from "./components/Cat";

function App() {
  const [cats, setCats] = useState(["Biscute", "Jungle", "Outlaw"]);
  return (
    <div className="App" style={{ padding: "15px" }}>
      <header className="App-header">
        {cats.map((name, i) => (
          <PureCat
            key={i}
            name={name}
            meow={(name) => console.log(`${name} has meowed`)}
          />
        ))}
        <button onClick={() => setCats([...cats, prompt("Name cat")])}>
          Add a cat
        </button>
        {/*
        <User />
        <AddColorForm />
        <ColorList />
        */}
      </header>
    </div>
  );
}

export default App;
