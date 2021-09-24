import React from "react";
import Git from "./ch08/GitHubUser";

function App() {
  return (
    <div className="App" style={{ padding: "15px" }}>
      <header className="App-header">
        <Git />
        {/*cats.map((name, i) => (
          <PureCat
            key={i}
            name={name}
            meow={(name) => console.log(`${name} has meowed`)}
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
