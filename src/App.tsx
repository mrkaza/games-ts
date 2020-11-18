import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "./consts/rootReducer";
import { Navbar } from "./modules/navbar";
import { UserType } from "./modules/auth";
import { OpenNavbar } from "./modules/navbar";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Newest from "./pages/Newest";
import MostPopular from "./pages/MostPopular";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";

function App() {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  const navbar: boolean = useSelector((state: RootStore) => state.nav.navbar);

  return (
    <BrowserRouter>
      <div className="App">
        <OpenNavbar />
        {navbar && <Navbar />}
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={MostPopular} />
            <Route path="/newest" component={Newest} />
            <Route path="/sign-in">
              {user ? <Redirect to="/" /> : <SignIn />}
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
