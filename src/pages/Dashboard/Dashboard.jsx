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
import { AlertTriangle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`dashboard-page ${collapsed ? "sidebar-collapsed" : ""}`}>
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
          <button
            className="menu-btn"
            type="button"
            onClick={() => setCollapsed(!collapsed)}
          >
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

            <button
              className="logout-button"
              type="button"
              onClick={() => navigate("/")}
            >
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

              <div className="updated-info">Oxirgi yangilanish: 17:05</div>
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
          {/* Bottom */}
          <section className="attention-strip">
            <div className="attention-left">
              <AlertTriangle size={20} />
              <span>
                <strong>Diqqat talab qiladi:</strong> 23 nafar xodim ketma-ket 3
                martadan ortiq kechikkan
              </span>
            </div>

            <button type="button" className="attention-btn">
              Ro‘yxatni ko‘rish
              <ArrowRight size={17} />
            </button>
          </section>

          <section className="bottom-grid">
            <div className="bottom-card">
              <div className="bottom-card-header">
                <h3>Muammoli bo‘linmalar</h3>
                <span>⋮</span>
              </div>

              <div className="problem-table">
                <div className="table-row table-head">
                  <span>Bo‘linma</span>
                  <span>Kechikish</span>
                  <span>Kelmagan</span>
                  <span>Davomat</span>
                </div>

                <div className="table-row">
                  <span>1&nbsp; Bosh ofis</span>
                  <span>28 (18%)</span>
                  <span>20 (8%)</span>
                  <span>82%</span>
                </div>

                <div className="table-row">
                  <span>2&nbsp; Toshkent shahar</span>
                  <span>31 (17%)</span>
                  <span>26 (9%)</span>
                  <span>81%</span>
                </div>

                <div className="table-row">
                  <span>3&nbsp; Samarqand</span>
                  <span>21 (15%)</span>
                  <span>14 (6%)</span>
                  <span>85%</span>
                </div>

                <div className="table-row">
                  <span>4&nbsp; Andijon</span>
                  <span>18 (14%)</span>
                  <span>11 (6%)</span>
                  <span>86%</span>
                </div>

                <div className="table-row">
                  <span>5&nbsp; Farg‘ona</span>
                  <span>15 (12%)</span>
                  <span>9 (5%)</span>
                  <span>88%</span>
                </div>
              </div>

              <button className="bottom-card-btn" type="button">
                Barcha bo‘linmalarni ko‘rish
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="bottom-card">
              <div className="bottom-card-header">
                <h3>Takroriy kechikuvchilar</h3>
                <span>⋮</span>
              </div>

              <div className="late-list">
                <div className="late-row">
                  <span>1</span>
                  <span>Yusiev B.</span>
                  <span>Kredit bo‘limi</span>
                  <strong>8 marta</strong>
                </div>

                <div className="late-row">
                  <span>2</span>
                  <span>Melikuziev O.</span>
                  <span>Operatsion bo‘lim</span>
                  <strong>8 marta</strong>
                </div>

                <div className="late-row">
                  <span>3</span>
                  <span>Xikmatov I.</span>
                  <span>Hisob-kitob bo‘limi</span>
                  <strong>7 marta</strong>
                </div>

                <div className="late-row">
                  <span>4</span>
                  <span>Rahimov F.</span>
                  <span>IT bo‘limi</span>
                  <strong>6 marta</strong>
                </div>

                <div className="late-row">
                  <span>5</span>
                  <span>Xikmat Q.</span>
                  <span>Xavfsizlik bo‘limi</span>
                  <strong>6 marta</strong>
                </div>
              </div>

              <button className="bottom-card-btn" type="button">
                Barcha ro‘yxatni ko‘rish
                <ArrowRight size={17} />
              </button>
            </div>

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
                  {[
                    ["Dush", 24],
                    ["Sesh", 22],
                    ["Chor", 21],
                    ["Paysh", 20],
                    ["Juma", 19],
                    ["Shan", 15],
                    ["Yak", 18],
                  ].map(([day, value]) => (
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

              <button className="bottom-card-btn" type="button">
                Batafsil statistikani ko‘rish
                <ArrowRight size={17} />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
