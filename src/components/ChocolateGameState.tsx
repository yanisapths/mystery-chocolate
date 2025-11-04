import ChocolatePicker from "./ChocolatePicker";
import Fortune from "./Fortune";
import Landing from "./Landing";
import Loading from "./Loading";
import Reveal from "./Reveal";
import { type GameState } from "./use-game-state";

interface GameStateProps {
  state: GameState;
  to: (state: GameState) => void;
}

export const ChocolateGameState = ({ state, to }: GameStateProps) => {
  switch (state) {
    case "landing":
      return <Landing to={to} />;

    case "picking":
      return <ChocolatePicker to={to} />;

    case "loading":
      return <Loading to={to} />;

    case "reveal":
      return <Reveal to={to} />;

    case "fortune":
      return <Fortune to={to} />;

    default:
      return null;
  }
};
