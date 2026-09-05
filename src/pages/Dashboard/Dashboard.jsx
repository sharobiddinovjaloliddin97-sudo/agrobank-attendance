import {
  Menu,
  Home,
  BarChart3,
  CalendarDays,
  Clock3,
  BriefcaseMedical,
  Coffee,
  Users,
  CalendarRange,
  ArrowLeftRight,
  TrendingUp,
  LogOut,
  ChevronDown,
  UserRound,
  UsersRound,
  CircleCheck,
  UserX,
  HeartPulse,
  Plane,
} from "lucide-react";

import "./Dashboard.css";

import StatCard from "../../components/StatCard/StatCard";
import AttendanceLineChart from "../../components/AttendanceCharts/AttendanceLineChart";
import AttendanceDonutChart from "../../components/AttendanceCharts/AttendanceDonutChart";

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark"></div>
          <span>Agrobank</span>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">
            <Home size={20} />
            <span>Dashboard</span>
          </button>

          <div className="nav-group">
            <button className="nav-item group-title">
              <BarChart3 size={20} />
              <span>Davomat to‘g‘risida ma’lumotlar</span>
              <ChevronDown size={16} className="nav-arrow" />
            </button>

            <button className="nav-item sub-item">
              <CalendarDays size={18} />
              <span>Bugungi davomat</span>
            </button>

            <button className="nav-item sub-item">
              <Clock3 size={18} />
              <span>Kelish va ketish</span>
            </button>

            <button className="nav-item sub-item">
              <BriefcaseMedical size={18} />
              <span>Sababli yo‘qlik</span>
            </button>

            <button className="nav-item sub-item">
              <Coffee size={18} />
              <span>Tanaffuslar</span>
            </button>

            <button className="nav-item sub-item">
              <Users size={18} />
              <span>Takroriy qoidabuzarlar</span>
            </button>
          </div>

          <div className="sidebar-divider"></div>

          <div className="nav-group">
            <button className="nav-item group-title">
              <CalendarRange size={20} />
              <span>Ish grafigi</span>
              <ChevronDown size={16} className="nav-arrow" />
            </button>

            <button className="nav-item sub-item">
              <CalendarDays size={18} />
              <span>Ish grafiklari</span>
            </button>

            <button className="nav-item sub-item">
              <ArrowLeftRight size={18} />
              <span>Smenalar va dam olish</span>
            </button>

            <button className="nav-item sub-item">
              <TrendingUp size={18} />
              <span>Grafikdan og‘ishlar</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="dashboard-main">
        {/* HEADER */}
        <header className="top-header">
          <button className="menu-btn" type="button">
            <Menu size={22} />
          </button>

          <div className="header-user">
            <div className="user-card">
              <div className="user-avatar">
                <UserRound size={20} />
              </div>

              <div className="user-info">
                <strong>Abdulaxatov Diyorbek</strong>
                <span>Administrator</span>
              </div>
            </div>

            <div className="header-separator"></div>

            <button className="logout-button" type="button">
              <LogOut size={18} />
              <span>Chiqish</span>
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="dashboard-content">
          {/* TITLE + FILTERS */}
          <section className="dashboard-top">
            <div className="dashboard-title">
              <h1>Xodimlar davomati</h1>
              <p>Bugungi davomat holati — 2 sentabr 2026</p>
            </div>

            <div className="dashboard-filters">
              <button className="filter-btn" type="button">
                Hudud / filial
                <ChevronDown size={16} />
              </button>

              <button className="filter-btn" type="button">
                Bo‘lim
                <ChevronDown size={16} />
              </button>

              <button className="filter-btn date-filter" type="button">
                02.09.2026
                <CalendarDays size={16} />
              </button>

              <div className="updated-info">
                Oxirgi yangilanish: 17:05
              </div>
            </div>
          </section>

          {/* STAT CARDS */}
          <section className="stats-grid">
            <StatCard
              icon={<UsersRound size={22} />}
              title="Reja bo‘yicha xodimlar"
              value="1 103"
              color="green"
            />

            <StatCard
              icon={<CircleCheck size={22} />}
              title="Ishga kelganlar"
              value="987"
              percent="89,5%"
              trend="2,4%"
              trendType="up"
              color="green"
            />

            <StatCard
              icon={<CircleCheck size={22} />}
              title="O‘z vaqtida kelganlar"
              value="821"
              percent="83,2%"
              trend="1,8%"
              trendType="up"
              color="green"
            />

            <StatCard
              icon={<Clock3 size={22} />}
              title="Kechikkanlar"
              value="166"
              percent="16,8%"
              trend="0,6%"
              trendType="up"
              color="orange"
            />

            <StatCard
              icon={<UserX size={22} />}
              title="Kelmaganlar"
              value="116"
              percent="10,5%"
              trend="0,9%"
              trendType="up"
              color="red"
            />

            <StatCard
              icon={<HeartPulse size={22} />}
              title="Ta’til / kasallik"
              value="74"
              percent="6,7%"
              trend="0,3%"
              trendType="down"
              color="blue"
            />

            <StatCard
              icon={<Plane size={22} />}
              title="Xizmat safari"
              value="42"
              percent="3,8%"
              trend="0,2%"
              trendType="down"
              color="blue"
            />
          </section>

          {/* CHARTS */}
          <section className="charts-grid">
            <AttendanceLineChart />
            <AttendanceDonutChart />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;