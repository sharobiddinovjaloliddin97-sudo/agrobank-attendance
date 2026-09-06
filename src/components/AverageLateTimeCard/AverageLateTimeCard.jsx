import { Clock3, ArrowRight } from "lucide-react";

const defaultDays = ["Dush", "Sesh", "Chor", "Paysh", "Juma", "Shan", "Yak"];
const weeklyValues = [24, 22, 21, 20, 19, 15, 18];

function AverageLateTimeCard({ t, onShowDetails }) {
  const texts = t || {
    avgTitle: "O‘rtacha kechikish vaqti",
    minutes: "daqiqa",
    avgDiff: "↓ 3 daqiqa o‘tgan haftaga nisbatan",
    viewDetails: "Batafsil statistikani ko‘rish",
    days: defaultDays,
  };

  const days = texts.days || defaultDays;

  return (
    <div className="bottom-card">
      <div className="bottom-card-header">
        <h3>{texts.avgTitle}</h3>
        <span>⋮</span>
      </div>

      <div className="late-average">
        <div className="late-average-number">
          <Clock3 size={22} />
          <strong>18</strong>
          <span>{texts.minutes}</span>
        </div>

        <p>{texts.avgDiff}</p>

        <div className="mini-bars">
          {days.map((day, idx) => {
            const val = weeklyValues[idx] || 15;
            return (
              <div className="mini-bar-item" key={day}>
                <span>{val}</span>
                <div
                  className="mini-bar"
                  style={{ height: `${val * 1.5}px` }}
                ></div>
                <small>{day}</small>
              </div>
            );
          })}
        </div>
      </div>

      <button className="bottom-card-btn" type="button" onClick={onShowDetails}>
        <span>{texts.viewDetails}</span>
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

export default AverageLateTimeCard;

