import "./Login.css"

function Login() {
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
        <div className="login-card">
          <h2>Xush kelibsiz</h2>
          <p className="subtitle">
            Tizimga kirish uchun ma’lumotlaringizni kiriting
          </p>

          <label>Foydalanuvchi nomi</label>
          <input type="text" placeholder="Foydalanuvchi nomi" />

          <label>Parol</label>
          <input type="password" placeholder="Parol" />

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