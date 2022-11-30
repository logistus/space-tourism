import React, { useState } from "react";

export default function PlanetsMenu({ selectedPlanet, setSelectedPlanet }) {

  return (
    <ul className="planets__menu nav__text">
      <li className={selectedPlanet === "moon" ? "planets__menu__item active" : "planets__menu__item"}><a href="#" onClick={() => setSelectedPlanet("moon")}>MOON</a></li>
      <li className={selectedPlanet === "mars" ? "planets__menu__item active" : "planets__menu__item"}><a href="#" onClick={() => setSelectedPlanet("mars")}>MARS</a></li>
      <li className={selectedPlanet === "europa" ? "planets__menu__item active" : "planets__menu__item"}><a href="#" onClick={() => setSelectedPlanet("europa")}>EUROPA</a></li>
      <li className={selectedPlanet === "titan" ? "planets__menu__item active" : "planets__menu__item"}><a href="#" onClick={() => setSelectedPlanet("titan")}>TITAN</a></li>
    </ul>
  );
}