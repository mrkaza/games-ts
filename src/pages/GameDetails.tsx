import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gameDetails, Game } from "../modules/games";
import { GameType } from "../modules/games";
import { RootStore } from "../consts/rootReducer";

const GameDetails = () => {
  const params: { id: string } = useParams();
  const id: string = params.id;
  const dispatch = useDispatch();
  const game: GameType = useSelector(
    (state: RootStore) => state.games.gameDetails
  );

  useEffect(() => {
    dispatch(gameDetails(id));
  }, []);

  return (
    <div className="game-details">
      {game ? <Game game={game} /> : <p>loading</p>}
    </div>
  );
};

export default GameDetails;
