import Card from "./Card";

interface GameCardProps {
  game: {
    id: number;
    likes: number;
    name: string;
    reviews: {
      title: string;
      description: string;
      likes: number;
    }[];
  };
}

async function GameCard(props: GameCardProps) {
  const { game } = props;

  return (
    <Card
      href={game.id.toString()}
      header="Game"
      title={game.name}
      content={`Likes: ${game.likes}`}
    />
  );
}

export default GameCard;
