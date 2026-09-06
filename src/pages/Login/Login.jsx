import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  ChevronDown,
  Clock3,
  Eye,
  EyeOff,
  Globe2,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import "./Login.css";

const languages = [
  { code: "uz", label: "O‘zbekcha" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

const translations = {
  uz: {
    title: "Xodimlar davomati",
    subtitle: "Bank xodimlarining ishga kelishi\nva ketishini nazorat qilish tizimi",
    secureSystem: "Xavfsiz tizim",
    realTime: "Real vaqt nazorati",
    monitoring: "24/7 monitoring",
    welcome: "Xush kelibsiz",
    loginSubtitle: "Tizimga kirish uchun ma’lumotlaringizni kiriting",
    usernameLabel: "Foydalanuvchi nomi",
    usernamePlaceholder: "Foydalanuvchi nomingizni kiriting",
    passwordLabel: "Parol",
    passwordPlaceholder: "Parolingizni kiriting",
    rememberMe: "Meni eslab qolish",
    forgotPassword: "Parolni unutdingizmi?",
    loginBtn: "Kirish",
    or: "yoki",
    eimzoBtn: "E-IMZO orqali kirish",
    securityInfo: "Ma’lumotlaringiz himoyalangan",
    requiredFields: "Barcha maydonlarni to‘ldiring",
    footer: "© 2026 Agrobank ATB. Barcha huquqlar himoyalangan.",
  },
  ru: {
    title: "Посещаемость сотрудников",
    subtitle: "Система учета и контроля рабочего\nвремени сотрудников банка",
    secureSystem: "Безопасная система",
    realTime: "Контроль в реальном времени",
    monitoring: "24/7 мониторинг",
    welcome: "Добро пожаловать",
    loginSubtitle: "Введите свои данные для входа в систему",
    usernameLabel: "Имя пользователя",
    usernamePlaceholder: "Введите имя пользователя",
    passwordLabel: "Пароль",
    passwordPlaceholder: "Введите пароль",
    rememberMe: "Запомнить меня",
    forgotPassword: "Забыли пароль?",
    loginBtn: "Войти",
    or: "или",
    eimzoBtn: "Вход через E-IMZO",
    securityInfo: "Ваши данные защищены",
    requiredFields: "Заполните все поля",
    footer: "© 2026 АКБ «Агробанк». Все права защищены.",
  },
  en: {
    title: "Employee Attendance",
    subtitle: "System for monitoring bank employees'\narrival and departure times",
    secureSystem: "Secure system",
    realTime: "Real-time tracking",
    monitoring: "24/7 monitoring",
    welcome: "Welcome",
    loginSubtitle: "Enter your credentials to sign in to the system",
    usernameLabel: "Username",
    usernamePlaceholder: "Enter your username",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    loginBtn: "Sign in",
    or: "or",
    eimzoBtn: "Sign in with E-IMZO",
    securityInfo: "Your data is secured",
    requiredFields: "Please fill in all fields",
    footer: "© 2026 JSCB Agrobank. All rights reserved.",
  },
};

function Login() {
  const navigate = useNavigate();

  const [selectedLang, setSelectedLang] = useState("uz");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const t = translations[selectedLang];

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="language-wrapper" ref={langDropdownRef}>
          <button
            type="button"
            className={`language-btn ${isLangOpen ? "open" : ""}`}
            onClick={() => setIsLangOpen((prev) => !prev)}
            aria-expanded={isLangOpen}
            aria-haspopup="listbox"
          >
            <Globe2 size={18} className="language-globe" />
            <span>{languages.find((l) => l.code === selectedLang)?.label}</span>
            <ChevronDown size={16} className={`language-arrow ${isLangOpen ? "open" : ""}`} />
          </button>

          {isLangOpen && (
            <div className="language-dropdown" role="listbox">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  className={`language-option ${selectedLang === lang.code ? "active" : ""}`}
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setIsLangOpen(false);
                    if (error) setError("");
                  }}
                  role="option"
                  aria-selected={selectedLang === lang.code}
                >
                  <span>{lang.label}</span>
                  {selectedLang === lang.code && <Check size={16} className="language-check" />}
                </button>
              ))}
            </div>
          )}
        </div>

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
