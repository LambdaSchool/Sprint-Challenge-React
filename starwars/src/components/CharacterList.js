import React from 'react';
import './StarWars.css';
import Character from './Character';

const CharacterList = (props) => {
  return (
    <div>{props.chars.map(char => {return <Character chars={char} key={char.name}/>})}</div>
  );
};

export default CharacterList;
