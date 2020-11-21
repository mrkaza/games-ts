import React from "react";
import { GameType } from "../index";
import { Link } from "react-router-dom";

export const SearchedGame = (props: any) => {
  const game: GameType = props.game;

  return (
    <Link to={`/game/${game.id}`}>
      <div className="searched-game">
        <img src={game.background_image} />
        <p>{game.name}</p>
      </div>
    </Link>
  );
};
