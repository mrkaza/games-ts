export type GameType = {
  background_image: string;
  genres: object[];
  id: number;
  name: string;
  platforms: object[];
  released: string;
  short_screenshots: object[];
  tags: object[];
};

type InitState = {
  searchedGames: GameType[] | null;
};

const initState: InitState = {
  searchedGames: null,
};

export const gamesReducer = (state: InitState = initState, action: any) => {
  switch (action.type) {
    case "SEARCHED_GAMES":
      return {
        ...state,
        searchedGames: action.payload,
      };
    case "SEARCH_ERROR":
      console.log(action.payload);
      return state;
    case "SEARCHED_NULL":
      return {
        ...state,
        searchedGames: null,
      };
    default:
      return state;
  }
};
