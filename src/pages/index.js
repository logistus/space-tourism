import React from "react"
import { Helmet } from "react-helmet";
import "./index.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <body className="bg_home"></body>
        <title>Space Tourism</title>
      </Helmet>
      <div className="home__content">
        <main>
          <div className="heading__xxsmall travel">SO, YOU WANT TO TRAVEL TO</div>
          <div className="space">SPACE</div>
          <p className="body_text home__text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </main>
        <div className="explore">EXPLORE</div>
      </div>
    </>
  );
}

