import { Button, Form, Input, Spinner } from "@heroui/react";
import { Player } from "@lordicon/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { usePokemonNames } from "../../api/usePokemonNames";
import GuessIcon from "../../assets/animatedIcons/system-solid-26-play-hover-play.json";
import { Page } from "../../components/page/Page";
import { GUESS_LIMIT } from "../../config/squirdle";

enum GameState {
  SUCCESS = "SUCCESS",
  IN_PROGRESS = "IN_PROGRESS",
  FAILURE = "FAILURE",
}

export const SquirdlePage = () => {
  const { pokemonNames, isLoading } = usePokemonNames();

  const guessIconRef = useRef<Player>(null);

  const pokemonToGuessIndex = useMemo(
    () => Math.floor(Math.random() * 151),
    [pokemonNames],
  );

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [guessCount, setGuessCount] = useState(0);
  const [gameState, setGameState] = useState(GameState.IN_PROGRESS);

  useEffect(() => {
    guessIconRef.current?.playFromBeginning();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const pokemonToGuess = pokemonNames[pokemonToGuessIndex];
  const formattedPokemonToGuess = `${pokemonToGuess
    .charAt(0)
    .toUpperCase()}${pokemonToGuess.substring(1)}`;

  const submitGuess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const incrementedGuessCount = guessCount + 1;

    setGuessCount(incrementedGuessCount);
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");

    if (currentGuess.toLowerCase() === pokemonToGuess.toLowerCase()) {
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
          {guesses.map((guess, index) => {
            const hintLimit =
              guesses.length > pokemonToGuess.length - 1
                ? pokemonToGuess.length
                : guesses.length;
            const hints = pokemonToGuess.substring(0, hintLimit);

            const formattedGuess = guess.split("").map((char, index) => (
              <span
                className={hints.includes(char) ? "text-green-500" : ""}
                key={`guess-char-${index}`}
              >
                {char}
              </span>
            ));

            return (
              <p key={`guess-${index}`}>
                {index + 1}: <span className="font-bold">{formattedGuess}</span>
              </p>
            );
          })}
          <Form onSubmit={submitGuess}>
            <div className="flex gap-2 items-center">
              <Input
                label="Who's that Pokemon?"
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
        <>
          <p>
            Gotcha! <span className="font-bold">{formattedPokemonToGuess}</span>{" "}
            was caught!
          </p>
          <p>
            It took <span className="font-bold">{guessCount}</span> attempt(s)
          </p>
        </>
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
