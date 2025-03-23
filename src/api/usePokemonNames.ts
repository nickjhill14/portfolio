import { PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";
import { POKEDEX_LIMIT } from "../config/squirdle";

export const usePokemonNames = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => await fetchPokemonNames())();
  }, []);

  const fetchPokemonNames = async () => {
    try {
      const response = await new PokemonClient().listPokemons(
        undefined,
        POKEDEX_LIMIT,
      );

      setPokemonNames(response.results.map((result) => result.name));
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { pokemonNames, isLoading, isError };
};
