import "./StatCard.css";

function StatCard({
  icon,
  title,
  value,
  percent,
  trend,
  trendType = "up",
  color = "green",
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>

      <div className="stat-title">{title}</div>

      <div className={`stat-value ${color}`}>
        {value}
      </div>

      <div className="stat-footer">
        <span>{percent}</span>

        {trend && (
          <span className={`stat-trend ${trendType}`}>
            {trendType === "up" ? "▲" : "▼"} {trend}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatCard;