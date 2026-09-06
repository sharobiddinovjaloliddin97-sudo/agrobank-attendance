import { ChevronDown, CalendarDays } from "lucide-react";

function DashboardFilters({ t }) {
  const texts = t || {
    pageTitle: "Xodimlar Davomati",
    dateSubtitle: "Bugungi davomat holati — 2 sentabr 2026",
    regionFilter: "Hudud / filial",
    deptFilter: "Bo‘lim",
    dateVal: "02.09.2026",
    lastUpdated: "Oxirgi yangilanish: 17:05",
  };

  return (
    <section className="dashboard-top">
      <div className="dashboard-title">
        <h1>{texts.pageTitle}</h1>
        <p>{texts.dateSubtitle}</p>
      </div>

      <div className="dashboard-filters">
        <button className="filter-btn" type="button">
          <span>{texts.regionFilter}</span>
          <ChevronDown size={16} />
        </button>

        <button className="filter-btn" type="button">
          <span>{texts.deptFilter}</span>
          <ChevronDown size={16} />
        </button>

        <button className="filter-btn date-filter" type="button">
          <span>{texts.dateVal}</span>
          <CalendarDays size={16} />
        </button>

        <div className="updated-info">{texts.lastUpdated}</div>
      </div>
    </section>
  );
}

export default DashboardFilters;
