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
} from "lucide-react";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
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

      <div className="dashboard-main">
        <header className="top-header">
          <button className="menu-btn">
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

            <button className="logout-button">
              <LogOut size={18} />
              <span>Chiqish</span>
            </button>
          </div>
        </header>

        <main className="dashboard-content">
          <section className="dashboard-top">
            <div className="dashboard-title">
              <h1>Xodimlar davomati</h1>
              <p>Bugungi davomat holati — 2 sentabr 2026</p>
            </div>

            <div className="dashboard-filters">
              <button className="filter-btn">
                Hudud / filial
                <ChevronDown size={16} />
              </button>

              <button className="filter-btn">
                Bo‘lim
                <ChevronDown size={16} />
              </button>

              <button className="filter-btn date-filter">
                02.09.2026
                <CalendarDays size={16} />
              </button>

              <div className="updated-info">
                Oxirgi yangilanish: 17:05
              </div>
            </div>
          </section>

          <section className="dashboard-placeholder">
            Keyingi bosqichda statistik kartalar qo‘shiladi.
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;