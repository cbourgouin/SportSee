import { useState, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getUserDailyActivity } from "../../services/request";

function DailyActivity() {
  const [activity, setActivity] = useState({ data: "" })

  useEffect(() => {
    getUserDailyActivity(12).then((response) => {
      console.log(response);
      setActivity({ data: response.data });
    });
  });

  return (
    <article>
      <BarChart width={835} height={320} data={activity.data.sessions}>
        <CartesianGrid vertical="false" strokeDasharray="3 3" />
        <XAxis dataKey={"index"} />
        <YAxis domain={[69, 'auto']} />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#020203" />
        <Bar barSize={2} dataKey="calories" fill="#FF0101" />
      </BarChart>
    </article>
  );
}

export default DailyActivity;