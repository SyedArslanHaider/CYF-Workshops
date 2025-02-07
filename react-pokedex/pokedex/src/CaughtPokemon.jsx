import PropTypes from 'prop-types';
import { useState } from 'react';
function  caughtPokemon(props){
 const [caught, setCaught] = useState(0);

  // Function to update state when button is clicked
  const catchPokemon = () => {
    setCaught(caught + 1); // Increase caught count by 1
  };
 return(
  <>
  <p>Caught {caught} Pokemon {props.date}</p>
  <button onClick={catchPokemon}>caughtPokemon</button>
  </>
 );
}
caughtPokemon.propTypes={
  date: PropTypes.number.isRequired
}
export default caughtPokemon