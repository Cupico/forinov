import React from "react";
import "./App.css";

import ProgressiveBar from "./Component/ProgressiveBar";

function App() {
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
            <div style={{ height: "20px" }} className="name">
              <p>Jubiwee</p>
            </div>
            <div style={{ display: "flex", height: "40px" }}>
              <p>
                <i className="fas fa-map-marker-alt"></i>
              </p>
              <p style={{ marginLeft: "1.5%" }}>Paris, FR</p>
              <p style={{ marginLeft: "5%" }}>
                <i className="fas fa-globe"></i>
              </p>
              <p
                style={{
                  marginLeft: "1.5%",
                  textDecoration: "underline white",
                }}
              >
                www.demo.com
              </p>
              <ul
                style={{
                  marginLeft: "2%",
                  width: "15%",
                  listStyle: "none",
                  listStyleType: "none",
                  display: "flex",
                  paddingTop: "3px",
                }}
              >
                <li className="fab fa-facebook-f" />
                <li
                  style={{
                    marginLeft: "15%",
                  }}
                  className="fab fa-twitter"
                />
                <li
                  style={{
                    marginLeft: "15%",
                  }}
                  className="fab fa-linkedin"
                />
                <li
                  style={{
                    marginLeft: "15%",
                  }}
                  className="cb"
                />
              </ul>
            </div>
            <div style={{ width: "82%" }}>
              <p style={{}}>
                Jubiwee est une application web qui mesure automatiquement le
                ressenti des collaborateurs, détecte les signaux faibles et
                populations à risque. Elle génère également des plans d’actions
                pour donner aux managers les meilleures actions pour réduire le
                turnover, l’absentéisme et améliorer l’engagement dans leur
                équipe.
              </p>
            </div>
            <div style={{ height: "29px" }}>
              <div className="filters">
                <p>Ressources humaines</p>
              </div>
            </div>
            <br />
            <div>
              <div className="filters">
                <p>Software</p>
              </div>
              <div className="filters" style={{ marginLeft: "1%" }}>
                <p>HR</p>
              </div>
              <div className="container-buttons-suivre-public"
              >
                <button className="filters-suivre">Suivre</button>
                <button className="filters-profil" style={{ marginLeft: "1%" }}>
                  Profil public
                </button>
                <i className="fas fa-info-circle" style={{ margin: "0px 7px" }}></i>
              </div>
            </div>
            <div className="separation"></div>
            <div className="step-bar">
              <p>
                Collaboration en discussion - POC{" "}
                <i
                  className="fas fa-caret-right"
                  style={{ marginLeft: "1.5%" }}
                ></i>
              </p>
              <div style={{width:'100%'}}>
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
