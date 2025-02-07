import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
function App(){
    const abilities_new = [
    { id: 1, name: 'Anticipation' },
    { id: 2, name: 'Adaptability' },
    { id: 3, name: 'Run-Away' }
  ];
  const date = new Date().toLocaleDateString();
  return(
    <>
    <Logo appName="Pokedex"/>
    <BestPokemon abilities={abilities_new}/>
    <CaughtPokemon date={date}/>
    </>
  ); 
}
export default App