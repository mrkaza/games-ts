import React from "react";
import { useSelector } from "react-redux";
import { GameType } from "../modules/games";
import { RootStore } from "../consts/rootReducer";
import { Search, SearchedGame } from "../modules/games";

const Searched = () => {
  const searchedGames: GameType[] = useSelector(
    (state: RootStore) => state.games.searchedGames
  );

  return (
    <div className="searched-games">
      <Search />
      {searchedGames ? (
        searchedGames.map((game: GameType) => {
          return <SearchedGame game={game} key={game.id} />;
        })
      ) : (
        <div> Loading</div>
      )}
    </div>
  );
};

export default Searched;
