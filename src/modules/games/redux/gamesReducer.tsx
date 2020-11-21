export type GameType = {
  background_image: string;
  genres: object[];
  id: number;
  name: string;
  platforms?: { platform: { id: number; name: string } }[];
  released: string;
  short_screenshots: object[];
  tags: { name: string; id: number }[];
  website?: string;
  publishers?: object[];
  description_raw?: string;
  developers?: { id: number; name: string }[];
};

type InitState = {
  searchedGames: GameType[] | null;
  gameDetails: GameType | null;
};

const initState: InitState = {
  searchedGames: null,
  gameDetails: null,
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
    case "GAME_DETAILS":
      return {
        ...state,
        gameDetails: action.payload,
      };
    case "GAME_DETAILS_NULL":
      return {
        ...state,
        gameDetails: null,
      };
    default:
      return state;
  }
};
