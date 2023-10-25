import { ResponsiveContainer, RadialBarChart, RadialBar} from "recharts";

import "./ScoreRadialBarChart.scss";

const formatedDataRadial = (score) => {
    return [{ value : score * 100}];
  }

function ScoreRadialBarChart({ user }) {
    const score = user?.todayScore ? user?.todayScore : user?.score
    const data = formatedDataRadial(score);

    return (
        <section className="score">
            <ResponsiveContainer>
                <RadialBarChart
                    width={330}
                    height={250}
                    innerRadius={65}
                    outerRadius={80}
                    data={data}
                    startAngle={90}
                    endAngle={90 + (data[0].value * 360) / 100}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <RadialBar
                        name="score"
                        dataKey="value"
                        stroke-linejoin="round"
                        fill="#E60000"
                        cornerRadius={100}
                    />
                    <text textAnchor="middle" fontSize={15} fontWeight={600}>
                        <tspan x="50%" y="50%" fontSize={22}>{data[0].value}%</tspan>
                        <tspan x="50%" y="61%" fill={'#74798c'}>de votre </tspan>
                        <tspan x="50%" y="69%" fill={'#74798c'}>objectif</tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </section >
    );
}

export default ScoreRadialBarChart;