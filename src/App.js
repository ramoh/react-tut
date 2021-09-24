import React from "react";
import User from "./components/User";

function App() {
  return (
    <div className="App" style={{ padding: "15px" }}>
      <header className="App-header">
        <User />
        {/*
        <AddColorForm />
        <ColorList />
        */}
      </header>
    </div>
  );
}

export default App;
