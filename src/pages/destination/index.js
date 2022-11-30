import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./destination.css";
import PlanetsMenu from "../../components/planets_menu";
import data from "../../data.json";

export default function Destination() {
  let [selectedPlanet, setSelectedPlanet] = useState("moon");
  return (
    <>
      <Helmet>
        <body className="bg_destination"></body>
        <title>Destination :: Space Tourism</title>
      </Helmet>
      <div className="heading__xxsmall page__title"><span className="page__order">01</span>PICK YOUR DESTINATION</div>
      {data.destinations.map(destination =>
        <div className={`planet ${destination.name.toLowerCase() === selectedPlanet ? "show" : "hide"}`} key={destination.name}>
          <div className="planet__wrapper">
            <img src={`${destination.images.png}`} className="planet__image" alt={destination.name} />
            <div className="planet__texts">
              <PlanetsMenu selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
              <div className="heading__small planet__name">{destination.name.toUpperCase()}</div>
              <p className="body_text planet__desc">{destination.description}</p>
              <div className="break"></div>
              <div className="planet__infos">
                <div className="planet__info">
                  <div className="heading__xxsmall planet__info__title">AVG. DISTANCE</div>
                  <div className="subhead__medium">{destination.distance.toUpperCase()}</div>
                </div>
                <div className="planet__info">
                  <div className="heading__xxsmall planet__info__title">EST. TRAVEL TIME</div>
                  <div className="subhead__medium">{destination.travel.toUpperCase()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}