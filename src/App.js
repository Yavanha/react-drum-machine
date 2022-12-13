import "./App.css"
import React from "react"

import DrumMachine from "./Components/DrumMachine/DrumMachine"


export default class App extends React.Component {

  render() {
    return(
      <main className="main-container">
        <DrumMachine />
      </main>
    )
  }
}