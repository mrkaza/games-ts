import { combineReducers } from "redux";
import { authReducer } from "../modules/auth";
import { navbarReducer } from "../modules/navbar";

export const rootReducer = combineReducers({
  auth: authReducer,
  nav: navbarReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
