import React from "react";
import ButtonExplorer from "./ButtonExplorer.jsx/ButtonExplorer";

import "./LandingPage.css";
import SocialLinks from "./SocialLinks/SocialLinks";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container-landing-items">
        <h2 className="landing-page-title">POKEDEX</h2>
        <ButtonExplorer />
        <SocialLinks />
      </div>
    </div>
  );
}
