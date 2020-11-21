import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./consts/rootReducer";
import { Navbar } from "./modules/navbar";
import { UserType } from "./modules/auth";
import { OpenNavbar } from "./modules/navbar";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { setSearchedNull, gameDetailsNull } from "./modules/games";
import Home from "./pages/Home";
import Newest from "./pages/Newest";
import MostPopular from "./pages/MostPopular";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Searched from "./pages/Searched";
import GameDetails from "./pages/GameDetails";

function App() {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  const navbar: boolean = useSelector((state: RootStore) => state.nav.navbar);
  const dispatch = useDispatch();
  const history = useHistory();
  const locationHook = useLocation();

  useEffect(() => {
    return history.listen((location) => {
      if (locationHook.pathname === "/search") {
        dispatch(setSearchedNull());
      }
      if (locationHook.pathname.includes("/game/")) {
        dispatch(gameDetailsNull());
      }
    });
  }, [history, locationHook]);

  return (
    <div className="App">
      <OpenNavbar />
      {navbar && <Navbar />}
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={MostPopular} />
          <Route path="/newest" component={Newest} />
          <Route path="/search" component={Searched} />
          <Route path="/sign-in">
            {user ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route path="/game/:id" component={GameDetails} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
