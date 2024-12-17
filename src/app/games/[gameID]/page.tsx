import { BASE_URL } from "@/constants";
import { Game as GameType } from "@/types";

function validateGameID(id: string) {
  const validID = parseInt(id);

  if (isNaN(validID)) {
    throw new Error("ID de Jogo deve ser um número...");
  } else if (validID < 1) {
    throw new Error("ID de Jogo não pode ser menor que 1...");
  }

  return validID;
}

export async function getGameByIDAction(id: string) {
  const validID = validateGameID(id);

  const res = await fetch(`${BASE_URL}/games/${validID}`);
  const game: GameType = await res.json();

  return { game };
}

async function Game({ params }: { params: Promise<{ gameID: string }> }) {
  const gameID = (await params).gameID;
  const { game } = await getGameByIDAction(gameID);

  console.log({ game });

  return (
    <div>
      <p>My Post: {gameID}</p>
    </div>
  );
}

export default Game;
