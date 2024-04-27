import React from "react";
import "./About.css";
import Image from "../assets/Fenykep3.png";

function About() {
  return (
    <div className="aboutpage-container">
      <div className="aboutpage-skills">
        <img src={Image} alt=""></img>
        <h1>Technológiák</h1>
        <p>React</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Bootstrap</p>
        <p>MySql</p>
        <p>C#</p>
        <p>Github</p>
      </div>
      <div className="aboutpage-container">
        <div className="aboutpage-content">
          <div className="aboutpage-content-dev">
            <h1>Szoftverfejlesztő</h1>
            <p>
              Szoftverfejlesztőként olyan szakember vagyok, aki képes webes és
              asztali alkalmazást tervezni, fejleszteni, tesztelni és
              dokumentálni. Képes vagyok a csoportmunkát támogató fejlesztői
              eszközök hatékony használatára. Ezen felül képes vagyok az egyéb
              más informatikai rendszerek megismerésére és használatára.
            </p>
          </div>
          <div className="aboutpage-content-html">
            <h1>HTML5</h1>
            <p>
              Webalkalmazások kódolása és készítése HTML5,CSS3,JavaScript és
              React segítségével. Felhasználói felületek tervezése
              ésoptimalizálása. Reszponzív weboldalak készítése.
              GitHubverziókezelő használata. A visual studio code szerkesztő
              ismerete és hatékonyhasználata.
            </p>
          </div>
        </div>
        <div className="aboutpage-content">
          <div className="aboutpage-content-cs">
            <h1>C#</h1>
            <p>
              A C# programozási nyelv ismeretének köszönhetően képes vagyok
              objektumorientált szemléletben grafikus és konzolos asztali
              alkalmazásokat készíteni. Ismerem és hatékonyan használom a Visual
              studio 2022 integrált fejlesztői környezetet.
            </p>
          </div>
          <div className="aboutpage-content-mysql">
            <h1>MySql</h1>
            <p>
              Az XAMPP webszerver-szoftvercsomag, ismeretének köszönhetően képes
              vagyok adatbázisokat létrehozni. Adattáblákat adatokkal
              feltölteni, és egymással összekapcsolni. Az adatbázisokhoz c# és
              JavaScript programozási nyelvel kapcsolódva adatokatlekérni és
              műveleteket végrehajtani az adatokon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
