import React, {useState, useEffect}from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from "./components/CharacterList";


// const starwarsAPI = 'https://swapi.co/api/people/';

const starwarsAPI = "https://lambda-github-api-server.herokuapp.com/"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [Characters, setChar] = useState({
    data:[]
  })

// stetting state to array

  useEffect(() => {
    axios.get(starwarsAPI)
      .then(response =>{
        console.log('Response', response.data);
        setChar(response.data.results);
        
      })
      .catch(error => {

      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characters={Characters}/> 
    </div>
  );
}
// 40 invocation
export default App;
