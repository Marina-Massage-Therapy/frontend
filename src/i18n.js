import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            cv: "CV",
            about: "About Me",
            contact: "Contact",
            projects: "Projects",
            presentations: "Presentations",
            skills: "Skills",
          },

          pages: {
            projects: {
              title: "Projects",
            },
            about: {
              title: "About Me",
              p1: `Hi, I'm Olia krasinikov, a fullstack developer. I am enthusiastic about problem solving, writing efficient code, and constantly explore new tech to in order to deliver high quality results for my clients.`,
              p2: `Apart from coding, I find pleasure to play the piano, and working out outdoors. As a passionate coder I also undertake personal projects on a regular basis to hone my skills and learn about new technologies.`,
            },
            contact: {
              title: "Contact",
            },
            skills: {
              title: "Skills",
            },
            presentations: {
              title: "Presentations",
            },
          },
        },
      },
      he: {
        translation: {
          header: {
            cv: "קורות חיים",
            about: "אודות",
            contact: "צור קשר",
            projects: "פרוייקטים",
            skills: "טכנולוגיות",
          },

          pages: {
            projects: {
              title: "פרוייקטים",
            },
            about: {
              title: "אודות",
              p1: " שלום, שמי אוליה קרסילניקוב. אני מפתחת פולסטאק עם תשוקה לפתרון בעיות טכניות וכתיבת קוד יעיל. יש בעיני חשיבות רבה לספק תוצאות איכותיות ללקוחותי ולכן אני חוקרת טכנולוגיות חדשות באופן תדיר. ",
              p2: "בזמני הפנוי אני נהנית מנגינה בפסנתר ומאימוני ספורט. בתור מפתחת נלהבת אני עוסקת בין היתר גם בפרויקטים אישיים על מנת לחדד את היכולות הטכניות שלי.",
            },
            contact: {
              title: "צור קשר",
            },
            skills: {
              title: "טכנולוגיות",
            },
            presentations: {
              title: "פרזנטציות",
            },
          },
        },
      },
      ru: {
        translation: {
          header: {
            cv: "Резюме",
            about: "Обо мне",
            contact: "Контакты",
            projects: "Проекты",
            skills: "Технологии",
          },

          pages: {
            projects: {
              title: "Проекты",
            },
            about: {
              title: "Обо мне",
              p1: "Здравствуите, я Оля Красиникова, разработчик клиентской и серверной части. Я с энтузиазмом отношусь к решению проблем, написанию эффективного кода и постоянно изучаю новые технологии, чтобы предоставлять своим клиентам высококачественные результаты.",
              p2: "Помимо программирования, я получаю удовольствие от игры на пианино и тренировок на свежем воздухе. Будучи страстным программистом, я также регулярно занимаюсь личными проектами, чтобы оттачивать свои технические навыки и узнавать о новых технологиях.",
            },
            contact: {
              title: "Контакты",
            },
            skills: {
              title: "Технологии",
            },
            presentations: {
              title: "Презентации",
            },
          },
        },
      },
    },
  });

export default i18n;
