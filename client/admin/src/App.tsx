import {useEffect, useState} from 'react';
import "./App.css";
import SubjectCard from "./components/SubjectCard";
import { pokeAPI, internarAPI } from './services/apis';
import {generateRandomNumbers}  from './helpers/random';
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [click, setClick ] = useState(false);
  const get3RandomsNumbers = generateRandomNumbers();
  useEffect(() => {
    pokeAPI.get('/pokemon/charmander')
      .then(response => {
        setPokemon(response.data);
        console.table(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    internarAPI.get('/pokemons')
      .then(response => {
        setPokemon(response.data);
        console.table(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [click]);

  const clicked = () => {
    console.log('haciendo click');
    setClick(!click);
  }

  return (
    <>
    <SubjectCard/>
    <button onClick={clicked}> hazme click!!!</button>
    </>
  );
}

export default App;
