import { Button, Form, Image, Input, Spinner } from "@heroui/react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useRandomPokemon } from "../../api/useRandomPokemon";
import GuessIcon from "../../assets/animatedIcons/system-solid-26-play-hover-play.json";
import { Page } from "../../components/page/Page";
import { GUESS_LIMIT } from "../../config/squirdle";

enum GameState {
  SUCCESS = "SUCCESS",
  IN_PROGRESS = "IN_PROGRESS",
  FAILURE = "FAILURE",
}

export const SquirdlePage = () => {
  const { randomPokemon, isLoading } = useRandomPokemon();

  const guessIconRef = useRef<Player>(null);

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [guessCount, setGuessCount] = useState(0);
  const [gameState, setGameState] = useState(GameState.IN_PROGRESS);

  useEffect(() => {
    guessIconRef.current?.playFromBeginning();
  }, []);

  if (isLoading || !randomPokemon) {
    return <Spinner />;
  }

  const formattedPokemonToGuess = `${randomPokemon.name
    .charAt(0)
    .toUpperCase()}${randomPokemon.name.substring(1)}`;

  const submitGuess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const incrementedGuessCount = guessCount + 1;

    setGuessCount(incrementedGuessCount);
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");

    if (currentGuess.toLowerCase() === randomPokemon.name.toLowerCase()) {
      setGameState(GameState.SUCCESS);
      return;
    }

    if (incrementedGuessCount >= GUESS_LIMIT) {
      setGameState(GameState.FAILURE);
      return;
    }
  };

  return (
    <Page showHomeButton>
      <h1 className="text-5xl">Squirdle</h1>
      {gameState === GameState.IN_PROGRESS && (
        <>
          <p>
            Guess: <span className="font-bold">{guessCount + 1}</span>
          </p>
          {guesses.map((guess, guessIndex) => (
            <div key={`guess-${guessIndex}`} className="flex gap-1">
              <p>{guessIndex + 1}: </p>
              <div className="font-bold">
                {guess.split("").map((char, charIndex) => (
                  <span
                    key={`guess-${guessIndex}-char-${charIndex}`}
                    className={
                      randomPokemon.name.includes(char) ? "text-green-500" : ""
                    }
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <Form onSubmit={submitGuess}>
            <div className="flex gap-2 items-center">
              <Input
                label="Who's that Pokémon?"
                value={currentGuess}
                onChange={(event) => setCurrentGuess(event.target.value)}
                className="w-fit"
              />
              <Button
                type="submit"
                color="primary"
                size="lg"
                startContent={<Player ref={guessIconRef} icon={GuessIcon} />}
                onMouseEnter={() => guessIconRef.current?.playFromBeginning()}
              >
                Guess
              </Button>
            </div>
          </Form>
        </>
      )}
      {gameState === GameState.SUCCESS && (
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              Gotcha!{" "}
              <span className="font-bold">{formattedPokemonToGuess}</span> was
              caught!
            </p>
            <p className="text-lg">
              It took <span className="font-bold">{guessCount}</span> attempt(s)
            </p>
          </div>
          {randomPokemon.sprites.front_default !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Image
                alt={`${formattedPokemonToGuess} sprite`}
                src={randomPokemon.sprites.front_default}
                width={300}
              />
            </motion.div>
          )}
        </div>
      )}
      {gameState === GameState.FAILURE && (
        <p>
          Oh no! The wild{" "}
          <span className="font-bold">{formattedPokemonToGuess}</span> fled!
        </p>
      )}
    </Page>
  );
};
