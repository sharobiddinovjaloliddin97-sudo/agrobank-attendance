import { Clock3, ArrowRight } from "lucide-react";

const weeklyData = [
  { day: "Dush", value: 24 },
  { day: "Sesh", value: 22 },
  { day: "Chor", value: 21 },
  { day: "Paysh", value: 20 },
  { day: "Juma", value: 19 },
  { day: "Shan", value: 15 },
  { day: "Yak", value: 18 },
];

function AverageLateTimeCard({ onShowDetails }) {
  return (
    <div className="bottom-card">
      <div className="bottom-card-header">
        <h3>O‘rtacha kechikish vaqti</h3>
        <span>⋮</span>
      </div>

      <div className="late-average">
        <div className="late-average-number">
          <Clock3 size={30} />
          <strong>18</strong>
          <span>daqiqa</span>
        </div>

        <p>↓ 3 daqiqa o‘tgan haftaga nisbatan</p>

        <div className="mini-bars">
          {weeklyData.map(({ day, value }) => (
            <div className="mini-bar-item" key={day}>
              <span>{value}</span>
              <div
                className="mini-bar"
                style={{ height: `${value * 2}px` }}
              ></div>
              <small>{day}</small>
            </div>
          ))}
        </div>
      </div>

      <button className="bottom-card-btn" type="button" onClick={onShowDetails}>
        <span>Batafsil statistikani ko‘rish</span>
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

export default AverageLateTimeCard;
