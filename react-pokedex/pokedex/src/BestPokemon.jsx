import PropTypes from 'prop-types';

function BestPokemon(props){
  return(
    <div>
    <p>My favorite Pokemon is Squirtle</p>
    <ul>
      {props.abilities.map(({id, name})=>
      <li key={id}>{name}</li>
      )}
    </ul>
    </div>
  );
}
BestPokemon.propTypes={
  abilities: PropTypes.array.isRequired
}
export default BestPokemon