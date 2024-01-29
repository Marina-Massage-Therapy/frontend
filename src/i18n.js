import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "he",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          cmps: {
            contactForm: {
              title: "Contact Me",
              name: "Name",
              email: "Email",
              telephone: "Telephone",
              message: "Message",
              submit: "SUBMIT",
            },
            header: {
              home: "HOME",
              about: "ABOUT",
              massages: "MASSAGES",
              testimonials: "TESTIMONIALS",
            },
            homeTopSection: {
              title: "Marina Massage Therapist",
              subtitle:
                "Your well-being is my focus, and your journey to balance and tension relese begins now.",
            },
            newTestimonialCard: {
              hideForm: "HIDE FORM",
              newTestimonial: "NEW TESTIMONIAL",
              fullname: "Full Name",
              message: "Message",
              submit: "SUBMIT TESTIMONIAL",
            },
            welcome: {
              welcomeTitle: "Welcome",
              words: "A Few Words About Me",
              p1: `Welcome to a world of healing and relaxation! With 13 years of
              dedicated practice, I'm a massage therapist who is passionate about
              enhancing your well-being. My expertise lies in a diverse range of
              massage modalities, including Shiatsu, classic Swedish massage, hot
              stones therapy, deep tissue, and sport massage.`,
              p2: `Over the years, I have honed my skills to provide a personalized and
              therapeutic experience tailored to your unique needs. Whether you seek
              tension relief, muscle pain release, or a moment of pure relaxation,
              each session is a journey designed to promote physical and mental
              harmony.`,
              read: "Read More",
            },
          },

          pages: {
            about: {
              title: "Who am I?",
              p1: `As an accomplished graduate of Wingate Institute with 13 years
              of experience in massage practice, I bring a profound
              understanding of diverse massage techniques. My treatment
              methods are designed to skillfully alleviate chronic pain, offer
              relief to tired and aching muscles, induce a deep state of
              relaxation in the body, and foster a profound sense of calm in
              the nervous system. I am dedicated to providing therapeutic
              experiences that contribute to the overall well-being of my
              clients, drawing upon my extensive knowledge and commitment to
              excellence in the field of massage therapy.`,
              p2: `During a massage session, I work to enhance your overall
              well-being by addressing various aspects of your body. First and
              foremost, massage stimulates better blood circulation. As I use
              different techniques, the blood vessels dilate, allowing more
              oxygen and essential nutrients to reach your muscles. This
              improved circulation aids in muscle recovery and flexibility.`,
              p3: `As I work on your muscles, you'll likely notice a release of
              tension. This is crucial for reducing tightness and promoting
              relaxation. The body responds to massage by releasing
              endorphins, your natural mood enhancers and pain relievers. This
              is why my clients experience not just physical but also mental
              relaxation during and after a session.`,
              p4: `For those of you spending long hours in front of computers,
              engaging in demanding physical activities, or managing the
              challenges of student life, I highly recommend incorporating
              massage therapy into your routine.`,
            },
            massages: {
              title: "Massages are",
            },
            testimonials: {
              title: "What My Clients Say",
            },
          },
        },
      },
      he: {
        translation: {
          cmps: {
            contactForm: {
              title: "צור קשר",
              name: "שם",
              email: "כתובת אימייל",
              telephone: "טלפון נייד",
              message: "הודעה",
              submit: "שלח הודעה",
            },
            header: {
              home: "ראשי",
              about: "אודות",
              massages: "סוגי טיפולים",
              testimonials: "המלצות",
            },
            homeTopSection: {
              title: "מרינה מעסה מקצועית",
              subtitle:
                "הרווחה שלך היא המיקוד שלי, והמסע שלך לאיזון ולשחרור מתח מתחיל כאן",
            },
            newTestimonialCard: {
              hideForm: "הסתר",
              newTestimonial: "כתוב המלצה",
              fullname: "שם מלא",
              message: "המלצה",
              submit: "שלח המלצה",
            },
            welcome: {
              welcomeTitle: "ברוכים הבאים",
              words: "כמה מילים אודותי",
              p1: "ברוכים הבאים לעולם של ריפוי והרגיעה! אני מעסה מקצועית בוגרת מכון וינגייט עם 13 שנות נסיון במגוון טיפולים כגון שיאטסו, עיסוי שוודי קלאסי, טיפול באבנים חמות,רקמות עמוק ועיסוי ספורטאים ",
              p2: "במהלך השנים, שיפרתי את כישוריי להעניק חוויה אישית וטיפולית המותאמת לצרכיך הייחודיים. בין אם אתם מחפשים הקלה במתח, שחרור מכאבי שרירים או רגע של רגיעה טהורה, כל מפגש הוא מסע שנועד לקדם הרמוניה פיזית ונפשית.",
              read: "קרא עוד",
            },
          },

          pages: {
            about: {
              title: "? מי אני",
              p1: `כבוגרת מיומנת של מכון וינגייט עם 13 שנות ניסיון בתחום עיסוי, אני מביא הבנה עמוקה של טכניקות עיסוי מגוונות. שיטות הטיפול שלי נועדו להקל במיומנות על כאב כרוני, להציע הקלה לשרירים עייפים וכואבים לגרום למצב עמוק של הרפיה בגוף, ולטפח תחושת רוגע עמוקה במערכת העצבים. אני מחויבת להעניק חוויה טיפולית התורמת לרווחתם הכללית של לקוחותיי, בהסתמך על הידע הרב שלי ומחויבותי למצוינות בתחום הטיפול בעיסוי.`,
              p2: `במהלך העיסוי, אני פועלת לשיפור הרווחה הכללית שלך על ידי התייחסות להיבטים שונים של הגוף . בראש ובראשונה, עיסוי ממריץ זרימת דם טובה יותר. כאשר אני משתמשת בטכניקות שונות, כלי הדם מתרחבים, ומאפשרים ליותר חמצן וחומרי תזונה חיוניים להגיע לשרירים שלך. זרימת דם משופרת זו מסייעת להתאוששות וגמישות השרירים.`,
              p3: `כאשר אני אעבוד על שריריך, סביר להניח שתבחין בשחרור של המטח במהלך הטיפול. שחרור זה הכרחי להרפיית שרירים.  הגוף מגיב לעיסוי על ידי שחרור אנדרופינים, משפרי מצב הרוח הטבעיים ומשכחי כאבים. זו הסיבה שהלקוחות שלי חווים לא רק מתחושת הקלה פיסית אלה גם נפשית במהלך ולאחר הטיפול. `,
              p4: `לאלו מכם אשר מבלים שעות ארוכות בישביה או בעמידה, עוסקים בפעולות ספורטיביות מאומצות, אני ממליצה מאוד לכלול טיפול בעיסוי בשגרת יומיומכם.`,
            },
            massages: {
              title: "סוגי טיפולים",
            },
            testimonials: {
              title: "מה הלקוחות שלי אומרים עלי",
            },
          },
        },
      },
      ru: {
        translation: {
          cmps: {
            contactForm: {
              title: "Связаться со мной",
              name: "Имя",
              email: "Электронная почта",
              telephone: "Мобильный телефон",
              message: "Сообщение",
              submit: "ОТПРАВИТЬ",
            },
            header: {
              home: "ГЛАВНАЯ",
              about: "ОБО МНЕ",
              massages: "ВИДЫ МАССАЖА",
              testimonials: "ОТЗЫВЫ",
            },
            homeTopSection: {
              title: "Марина Профессиональный Массажист",
              subtitle:
                "Ваше благосостояние - центр моего внимания, и ваш путь к балансу и снятию напряжения начинается прямо сейчас.",
            },
            newTestimonialCard: {
              hideForm: "HIDE FORM",
              newTestimonial: "NEW TESTIMONIAL",
              fullname: "Full Name",
              message: "Message",
              submit: "SUBMIT TESTIMONIAL",
            },
            welcome: {
              welcomeTitle: "Добро пожаловать",
              words: "Несколько слов обо мне",
              p1: `Добро пожаловать в мир восстановления и релаксации! Имея 13 лет самоотверженной практики, я массажист, желающий улучшить ваше самочувствие и повысить ваше качество жизни. Мой опыт заключается в различных видах массажа, включая шиацу, классический шведский массаж, терапию горячими камнями, глубокие ткани и спортивный массаж.`,
              p2: `На протяжении многих лет я оттачивала свои навыки, чтобы обеспечить индивидуальный терапевтический опыт, адаптированный к вашим уникальным потребностям. Независимо от того, ищете ли вы снятия напряжения, облегчения мышечной боли или момента полного расслабления, каждый сеанс — это путешествие, направленное на достижение физической и психической гармонии.`,
              read: "Подробнее",
            },
          },

          pages: {
            about: {
              title: "Кто я?",
              p1: `Будучи дипломированным выпускником Института Вингейта с 13-летним опытом массажной практики, я обладаю глубоким пониманием различных техник массажа. Мои методы созданы для того, чтобы умело облегчить хроническую боль, облегчить усталость и боль в мышцах, вызвать состояние глубокого расслабления в теле и способствовать глубокому ощущению спокойствия в нервной системе. Я посвящаю себя предоставлению терапевтического опыта, который способствует общему благополучию моих клиентов, опираясь на свои обширные знания и стремление к совершенству в области массажной терапии.`,
              p2: `Во время сеанса массажа я работаю над улучшением вашего общего самочувствия, воздействуя на различные аспекты вашего тела. Прежде всего, массаж стимулирует лучшее кровообращение. Когда я использую различные техники, кровеносные сосуды расширяются, позволяя большему количеству кислорода и необходимых питательных веществ достичь мышц. Улучшение кровообращения способствует восстановлению мышц и повышению их гибкости.`,
              p3: `Когда я буду работать над вашими мышцами, вы, вероятно, заметите снижение напряжения. Это имеет решающее значение для уменьшения стеснения и содействия расслаблению. Тело реагирует на массаж выбросом эндорфинов, естественных усилителей настроения и обезболивающих. Именно поэтому мои клиенты испытывают не только физическое, но и психическое расслабление во время и после сеанса.`,
              p4: `Тем из вас, кто проводит долгие часы перед компьютером, занимается физическими тренировками или справляется с трудностями студенческой жизни, я настоятельно рекомендую включить массажную терапию в свой распорядок дня.`,
            },
            massages: {
              title: "Все массажи",
            },
            testimonials: {
              title: "Что говорят мои клиенты",
            },
          },
        },
      },
    },
  });

export default i18n;
