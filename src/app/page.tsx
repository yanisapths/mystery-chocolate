"use client";
import { ChocolateGameState } from "../components/ChocolateGameState";
import { MiniCredit } from "../components/Credit";
import { useGameState } from "../components/use-game-state";

const HomePage = () => {
  const { state, to } = useGameState();

  return (
    <div>
      {" "}
      <MiniCredit to={to} />
      <ChocolateGameState state={state} to={to} />
    </div>
  );
};

export default HomePage;
