import { useState } from "react";
import "./Dashboard.css";
import { translations } from "../../locales/translations";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import DashboardFilters from "../../components/DashboardFilters/DashboardFilters";
import DashboardStats from "../../components/DashboardStats/DashboardStats";
import AttendanceLineChart from "../../components/AttendanceCharts/AttendanceLineChart";
import AttendanceDonutChart from "../../components/AttendanceCharts/AttendanceDonutChart";
import AttentionStrip from "../../components/AttentionStrip/AttentionStrip";
import ProblemBranchesCard from "../../components/ProblemBranchesCard/ProblemBranchesCard";
import RepeatedLateCard from "../../components/RepeatedLateCard/RepeatedLateCard";
import AverageLateTimeCard from "../../components/AverageLateTimeCard/AverageLateTimeCard";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("app_lang") || "uz");

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = translations[lang] || translations.uz;

  return (
    <div className={`dashboard-page ${collapsed ? "sidebar-collapsed" : ""}`}>
      {/* SIDEBAR */}
      <Sidebar t={t.sidebar} />

      {/* MAIN AREA */}
      <div className="dashboard-main">
        {/* HEADER */}
        <Header
          onToggleSidebar={() => setCollapsed((prev) => !prev)}
          t={t.header}
          currentLang={lang}
          onChangeLang={handleLangChange}
        />

        {/* CONTENT */}
        <main className="dashboard-content">
          {/* TITLE + FILTERS */}
          <DashboardFilters t={t.filters} />

          {/* STAT CARDS */}
          <DashboardStats t={t.stats} />

          {/* CHARTS */}
          <section className="charts-grid">
            <AttendanceLineChart t={t.charts} />
            <AttendanceDonutChart t={t.charts} />
          </section>

          {/* ATTENTION STRIP */}
          <AttentionStrip t={t.attention} />

          {/* BOTTOM SECTION */}
          <section className="bottom-grid">
            <ProblemBranchesCard t={t.bottom} />
            <RepeatedLateCard t={t.bottom} />
            <AverageLateTimeCard t={t.bottom} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

