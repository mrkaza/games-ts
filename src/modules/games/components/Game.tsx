import React from "react";
import { GameType } from "../index";

export const Game = ({ game }: { game: GameType }) => {
  const platforms = game.platforms;
  const tags = game.tags;
  const developers = game.developers;
  return (
    <div className="game">
      <div className="game-img">
        <img src={game.background_image} />
      </div>
      <div className="game-rel-plat">
        <p className="game-released">
          Released: <span className="date">{game.released}</span>
        </p>
        <div className="platforms">
          {platforms &&
            platforms.map((platform) => {
              return <p key={platform.platform.id}>{platform.platform.name}</p>;
            })}
        </div>
      </div>
      <h3 className="game-title">{game.name}</h3>
      <div className="game-tags">
        {tags &&
          tags.map((tag) => {
            return <p key={tag.id}>{tag.name}</p>;
          })}
      </div>
      <p className="game-desc">{game.description_raw}</p>
      <div className="game-devs">
        <p>Developed by:</p>
        <div className="devs">
          <ul>
            {developers &&
              developers.map((developer) => {
                return <li key={developer.id}>{developer.name}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
