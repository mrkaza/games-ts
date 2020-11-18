import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "./consts/rootReducer";
import { Navbar } from "./modules/navbar";
import { UserType } from "./modules/auth";
import { OpenNavbar } from "./modules/navbar";

function App() {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  const navbar: boolean = useSelector((state: RootStore) => state.nav.navbar);

  return (
    <div className="App">
      <OpenNavbar />
      {navbar && <Navbar />}
      <div className="app">app</div>
    </div>
  );
}

export default App;
