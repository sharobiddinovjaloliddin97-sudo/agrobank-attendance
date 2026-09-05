import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import "./AttendanceCharts.css";

const data = [
  { name: "O‘z vaqtida", value: 821, color: "#0b9444" },
  { name: "Kechikdi", value: 166, color: "#ff9800" },
  { name: "Kelmagan", value: 116, color: "#f5222d" },
];

function AttendanceDonutChart() {
  return (
    <div className="chart-card donut-card">
      <h3>Bugungi davomat holati</h3>

      <div className="donut-content">
        <div className="donut-chart-wrapper">
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={1}
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="donut-center">
            <strong>1 103</strong>
            <span>Jami</span>
          </div>
        </div>

        <div className="donut-legend">
          {data.map((item) => (
            <div className="legend-row" key={item.name}>
              <span
                className="legend-dot"
                style={{ background: item.color }}
              ></span>

              <span>{item.name}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttendanceDonutChart;