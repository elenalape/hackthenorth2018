import React, { Component } from 'react';
import logo from './Just_blast_it.svg';
import './App.css';
import xesto from 'xesto-wave-npm';
import exec from 'child_process';
class App extends Component {

  render() {
    const client = xesto("41936d80bbfa46509ad4fcebf24c30f0");
    let data;
    client.connect().then(controller => {
      fetch('https://e1bd4e6e.ngrok.io/template/actions/5b9e10bdbd35871663491f40')
      .then( response => response.text())
      .then(data => {
      data = JSON.parse(data);
      let obj = [];
      data.forEach(point => {
        obj.push(Object.keys(point)[0]);
      })
      console.log(obj);

      let upIndex = obj.indexOf('up')
      let downIndex = obj.indexOf('left')
      let leftIndex = obj.indexOf('right')
      let rightIndex = obj.indexOf('down')
      controller.on("Uno", () => {
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + String(upIndex + 1) + '.mp3');
        audio.play();
      });
      controller.on("Dos", () => {
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + String(downIndex + 1) + '.mp3');
        audio.play();
      });
      controller.on("Tres", () => {
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + String(leftIndex + 1) + '.mp3');
        audio.play();
      });
      controller.on("Cuatro", () => {
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + String(rightIndex + 1) + '.mp3');
        audio.play();
      });
      controller.connect();
      })
    })

    var style = {
      width:"500px",
      height:"500px"
    };
    return (
      <div className="App">
        <img src={logo} claassName="App-logo" alt="logo" style={style} />
      </div>
    );
  }
}

export default App;
