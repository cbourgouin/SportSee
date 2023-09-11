import './App.scss';

import logo from '../../assets/logo.svg'
import rest from '../../assets/rest.svg'
import swimming from '../../assets/swimming.svg'
import cycling from '../../assets/cycling.svg'
import bodybuilding from '../../assets/bodybuilding.svg'

import { useState, useEffect } from 'react';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import { getUserInformation } from '../../services/request';

function App() {
  const [data, setData] = useState({ firstName: '' })

  useEffect(() => {
    getUserInformation(12).then((response) => {
        setData({ firstName: response.data.userInfos.firstName });
    });
  }, []);

  return (
    <div id='app' >
      <header>
        <div id='marque'>
          <img src={logo} id='logo' alt='logo' />
          <a id='nomMarque'>SportSee</a>
        </div>
        <nav id='navGeneral'>
          <div><a>Accueil</a></div>
          <div><a>Profil</a></div>
          <div><a>Réglages</a></div>
          <div><a>Communauté</a></div>
        </nav>
      </header>
      <div className='rowContainer' id='contSidBod'>
        <div id='sideMenu'>
          <nav>
            <img src={rest} id='rest' alt='rest' />
            <img src={swimming} id='swimming' alt='swimming' />
            <img src={cycling} id='cycling' alt='cycling' />
            <img src={bodybuilding} id='bodybuilding' alt='bodybuilding' />
          </nav>
          <small>Copyright, SportSee 2020</small>
        </div>
        <div id='pageBody'>
          <div id='title'>
            <a>Bonjour </a>
            <a id='nom'>{data.firstName}</a>
          </div>
          <a id='subTitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</a>
          <div className='rowrowContainer'>
            <section>
              <DailyActivity></DailyActivity>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;