import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../images/shared/logo.svg";
import hamburger from "../images/shared/icon-hamburger.svg";
import closeButton from "../images/shared/icon-close.svg";
import "./layout.css";

export default function Layout({ children }) {
  let [menuVisible, setMenuVisible] = useState(false);
  let [currentRoute, setCurrentRoute] = useState("");

  return (
    <div>
      <header>
        <Link to="/" onClick={() => { setCurrentRoute(""); setMenuVisible(false) }}>
          <img src={logo} alt="Space Tourism Logo" className="logo" />
        </Link>
        <img src={hamburger} className="hamburger" alt="" onClick={() => setMenuVisible(true)} />
        <div className="menu__wrapper">
          <div className="menu__line"></div>
          <ul className="menu nav__text">
            <li>
              <Link to="/" onClick={() => { setCurrentRoute(""); setMenuVisible(false) }} className={currentRoute === "" ? "active" : ""}>
                <span className="menu__order">00</span>HOME
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => { setCurrentRoute("destination"); setMenuVisible(false) }} className={currentRoute === "destination" ? "active" : ""}>
                <span className="menu__order">01</span> DESTINATION
              </Link>
            </li>
            <li>

              <Link to="/crew" onClick={() => { setCurrentRoute("crew"); setMenuVisible(false) }} className={currentRoute === "crew" ? "active" : ""}>
                <span className="menu__order">02</span> CREW
              </Link>
            </li>
            <li>
              <Link to="/technology" onClick={() => { setCurrentRoute("technology"); setMenuVisible(false) }} className={currentRoute === "technology" ? "active" : ""}>
                <span className="menu__order">03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {menuVisible && <div className="mobile-menu-container">
        <img src={closeButton} alt="close" onClick={() => setMenuVisible(false)} className="mobile-menu-close-button" />
        <nav>
          <ul className="mobile-menu">
            <li className="menu-item">
              <span className="menu-item-order">00</span>
              <Link to="/" onClick={() => { setCurrentRoute(""); setMenuVisible(false) }} className={currentRoute === "" ? "active" : ""}>HOME</Link>
            </li>
            <li className="menu-item">
              <span className="menu-item-order">01</span>
              <Link to="/destination" onClick={() => { setCurrentRoute("destination"); setMenuVisible(false) }} className={currentRoute === "destination" ? "active" : ""}>DESTINATION</Link>
            </li>
            <li className="menu-item">
              <span className="menu-item-order">02</span>
              <Link to="/crew" onClick={() => { setCurrentRoute("crew"); setMenuVisible(false) }} className={currentRoute === "crew" ? "active" : ""}>CREW</Link>
            </li>
            <li className="menu-item">
              <span className="menu-item-order">03</span>
              <Link to="/technology" onClick={() => { setCurrentRoute("technology"); setMenuVisible(false) }} className={currentRoute === "technology" ? "active" : ""}>TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
      </div>}
      {children}
    </div>
  )
}