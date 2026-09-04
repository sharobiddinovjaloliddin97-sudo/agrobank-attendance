import { useState } from "react"
import { Eye, EyeOff, ChevronDown } from "lucide-react"
import "./Login.css"

function Login() {
  const [showPassword, setShowPassword] = useState(false)

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
            />
          </div>

          <div className="form-group">
            <label>Parol</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Parolingizni kiriting"
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

            <button className="forgot-btn">
              Parolni unutdingizmi?
            </button>
          </div>

          <button className="login-btn">
            Kirish
          </button>
        </div>
      </section>
    </div>
  )
}

export default Login