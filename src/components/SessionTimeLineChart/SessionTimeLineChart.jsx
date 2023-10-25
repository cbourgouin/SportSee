import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getUserAverageSessions } from "../../services/request";

import "./SessionTimeLineChart.scss";

function SessionTimeLineChart({ id }) {
  const [data, setData] = useState([]);
  const [X, setX] = useState(-717);
  const [Y, setY] = useState(0);

  useEffect(() => {
    getUserAverageSessions(id).then((response) => {

      setData(response);
    });
  }, [id]);

  return <section className="averageSessions" onMouseOver={onmousehover} onMouseLeave={onmouseleave}>
    <div id="mouseEffect" style={{ top: Y, left: X }}></div>
    <ResponsiveContainer width="99%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 70, right: 0, bottom: 10, left: 5 }}
      >
        <text
          x="15%"
          y="15%"
          fontSize={14}
          width={100}
          fill="#ffffffa4"
        >
          Durée moyenne des
          <tspan x="15%" y="30%">
            sessions
          </tspan>
        </text>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke='white'
          padding={{ top: 0, right: 20, bottom: 0, left: 20 }}
        />
        <Tooltip filterNull={false} separator=""
          itemStyle={{
            color: "#000000",
            backgroundColor: "#ffffff",
            fontSize: "9px",
            margin: 7,
            border: 0,
          }}
          formatter={(day, value) => [" min", day]}
          contentStyle={{
            padding: ".4rem",
            backgroundColor: "#ffffff",
            border: 0,
          }}
          labelStyle={{
            display: "none",
          }} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </section>

  function onmousehover(event) {
    setX(event.clientX-217);
    setY(0);
  }

  function onmouseleave(event) {
    setX(-717);
    setY(0);
  }
}

export default SessionTimeLineChart;