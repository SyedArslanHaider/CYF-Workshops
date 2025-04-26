import PropTypes from 'prop-types';
import { useState } from 'react';
function  CaughtPokemon(props){
 const [caught, setCaught] = useState([]);

  // const catchPokemon = () => {
  //   setCaught(caught + 1); 
  // };
  const CatchhPokemon = ()=>{
    setCaught((prevCaught) => [...prevCaught, "arslan"]);
  }
 return(
  <>
  <p>Caught {caught.length} Pokemon {props.date}</p>
  <ul>
    {caught.map((item,index)=>(
    <li key={index}>{item}</li>
  ))}</ul>
    <button onClick={CatchhPokemon}>caughtPokemon</button>
  </>
 );
}
CaughtPokemon.propTypes={
  date: PropTypes.number.isRequired
}
export default CaughtPokemon