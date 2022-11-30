import React, { useState } from "react";

export default function CrewMenu({ selectedCrew, setSelectedCrew }) {
  return (
    <ul className="crew__menu">
      <li className={selectedCrew === "douglas-hurley" ? "crew__menu__item active" : "crew__menu__item"} onClick={() => setSelectedCrew("douglas-hurley")}></li>
      <li className={selectedCrew === "mark-shuttleworth" ? "crew__menu__item active" : "crew__menu__item"} onClick={() => setSelectedCrew("mark-shuttleworth")}></li>
      <li className={selectedCrew === "victor-glover" ? "crew__menu__item active" : "crew__menu__item"} onClick={() => setSelectedCrew("victor-glover")}></li>
      <li className={selectedCrew === "anousheh-ansari" ? "crew__menu__item active" : "crew__menu__item"} onClick={() => setSelectedCrew("anousheh-ansari")}></li>
    </ul>
  );
}