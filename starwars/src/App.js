import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import InfoList from './components/InfoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  ButtonLuke = event => {
    event.preventDefault();
    console.log("Luke was clicked!");
    let luke = this.state.starwarsChars[0];
    console.log(luke);
  };

  ButtonC3po = event => {
    event.preventDefault();
    console.log("3-CPO was clicked!");
    let c3po = this.state.starwarsChars[1];
    console.log(c3po);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Character-Buttons">
          <Form 
          handleButtonLuke={this.ButtonLuke}
          handleButtonC3po={this.ButtonC3po}
          />
        </div>
        <div>
          <InfoList
          name={this.state.starwarsChars.name}
          gender={this.state.starwarsChars.gender}
          />
        </div>
      </div>
    );
  }
}

export default App;
