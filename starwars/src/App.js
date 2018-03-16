import React, { Component } from 'react';
import './App.css';
import {Card} from './Card/Card.js'

class App extends Component {
  constructor() {
    
    return (
      <div className="App">
      <h1 className="Header">React Wars</h1>

      <div>
        <Card chars={this.state.starwarsChars} />;
        </div>
        </div>
    );
  }
  
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
      return (
        <div className="App">
        <h1 className="char">
        <div className="charText">
      )
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

export default App;
