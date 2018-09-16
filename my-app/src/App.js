import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import xesto from 'xesto-wave-npm';
class App extends Component {
  render() {
    const client = xesto("41936d80bbfa46509ad4fcebf24c30f0");
    client.connect().then(controller => {
      controller.on("Second", () => {
        console.log("Help!");
      })
      controller.connect();
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
