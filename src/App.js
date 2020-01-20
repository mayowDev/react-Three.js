import React from "react";
import SpinningCube from "./SpinningCube";

import "./App.css";
import Orbit from "./Orbit";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>welcom To Three js with react</p>
      </header>
      {/* <SpinningCube width={800} height={700} /> */}
      <Orbit width={800} height={700} />
    </div>
  );
}

export default App;
