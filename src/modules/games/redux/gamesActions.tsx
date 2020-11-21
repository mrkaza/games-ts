import { Dispatch } from "redux";
import { GamesDispatchTypes } from "./gamesActionTypes";
import axios from "axios";

export const getSearchedGames = (search: string) => {
  return (dispatch: Dispatch<GamesDispatchTypes>) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/api.rawg.io/api/games?search=${search}&key=83bfc6e21e8841b99d39dd058ba8f80e`
      )
      .then((response) => {
        dispatch({ type: "SEARCHED_GAMES", payload: response.data.results });
      })
      .catch((err) => {
        dispatch({ type: "SEARCH_ERROR", payload: err });
      });
  };
};

export const setSearchedNull = () => {
  return {
    type: "SEARCHED_NULL",
  };
};
