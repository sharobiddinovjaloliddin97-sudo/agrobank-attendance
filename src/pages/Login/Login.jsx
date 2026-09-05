import { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Barcha maydonlarni to‘ldiring");
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
          <h1>Xodimlar davomati</h1>

          <p>
            Bank xodimlarining ishga kelishi
            <br />
            va ketishini nazorat qilish tizimi
          </p>
        </div>

        <div className="left-features">
          <div className="feature">
            <ShieldCheck size={46} strokeWidth={1.6} />
            <span>Xavfsiz tizim</span>
          </div>

          <div className="feature-divider"></div>

          <div className="feature">
            <Clock3 size={46} strokeWidth={1.6} />
            <span>Real vaqt nazorati</span>
          </div>

          <div className="feature-divider"></div>

          <div className="feature">
            <Headphones size={46} strokeWidth={1.6} />
            <span>24/7 monitoring</span>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="login-right">
        <div className="language-wrapper">
          <button className="language-btn">
            <Globe2 size={18} />
            O‘zbekcha
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="login-card">
          <h2>Xush kelibsiz</h2>

          <p className="subtitle">
            Tizimga kirish uchun ma’lumotlaringizni kiriting
          </p>

          <div className="form-group">
            <label>Foydalanuvchi nomi</label>
            <input
              type="text"
              placeholder="Foydalanuvchi nomingizni kiriting"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Parol</label>

            <div className="input-wrapper">
              <LockKeyhole size={20} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Parolingizni kiriting"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              <span>Meni eslab qolish</span>
            </label>

            <button className="forgot-btn">Parolni unutdingizmi?</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="login-btn" onClick={handleLogin}>
            Kirish
          </button>

          <div className="divider">
            <span></span>
            <p>yoki</p>
            <span></span>
          </div>

          <button className="eimzo-btn">
            <ShieldCheck size={20} />
            E-IMZO orqali kirish
          </button>
        </div>

        <div className="security-info">
          <ShieldCheck size={20} />
          <span>Ma’lumotlaringiz himoyalangan</span>
        </div>

        <footer>© 2026 Agrobank ATB. Barcha huquqlar himoyalangan.</footer>
      </section>
    </div>
  );
}

export default Login;
