import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import "./AttendanceCharts.css";

function AttendanceDonutChart({ t }) {
  const texts = t || {
    donutTitle: "Bugungi davomat holati",
    onTime: "O‘z vaqtida",
    late: "Kechikdi",
    absent: "Kelmagan",
    total: "Jami",
  };

  const chartData = [
    { name: texts.onTime, value: 821, color: "#0b9444" },
    { name: texts.late, value: 166, color: "#ff9800" },
    { name: texts.absent, value: 116, color: "#f5222d" },
  ];

  return (
    <div className="chart-card donut-card">
      <h3>{texts.donutTitle}</h3>

      <div className="donut-content">
        <div className="donut-chart-wrapper">
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={1}
              >
                {chartData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="donut-center">
            <strong>1 103</strong>
            <span>{texts.total}</span>
          </div>
        </div>

        <div className="donut-legend">
          {chartData.map((item) => (
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