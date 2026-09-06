# Agrobank — Xodimlar Davomati (Employee Attendance Dashboard)

Bank xodimlarining ishga kelishi va ketishini nazorat qilish va davomat statistikasini tahlil qilish uchun ishlab chiqilgan zamonaviy veb-ilova.

---

## 🚀 Asosiy Imkoniyatlar (Features)

- **Login Page**:
  - Xavfsiz avtorizatsiya formasi va input validatsiyasi
  - Parolni ko‘rsatish/yashirish (show/hide toggle)
  - E-IMZO orqali kirish tugmasi
  - Responsive va bir ekranga moslashgan (unscrollable) dizayn
- **Dashboard**:
  - **Single Responsibility** tamoyiliga asoslangan modulli arxitektura (`Sidebar`, `Header`, `DashboardFilters`, `DashboardStats`, `AttendanceLineChart`, `AttendanceDonutChart`, `AttentionStrip`, `ProblemBranchesCard`, `RepeatedLateCard`, `AverageLateTimeCard`)
  - 7 ta asosiy davomat ko‘rsatkichi (reja, kelganlar, vaqtida, kechikkanlar, kelmaganlar, ta’til/kasallik, xizmat safari)
  - Dinamik Recharts grafiklari (kunlik dinamika va foizli donut diagramma)
  - Muammoli bo‘linmalar va takroriy kechikuvchilar jadvallari
  - Hafta kunlari bo‘yicha o‘rtacha kechikish dinamikasi
  - Yig‘iluvchi/ochiluvchi yon panel (Collapsible Sidebar)
  - Bir ekranga to‘liq sig‘uvchi (desktopda skrollsiz) ixcham va toza UI
- **Ko‘p tillilik (Multi-language i18n)**:
  - O‘zbekcha (`uz`), Ruscha (`ru`), Inglizcha (`en`)
  - Til tanlagich Login va Dashboard Header qismida mavjud bo‘lib, butun interfeysni bir zumda dinamik tarjima qiladi
  - Tanlangan til `localStorage`da saqlanadi
- **Konfiguratsiya va Xavfsizlik**:
  - Markazlashtirilgan `.env` va `src/config/appConfig.js` orqali boshqariladi
  - `.env.example` namunasi taqdim etilgan, `.env` fayli `.gitignore` orqali himoyalangan

---

## 🛠 Texnologiyalar (Tech Stack)

- **React 19**
- **Vite**
- **React Router DOM v7**
- **Recharts** (interaktiv grafiklar)
- **Lucide React** (zamonaviy SVG ikonlar)
- **Vanilla CSS** (toza, moslashuvchan dizayn)
- **ESLint** (kod tozaligi)

---

## ⚙️ Muhit O‘zgaruvchilari (Environment Variables)

Loyiha sozlamalarini boshqarish uchun `.env` faylidan foydalaniladi:

```bash
cp .env.example .env
```

| O‘zgaruvchi | Tavsif | Default qiymat |
|---|---|---|
| `VITE_APP_NAME` | Ilova nomi | `"Agrobank Davomat"` |
| `VITE_APP_TITLE` | Sahifa sarlavhasi | `"Xodimlar Davomati"` |
| `VITE_APP_VERSION` | Ilova versiyasi | `"1.0.0"` |
| `VITE_API_BASE_URL` | Backend API bazaviy manzili | `"https://api.agrobank.uz/v1"` |
| `VITE_API_TIMEOUT` | So‘rov kutish vaqti (ms) | `10000` |
| `VITE_DEFAULT_LANG` | Standart til (`uz` / `ru` / `en`) | `"uz"` |
| `VITE_ENABLE_MOCK_AUTH` | Simulyatsiya qilingan autentifikatsiya | `"true"` |
| `VITE_ENABLE_MOCK_DATA` | Mock ma’lumotlar rejimi | `"true"` |

---

## 📦 O‘rnatish va Ishga Tushirish

1. **Repozitoriyani klonlash:**
   ```bash
   git clone <repo-url>
   cd agrobank-attendance
   ```

2. **Kutubxonalarni o‘rnatish:**
   ```bash
   npm install
   ```

3. **Muhit o‘zgaruvchilarini sozlash:**
   ```bash
   cp .env.example .env
   ```

4. **Dasturni ishga tushirish (Dev Server):**
   ```bash
   npm run dev
   ```

5. **Ishlab chiqarish (Production Build) uchun yig‘ish:**
   ```bash
   npm run build
   ```

6. **Kodni tekshirish (Linting):**
   ```bash
   npm run lint
   ```