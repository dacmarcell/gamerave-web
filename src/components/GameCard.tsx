import { Review } from "@/types";
import Card from "./Card";

interface GameCardProps {
  game: {
    likes: number;
    name: string;
    reviews: Review[];
  };
}

async function GameCard(props: GameCardProps) {
  const { game } = props;

  return (
    <Card header="Game" title={game.name} content={`Likes: ${game.likes}`} />
  );
}

export default GameCard;
