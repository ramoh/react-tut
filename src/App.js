import React from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <div className="App" style={{ padding: "15px" }}>
      <header className="App-header">
        <AddColorForm />
        <ColorList />
        <Checkbox />
      </header>
    </div>
  );
}

export default App;
