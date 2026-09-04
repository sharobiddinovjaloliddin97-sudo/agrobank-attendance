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
    <div className="login-page">
      <section className="login-left">
        <div className="brand">AGROBANK</div>

        <div className="intro">
          <h1>Xodimlar davomati</h1>
          <p>
            Bank xodimlarining ishga kelishi va ketishini nazorat qilish tizimi
          </p>
        </div>
      </section>

      <section className="login-right">
        <div className="top-bar">
          <button className="language-btn">
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

            <div className="password-wrapper">
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
              Meni eslab qolish
            </label>

            <button className="forgot-btn">Parolni unutdingizmi?</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="login-btn" onClick={handleLogin}>
            Kirish
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login;
