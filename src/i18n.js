import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "English",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      English: {
        translation: {
          cmps: {
            contactForm: {
              title: "Contact Me",
              name: "Name",
              email: "Email",
              telephone: "Telephone",
              message: "Message",
              submit: "SUBMIT",
              successMessage: "Message sent",
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
              read: "Read More",
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
              title: "About Me",
              subtitle: "Who am I?",
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
              title: "Massages",
              subtitle: "Take a Moment For Yourself",
              techniques: "My Techniques",
              hot_stone: {
                title: "Hot Stone Massage",
                desc: "A type of massage therapy that involves the use of smooth, heated stones.Hot stone massage is often used to alleviate muscle tension and pain, making it beneficial for individuals with conditions such as arthritis or muscle injuries.he combination of heat and massage can have a calming effect on the nervous system, helping to reduce stress and anxiety.The heat helps to improve joint flexibility and range of motion, making it easier to move and perform daily activities. Many individuals find that hot stone massage promotes better sleep and relaxation, leading to improved overall well-being.",
              },
              deep_tissue: {
                title: "Deep tissue massage",
                desc: "A therapeutic massage technique that focuses on reaching the deeper layers of muscles and connective tissues. This type of massage is designed to address chronic pain, muscle tension, and stiffness. Unlike relaxation massages that primarily target the superficial layers of muscles, deep tissue massage involves applying firm pressure and slow strokes to target specific areas of tension and discomfort. The firm pressure applied during deep tissue massage can improve blood circulation, ensuring that oxygen and nutrients reach the muscles more effectively. By stimulating blood flow and lymphatic drainage, deep-tissue massage can help remove toxins and waste products from the muscles, reducing soreness and fatigue.",
              },
              swedish_classic: {
                title: "Swedish classic massage",
                desc: "The Swedish massage is perhaps the best-known massage treatment in the world. A type of massage therapy that involves various techniques aimed at easing muscle tension and improving the joint range of motion. It involves the use of hands, forearms, or elbows to manipulate the superficial layers of the muscles to improve mental and physical health. One of the primary benefits of Swedish massage is relaxation. The long, gliding strokes, kneading, and circular motions used during the massage help to relax the muscles and promote overall relaxation of the body. By targeting specific muscle groups Swedish massage can help alleviate muscular tension and reduce pain, such as headaches, backaches, and joint stiffness.",
              },
              reflexology: {
                title: "Reflexology massage",
                desc: "Reflexology massage is known for its relaxing effects. The pressure applied to the reflex points stimulates nerve endings, promoting a sense of relaxation and reducing stress. Reflexology involves the stimulation of thousands of nerve endings in the feet. This stimulation is believed to have a positive impact on the central nervous system, influencing various bodily functions. This massage is known for its relaxing effects. The manipulation of the feet through kneading, rubbing, and gentle pressure helps to soothe tired muscles and promote overall relaxation. According to traditional Chinese medicine principles, by stimulating reflex points corresponding to energy pathways, reflexology massage can help restore energy balance and vitality.",
              },
              sport_massage: {
                title: "Sport massage",
                desc: "Sport massage is a specialized form of massage therapy primarily aimed at athletes and individuals engaged in regular physical activity. Its purpose is to enhance athletic performance, aid in recovery from intense training, and prevent or treat sports-related injuries. This type of massage increases blood circulation and lymphatic flow, which enhances the delivery of oxygen and nutrients to muscles and tissues. Improved circulation helps speed up the recovery process, reduces inflammation, and promotes tissue healing. After intense physical activity, sport massage can aid in the recovery process by promoting the removal of metabolic waste products such as lactic acid, reducing muscle soreness, and facilitating tissue repair. Regular sport massage can help prevent sports injuries by reducing muscle tension, increasing muscle flexibility, and correcting imbalances in muscle function. This proactive approach to injury prevention is essential for maintaining peak performance and minimizing downtime due to injuries.",
              },
            },
            testimonials: {
              title: "Testimonials",
              subtitle: "What My Clients Say",
            },
          },
        },
      },
      Hebrew: {
        translation: {
          cmps: {
            contactForm: {
              title: "צור קשר",
              name: "שם",
              email: "כתובת אימייל",
              telephone: "טלפון נייד",
              message: "הודעה",
              submit: "שלח הודעה",
              successMessage: "הודעה נשלחה",
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
              read: "קרא עוד",
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
              title: "אודותי",
              subtitle: "? מי אני",
              p1: `כבוגרת מיומנת של מכון וינגייט עם 13 שנות ניסיון בתחום עיסוי, אני מביאה הבנה עמוקה של טכניקות עיסוי מגוונות. שיטות הטיפול שלי נועדו להקל במיומנות על כאב כרוני, להציע הקלה לשרירים עייפים וכואבים לגרום למצב עמוק של הרפיה בגוף, ולטפח תחושת רוגע עמוקה במערכת העצבים. אני מחויבת להעניק חוויה טיפולית התורמת לרווחתם הכללית של לקוחותיי, בהסתמך על הידע הרב שלי ומחויבותי למצוינות בתחום הטיפול בעיסוי.`,
              p2: `במהלך העיסוי, אני פועלת לשיפור הרווחה הכללית שלך על ידי התייחסות להיבטים שונים של הגוף . בראש ובראשונה, עיסוי ממריץ זרימת דם טובה יותר. כאשר אני משתמשת בטכניקות שונות, כלי הדם מתרחבים, ומאפשרים ליותר חמצן וחומרי תזונה חיוניים להגיע לשרירים שלך. זרימת דם משופרת זו מסייעת להתאוששות וגמישות השרירים.`,
              p3: `כאשר אני אעבוד על שריריך, סביר להניח שתבחין בשחרור של המטח במהלך הטיפול. שחרור זה הכרחי להרפיית שרירים.  הגוף מגיב לעיסוי על ידי שחרור אנדרופינים, משפרי מצב הרוח הטבעיים ומשכחי כאבים. זו הסיבה שהלקוחות שלי חווים לא רק מתחושת הקלה פיסית אלה גם נפשית במהלך ולאחר הטיפול. `,
              p4: `לאלו מכם אשר מבלים שעות ארוכות בישביה או בעמידה, עוסקים בפעולות ספורטיביות מאומצות, אני ממליצה מאוד לכלול טיפול בעיסוי בשגרת יומיומכם.`,
            },
            massages: {
              title: "סוגי טיפולים",
              subtitle: "קחו רגע לעצמכם",
              techniques: "הטכניקות שליי",
              hot_stone: {
                title: "עיסוי אבנים חמות",
                desc: "העיסוי מתבצע באבנים חלקות ומחוממות. עיסוי זה משמש להקלה על מתח וכאבי שרירים, מה שהופך אותו למועיל במיוחד עבור אנשים הסובלים מדלקת פרקים או מפציעות בשרירים. השילוב של חום ועיסוי גורם להרגעה על מערכת העצבים ועוזר להפחית מתח וחרדה. החום עוזר לשפר את גמישות המפרק וטווחי התנועה, ומקל על התנועה וביצוע פעולות יומיומיות. אנשים רבים מגלים שעיסוי באבנים חמות מקדם שינה טובים יותר ותחושת רוגע, מה שמוביל לשיפור הרווחה הכללי.",
              },
              deep_tissue: {
                title: "עיסוי רקמות עמוק",
                desc: "טכניקת עיסוי טיפולית המתמקדת בהגעה לשכבות העמוקות יותר של השרירים ורקמות החיבור של הגוף. סוג זה של עיסוי נועד לתת מענה לכאבים כרוניים, ותחושת מתח בשרירים . בניגוד לעיסויי ריפיון ושחרור שרירים כללי אשר בעיקר מיועד לשכבות השטחיות של השרירים, עיסוי רקמות עמוק כולל הפעלת לחץ חזק ומשיכות איטיות על מנת להתמקד יותר באזורים ספציפיים של המתח והאי נוחות. הלחץ האיתן המופעל במהלך עיסוי רקמות עמוק יכול לשפר את זרימת הדם, ולהבטיח שחמצן וחומרי תזונה יגיעו לשרירים בצורה יעילה יותר. על ידי גירוי זרימת הדם וניקוז הלימפה, עיסוי רקמות עמוק יכול לעזור להסיר רעלים ומוצרי פסולת מהשרירים, להפחית כאב ועייפות.",
              },
              swedish_classic: {
                title: "עיסוי שוודי קלאסי",
                desc: "העיסוי השוודי הוא אולי טיפול העיסוי המוכר ביותר בעולם. העיסוי כולל טכניקות שונות שמטרתן להקל על מתח השרירים ולשפר את טווח התנועה של המפרקים. עיסוי שוודי קלאסי מתבצע תוך כדי שימוש בידיים, אמות או מרפקים וזאת על מנת לתמרן את השכבות השטחיות של השרירים במטרה להגברת כח השרירים והפחתת תחושת עייפות השרירים. אחד היתרונות העיקריים של עיסוי שוודי הוא שחרור.העיסוי עוזר להרפות את השרירים וגורם לתחושת שחרור הכללית של הגוף. על ידי מיקוד לקבוצות שרירים ספציפיות עיסוי שוודי יכול לעזור בהקלת מתח שרירים ולהפחית כאבים, כגון כאבי ראש, כאבי גב ונוקשות מפרקים.",
              },
              reflexology: {
                title: "עיסוי רפלקסולוגיה",
                desc: "רפלקסולוגיה או עיסוי בכפות ברגליים ידועה בהשפעותיה המרגיעות. הלחץ המופעל על נקודות הרפלקס מגרה את קצות העצבים, מקדם תחושת רגיעה ומפחית תחושת מתח בגוף. רפלקסולוגיה כוללת גירוי של אלפי קצות עצבים בכפות הרגליים ברגליים . לעיסוי זה יש השפעה חיובית על מערכת העצבים המרכזית, המשפיעה על תפקודי גוף שונים.עיסוי זה ידוע בהשפעותיו המרגיעות. עיסוי של כפות הרגליים באמצעות לישה, שפשוף והפעלת לחץ עדין עוזרים להרגיע שרירים עייפים ולגרום לתחושה של שחרור המטח הכללי. על פי עקרונות הרפואה הסינית המסורתית, עיסוי רפלקסולוגיה יכול לסייע בהעלאת האנרגיה החיונית.",
              },
              sport_massage: {
                title: "עיסוי ספורטאים",
                desc: "עיסוי ספורט הוא סוג מיוחד של טיפול עיסוי המכוון בעיקר לספורטאים ואנשים העוסקים בפעילות גופנית סדירה. מטרתו היא לשפר את הביצועים האתלטיים, לסייע בהתאוששות מאימון אינטנסיבי, ולמנוע או לטפל בפציעות הקשורות לספורט. סוג זה של עיסוי מגביר את זרימת הדם ואת זרימת הלימפה, מה שמשפר את אספקת החמצן וחומרי הזנה לשרירים ולרקמות. זרימת דם משופרת עוזרת להאיץ את תהליך ההחלמה, להפחית דלקת ולקדם ריפוי רקמות. לאחר פעילות גופנית אינטנסיבית, עיסוי ספורטיבי יכול לסייע בתהליך ההתאוששות על ידי פינוי של חומרי פסולת מטבוליים מהגוף כגון חומצה לקטית, הפחתת כאבי שרירים והקלה על תיקון רקמות. עיסוי ספורט קבוע מסייע במניעת פציעות ספורט על ידי הפחתת מתח השרירים, הגברת גמישות השרירים ותיקון חוסר איזון בתפקוד השרירים. ",
              },
            },
            testimonials: {
              title: "המלצות",
              subtitle: "מה הלקוחות שלי אומרים עלי",
            },
          },
        },
      },
      Russian: {
        translation: {
          cmps: {
            contactForm: {
              title: "Связаться со мной",
              name: "Имя",
              email: "Электронная почта",
              telephone: "Мобильный телефон",
              message: "Сообщение",
              submit: "ОТПРАВИТЬ",
              successMessage: "Сообщение отправлено",
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
              read: "Читать Далее",
            },
            newTestimonialCard: {
              hideForm: "СКРЫТЬ",
              newTestimonial: "НОВЫЙ ОТЗЫВ",
              fullname: "Полное Имя",
              message: "Ваш Отзыв",
              submit: "ОСТАВИТЬ ОТЗЫВ",
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
              title: "Обо Мне",
              subtitle: "Кто я?",
              p1: `Будучи дипломированным выпускником Института Вингейта с 13-летним опытом массажной практики, я обладаю глубоким пониманием различных техник массажа. Мои методы созданы для того, чтобы умело облегчить хроническую боль, облегчить усталость и боль в мышцах, вызвать состояние глубокого расслабления в теле и способствовать глубокому ощущению спокойствия в нервной системе. Я посвящаю себя предоставлению терапевтического опыта, который способствует общему благополучию моих клиентов, опираясь на свои обширные знания и стремление к совершенству в области массажной терапии.`,
              p2: `Во время сеанса массажа я работаю над улучшением вашего общего самочувствия, воздействуя на различные аспекты вашего тела. Прежде всего, массаж стимулирует лучшее кровообращение. Когда я использую различные техники, кровеносные сосуды расширяются, позволяя большему количеству кислорода и необходимых питательных веществ достичь мышц. Улучшение кровообращения способствует восстановлению мышц и повышению их гибкости.`,
              p3: `Когда я буду работать над вашими мышцами, вы, вероятно, заметите снижение напряжения. Это имеет решающее значение для уменьшения стеснения и содействия расслаблению. Тело реагирует на массаж выбросом эндорфинов, естественных усилителей настроения и обезболивающих. Именно поэтому мои клиенты испытывают не только физическое, но и психическое расслабление во время и после сеанса.`,
              p4: `Тем из вас, кто проводит долгие часы перед компьютером, занимается физическими тренировками или справляется с трудностями студенческой жизни, я настоятельно рекомендую включить массажную терапию в свой распорядок дня.`,
            },
            massages: {
              title: "Все массажи",
              subtitle: "Найдите минутку для себя",
              techniques: "Мои техники",
              hot_stone: {
                title: "Массаж горячими камнями",
                desc: "Вид массажной терапии, включающий использование гладких нагретых камней. Массаж горячими камнями часто используется для облегчения мышечного напряжения и боли, что делает его полезным для людей с такими заболеваниями, как артрит или мышечные травмы. Сочетание тепла и массажа может иметь успокаивающее действие на нервную систему, способствуя снижению стресса и беспокойства. Тепло помогает улучшить гибкость суставов и диапазон движений, облегчая передвижение и выполнение повседневных дел. Многие люди считают, что массаж горячими камнями способствует лучшему сну и расслаблению, что приводит к улучшению общего самочувствия.",
              },
              deep_tissue: {
                title: "Глубокий массаж тканей",
                desc: "Техника терапевтического массажа, направленная на воздействие на более глубокие слои мышц и соединительных тканей. Этот вид массажа предназначен для устранения хронической боли, мышечного напряжения и скованности. В отличие от расслабляющего массажа, который в первую очередь нацелен на поверхностные слои мышц, массаж глубоких тканей включает в себя сильное давление и медленные поглаживания для воздействия на определенные области напряжения и дискомфорта. Сильное давление, оказываемое во время глубокого массажа тканей, может улучшить кровообращение, обеспечивая более эффективное поступление кислорода и питательных веществ в мышцы. Стимулируя кровоток и лимфодренаж, глубокий массаж тканей помогает удалить токсины и продукты жизнедеятельности из мышц, уменьшая болезненность и усталость.",
              },
              swedish_classic: {
                title: "Шведский классический массаж",
                desc: "Шведский массаж, пожалуй, самая известная массажная процедура в мире. Вид массажной терапии, включающий в себя различные приемы, направленные на ослабление мышечного напряжения и улучшение объема движений суставов. Он предполагает использование рук, предплечий или локтей для манипулирования поверхностными слоями мышц с целью улучшения психического и физического здоровья.",
              },
              reflexology: {
                title: "Массаж ног",
                desc: "Массаж ног известен своим расслабляющим эффектом. Давление на рефлекторные точки стимулирует нервные окончания, вызывая чувство расслабления и снижая стресс. Рефлексология предполагает стимуляцию тысяч нервных окончаний стоп. Считается, что эта стимуляция оказывает положительное влияние на центральную нервную систему, влияя на различные функции организма. Массаж стоп посредством разминания, растирания и легкого давления помогает успокоить уставшие мышцы и способствует общему расслаблению. Согласно принципам традиционной китайской медицины, стимулируя рефлекторные точки, соответствующие энергетическим путям, рефлексологический массаж может помочь восстановить энергетический баланс и жизненные силы.",
              },
              sport_massage: {
                title: "Спортивный массаж",
                desc: "Cпециализированная форма массажной терапии, предназначенная в первую очередь для спортсменов и людей, регулярно занимающихся физической активностью. Его цель улучшить спортивные результаты, помочь в восстановлении после интенсивных тренировок, а также предотвратить или лечить травмы, связанные со спортом. После интенсивной физической активности спортивный массаж может помочь в процессе восстановления, способствуя выведению продуктов метаболизма, таких как молочная кислота, уменьшая болезненность мышц и способствуя восстановлению тканей. Регулярный спортивный массаж может помочь предотвратить спортивные травмы, уменьшая мышечное напряжение, увеличивая мышечную гибкость и исправляя дисбаланс в мышечных функциях.",
              },
            },
            testimonials: {
              title: "Отзывы",
              subtitle: "Что говорят мои клиенты",
            },
          },
        },
      },
    },
  });

export default i18n;
