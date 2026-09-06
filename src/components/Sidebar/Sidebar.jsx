import { useState } from "react";
import {
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function Sidebar() {
  const [attendanceOpen, setAttendanceOpen] = useState(true);
  const [scheduleOpen, setScheduleOpen] = useState(true);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark"></div>
        <span>Agrobank</span>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item active" type="button">
          <Home size={20} />
          <span>Dashboard</span>
        </button>

        <div className="nav-group">
          <button
            className="nav-item group-title"
            type="button"
            onClick={() => setAttendanceOpen((prev) => !prev)}
          >
            <BarChart3 size={20} />
            <span>Davomat to‘g‘risida ma’lumotlar</span>
            {attendanceOpen ? (
              <ChevronDown size={16} className="nav-arrow" />
            ) : (
              <ChevronUp size={16} className="nav-arrow" />
            )}
          </button>

          {attendanceOpen && (
            <div className="submenu">
              <button className="nav-item sub-item" type="button">
                <CalendarDays size={18} />
                <span>Bugungi davomat</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <Clock3 size={18} />
                <span>Kelish va ketish</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <BriefcaseMedical size={18} />
                <span>Sababli yo‘qlik</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <Coffee size={18} />
                <span>Tanaffuslar</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <Users size={18} />
                <span>Takroriy qoidabuzarlar</span>
              </button>
            </div>
          )}
        </div>

        <div className="sidebar-divider"></div>

        <div className="nav-group">
          <button
            className="nav-item group-title"
            type="button"
            onClick={() => setScheduleOpen((prev) => !prev)}
          >
            <CalendarRange size={20} />
            <span>Ish grafigi</span>
            {scheduleOpen ? (
              <ChevronDown size={16} className="nav-arrow" />
            ) : (
              <ChevronUp size={16} className="nav-arrow" />
            )}
          </button>

          {scheduleOpen && (
            <div className="submenu">
              <button className="nav-item sub-item" type="button">
                <CalendarDays size={18} />
                <span>Ish grafiklari</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <ArrowLeftRight size={18} />
                <span>Smenalar va dam olish</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <TrendingUp size={18} />
                <span>Grafikdan og‘ishlar</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
