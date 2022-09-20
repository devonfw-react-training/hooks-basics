import React, { ChangeEvent, useCallback } from "react"
import { Logo } from "./Logo"
import "./App.css"
import { useIterval } from "./useInterval"

function App() {
  const [state, setState] = useIterval(40);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(parseInt(e.target.value));
  }, [setState]);

  return (
    <div className="App">
      <input
        value={state}
        type="range"
        onChange={handleInputChange}
      />
      <header className="App-header">
        <Logo height={`${state}vmin`} color="tomato" />
      </header>
    </div>
  );
};

export default App
