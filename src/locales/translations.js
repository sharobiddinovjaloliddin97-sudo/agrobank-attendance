export const languages = [
  { code: "uz", label: "O‘zbekcha" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export const translations = {
  uz: {
    // Login
    title: "Xodimlar Davomati",
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

    // Dashboard Header
    header: {
      userRole: "Administrator",
      logout: "Chiqish",
    },

    // Sidebar
    sidebar: {
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
    },

    // Dashboard Filters / Top
    filters: {
      pageTitle: "Xodimlar Davomati",
      dateSubtitle: "Bugungi davomat holati — 2 sentabr 2026",
      regionFilter: "Hudud / filial",
      deptFilter: "Bo‘lim",
      dateVal: "02.09.2026",
      lastUpdated: "Oxirgi yangilanish: 17:05",
    },

    // Stat Cards
    stats: {
      planned: "Reja bo‘yicha xodimlar",
      present: "Ishga kelganlar",
      onTime: "O‘z vaqtida kelganlar",
      late: "Kechikkanlar",
      absent: "Kelmaganlar",
      leave: "Ta’til / kasallik",
      businessTrip: "Xizmat safari",
    },

    // Charts
    charts: {
      lineTitle: "Kunlik davomat dinamikasi",
      donutTitle: "Bugungi davomat holati",
      came: "Keldi",
      onTime: "O‘z vaqtida",
      late: "Kechikdi",
      absent: "Kelmagan",
      total: "Jami",
    },

    // Attention Strip
    attention: {
      label: "Diqqat talab qiladi:",
      message: "23 nafar xodim ketma-ket 3 martadan ortiq kechikkan",
      btn: "Ro‘yxatni ko‘rish",
    },

    // Bottom Cards
    bottom: {
      problemTitle: "Muammoli bo‘linmalar",
      branchCol: "Bo‘linma",
      lateCol: "Kechikish",
      absentCol: "Kelmagan",
      attendanceCol: "Davomat",
      viewAllBranches: "Barcha bo‘linmalarni ko‘rish",
      branches: [
        { id: 1, name: "Bosh ofis", late: "28 (18%)", absent: "20 (8%)", attendance: "82%" },
        { id: 2, name: "Toshkent shahar", late: "31 (17%)", absent: "26 (9%)", attendance: "81%" },
        { id: 3, name: "Samarqand", late: "21 (15%)", absent: "14 (6%)", attendance: "85%" },
        { id: 4, name: "Andijon", late: "18 (14%)", absent: "11 (6%)", attendance: "86%" },
        { id: 5, name: "Farg‘ona", late: "15 (12%)", absent: "9 (5%)", attendance: "88%" },
      ],
      lateTitle: "Takroriy kechikuvchilar",
      viewAllList: "Barcha ro‘yxatni ko‘rish",
      times: "marta",
      latePersons: [
        { id: 1, name: "Yusiev B.", dept: "Kredit bo‘limi", count: "8 marta" },
        { id: 2, name: "Melikuziev O.", dept: "Operatsion bo‘lim", count: "8 marta" },
        { id: 3, name: "Xikmatov I.", dept: "Hisob-kitob bo‘limi", count: "7 marta" },
        { id: 4, name: "Rahimov F.", dept: "IT bo‘limi", count: "6 marta" },
        { id: 5, name: "Xikmat Q.", dept: "Xavfsizlik bo‘limi", count: "6 marta" },
      ],
      avgTitle: "O‘rtacha kechikish vaqti",
      minutes: "daqiqa",
      avgDiff: "↓ 3 daqiqa o‘tgan haftaga nisbatan",
      viewDetails: "Batafsil statistikani ko‘rish",
      days: ["Dush", "Sesh", "Chor", "Paysh", "Juma", "Shan", "Yak"],
    },
  },

  ru: {
    // Login
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

    // Dashboard Header
    header: {
      userRole: "Администратор",
      logout: "Выход",
    },

    // Sidebar
    sidebar: {
      dashboard: "Панель управления",
      attendanceGroup: "Информация о посещаемости",
      todayAttendance: "Посещаемость сегодня",
      arrivalDeparture: "Приход и уход",
      excusedAbsence: "Уважительное отсутствие",
      breaks: "Перерывы",
      repeatViolators: "Повторные нарушители",
      scheduleGroup: "График работы",
      schedules: "Графики работы",
      shiftsRest: "Смены и дни отдыха",
      deviations: "Отклонения от графика",
    },

    // Dashboard Filters / Top
    filters: {
      pageTitle: "Посещаемость сотрудников",
      dateSubtitle: "Состояние посещаемости на сегодня — 2 сентября 2026",
      regionFilter: "Регион / филиал",
      deptFilter: "Отдел",
      dateVal: "02.09.2026",
      lastUpdated: "Последнее обновление: 17:05",
    },

    // Stat Cards
    stats: {
      planned: "Сотрудники по плану",
      present: "Пришли на работу",
      onTime: "Пришли вовремя",
      late: "Опоздавшие",
      absent: "Не явились",
      leave: "Отпуск / больничный",
      businessTrip: "Командировка",
    },

    // Charts
    charts: {
      lineTitle: "Дневная динамика посещаемости",
      donutTitle: "Состояние посещаемости сегодня",
      came: "Пришли",
      onTime: "Вовремя",
      late: "Опоздали",
      absent: "Не явились",
      total: "Всего",
    },

    // Attention Strip
    attention: {
      label: "Требует внимания:",
      message: "23 сотрудника опоздали более 3 раз подряд",
      btn: "Посмотреть список",
    },

    // Bottom Cards
    bottom: {
      problemTitle: "Проблемные подразделения",
      branchCol: "Подразделение",
      lateCol: "Опоздание",
      absentCol: "Не явились",
      attendanceCol: "Посещаемость",
      viewAllBranches: "Все подразделения",
      branches: [
        { id: 1, name: "Головной офис", late: "28 (18%)", absent: "20 (8%)", attendance: "82%" },
        { id: 2, name: "г. Ташкент", late: "31 (17%)", absent: "26 (9%)", attendance: "81%" },
        { id: 3, name: "Самарканд", late: "21 (15%)", absent: "14 (6%)", attendance: "85%" },
        { id: 4, name: "Андижан", late: "18 (14%)", absent: "11 (6%)", attendance: "86%" },
        { id: 5, name: "Фергана", late: "15 (12%)", absent: "9 (5%)", attendance: "88%" },
      ],
      lateTitle: "Повторно опаздывающие",
      viewAllList: "Посмотреть весь список",
      times: "раз",
      latePersons: [
        { id: 1, name: "Юсиев Б.", dept: "Кредитный отдел", count: "8 раз" },
        { id: 2, name: "Меликузиев О.", dept: "Операционный отдел", count: "8 раз" },
        { id: 3, name: "Хикматов И.", dept: "Расчетный отдел", count: "7 раз" },
        { id: 4, name: "Рахимов Ф.", dept: "IT отдел", count: "6 раз" },
        { id: 5, name: "Хикмат К.", dept: "Служба безопасности", count: "6 раз" },
      ],
      avgTitle: "Среднее время опоздания",
      minutes: "минут",
      avgDiff: "↓ на 3 минуты по сравнению с прошлой неделей",
      viewDetails: "Подробная статистика",
      days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    },
  },

  en: {
    // Login
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

    // Dashboard Header
    header: {
      userRole: "Administrator",
      logout: "Log out",
    },

    // Sidebar
    sidebar: {
      dashboard: "Dashboard",
      attendanceGroup: "Attendance information",
      todayAttendance: "Today's attendance",
      arrivalDeparture: "Arrival and departure",
      excusedAbsence: "Excused absence",
      breaks: "Breaks",
      repeatViolators: "Repeat offenders",
      scheduleGroup: "Work schedule",
      schedules: "Work schedules",
      shiftsRest: "Shifts and time off",
      deviations: "Schedule deviations",
    },

    // Dashboard Filters / Top
    filters: {
      pageTitle: "Employee Attendance",
      dateSubtitle: "Today's attendance status — September 2, 2026",
      regionFilter: "Region / branch",
      deptFilter: "Department",
      dateVal: "02.09.2026",
      lastUpdated: "Last updated: 17:05",
    },

    // Stat Cards
    stats: {
      planned: "Planned employees",
      present: "Present at work",
      onTime: "On-time arrivals",
      late: "Late arrivals",
      absent: "Absent",
      leave: "Leave / sick leave",
      businessTrip: "Business trip",
    },

    // Charts
    charts: {
      lineTitle: "Daily attendance dynamics",
      donutTitle: "Today's attendance status",
      came: "Arrived",
      onTime: "On time",
      late: "Late",
      absent: "Absent",
      total: "Total",
    },

    // Attention Strip
    attention: {
      label: "Requires attention:",
      message: "23 employees were late more than 3 consecutive times",
      btn: "View list",
    },

    // Bottom Cards
    bottom: {
      problemTitle: "Problematic branches",
      branchCol: "Branch",
      lateCol: "Late",
      absentCol: "Absent",
      attendanceCol: "Attendance",
      viewAllBranches: "View all branches",
      branches: [
        { id: 1, name: "Head office", late: "28 (18%)", absent: "20 (8%)", attendance: "82%" },
        { id: 2, name: "Tashkent city", late: "31 (17%)", absent: "26 (9%)", attendance: "81%" },
        { id: 3, name: "Samarkand", late: "21 (15%)", absent: "14 (6%)", attendance: "85%" },
        { id: 4, name: "Andijan", late: "18 (14%)", absent: "11 (6%)", attendance: "86%" },
        { id: 5, name: "Fergana", late: "15 (12%)", absent: "9 (5%)", attendance: "88%" },
      ],
      lateTitle: "Repeat tardy employees",
      viewAllList: "View full list",
      times: "times",
      latePersons: [
        { id: 1, name: "Yusiev B.", dept: "Credit Dept.", count: "8 times" },
        { id: 2, name: "Melikuziev O.", dept: "Operations Dept.", count: "8 times" },
        { id: 3, name: "Xikmatov I.", dept: "Accounting Dept.", count: "7 times" },
        { id: 4, name: "Rahimov F.", dept: "IT Dept.", count: "6 times" },
        { id: 5, name: "Xikmat Q.", dept: "Security Dept.", count: "6 times" },
      ],
      avgTitle: "Average late duration",
      minutes: "minutes",
      avgDiff: "↓ 3 minutes compared to last week",
      viewDetails: "View detailed statistics",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
};
