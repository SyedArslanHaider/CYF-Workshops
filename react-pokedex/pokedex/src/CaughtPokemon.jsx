import PropTypes from 'prop-types';
function  CaughtPokemon(props){
 return(
  <p>Caught 0 Pokemon {props.date}</p>
 );
}
CaughtPokemon.propTypes={
  date: PropTypes.number.isRequired
}
export default CaughtPokemon