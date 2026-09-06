import { useState } from "react";
import "./Dashboard.css";

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

  return (
    <div className={`dashboard-page ${collapsed ? "sidebar-collapsed" : ""}`}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="dashboard-main">
        {/* HEADER */}
        <Header onToggleSidebar={() => setCollapsed((prev) => !prev)} />

        {/* CONTENT */}
        <main className="dashboard-content">
          {/* TITLE + FILTERS */}
          <DashboardFilters />

          {/* STAT CARDS */}
          <DashboardStats />

          {/* CHARTS */}
          <section className="charts-grid">
            <AttendanceLineChart />
            <AttendanceDonutChart />
          </section>

          {/* ATTENTION STRIP */}
          <AttentionStrip />

          {/* BOTTOM SECTION */}
          <section className="bottom-grid">
            <ProblemBranchesCard />
            <RepeatedLateCard />
            <AverageLateTimeCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
