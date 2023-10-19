import { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { getUserDailyActivity } from "../../services/request";
import DailyActivity from "../../models/DailyActivity";

import "./DailyActivityGraph.scss";

import greyDot from "../../assets/greyDot.svg";
import redDot from "../../assets/redDot.svg";

function DailyActivityGraph({ id }) {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    getUserDailyActivity(id).then((response) => {
      setActivity(response);
    });
  });

  return (
    <section className="dailyActivity">
      <div className="dailyActivity__titleAndLegend">
        <div className="dailyActivity__titleAndLegend__title">Activité quotidienne</div>
        <div className="dailyActivity__titleAndLegend__legend">
          <img src={greyDot} alt="grey dot" className="dailyActivity__titleAndLegend__legend__dot"/>
          <div className="dailyActivity__titleAndLegend__legend__item">Poids (kg)</div>
          <img src={redDot} alt="red dot" className="dailyActivity__titleAndLegend__legend__dot"/>
          <div className="dailyActivity__titleAndLegend__legend__item">Calories brûlées (kCal)</div>
        </div>
      </div>
      <ResponsiveContainer width="99%">
        <BarChart
          data={activity}
          barGap={8}
          barCategoryGap="35%"
          margin={{
            bottom: 60,
          }}
        >

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey={(data) => {
              return activity.indexOf(data) + 1;
            }}
            tickLine={false}
            tickMargin={15}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="YAxis_kil"
            domain={["dataMin - 1", "dataMax + 1"]}
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={35}
            stroke="#9B9EAC"
          />
          <YAxis
            yAxisId="YAxis_cal"
            domain={[0, "dataMax + 10"]}
            dataKey="calories" 
            hide
          />
          <Tooltip
            content={<CustomToolTip />}
          />
          <Bar
            yAxisId="YAxis_kil"
            barSize={7}
            dataKey="kilogram"
            unit="kg"
            fill="#020203"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="YAxis_cal"
            barSize={7}
            dataKey="calories"
            unit="kcal"
            fill="#FF0101"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

const CustomToolTip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip">
        <p className="tooltip__calories">{payload[0].value}kg</p>
        <p className="tooltip__kg">{payload[1].value}Kcal</p>
      </div>
    )
  }
  return null
}

export default DailyActivityGraph;