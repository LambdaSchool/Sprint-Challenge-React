import React, { Component } from 'react';
import CardList from './components/CardComponents/CardList';
import ButtonComponent from './components/ButtonComponents/ButtonComponent';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ButtonComponent 
          btnValue1="Previous Page"
          btnValue2="Next Page"
          btnHandleClick1={() => this.getCharacters('https://swapi.co/api/people/?page=1')}
          btnHandleClick2={() => this.getCharacters('https://swapi.co/api/people/?page=2')}
        />
        <CardList
          card={this.state.starwarsChars}
        />
        <ButtonComponent 
          btnValue1="Previous Page"
          btnValue2="Next Page"
          btnHandleClick1={() => this.getCharacters('https://swapi.co/api/people/?page=1')}
          btnHandleClick2={() => this.getCharacters('https://swapi.co/api/people/?page=2')}
        />
        
      </div>
    );
  }
}

export default App;
