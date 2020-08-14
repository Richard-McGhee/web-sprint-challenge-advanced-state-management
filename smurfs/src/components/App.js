import React, { Component } from "react";
import SmurfVillage from './SmurfVillage'
import SmurfMaker from './SmurfMaker'
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfMaker />
        <SmurfVillage />
      </div>
    );
  }
}

export default App;
