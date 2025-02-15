import { Pokemon, PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import { POKEDEX_LIMIT } from "../config/squirdle";

export const useRandomPokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => await fetchPokemon())();
  }, []);

  const fetchPokemon = async () => {
    const randomPokemonIndex = Math.floor(Math.random() * POKEDEX_LIMIT);

    try {
      const pokemonClient = new PokemonClient();

      const pokemonList = await pokemonClient.listPokemons(
        undefined,
        POKEDEX_LIMIT,
      );

      const pokemon = await pokemonClient.getPokemonByName(
        pokemonList.results[randomPokemonIndex].name,
      );

      setRandomPokemon(pokemon);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    randomPokemon,
    isLoading,
    isError,
  };
};
