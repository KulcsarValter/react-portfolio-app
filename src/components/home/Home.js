import React from "react";
import "./Home.css";
import Image from "../assets/Fenykep3.png";

function Home() {
  return (
    <div className="container">
      <div className="homepage-image">
        <img src={Image} alt=""></img>
        <h1>Kulcsár Valter</h1>
        <h2>Frontend webfejlesztő</h2>
      </div>
    </div>
  );
}

export default Home;
