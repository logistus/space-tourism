import React, { useState } from "react";
import { Helmet } from "react-helmet";
import data from "../../data.json";
import "./technology.css";
import TechnologyMenu from "../../components/technology_menu";

export default function Technology() {
  let [selectedTech, setSelectedTech] = useState("launch-vehicle");
  return (
    <>
      <Helmet>
        <body className="bg_technology"></body>
        <title>Technology :: Space Tourism</title>
      </Helmet>
      <div className="heading__xxsmall page__title"><span className="page__order">03</span>SPACE LAUNCH 101</div>
      {data.technology.map(technology =>
        <div className={`technology ${technology.name.toLowerCase().split(" ").join("-") === selectedTech ? "show" : "hide"}`} key={technology.name}>
          <div className="technology__wrapper">
            {
              typeof window !== 'undefined' ? ((window.innerWidth > 1440 || document.documentElement.clientWidth > 1440 || document.body.clientWidth > 1440) ?
                <img src={`${technology.images.portrait}`} alt={technology.name} className="technology__image" /> :
                <img src={`${technology.images.landscape}`} alt={technology.name} className="technology__image" />) : ''
            }
            <TechnologyMenu selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
            <div className="technology__info">
              <div className="heading__xxsmall terminology">THE TERMINOLOGY…</div>
              <div className="page__subtitle technology__name">{technology.name}</div>
              <div className="body_text technology__desc">{technology.description}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}