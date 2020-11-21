import { Dispatch } from "redux";
import { GamesDispatchTypes } from "./gamesActionTypes";
import axios from "axios";

const link = "https://cors-anywhere.herokuapp.com/api.rawg.io/api/games";
const key = "83bfc6e21e8841b99d39dd058ba8f80e";

export const getSearchedGames = (search: string) => {
  return (dispatch: Dispatch<GamesDispatchTypes>) => {
    axios
      .get(`${link}?search=${search}&key=${key}`)
      .then((response) => {
        dispatch({ type: "SEARCHED_GAMES", payload: response.data.results });
      })
      .catch((err) => {
        dispatch({ type: "SEARCH_ERROR", payload: err });
      });
  };
};

export const gameDetails = (id: string) => {
  return (dispatch: Dispatch<GamesDispatchTypes>) => {
    axios.get(`${link}/${id}`).then((response) => {
      dispatch({ type: "GAME_DETAILS", payload: response.data });
    });
  };
};

export const setSearchedNull = () => {
  return {
    type: "SEARCHED_NULL",
  };
};

export const gameDetailsNull = () => {
  return {
    type: "GAME_DETAILS_NULL",
  };
};
