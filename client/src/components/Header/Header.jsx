import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { searchPokemon } from "../../actions/actions";

import "./Header.css";
import pokebola from "./pokebola.png";

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [search, setSearch] = useState("");

  const submitType = (e) => {
    e.preventDefault();
    dispatch(searchPokemon(search));
  };

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitType}>
        <Link to="/">
          <img className="pokebola" src={pokebola} alt="pokebola" />
        </Link>

        <input
          type="text"
          className="input"
          placeholder="charizard"
          autoComplete="off"
          onChange={handleChangeInput}
        />

        <input className="button--submit" value="Search" type="submit" />
        {
          location.pathname !== '/pokedex' &&
          <Link to={`/pokedex`}>
            {" "}
            <h2 className="button-create">Pokedex</h2>
          </Link>
        }
        {
          location.pathname !== '/pokedex/create_pokemon' &&
          <Link to="/pokedex/create_pokemon">
            <h2 className="button-create"> Create Pokemon </h2>
          </Link>
        }

      </form>
    </div>
  );
}

