import { GameType } from "./gamesReducer";

interface GetSearchedGames {
  type: "SEARCHED_GAMES";
  payload: GameType[];
}
interface SearchError {
  type: "SEARCH_ERROR";
  payload: any;
}
interface SearchedNull {
  type: "SEARCHED_NULL";
}
interface GameDetails {
  type: "GAME_DETAILS";
  payload: GameType;
}
interface GameDetailsNull {
  type: "GAME_DETAILS_NULL";
}

export type GamesDispatchTypes =
  | GetSearchedGames
  | SearchError
  | SearchedNull
  | GameDetails
  | GameDetailsNull;
