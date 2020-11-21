import React, { useState } from "react";
import { getSearchedGames } from "../index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(getSearchedGames(search));
    setSearch("");
    history.push("/search");
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for games..."
          type="text"
        />
        <button type="submit" className="search-button">
          <i className="material-icons">search</i>
        </button>
      </form>
    </div>
  );
};
