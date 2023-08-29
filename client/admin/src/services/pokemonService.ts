import { pokeAPI, internarAPI} from "./apis";

export const getPokemonById = async (pokemonId) => {
    const pokemonData  = await pokeAPI.get(`/pokemon/${pokemonId}`)
    console.log("🚀 ~ file: pokemonService.ts:6 ~ getPokemonById ~ pokemonData:", pokemonData)
    return pokemonData.data;
}

export const getPokemonsCaptured = async () => {
    const pokemons = await internarAPI.get('/pokemons');
    return pokemons.data;
}

export const postPokemonsCaptured = async (pokemonCaptured:any) => {
    const pokemons = await internarAPI.post('/pokemons', pokemonCaptured);
    return pokemons.data;
}

