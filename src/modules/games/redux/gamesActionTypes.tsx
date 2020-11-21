interface GetSearchedGames {
  type: "SEARCHED_GAMES";
  payload: any;
}
interface SearchError {
  type: "SEARCH_ERROR";
  payload: any;
}
interface SearchedNull {
  type: "SEARCHED_NULL";
}

export type GamesDispatchTypes = GetSearchedGames | SearchError | SearchedNull;
