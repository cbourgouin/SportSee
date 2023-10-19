import { useState, useEffect } from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { getUserPerformance } from "../../services/request";
import Performance from "../../models/Performance";

import "./PerformanceRadarChart.scss";

function PerformanceRadarChart({ id }) {
    const [performance, setPerformance] = useState([])

    useEffect(() => {
        getUserPerformance(id).then((response) => {
            setPerformance(response);
        });
    });

    return (
        <section className="performance">
            <ResponsiveContainer>
                <RadarChart
                    outerRadius={90}
                    width={300}
                    height={300}
                    data={performance}
                >
                    <PolarGrid
                        gridType="polygon"
                        radialLines={false}
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            dy: 4,
                            fill: '#fff',
                            fontSize: 12,
                        }}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        dataKey="value" 
                        stroke="red"
                        strokeOpacity={0.7}
                        fill="red"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    );
}

export default PerformanceRadarChart;