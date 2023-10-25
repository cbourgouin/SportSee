import "./Analitics.scss";

import caloriesIcon from "../../assets/caloriesIcon.svg";
import proteinIcon from "../../assets/proteinIcon.svg";
import carbsIcon from "../../assets/carbsIcon.svg";
import fatIcon from "../../assets/fatIcon.svg";

import { useParams } from 'react-router-dom';
import DailyActivityGraph from "../../components/DailyActivity/DailyActivityGraph";
import SessionTimeLineChart from "../../components/SessionTimeLineChart/SessionTimeLineChart";
import PerformanceRadarChart from "../../components/PerformanceRadarChart/PerformanceRadarChart";
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart/ScoreRadialBarChart.jsx";
import DataDisplayCard from "../../components/DataDisplayCard/DataDisplayCard.jsx"
import { useState, useEffect } from "react";
import { getUserInformation } from "../../services/request";
import Users from "../../models/Users";

function Analitics() {
    const { id } = useParams();
    
    const [data, setData] = useState(new Users("", "", 0, 0, 0, 0, 0, 0));

    useEffect(() => {
        getUserInformation(id).then((response) => {
            setData(response);
        });
    }, [id]);

    
    return <div id="pageBody">
    <div id="title">
      <span>Bonjour </span>
      <span id="nom">{data.firstName}</span>
    </div>
    <span id="subTitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    <div className="rowContainer" id="globalInfoContainers">
      <div id="graphContainer">
        <DailyActivityGraph id={ id } />
        <div className="rowContainer">
          <SessionTimeLineChart id={ id } />
          <PerformanceRadarChart id={ id } />
          <ScoreRadialBarChart user={data} />
        </div>
      </div>
      <div id="dataCardContainer">
        <DataDisplayCard
          value={(data.caloriesCount / 1000).toString().replace(".", ",") + "kCal"}
          subText="Calories"
          icon={caloriesIcon}
        />
        <DataDisplayCard
          value={data.proteinCount.toString() + "g"}
          subText="Proteines"
          icon={proteinIcon}
        />
        <DataDisplayCard
          value={data.carbohydrateCount.toString() + "g"}
          subText="Glucides"
          icon={carbsIcon}
        />
        <DataDisplayCard
          value={data.lipidCount.toString() + "g"}
          subText="Lipides"
          icon={fatIcon}
        />
      </div>
    </div>
  </div>
}

export default Analitics;