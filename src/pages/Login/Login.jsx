import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock3,
  Eye,
  EyeOff,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import "./Login.css";
import { translations } from "../../locales/translations";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

function Login() {
  const navigate = useNavigate();

  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem("app_lang") || "uz";
  });

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const t = translations[selectedLang] || translations.uz;

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError(t.requiredFields);
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      {/* LEFT SIDE */}
      <section className="login-left">
        <div className="brand">
          <div className="brand-logo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>Agrobank</span>
        </div>

        <div className="decor decor-one"></div>
        <div className="decor decor-two"></div>
        <div className="decor decor-three"></div>

        <div className="intro">
          <h1>{t.title}</h1>

          <p style={{ whiteSpace: "pre-line" }}>{t.subtitle}</p>
        </div>

        <div className="left-features">
          <div className="feature">
            <ShieldCheck size={46} strokeWidth={1.6} />
            <span>{t.secureSystem}</span>
          </div>

          <div className="feature-divider"></div>

          <div className="feature">
            <Clock3 size={46} strokeWidth={1.6} />
            <span>{t.realTime}</span>
          </div>

          <div className="feature-divider"></div>

          <div className="feature">
            <Headphones size={46} strokeWidth={1.6} />
            <span>{t.monitoring}</span>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="login-right">
        <LanguageSelector
          currentLang={selectedLang}
          onChangeLang={(code) => {
            setSelectedLang(code);
            if (error) setError("");
          }}
          className="login-lang"
        />

        <div className="login-card">
          <h2>{t.welcome}</h2>

          <p className="subtitle">{t.loginSubtitle}</p>

          <div className="form-group">
            <label htmlFor="username">{t.usernameLabel}</label>

            <div className="input-wrapper">
              <UserRound size={20} />

              <input
                id="username"
                type="text"
                placeholder={t.usernamePlaceholder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">{t.passwordLabel}</label>

            <div className="input-wrapper">
              <LockKeyhole size={20} />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              <span>{t.rememberMe}</span>
            </label>

            <button type="button" className="forgot-btn">{t.forgotPassword}</button>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            type="button"
            className="login-btn"
            onClick={handleLogin}
          >
            {t.loginBtn}
          </button>

          <div className="divider">
            <span></span>
            <p>{t.or}</p>
            <span></span>
          </div>

          <button type="button" className="eimzo-btn">
            <ShieldCheck size={20} />
            {t.eimzoBtn}
          </button>
        </div>

        <div className="security-info">
          <ShieldCheck size={20} />
          <span>{t.securityInfo}</span>
        </div>

        <footer>{t.footer}</footer>
      </section>
    </main>
  );
}

export default Login;
