import React, { useState } from "react";
import { Helmet } from "react-helmet";
import data from "../../data.json";
import "./crew.css";
import CrewMenu from "../../components/crew_menu";

export default function Crew() {
  let [selectedCrew, setSelectedCrew] = useState("douglas-hurley");
  return (
    <>
      <Helmet>
        <body className="bg_crew"></body>
        <title>Crew :: Space Tourism</title>
      </Helmet>
      <div className="heading__xxsmall page__title"><span className="page__order">02</span>MEET YOUR CREW</div>
      {data.crew.map(crew =>
        <div className={`crew ${crew.name.toLowerCase().split(" ").join("-") === selectedCrew ? "show" : "hide"}`} key={crew.name}>
          <div className="crew__wrapper">
            <div className="crew__image__wrapper">
              <img src={`${crew.images.png}`} alt={crew.name} className="crew__image" />
            </div>
            <div className="crew__info__wrapper">
              <CrewMenu selectedCrew={selectedCrew} setSelectedCrew={setSelectedCrew} />
              <div className="crew__role">{crew.role.toUpperCase()}</div>
              <div className="page__subtitle crew__name">{crew.name}</div>
              <div className="body_text crew__bio">{crew.bio}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}