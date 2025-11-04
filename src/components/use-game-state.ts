"use client";
import { useCallback, useState } from "react";

export type GameState =
  | "landing"
  | "loading"
  | "picking"
  | "reveal"
  | "fortune";

export const useGameState = () => {
  const [state, setState] = useState<GameState>("landing");

  const to = useCallback((state: GameState) => {
    setState(state);
  }, []);

  return {
    state,
    to,
  };
};
