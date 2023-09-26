import "./App.scss";

import logo from "../../assets/logo.svg"
import rest from "../../assets/rest.svg"
import swimming from "../../assets/swimming.svg"
import cycling from "../../assets/cycling.svg"
import bodybuilding from "../../assets/bodybuilding.svg"

import { useState, useEffect } from "react";
import DailyActivityGraph from "../../components/DailyActivity/DailyActivityGraph";
import SessionTimeGraph from "../../components/SessionTime/SessionTimeGraph";
import PerformanceRadarChart from "../../components/PerformanceRadarChart/PerformanceRadarChart";
import { getUserInformation } from "../../services/request";
import Users from "../../models/Users";

function App() {
  const [data, setData] = useState(new Users("", "", 0, 0, 0, 0, 0, 0));

  useEffect(() => {
    getUserInformation(process.env.REACT_APP_USER_ID).then((response) => {
        setData(response);
    });
  });

  return (
    <div id="app" >
      <header>
        <div id="marque">
          <img src={logo} id="logo" alt="logo" />
          <a id="nomMarque">SportSee</a>
        </div>
        <nav id="navGeneral">
          <div><a>Accueil</a></div>
          <div><a>Profil</a></div>
          <div><a>Réglages</a></div>
          <div><a>Communauté</a></div>
        </nav>
      </header>
      <div className="rowContainer" id="contSidBod">
        <div id="sideMenu">
          <nav>
            <img src={rest} id="rest" alt="rest" />
            <img src={swimming} id="swimming" alt="swimming" />
            <img src={cycling} id="cycling" alt="cycling" />
            <img src={bodybuilding} id="bodybuilding" alt="bodybuilding" />
          </nav>
          <small>Copyright, SportSee 2020</small>
        </div>
        <div id="pageBody">
          <div id="title">
            <a>Bonjour </a>
            <a id="nom">{data.firstName}</a>
          </div>
          <a id="subTitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</a>
          <div className="rowContainer">
            <div id="graphContainer">
              <DailyActivityGraph />
              <SessionTimeGraph />
              <PerformanceRadarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;