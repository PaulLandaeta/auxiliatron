import {useEffect,useState} from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import PokeCard from './PokeCard';
import { generateRandomNumbers } from '../helpers/random';
import { getPokemonsCaptured } from '../services/pokemonService';

export default function Pokedeck() {
  // obtener los 3 numeros aleatorios
  const numbers = generateRandomNumbers();
  const [pokemonsCaptured, setPokemonsCaptured] = useState<any>([]);
    useEffect(()=>{
        const getPokemons = async() => {
            const pokemons = await getPokemonsCaptured();
            console.log("🚀 ~ file: Pokedeck.tsx:15 ~ getPokemons ~ pokemons:", pokemons)
            setPokemonsCaptured(pokemons);
        }
        getPokemons();
    }, []) 
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {
            numbers.map((number)=>{
                return<PokeCard pokemonId={number}></PokeCard>
            })
        }
      </Stack>
      <Divider style={{marginTop: 20, marginBottom: 20}}/>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {
           pokemonsCaptured &&  pokemonsCaptured.map((pokemonCaptured: any)=>{
                return<PokeCard pokemonId={pokemonCaptured.id}></PokeCard>
            })
        }
      </Stack>
    </div>
  );
}