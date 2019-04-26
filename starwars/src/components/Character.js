import React from 'react';
import './StarWars.css';
import { Link } from "react-router-dom";


const Character = props => {
    return (
        <div>
            <div className="char-header">
                <h1>
                {props.characterOnProps.name}
                </h1>
            </div>
            <div className="char-body">
                <h3>Birth Year: {props.characterData.birth_year}</h3>
                <h3>Eye Color: {props.characterData.eye_color}</h3>
                <h3>Gender: {props.characterData.gender}</h3>
                <h3>Hair Color: {props.characterData.hair_color}</h3>
                <h3>Height: {props.characterData.height}</h3>
        
            </div>
        </div>
    );
}
export default Character; 