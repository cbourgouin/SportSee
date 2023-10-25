import "./App.scss";

import logo from "../../assets/logo.svg"
import rest from "../../assets/rest.svg"
import swimming from "../../assets/swimming.svg"
import cycling from "../../assets/cycling.svg"
import bodybuilding from "../../assets/bodybuilding.svg"

import Analitics from "../Analitics/Analitics";

function App() {
  return (
    <div id="app" >
      <header>
        <div id="marque">
          <img src={logo} id="logo" alt="logo" />
          <span id="nomMarque">SportSee</span>
        </div>
        <nav id="navGeneral">
          <div><span>Accueil</span></div>
          <div><span>Profil</span></div>
          <div><span>Réglages</span></div>
          <div><span>Communauté</span></div>
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
        <Analitics />
      </div>
    </div>
  )
}

export default App;