import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            "contact": "Contact me",

            "languages": "Languages",
            "projects": "Projects",
            "gotoButton": "Go to project",
            "gotoCourse": "Go to course",
            "sourceCode": "source code",
            "certs": "Courses & Certificates",

            "logo": "PedramJalali",
            "welcome": "Welcome to my personal website. I’m <span class='underline decoration-custom-blue underline-offset-1 '>Pedram Jalali</span>",
            "description": "Back-end developer. 24 years old, based in Kerman, Iran. Interested in developing up-to-date and secure web applications. Experienced in working with various robust modern frameworks and technologies. Always looking forward to learning new technologies and improving my skills. Ready to collaborate on challenging and innovative projects.",
            
            "primarySkills": "Primary skills",
            "python": 'Python',
            "python-exp": '3 years of experience',
            "django": 'Django',
            "django-exp": '2 years of experience',
            "sql": 'SQL',
            'sql-exp': '1 year of experience',
            "javascript": "Javascript",
            "javascript-exp": "1 year of experience",
            "react": "React JS",
            "react-exp": "less than a year of experience",

            "csharp-exp": "Familiar with the syntax and fundamental concepts",
            "linux-exp": "over a year of exper.",
            
            "english": "English",
            "english-exp": "proficient, C1/fluent",
            "deutsch": "German",
            "deutsch-exp":"B1 Goethe inst. certification",
            "farsi": "Persian",
            "farsi-exp": "native speaker",

            "daeiAli": "Digital Restaurant Menu",
            "daeiAliingreds": "Static SPA, HTML/CSS, ReactJS, Javascript, Bootstrap",
            "daeiAliDelivery": "Delivery date: 06/2024",
            "daeiAliExplain": "Digital menu (QR code-scanned) of Daei Ali Restaurant, Kerman, Iran.",

            "blogApp": "Blog Application",
            "blogAppingreds": "Python3, Django, Rest Framework, RestAPI Views, Serializers, MySQL",

            
            "todoAppExplain": "A to-do list application with authentication capabilities, task creation, and editing features such as pinning, setting due dates, adding and deleting user accounts and tasks, and receiving notifications before task deadlines.",
            
            "portfolio": "My Portfolio (This webiste)",
            "portfolio-ingreds": "React Js, Tailwind, I18n",
            

            "pythonCertExplain": "Advanced Python Programming and Object-Oriented Thinking Course",
            "djangoCertExplain": "Professional Project-Oriented Course in Backend Development with Django",
            "SQLCertExplain": "Task-Oriented course in SQL",
            "deisgnPCertExplain": "Task-Oriented Course in Design Patterns",


        }
      },

      fa: {
        translation: {
            "telegramId": "pedramioi",

            "ok": "ok",
            "languages": "زبان ها",
            "projects": "پروژه ها",
            "gotoButton": "برو به پروژه",
            "gotoCourse": "برو به دوره",
            "sourceCode": "سورس کد",
            "contact": "ارتباط با من",


            "logo": "پدرام جلالی",
             "welcome": "به وبسایت شخصی من خوش آمدید! من  <span class='underline decoration-custom-blue underline-offset-2 '> پدرام جلالی</span> هستم.",
             "description": "توسعه دهنده سمت سرور. ۲۴ ساله ساکن شهرستان کرمان. علاقه مند به توسعه وب اپلیکیشن های به روز و امن. دارای تجربه در کار با فریم‌ورک‌های مختلف و زبان‌های برنامه‌نویسی متنوع. همیشه به دنبال یادگیری تکنولوژی‌های جدید و بهبود مهارت‌های خود هستم. آماده همکاری در پروژه‌های چالش‌برانگیز و جدید و کارهای تیمی.",
             "certs": "دوره ها و مدارک",
             
             "primarySkills": "مهارت های اصلی",
              "python": 'پایتون',
              "python-exp": '۳ سال سابقه',
              "django": 'جنگو',
              "django-exp": '۲ سال سابقه',
              "sql": 'SQL',
              "sql-exp": '۱ سال سابقه',
              "react": 'React JS',
              "react-exp": 'کمتر از یک سال سابقه',
              "javascript": "جاوا اسکریپت",
              "javascript-exp": "۱ سال سابقه",
              "html-exp": "۲ سال سابقه",
              "bootstrap": "Bootstrap",
              "linux": "Linux",
              "linux-exp": "بیشتر از یک سال سابقه",
              "tailwind": "Tailwind",
              "csharp": "<span dir='ltr'>C#</span>",
              "htmlcss": 'HTML/CSS',
              "mysql": "MySQL",

              
              "csharp-exp": "آشنا با سینتکس و اصول اساسی  ",
              

              "farsi": "فارسی",
              "farsi-exp": "زبان مادری",
              "english": "انگلیسی",
              "english-exp": "تسلط کامل C1",
              "deutsch": "آلمانی",
              "deutsch-exp": "دارای مدرک B1 موسسه گوته",

              "daeiAli": 'منوی دیجیتال رستوران',
              "daeiAliingreds": "منوی آنلاین، استاتیک، HTML/CSS، React JS, Bootstrap",
              "daeiAliDelivery": "تحویل پروژه: ۱۴۰۳/۰۳",
              "daeiAliExplain": "منوی دیجیتال (QR code-scanned) رستوران دایی علی کرمان، شهرک باهنر، روبروی پارک نظام مهندسی",
              "daeiAliSource": "www.daei-fastfood-ali.ir",

              "blogAppingreds": "Python3, Django, Rest Framework, RestAPI Views, Serializers, MySQL",
              "blogAppExplain": "CRUD app, RestFUL API views, rest framework, Django, user authentication & registration, upvote/downvote posts, users allowed to create post only when the Author role is granted.",
              "blogAppSource": "github.com/pedramjlo/alketas_blog.git",

              "todoApp": "To-do list Application",
              "todoAppingreds": "Python, Django, template system(HTML+CSS+Javascript), MySQL, Bootstrap",
              "todoAppExplain": "اپلیکیشن لیست کارها، با قابلیت احراز هویت و ساخت کار ها و ویرایش قابلیت های کار ها از جمله پین کردن، تعیین تاریخ انجام، اضافه و حذف حساب کاربری و کار ها, و دریافت نوتیفیکیشن قبل از اتمام مهلت انجام کارها...",
              "todoAppSource": "github.com/pedramjlo/todo_list.git",

              "portfolio": "My Portfolio (This website)",
              "portfolio-ingreds": "React Js, Tailwind, I18n",
              "portfolioSourxe": "github.com/pedramjlo/todo_list.git",

              

              "pythonCertExplain": "برنامه نویسی پیشرفته پایتون",
              "djangoCertExplain": "جامپ بک اند با جنگو",
              "SQLCertExplain": "آموزش عملی دیتابیس",
              "deisgnPCertExplain": "آموزش عملی دیزاین پترن ها",


              "pythonCourseSource": "https://quera.org/college/landpage/3078/python",
              "djangoCourseSource": "https://quera.org/college/landpage/6091/django",
              "sqlCourseSource": "https://quera.org/college/landpage/8939/database",
              "dpCourseSource": "https://quera.org/college/landpage/15166/design-patterns",
              
        }
      },
      
      de: {
        translation: {

            "contact": "Kontaktieren Sie mich",

            "languages": "Sprache",
            "projects": "Projekte",
            "gotoButton": "Zum Projekt",
            "gotoCourse": "Zum Kurs",
            "sourceCode": "Quellcode",
            "certs": "Kurse & Zertifikate",

            "logo": "PedramJalali",
            "welcome": "Willkommen auf meiner persönlichen Website. Ich heiße <span class='underline decoration-custom-blue underline-offset-2 '>PedramJalali</span>.",
            "description": "Serverseitiger Entwickler. 24 Jahre alt, wohnhaft in Kerman, Iran. Interessiert an der Entwicklung aktueller und sicherer Webanwendungen. Erfahren im Umgang mit verschiedenen Frameworks und Programmiersprachen. Immer bestrebt, neue Technologien zu erlernen und meine Fähigkeiten zu verbessern. Bereit zur Zusammenarbeit an herausfordernden und innovativen Projekten.",
            
            "primarySkills": "Hauptfähigkeiten",
            "python": 'Python',
            "python-exp": '3 Jahre Erfahrung',
            "django": 'Django',
            "django-exp": '2 Jahre Erfahrung',
            "sql": 'SQL',
            "sql-exp": '1 Jahr Erfahrung',
            "javascript": "Javascript",
            "javascript-exp": "1 Jahr Erfahrung",
            "react": "React JS",
            "react-exp": "weniger als ein Jahr",
            "html-exp": '2 Jahre Erfahrung',
            "csharp-exp": "Vertraut mit der Syntax und grundlegenden Konzepten wie LINQ und Ähnlichem",
            "linux-exp": "über ein Jahr Erfahrung",

            "english": "Englisch",
            "english-exp": "Fortgeschritten C1/flieẞend",
            "deutsch": "Deutsch",
            "deutsch-exp":"B1 Goethe inst. Zertifikat",
            "farsi": "Persisch",
            "farsi-exp": "Muttersprachler",

            "daeiAli": 'Digitalische Restaurantkart',
            "daeiAlingreds": "Static SPA, HTML/CSS, React JS, Javascript, Bootstrap",
            "daeiAliDelivery": "Liefertermin: 06/2024",
            "daeiAliExplain": "Digitale Speisekarte (QR-Code gescannt) des Daei Ali Restaurants, Kerman, Iran.",

            "blogApp": "Blog application",
            "blogAppingreds": "Python3, Django, Rest Framework, RestAPI Views, Serializers, MySQL",

            "todoApp": "To-Do-Liste Anwendung",
            "todoAppExplain": "Eine To-Do-Listen-Anwendung mit Authentifizierungsfunktionen, Aufgaben-Erstellung und Bearbeitungsfunktionen wie Anheften, Festlegen von Fälligkeitsdaten, Hinzufügen und Löschen von Benutzerkonten und Aufgaben sowie dem Erhalt von Benachrichtigungen vor Ablauf der Aufgabenfristen.",

            "portfolio": "My Portfolio (This webiste)",
            "portfolio-ingreds": "React Js, Tailwind, I18n",

            "pythonCertExplain": "Fortgeschrittener Python-Programmierung und objektorientiertes Denken Kurs",
            "djangoCertExplain": "Berufsorientierter, projektbezogener Kurs in Backend-Entwicklung mit Django",
            "SQLCertExplain": "Aufgabenorientierter Kurs in SQL",
            "deisgnPCertExplain": "Aufgabenorientierter Kurs in Design Patterns",

            "pythonCertExplain": "Fortgeschrittener Python-Programmierung und objektorientiertes Denken Kurs",
            "djangoCertExplain": "Berufsorientierter, projektbezogener Kurs in Backend-Entwicklung mit Django",
            "SQLCertExplain": "Aufgabenorientierter Kurs in SQL",
            "deisgnPCertExplain": "Aufgabenorientierter Kurs in Design Patterns",
        }
      }
    },

    fallbackLng: "fa",
    lng: "fa",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;