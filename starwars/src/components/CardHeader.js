import React from 'react';
import './StarWars.css';


const CardHeader = props => {

	return(
	<div className={props.conatinerStyle}>	
	{props.charName.map(item => {
		return( 
		<div key={item.created} className={props.cardStyle}>		
		<h3>Name: {item.name}</h3>
		  <p>Gender: {item.gender}</p>		
		  <p>Height: {item.height}</p>
		  <p>Mass: {item.mass}</p>	
		</div>	
		);		
	})}
		</div>	
	);
};




export default CardHeader;
