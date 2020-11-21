import { combineReducers } from "redux";
import { authReducer } from "../modules/auth";
import { navbarReducer } from "../modules/navbar";
import { gamesReducer } from "../modules/games";

export const rootReducer = combineReducers({
  auth: authReducer,
  nav: navbarReducer,
  games: gamesReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
