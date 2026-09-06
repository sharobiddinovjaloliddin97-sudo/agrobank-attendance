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

function Sidebar({ t }) {
  const [attendanceOpen, setAttendanceOpen] = useState(true);
  const [scheduleOpen, setScheduleOpen] = useState(true);

  const texts = t || {
    dashboard: "Dashboard",
    attendanceGroup: "Davomat to‘g‘risida ma’lumotlar",
    todayAttendance: "Bugungi davomat",
    arrivalDeparture: "Kelish va ketish",
    excusedAbsence: "Sababli yo‘qlik",
    breaks: "Tanaffuslar",
    repeatViolators: "Takroriy qoidabuzarlar",
    scheduleGroup: "Ish grafigi",
    schedules: "Ish grafiklari",
    shiftsRest: "Smenalar va dam olish",
    deviations: "Grafikdan og‘ishlar",
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark"></div>
        <span>Agrobank</span>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item active" type="button">
          <Home size={20} />
          <span>{texts.dashboard}</span>
        </button>

        <div className="nav-group">
          <button
            className="nav-item group-title"
            type="button"
            onClick={() => setAttendanceOpen((prev) => !prev)}
          >
            <BarChart3 size={20} />
            <span>{texts.attendanceGroup}</span>
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
                <span>{texts.todayAttendance}</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <Clock3 size={18} />
                <span>{texts.arrivalDeparture}</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <BriefcaseMedical size={18} />
                <span>{texts.excusedAbsence}</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <Coffee size={18} />
                <span>{texts.breaks}</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <Users size={18} />
                <span>{texts.repeatViolators}</span>
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
            <span>{texts.scheduleGroup}</span>
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
                <span>{texts.schedules}</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <ArrowLeftRight size={18} />
                <span>{texts.shiftsRest}</span>
              </button>

              <button className="nav-item sub-item" type="button">
                <TrendingUp size={18} />
                <span>{texts.deviations}</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
