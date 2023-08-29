import { pokeAPI } from "./apis";

export const getPokemonById = async (pokemonId) => {
    const pokemonData  = await pokeAPI.get(`/pokemon/${pokemonId}`)
    console.log("🚀 ~ file: pokemonService.ts:6 ~ getPokemonById ~ pokemonData:", pokemonData)
    return pokemonData.data;
}