import { ChevronDown, CalendarDays } from "lucide-react";

function DashboardFilters() {
  return (
    <section className="dashboard-top">
      <div className="dashboard-title">
        <h1>Xodimlar Davomati</h1>
        <p>Bugungi davomat holati — 2 sentabr 2026</p>
      </div>

      <div className="dashboard-filters">
        <button className="filter-btn" type="button">
          <span>Hudud / filial</span>
          <ChevronDown size={16} />
        </button>

        <button className="filter-btn" type="button">
          <span>Bo‘lim</span>
          <ChevronDown size={16} />
        </button>

        <button className="filter-btn date-filter" type="button">
          <span>02.09.2026</span>
          <CalendarDays size={16} />
        </button>

        <div className="updated-info">Oxirgi yangilanish: 17:05</div>
      </div>
    </section>
  );
}

export default DashboardFilters;
