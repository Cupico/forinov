import React, { useState, useEffect } from "react";
import "./App.css";

import ProgressiveBar from "./Component/ProgressiveBar";

const description =
  "Jubiwee est une application web qui mesure automatiquement le ressenti des collaborateurs, détecte les signaux faibles et populations à risque. Elle génère également des plans d’actions pour donner aux managers les meilleures actions pour réduire le turnover, l’absentéisme et améliorer l’engagement dans leur équipe";

function App() {
  const [infos, setInfo] = useState();

  useEffect(() => {
    setInfo(description);
  }, []);

  return (
    <div className="App">
      <div className="profil-container">
        <div className="background-container"></div>

        <div className="container-logo-info">
          <div className="container-logo">
            <div className="logo"></div>
            <button className="pdf-button">
              <div className="pdf">
                <i className="fas fa-cloud-download-alt" />
                <p>PDF</p>
              </div>
            </button>
          </div>

          <div className="container-userInfo">
            <div className="container-ect">
              <button className="button-ect">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
              </button>
            </div>
            <div className="name">
              <p>Jubiwee</p>
            </div>
            <div className="info-social-media">
              <p>
                <i className="fas fa-map-marker-alt"></i>
              </p>
              <p className="localisation">Paris, FR</p>
              <p className="External-Website">
                <i className="fas fa-globe"></i>
              </p>
              <p className="Website-Name-Copy">www.demo.com</p>
              <ul>
                <li className="fab fa-facebook-f" />
                <li className="fab fa-twitter" />
                <li className="fab fa-linkedin" />
                <li className="cb" />
              </ul>
            </div>
            <div className="description-profil">
              <p>
                {infos}
              </p>
            </div>
            <div className="content-tag">
              <div className="filters-ressource">
                <p>Ressources humaines</p>
              </div>
            </div>
            <br />
            <div className="sous-filters">
              <div className="filters">
                <p>Software</p>
              </div>
              <div className="filters HR">
                <p>HR</p>
              </div>
              <div className="container-buttons-suivre-public">
                <button className="filters-suivre">Suivre</button>
                <button className="filters-profil">Profil public</button>
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
            <div className="separation"></div>
            <div className="step-bar">
              <p>
                Collaboration en discussion - POC{" "}
                <i className="fas fa-caret-right"></i>
              </p>
              <div className="container-step-bar">
                <ProgressiveBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
