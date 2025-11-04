"use client";
import { ChocolateGameState } from "../components/ChocolateGameState";
import { useGameState } from "../components/use-game-state";

const HomePage = () => {
  const { state, to } = useGameState();

  return <ChocolateGameState state={state} to={to} />;
};

export default HomePage;
