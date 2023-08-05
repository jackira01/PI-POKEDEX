import React from "react";
import "./ButtonExplorer.css";
import { Link } from "react-router-dom";

const ButtonExplorer = () => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <Link to="/pokedex">
        <span className="button-text">Explore</span>
      </Link>
    </button>
  );
};

export default ButtonExplorer;
