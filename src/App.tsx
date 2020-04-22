import React from "react"
import { Logo } from "./Logo"
import "./App.css"
import { useIterval } from "./useInterval"

function App() {
  const { state, setState } = useIterval("40")
  return (
    <div className="App">
      <header className="App-header">
        <Logo height={`${state}vmin`} color="tomato" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          value={state}
          type="range"
          onChange={(e) => setState(e.target.value)}
        />
      </header>
    </div>
  )
}

export default App
