import { useNavigate } from "react-router-dom";
import { Menu, UserRound, LogOut } from "lucide-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Header({ onToggleSidebar, t, currentLang, onChangeLang }) {
  const navigate = useNavigate();

  const texts = t || {
    userRole: "Administrator",
    logout: "Chiqish",
  };

  return (
    <header className="top-header">
      <button
        className="menu-btn"
        type="button"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={22} />
      </button>

      <div className="header-right">
        <LanguageSelector
          currentLang={currentLang}
          onChangeLang={onChangeLang}
        />

        <div className="header-user">
          <div className="user-card">
            <div className="user-avatar">
              <UserRound size={20} />
            </div>

            <div className="user-info">
              <strong>Abdulaxatov Diyorbek</strong>
              <span>{texts.userRole}</span>
            </div>
          </div>

          <div className="header-separator"></div>

          <button
            className="logout-button"
            type="button"
            onClick={() => navigate("/")}
          >
            <LogOut size={18} />
            <span>{texts.logout}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
