import React, { useState } from "react";

export default function TechnologyMenu({ selectedTech, setSelectedTech }) {
  return (
    <ul className="technology__menu">
      <li className={selectedTech === "launch-vehicle" ? "technology__menu__item active" : "technology__menu__item"} onClick={() => setSelectedTech("launch-vehicle")}>1</li>
      <li className={selectedTech === "spaceport" ? "technology__menu__item active" : "technology__menu__item"} onClick={() => setSelectedTech("spaceport")}>2</li>
      <li className={selectedTech === "space-capsule" ? "technology__menu__item active" : "technology__menu__item"} onClick={() => setSelectedTech("space-capsule")}>3</li>
    </ul>
  );
}