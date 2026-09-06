
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./AttendanceCharts.css";

const data = [
  { time: "07:00", came: 120, onTime: 80, late: 20 },
  { time: "08:00", came: 600, onTime: 400, late: 110 },
  { time: "09:00", came: 800, onTime: 580, late: 160 },
  { time: "10:00", came: 960, onTime: 730, late: 220 },
  { time: "11:00", came: 980, onTime: 720, late: 190 },
  { time: "12:00", came: 1080, onTime: 810, late: 230 },
  { time: "13:00", came: 940, onTime: 720, late: 180 },
  { time: "14:00", came: 950, onTime: 730, late: 185 },
  { time: "15:00", came: 970, onTime: 750, late: 200 },
  { time: "16:00", came: 950, onTime: 730, late: 205 },
  { time: "17:00", came: 1030, onTime: 800, late: 245 },
  { time: "18:00", came: 1030, onTime: 800, late: 210 },
  { time: "19:00", came: 430, onTime: 220, late: 60 },
];

function AttendanceLineChart({ t }) {
  const texts = t || {
    lineTitle: "Kunlik davomat dinamikasi",
    came: "Keldi",
    onTime: "O‘z vaqtida",
    late: "Kechikdi",
  };

  return (
    <div className="chart-card line-chart-card">
      <h3>{texts.lineTitle}</h3>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={140}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "4px" }} />

            <Line
              type="monotone"
              dataKey="came"
              name={texts.came}
              stroke="#0b6b3a"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="onTime"
              name={texts.onTime}
              stroke="#16a05d"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="late"
              name={texts.late}
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceLineChart;