import { useState, useEffect } from "react";
import { LineChart, CartesianGrid, YAxis, Legend, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getUserAverageSessions } from "../../services/request";
import AverageSessions from "../../models/AverageSessions";

import "./SessionTimeGraph.scss";

function SessionTimeGraph
() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserAverageSessions(process.env.REACT_APP_USER_ID).then((response) => {
      setData(response);
    });
  });

  return <section className="averageSessions">
    <a className="averageSessions__title">Durée moyenne des sessions</a>
    <ResponsiveContainer width={264} height="70%">
      <LineChart
        data={data}
      >
        <Tooltip 
          content={<CustomToolTip />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFF"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
    <div className="day">
      <a className="day__Letter">L</a>
      <a className="day__Letter">M</a>
      <a className="day__Letter">M</a>
      <a className="day__Letter">J</a>
      <a className="day__Letter">V</a>
      <a className="day__Letter">S</a>
      <a className="day__Letter">D</a>
    </div>
  </section>
}

const CustomToolTip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip">
        <p className="tooltip__time">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}

export default SessionTimeGraph;