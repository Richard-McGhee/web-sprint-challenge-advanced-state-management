import React, { Component } from "react";
import { connect } from 'react-redux'
import SmurfVillage from './SmurfVillage'
import SmurfMaker from './SmurfMaker'
import { getSmurfs } from '../actions/smurfActions'
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfVillage />
        <SmurfMaker />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);
