import React from "react";
import { GameType } from "../index";

export const SearchedGame = (props: any) => {
  const game: GameType = props.game;

  return (
    <div className="searched-game">
      <img src={game.background_image} />
      <p>{game.name}</p>
    </div>
  );
};
