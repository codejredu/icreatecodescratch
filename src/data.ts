import { BookOpen, Cpu, Wrench, Settings, Search, AlertTriangle, FileText, CheckCircle, Package, Zap } from 'lucide-react';

export type Chapter = {
  id: string;
  title: string;
  icon?: any;
  content: string;
};

export type Section = {
  id: string;
  title: string;
  chapters: Chapter[];
};

const getImgPlaceholder = (name: string, desc: string) => 
  `\n\n> *כדי להציג כאן את התמונה, אנא העלו את התמונה של ${desc} בשם \`${name}\` לתיקיית \`public\` במערכת הקבצים שבעורך.*\n\n![${desc}](/${name})\n\n`;

export const sections: Section[] = [
  {
    id: "intro",
    title: "1. מבוא (Introduction)",
    chapters: [
      { 
        id: "intro-main", 
        title: "1.1 ערכת קידוד למיקרוביט", 
        icon: BookOpen,
        content: `# 1.1 ערכת קידוד ל-BBC micro:bit\n\n![Coding Kit for BBC micro:bit](/1_Page7_Image1.jpg)\n\nערכת הקידוד ל-BBC micro:bit מבוססת על לוח הבקרה הראשי של micro:bit וכוללת חיישנים, מפעילים (Actuators) ואביזרים נוספים. הערכה תוכננה בקפידה כדי להשתלב בצורה מושלמת עם חלקי LEGO, מה שהופך אותה לאידיאלית עבור תלמידים ליצירת פרויקטים טכנולוגיים ויצירתיים מבוססי מיקרוביט. מסמך זה מתמקד בלוח הבקרה הראשי, החיישנים, המפעילים והרחבות התוכנה הקשורות אליהם.` 
      },
      { 
        id: "intro-parts", 
        title: "1.2 רשימת חלקים", 
        icon: Package,
        content: `# 1.2 רשימת חלקים

| | | | |
|:---:|:---:|:---:|:---:|
| ![Microbit Hub](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image1.jpg) | ![Servo Motor](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image2.jpg) | ![DC Motor](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image3.jpg) | ![Geek Servo](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image4.jpg) |
| micro:bit Smart Hub | Servo Motor | DC Motor | Geek Servo |
| ![Potentiometer](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image5.jpg) | ![Joystick](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image6.jpg) | ![RGB LED](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image7.jpg) | ![Fan](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image8.jpg) |
| Potentiometer Module | Joystick Module | RGB LED Module | Fan Module |
| ![Recording](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image9.jpg) | ![OLED](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image10.jpg) | ![Laser](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image11.jpg) | ![Electromagnet](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image12.jpg) |
| Recording Module | OLED Module | Laser Module | Electromagnet Module |
| ![Red LED](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image13.jpg) | ![Yellow LED](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image14.jpg) | ![Blue LED](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image15.jpg) | ![Green LED](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image16.jpg) |
| Red LED Module | Yellow LED Module | Blue LED Module | Green LED Module |
| ![Ultrasonic](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image17.jpg) | ![Gas](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image18.jpg) | ![PIR](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image19.jpg) | ![Temperature](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image20.jpg) |
| Ultrasonic Sensor | MQ-2 Gas Sensor | PIR Sensor | Temperature Sensor |
| ![Flame](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image21.jpg) | ![Hall](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image22.jpg) | ![Grayscale](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image23.jpg) | ![Photosensitive](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image24.jpg) |
| Flame Sensor | Hall Sensor | Grayscale Sensor | Photosensitive Sensor |
| ![Button](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image25.jpg) | ![Soil Moisture](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image26.jpg) | ![Water Level](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image27.jpg) | ![Long-Range Photoelectric](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image28.jpg) |
| Button Sensor | Soil Moisture Sensor | Water Level Sensor | Long-Range Photoelectric Sensor |
| ![Six way Color](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image29.jpg) | | ![Grove Cable](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image30.jpg) | ![Grove Male-to-Female Cable](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/1_Page9_Image31.jpg) |
| Six way Color&Gray Sensor | | Grove Cable | Grove Male-to-Female Cable |

> התמונות מציגות את המודולים והחיישנים הכלולים בערכה.
> 
> אנא התייחסו למוצר בפועל עבור התמונות המדויקות.

# 1.3 רשימת הרכיבים האלקטרוניים בערכה

| פריט | AI Coding Set | AI Super Set | Smart Home Set | Base Set |
|:---|:---:|:---:|:---:|:---:|
| micro:bit Smart Hub | 1 | 1 | 1 | 1 |
| Servo Motor | — | 2 | — | — |
| DC Motor | 4 | — | 4 | — |
| Geek Servo | 2 | 2 | 2 | — |
| Potentiometer Module | 1 | 1 | 1 | — |
| Joystick Module | — | 1 | — | 1 |
| RGB LED Ring Module | 1 | 1 | — | — |
| Fan Module | 1 | 1 | — | — |
| Recording Module | — | 1 | — | — |
| OLED Module | 1 | 1 | 1 | — |
| Laser Module | 1 | 1 | 1 | — |
| Electromagnet Module | 1 | 1 | — | — |
| Red LED Module | 1 | 1 | 1 | — |
| Yellow LED Module | 1 | 1 | 1 | — |
| Blue LED Module | 1 | 1 | 1 | — |
| Green LED Module | 1 | 1 | 1 | — |
| Ultrasonic Sensor | 1 | 1 | 1 | — |
| MQ-2 Gas Sensor | 1 | 1 | — | — |
| PIR Sensor | — | 1 | — | — |
| Temperature Sensor | 1 | 1 | — | — |
| Flame Sensor | 1 | 1 | — | — |
| Hall Sensor | 1 | 1 | 1 | — |
| Grayscale Sensor | 2 | 2 | 2 | — |
| Photosensitive Sensor | 1 | 1 | — | — |
| Button Sensor | 1 | 1 | 1 | 3 |
| Soil Humidity Sensor | 1 | 1 | — | — |
| Water Level Sensor | 1 | 1 | — | — |
| Long-range Photoelectric Sensor | 1 | 1 | — | — |
| Grove Cable | 10 | 10 | 10 | 10 |
| Grove Male-to-Female Cable | 10 | 10 | 10 | — |`
      }
    ]
  },
  {
    id: "getting-started",
    title: "2. התחלה מהירה",
    chapters: [
      { 
        id: "quick-start", 
        title: "2. התחלה מהירה", 
        icon: Wrench,
        content: `# 2. התחלה מהירה\n\n### השגת התוכנה\n\nניתן להשתמש בתוכנת התכנות בשתי דרכים: באופן מקוון דרך פלטפורמת הענן [MakeCode](https://makecode.microbit.org/#editor), או על ידי הורדה והתקנה של [התוכנה המקומית](https://makecode.microbit.org/offline-app). במדריך זה, נשתמש בפלטפורמת התכנות המקוונת.\n\nהיכנסו לפלטפורמת התכנות המקוונת של MakeCode, שם תראו את הממשק הראשי כפי שמוצג למטה.\n\n![MakeCode Interface](/1_Page11_Image1.jpg)\n\n### השגת ההרחבה\n\nלפלטפורמת הקידוד MakeCode יש הרחבה ייעודית עבור הרכזת החכמה micro:bit Smart Hub. ניתן להוסיף הרחבה זו לגרסאות המקוונות והמקומיות של הפלטפורמה.\n\n### הוספת ההרחבה\n\nבצעו את השלבים הבאים כדי להוסיף את ההרחבה לפלטפורמת MakeCode:\n\n**שלב 1:**\n![Step 1](/1_Page11_Image2.jpg)\n\n**שלב 2:**\n![Step 2](/1_Page11_Image3.jpg)\n\n**שלב 3:**\n![Step 3](/1_Page11_Image4.jpg)\n\n**שלב 4:**\n![Step 4](/1_Page11_Image5.jpg)\n\n**שלב 5:**\n![Step 5](/1_Page11_Image6.jpg)\n\nהתהליך הכללי להוספת הרחבה הוא כדלקמן:\n![Process](/1_Page11_Image7.jpg)\n\nלאחר השלמת שלבים אלו, ההרחבה תתווסף בהצלחה.\n\n### התחלת קידוד\n\nכעת, בואו נכתוב תוכנית דוגמה בפלטפורמת התכנות.\n\n![Start Coding](/1_Page11_Image8.jpg)\n\nתוכנית זו תאפשר למאוורר ולנורית ה-LED האדומה להידלק כאשר הכפתור נלחץ, ולהיכבות כאשר הכפתור משוחרר.\n\nתהליך הקידוד הוא כדלקמן:\n![Coding process](/1_Page12_Image1.jpg)\n\n## הורדת תוכנית\n\nכעת ניתן לחבר את הרכזת למחשב ולהוריד את התוכנית.\n\n**שלב 1:** השתמשו בכבל microUSB כדי לחבר את הרכזת למחשב שלכם.\n\n![Connect microUSB](/1_Page13_Image1.jpg)\n\n**שלב 2:** חברו את המכשיר לפלטפורמת הקידוד והורידו את התוכנית.\n\n![Download program](/1_Page13_Image2.jpg)\n\n**הערות:**\n\nלפעמים, עקב חיבור USB לא יציב, ההורדה עלולה להיכשל. כפי שמוצג למטה, הצד השמאלי מראה הורדה מוצלחת, בעוד הצד הימני מראה הורדה שנכשלה. במקרה שההורדה נכשלת, התוכנית תישמר כקובץ \`.hex\` במחשב שלכם. במקרה כזה, נתקו וחיברו מחדש את כבל ה-USB בין המחשב לרכזת, וחזרו על שלב 2.\n\n| ![Successful Download](/1_Page14_Image1.jpg) | ![Failed Download](/1_Page14_Image2.jpg) |\n|:---:|:---:|\n| **הורדה מוצלחת:** כאשר מופיעה ההודעה "Downloaded". | **הורדה נכשלה:** כאשר מופיעה ההודעה "Download Complete", והקובץ נשמר במחשב שלכם דרך הדפדפן. |\n\n## הרצת התוכנית\n\n![Run the program](/1_Page15_Image1.jpg)` 
      }
    ]
  },
  {
    id: "features",
    title: "3. סקירת תכונות (Feature Overview)",
    chapters: [
      { 
        id: "feat-hub", 
        title: "3.1 סקירת הרכזת החכמה (Smart Hub)", 
        icon: Cpu, 
        content: `# 3.1 סקירת הרכזת החכמה micro:bit Smart Hub

## הקדמה (Introduction)

![Hub](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01hub.png)

הרכזת החכמה **micro:bit Smart Hub** היא התקן הרחבה רב-תכליתי המיועד ללוח הפיתוח micro:bit, המציע מגוון רחב של ממשקים ותאימות גבוהה. היא כוללת 6 יציאות חיישני I/O סטנדרטיות, 4 יציאות I²C, 4 יציאות למנועי DC ו-4 יציאות למנועי סרוו, כולן בתקן הקוד הפתוח של Grove. הרכזת מתחברת ישירות ללוח ה-micro:bit ותואמת לרוב חומרת Grove. היא משתלבת בצורה חלקה עם קוביות LEGO, מה שמאפשר לתלמידים ליצור פרויקטים חדשניים בתחום ה-STEM עם טכנולוגיית micro:bit.

## מבנה (Structure)

![Schematic Drawing](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02hub.png)

תרשים סכמטי

| מס' | פריט | תיאור |
|:---:|:---|:---|
| ① | כפתור הפעלה (Power Button) | לחצו לחיצה ממושכת למשך 1.5 שניות כדי להפעיל/לכבות. |
| ② | מחוון סוללה (Battery Indicator) | ארבע נוריות LED אדומות המציינות את מצב הסוללה. כל הנוריות דולקות כשהסוללה טעונה במלואה, והנוריות מהבהבות או נכבות ב-75%, 50%, 25% ו-0%. נוריות ה-LED אדומות מהבהבות בזמן טעינה כדי להראות את רמת הסוללה הנוכחית. |
| ③ | יציאת הורדת תוכנית (Program Download Port) | השתמשו בכבל micro USB כדי להוריד את התוכנית. |
| ④ | יציאות מנועים (Motor Ports) | יציאות למנהלי התקן למנועי DC. |
| ⑤ | יציאות סרוו (Servo Ports) | יציאות למנהלי התקן למנועי סרוו. |
| ⑥ | יציאות I²C | השתמשו ביציאות Grove לתקשורת I²C. |
| ⑦ | יציאות I/O | השתמשו ביציאות HY2.0-4P לשליחה/קבלה של אותות דיגיטליים ואנלוגיים. |
| ⑧ | לוח micro:bit | ממשק Gold Finger לחיבור לוח ה-micro:bit. |
| ⑨ | תא סוללה (Battery Compartment) | סוללת Li-Po נשלפת ומובנית של 7.4V 1000mAh. |
| ⑩ | יציאת טעינה (Power Charging Port) | השתמשו בכבל microUSB לטעינה עם 5V=1A. |

> הרכזת מותאמת ללוח אם micro:bit גרסה V1.5 ומעלה. מומלץ להשתמש בלוח אם micro:bit בגרסה V2.0 ומעלה.

## מפרט טכני (Specifications)

| פריט | תיאור |
|:---|:---|
| תצורה (Name) | micro:bit Smart Hub |
| קוד (Code) | B0020001 |
| מידות (Dimension) | 88 מ"מ x 56 מ"מ x 32 מ"מ (א x ר x ג) |
| משקל (Weight) | 126 גרם |
| חומר (Material) | ABS |
| מתח סוללה (Battery Voltage) | 7.4V-DC( Li-Po ) |
| קיבולת סוללה (Battery Capacity) | 1000mAh |
| הגבלת טעינה (Charging Limit) | 5V=1A |
| זמן שימוש (Usage Time) | כ- 4 שעות |
| לוח בקרה ראשי (Main Control Board) | micro:bit V2 |
| יציאות (Ports) | 6 יציאות I/O, 4 יציאות I²C, 4 יציאות מנוע, 4 יציאות סרוו |
| מתח יציאות (Port Voltage) | 5V |
| תוכנות תואמות (Compatible Software) | MakeCode，Micropython，Scratch וכו'. |
| גיל מתאים (Suitable Age) | 6+ |
| תאימות (Compatibility) | LEGO |

> **הערה:** הנתונים בדוח זה מבוססים על בדיקות מעבדה ותרחישי שימוש מדומים. זמן השימוש בפועל עשוי להשתנות.

## שימוש (Usage)

### חיבור ממשקים (Interface connection)

**תרשים חיבור לממשק I/O סטנדרטי**
![Standard I/O interface](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03hub.gif)

**תרשים חיבור לממשק I²C**
![I2C interface](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04hub.gif)

**תרשים חיבור למנוע**
![Motor connection](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05hub.gif)

**תרשים חיבור Geek Servo**
הערה: כאשר מחברים Geek servo, שימו לב שגיליון המתכת של החיבור נמצא באותו צד כמו לוח הבקרה הראשי של ה-micro:bit. אל תהפכו אותו כדי למנוע נזק למודול.
![Geek Servo connection](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/06hub.gif)

### טעינת הרכזת (Hub charge)

הרכזת משמשת לאספקת חשמל ללוח האם של ה-micro:bit ולציוד הנלווה. שימו לב שלרכזת יש יציאת טעינה עצמאית לטעינה, ויציאת לוח האם (micro:bit) אינה יכולה לטעון ולהפעיל את הרכזת.

## החלפת ה-micro:bit

![Replacing the micro:bit](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/07hub.gif)

כדי להחליף את לוח האם micro:bit, נתקו אותו יחד עם כיסוי המגן, הסירו את הלוח הישן והתקינו את הלוח החדש. לאחר מכן, הפכו את הרכזת והכניסו את כיסוי המגן בחזרה.

### מבוא ל-micro:bit

| ![micro:bit V2.0](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/08hub.png) | ![micro:bit V2.0 back](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/09hub.png) |
|:---:|:---:|
| micro:bit V2.0 | |

ה-micro:bit (BBC micro:bit) הוא לוח פיתוח של ה-BBC לחינוך לתכנות לבני נוער. בגודל של כרטיס אשראי (4 ס"מ על 5 ס"מ), הוא כולל 25 נוריות LED אדומות, שני כפתורים ניתנים לתכנות (A ו-B), וחיישנים מובנים כגון מד תאוצה ומגנטומטר. עם Bluetooth, תקשורת רדיו וממשקי סוללה, הוא תומך בהתקנים חיצוניים. ה-micro:bit מאפשר יצירת פרויקטים אינטראקטיביים על ידי הבהוב נוריות LED להצגת אותיות, מספרים ותבניות בהתאם לעיצובים מתוכנתים מראש.` 
      },
      { 
        id: "feat-structure", 
        title: "3.2 מבנה חיישנים ומפעילים (Structure)", 
        icon: Search, 
        content: `# 3.2 מבנה חיישנים ומפעילים (Structure of Sensors and Actuators)\n\n## חיישנים ומפעילים (Sensors and Actuators)\n\nערכת הקידוד ל-BBC micro:bit מצוידת במגוון חיישנים ומפעילים. רכיבים אלו מסווגים מבחינה מבנית לשתי קטגוריות עיקריות: מחברי חור סיכה (pinhole) חד-צדדיים ומחברי חור סיכה (pinhole) דו-צדדיים, המציעים למשתמשים אפשרויות חיבור מגוונות. מסמך זה מספק סקירה של המאפיינים המבניים של חיישנים ומפעילים נפוצים בערכה.\n\nלמפרטים מפורטים ויישומים פונקציונליים של כל חיישן ומפעיל, אנא עיינו בסעיף מבוא לפונקציונליות בהמשך.\n\n### מבנה מחבר חד-צדדי (Single-Sided Connector Structure)\n\n![Single-Sided Connector](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Structure.png)\n\n| מס' | שם | תיאור |\n|:---:|:---|:---|\n| ① | Grove | תואם לכבל Grove |\n| ② | Pinhole Connector (מחבר חור סיכה) | תואם ל-LEGO |\n\n### מבנה מחבר דו-צדדי (Double-Sided Connector Structure)\n\n![Double-Sided Connector](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Structure.png)\n\n| מס' | שם | תיאור |\n|:---:|:---|:---|\n| ① | Grove | תואם לכבל Grove |\n| ② | Pinhole Connector (מחבר חור סיכה) | תואם ל-LEGO |` 
      },
      { 
        id: "feat-sensors", 
        title: "3.3 קלט וחיישנים (Sensors)", 
        icon: Search, 
        content: `# 3.3 פונקציונליות חיישנים (Sensor Function)

בחלק זה נסקור את החיישנים בסביבת ה-micro:bit, עקרון הפעולה שלהם, מפרט טכני, ואופן השימוש בהם באמצעות קידוד.

## רשימת החיישנים בערכה:

* [מודול פוטנציומטר (Potentiometer Module)](#feat-potentiometer)
* [חיישן אולטרסאונד (Ultrasonic Sensor)](#feat-ultrasonic)
* [חיישן הול - שדה מגנטי (Hall Sensor)](#feat-hall)
* [חיישן להבה (Flame Sensor)](#feat-flame)
* [חיישן לחות אדמה (Soil Moisture Sensor)](#feat-soil-moisture)
* [חיישן מפלס מים (Water Level Sensor)](#feat-water-level)
* [מודול ג'ויסטיק (Joystick Module)](#feat-joystick)
* [חיישן טמפרטורה (Temperature Sensor)](#feat-temperature)
* [חיישן פוטואלקטרי לטווח ארוך (Long-Range Photoelectric Sensor)](#feat-long-range-photoelectric)
* [חיישן צבע וגווני אפור ב-6 כיוונים (Six-Way Color & Grayscale Sensor)](#feat-six-way-color-grayscale)
* [חיישן גז MQ-2 Gas Sensor) MQ-2)](#feat-mq2-gas)
* [חיישן תנועה PIR Sensor) PIR)](#feat-pir-sensor)
* [חיישן אור (Photosensitive Sensor)](#feat-photosensitive-sensor)
* [חיישן גווני אפור (Grayscale Sensor)](#feat-grayscale-sensor)
* [חיישן כפתור (Button Sensor)](#feat-button-sensor)` 
      },
      { 
        id: "feat-potentiometer", 
        title: "מודול פוטנציומטר (Potentiometer)", 
        icon: Search, 
        content: `# מודול פוטנציומטר (Potentiometer Module)\n\n## עיקרון הפעולה (Principle)\n\nמודול הפוטנציומטר הוא רכיב המכוון את ערכי ההתנגדות בהתאם לתבנית מוגדרת. הוא פועל על ידי החלקת מברשת לאורך אלמנט התנגדותי, ומוציא מתח ששומר על יחס ספציפי עם מתח הכניסה במעגל.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | מודול פוטנציומטר (Potentiometer Module) |\n| קוד (Code) | B0020005 |\n| מידות (Dimension) | 56×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| יציאות (Ports) | Grove |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n\n## שימוש (Usage)\n\n| ![Potentiometer 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Potentiometer.png) | | |\n|:---:|:---:|:---:|\n| ![Potentiometer 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Potentiometer.png) | ![Potentiometer 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Potentiometer.png) | ![Potentiometer 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Potentiometer.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למודול פוטנציומטר** | | |\n\nניתן לחבר את מודול הפוטנציומטר ליציאות P0, P1 או P2 של ה-**micro:bit smart hub**. בסביבת התכנות, ניתן לקרוא את הערכים האנלוגיים ממודול הפוטנציומטר. המאפיינים שלו הם כדלקמן:\n\n* **סיבוב עם כיוון השעון (Clockwise rotation)**: ערך הפלט של הפוטנציומטר יורד.\n* **סיבוב נגד כיוון השעון (Counterclockwise rotation)**: ערך הפלט של הפוטנציומטר עולה.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Potentiometer.gif)\n\nבתוכנת הקידוד MakeCode, ניתן לקרוא את ערך אות החיישן מיציאת P0 באמצעות הרחבת Microbit. לאחר מכן, ניתן להציג את הנתונים על גבי מטריצת נוריות ה-LED של ה-micro:bit.` 
      },
      { 
        id: "feat-ultrasonic", 
        title: "חיישן אולטרסאונד (Ultrasonic)", 
        icon: Search, 
        content: `# חיישן אולטרסאונד (Ultrasonic Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן האולטרסאונד הוא מכשיר המשמש רבות למדידת מרחק וזיהוי אובייקטים. הוא מורכב בעיקר ממקטע שידור, מקטע קליטה ומקטע בקרה. רכיב הליבה הוא גביש פיזואלקטרי, שרוטט במהירות כאשר הוא מגורה על ידי מתח, ופולט אותות אולטרסאונד.\n\nבמהלך ההפעלה, החיישן פולט תחילה סדרה של פולסי אולטרסאונד בתדר גבוה דרך מקטע השידור שלו. גלים אלו משתקפים חזרה כאשר הם פוגעים בעצם ונלכדים על ידי מקטע הקליטה. לאחר מכן, מקטע הבקרה מנתח את האות שהתקבל ומחשב את המרחק לאובייקט בהתבסס על הפרש הזמן בין פליטת האות וקבלתו.\n\nחיישן האולטרסאונד מציע את היתרון של מדידה ללא מגע ויכול לפעול ביציבות בסביבות שונות. הוא נמצא בשימוש נרחב בתחומים כגון ציוד אוטומציה, רובוטיקה, זיהוי מפלס נוזלים וניטור תנועה.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן אולטרסאונד (Ultrasonic Sensor) |\n| קוד (Code) | B0020012 |\n| מידות (Dimensions) | 47×43 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 2~400 ס"מ |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Ultrasonic 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01ultrasonic.png) | | |\n|:---:|:---:|:---:|\n| ![Ultrasonic 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02ultrasonic.png) | ![Ultrasonic 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03ultrasonic.png) | ![Ultrasonic 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04ultrasonic.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן אולטרסאונד** | | |\n\nניתן לחבר את חיישן האולטרסאונד ליציאות החיישנים הכלליות של ה-**micro:bit smart hub**, כולל **P0-P13**, **P1-P14**, **P2-P15**, **P7-P8**, **P9-P12** ו-**P10-P16**. הוא מתוכנת למשימות מדידת מרחק.\n\nהחיישן מודד את המרחק בינו לבין אובייקט. לאחר התקנתו במיקום קבוע, הוא פולט פולסי אולטרסאונד וקולט גלים מוחזרים כדי לחשב מרחק בהתבסס על הפרש הזמן. מיקום נכון של החיישן חיוני כדי למנוע הפרעות ממכשולים. גורמים סביבתיים כגון טמפרטורה, לחות וזרימת אוויר יכולים להשפיע על ביצועי החיישן. בנוסף, הצורה, החומר וחלקות פני השטח של האובייקט שזוהה משפיעים על החזרת הגל; משטחים שטוחים וקשים מחזירים גלי קול בצורה יעילה יותר.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05ultrasonic.gif)\n\nבאמצעות תוכנת הקידוד **MakeCode**, הרחבת Microbit מאפשרת קידוד לקריאת ערכי אותות מיציאות כגון **P0** ו-**P13**. ניתן להציג את הנתונים על גבי **תצוגת מטריצת נוריות ה-LED של ה-micro:bit**.\n\nניתן לבטא את ערכי ההחזרה של חיישן האולטרסאונד בשלוש יחידות:\n* **סנטימטרים (cm)**: מודד מרחק ביחידות מטריות.\n* **מיקרו-שניות (µs)**: מציין את הזמן שנדרש לגל האולטרסאונד לעבור משידור לקליטה.\n* **אינצ'ים (in)**: מייצג מרחק ביחידות אימפריאליות.\n\nעל ידי מדידת זמן ההד, המרחק המתאים יכול להיות מחושב באמצעות מהירות הקול, מה שמאפשר מדידה מדויקת של אובייקט היעד.` 
      },
      { 
        id: "feat-hall", 
        title: "חיישן הול (Hall)", 
        icon: Search, 
        content: `# חיישן הול - שדה מגנטי (Hall Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן הול הוא חיישן מגנטי המבוסס על עקרון אפקט הול. על פי עקרון אפקט הול, כאשר זרם עובר במוליך בכיוון מסוים ושדה מגנטי מופעל אנכית לכיוון זרם זה, ייווצר הפרש פוטנציאלים הפרופורציונלי לעוצמת הזרם והשדה המגנטי משני צידי המוליך. תופעה זו יכולה לשמש לזיהוי נוכחות של שדה מגנטי חיצוני, כלומר, כאשר החיישן קרוב לאובייקט מגנטי, ייווצר מתח הול ספציפי, ואות חשמלי מתאים יפלט כדי לציין את נוכחות השדה המגנטי.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן הול (Hall Sensor) |\n| קוד (Code) | B0020009 |\n| מידות (Dimensions) | 28 x 24 x 12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0 או 1 |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Hall 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Hall.png) | | |\n|:---:|:---:|:---:|\n| ![Hall 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Hall.png) | ![Hall 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Hall.png) | ![Hall 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Hall.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן הול** | | |\n\nניתן לחבר את חיישן ההול ליציאות P0, P1, P2, P8, P12 או P16 ברכזת ה-micro:bit. באמצעות קידוד, ניתן לקרוא את ערך הפלט שלו. כאשר מזוהה מגנט בקרבת מקום, חיישן ההול מוציא רמה לוגית נמוכה (0). בהיעדר מגנט, הוא מוציא רמה לוגית גבוהה (1).\n\nאם המגנט לא מזוהה, מה שעשוי להצביע על קוטביות הפוכה, ניתן להפוך את המגנט הנבדק (הקוטב השני).\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Hall.gif)\n\nבתוכנת הקידוד MakeCode, ניתן לקרוא את ערך האות של החיישן מיציאת P0 באמצעות הרחבת Microbit. לאחר מכן, ניתן להציג את הנתונים על גבי מטריצת נוריות ה-LED של ה-micro:bit.` 
      },
      { 
        id: "feat-flame", 
        title: "חיישן להבה (Flame)", 
        icon: Search, 
        content: `# חיישן להבה (Flame Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן הלהבה פועל על בסיס זיהוי קרינת אינפרא אדום הנפלטת מלהבות. הוא יכול לזהות מקורות אור באורכי גל הנעים בין 760nm ל-1100nm. הודות ליכולת ניטור הבטיחות המצוינת שלו, חיישן הלהבה נמצא בשימוש נרחב ביישומי בטיחות, כולל אך לא רק רובוטים לכיבוי אש ומערכות אזעקת אש.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן להבה (Flame Sensor) |\n| קוד (Code) | B0020008 |\n| מידות (Dimensions) | 36.5×24 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Flame 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Flame.png) | | |\n|:---:|:---:|:---:|\n| ![Flame 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Flame.png) | ![Flame 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Flame.png) | ![Flame 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Flame.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן להבה** | | |\n\nניתן לחבר את חיישן הלהבה ליציאות P0, P1 או P2 ברכזת ה-micro:bit. בסביבת התכנות, ניתן לקרוא את הערכים האנלוגיים של החיישן. החיישן מתנהג כדלקמן: ככל שעוצמת הלהבה גבוהה יותר, כך הערך המזוהה נמוך יותר; לעומת זאת, ככל שעוצמת הלהבה נמוכה יותר, כך הערך המזוהה גבוה יותר.\n\n> **הערה**: אנא הקפידו על בטיחות אש בעת השימוש בחיישן הלהבה.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Flame.gif)\n\nבתוכנת הקידוד MakeCode, על ידי הוספת הרחבת Microbit, ניתן לתכנת את המערכת לקרוא את אות חיישן הלהבה מיציאת P0 ולהציג את הנתונים על גבי תצוגת מטריצת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-soil-moisture", 
        title: "חיישן לחות אדמה (Soil Moisture)", 
        icon: Search, 
        content: `# חיישן לחות אדמה (Soil Moisture Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן לחות האדמה פועל על בסיס השפעת תכולת רטיבות האדמה על ההתנגדות שלה. באדמה יבשה, המחסור בלחות כמדיום מוליך גורם להתנגדות גבוהה; באדמה לחה, המים ממיסים חלק מהמלחים שבאדמה, ויוצרים תמיסת אלקטרוליט שמורידה משמעותית את ההתנגדות החשמלית של האדמה. על ידי הפעלת מתח מסוים בין שתי אלקטרודות ומעקב אחר שינויי הזרם הנוצרים או מדידה ישירה של שינויי ההתנגדות, ניתן להעריך במדויק את רמת הלחות באדמה.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן לחות אדמה (Soil Humidity Sensor) |\n| קוד (Code) | B0020017 |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n| יציאות (Ports) | Grove |\n| מידות (Dimensions) | 79×24 מ"מ |\n\n## שימוש (Usage)\n\n| ![Soil 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Soil.png) | | |\n|:---:|:---:|:---:|\n| ![Soil 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Soil.png) | ![Soil 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Soil.png) | ![Soil 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Soil.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן לחות אדמה** | | |\n\nניתן לחבר את חיישן לחות האדמה ליציאות P0, P1 או P2 ברכזת ה-micro:bit (Intelligent Hub). בסביבת התכנות, ניתן לקרוא את הערכים האנלוגיים מחיישן לחות האדמה. החיישן מתנהג כדלקמן: ככל שלחות האדמה גבוהה יותר, כך הערך המזוהה גבוה יותר; לעומת זאת, ככל שלחות האדמה נמוכה יותר, כך הערך המזוהה נמוך יותר.\n\n> **הערה**: הימנעו מחשיפת הרכיבים האלקטרוניים העליונים למים כדי למנוע נזק לחיישן.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Soil.gif)\n\nבסביבת הקידוד MakeCode, על ידי הוספת הרחבת Microbit, ניתן לתכנת את המערכת לקרוא את אות חיישן לחות האדמה מיציאת P0 ולהציג את הנתונים על גבי תצוגת מטריצת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-water-level", 
        title: "חיישן מפלס מים (Water Level)", 
        icon: Search, 
        content: `# חיישן מפלס מים (Water Level Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן מפלס המים ממיר בזמן אמת את שינויי מפלס המים לאותות חשמליים תואמים. בהתבסס על העיקרון שבו המתח שנוצר על ידי מוליך השקוע במים משתנה עם העומק, החיישן משדר את מפלס המים המזוהה כאות מתח לבקר. הבקר מעבד ומציג את הנתונים בהתאם.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן מפלס מים (Water Level Sensor) |\n| קוד (Code) | B0020016 |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n| יציאות (Ports) | Grove |\n| מידות (Dimensions) | 80 × 24 מ"מ |\n\n## שימוש (Usage)\n\n| ![Water 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Water.png) | | |\n|:---:|:---:|:---:|\n| ![Water 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Water.png) | ![Water 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Water.png) | ![Water 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Water.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן מפלס מים** | | |\n\nניתן לחבר את חיישן מפלס המים ליציאות P0, P1 או P2 ברכזת ה-micro:bit (Intelligent Hub). בסביבת התכנות, ניתן לקרוא את הערכים האנלוגיים מחיישן מפלס המים. החיישן מתנהג כדלקמן: ככל שמפלס המים גבוה יותר, כך הערך המזוהה גבוה יותר; לעומת זאת, ככל שמפלס המים נמוך יותר, כך הערך המזוהה נמוך יותר.\n\n> **הערה**: הימנעו מחשיפת הרכיבים האלקטרוניים העליונים למים כדי למנוע נזק לחיישן.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Water.gif)\n\nבסביבת הקידוד MakeCode, על ידי הוספת הרחבת Microbit, ניתן לתכנת את המערכת לקרוא את אות חיישן מפלס המים מיציאת P0 ולהציג את הנתונים על גבי תצוגת מטריצת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-joystick", 
        title: "מודול ג'ויסטיק (Joystick)", 
        icon: Search, 
        content: `# מודול ג'ויסטיק (Joystick Module)\n\n## מבוא (Introduction)\n\nמודול הג'ויסטיק הוא התקן קלט אלקטרוני נפוץ, המיועד בעיקר לשליטה בכיוון ומשרעת. הוא מורכב מג'ויסטיק נע ופוטנציומטר פנימי. כאשר הג'ויסטיק מוטה, המיקום שלו משנה את ערך ההתנגדות של הפוטנציומטר.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | מודול ג'ויסטיק (Joystick Module) |\n| קוד (Code) | B0020029 |\n| מידות (Dimensions) | 51×24×34 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| אות בקרה (Control Signal) | I²C |\n| טווח זיהוי ציר X / Y (X / Y Axis Detection Range) | -100~100 |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Joystick 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Rocker.png) | | |\n|:---:|:---:|:---:|\n| ![Joystick 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Rocker.png) | ![Joystick 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Rocker.png) | ![Joystick 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Rocker.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למודול ג'ויסטיק** | | |\n\nניתן לחבר את מודול הג'ויסטיק לממשק ה-**I²C** של ה-**micro:bit hub**. בסביבת התכנות, ניתן לקרוא את מיקום הג'ויסטיק ולהשתמש בו.\n\n![Joystick Calibration](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Rocker.gif)\n\nאם מודול הג'ויסטיק מציג סטיות דיוק, ניתן לבצע כיול באמצעות פינצטה: קצרו את מגעי הכיול בעזרת פינצטה. נורית החיווי תתחיל להבהב, מה שמציין כניסה למצב כיול. בצעו סיבוב מלא של **360°** עם הג'ויסטיק. לאחר השלמת הסיבוב, הסירו את הפינצטה. כאשר נורית החיווי דולקת ברציפות, הכיול הושלם בהצלחה.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/06Rocker.gif)\n\nבאמצעות תוכנת הקידוד **MakeCode**, הרחבת Microbit מאפשרת:\n\nקריאת אותות כיוון ממודול הג'ויסטיק דרך **יציאת ה-I²C** והצגתם על גבי **מטריצת נוריות ה-LED של ה-micro:bit**.\n\n![Modular Coding 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/07Rocker.gif)\n\nקריאת ערכי מיקום ממודול הג'ויסטיק דרך **יציאת ה-I²C** וכתיבתם ליציאה הטורית (serial port).`
      },
      { 
        id: "feat-temperature", 
        title: "חיישן טמפרטורה (Temperature)", 
        icon: Search, 
        content: `# חיישן טמפרטורה (Temperature Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן הטמפרטורה מתוכנן במיוחד עבור סביבות לחות. במהלך ההפעלה, החיישן ממיר אותות טמפרטורה מזוהים לאותות מתח תואמים. אותות מתח אלו מומרים לאחר מכן לאותות אנלוגיים ומועברים ללוח הבקרה הראשי לעיבוד.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן טמפרטורה (Temperature Sensor) |\n| קוד (Code) | B0020014 |\n| מידות (Dimensions) | 79×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Temperature 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Temperature.png) | | |\n|:---:|:---:|:---:|\n| ![Temperature 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Temperature.png) | ![Temperature 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Temperature.png) | ![Temperature 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Temperature.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן טמפרטורה** | | |\n\nניתן לחבר את חיישן הטמפרטורה ליציאות **P0**, **P1**, או **P2** ברכזת ה-**micro:bit hub**. בסביבת התכנות, ניתן לקרוא את הערכים האנלוגיים של החיישן. המאפיינים שלו כוללים:\n\n* **עלייה בטמפרטורה (Temperature increase)**: ערך הטמפרטורה המזוהה עולה ככל שטמפרטורת הסביבה עולה.\n* **ירידה בטמפרטורה (Temperature decrease)**: ערך הטמפרטורה המזוהה יורד ככל שטמפרטורת הסביבה יורדת.\n\n> **הערה**: במהלך השימוש, הימנעות מחשיפת חלקים כלשהם של החיישן מלבד ראש הזיהוי למים, כדי למנוע נזק.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Temperature.gif)\n\nבסביבת הקידוד MakeCode, על ידי הוספת הרחבת Microbit, ניתן לתכנת את המערכת לקרוא את אות חיישן הטמפרטורה מיציאת P0 ולהציג את הנתונים על גבי תצוגת מטריצת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-long-range-photoelectric", 
        title: "חיישן פוטואלקטרי לטווח ארוך (Long-Range Photoelectric)", 
        icon: Search, 
        content: `# חיישן פוטואלקטרי לטווח ארוך (Long-Range Photoelectric Sensor)\n\n## עיקרון הפעולה (Principle)\n\nהחיישן הפוטואלקטרי לטווח ארוך הוא מתג זיהוי המבוסס על עקרון החזרת אינפרא אדום. תפקידו העיקרי הוא לזהות במדויק אי נוכחות של מכשולים מול החיישן. טווח הזיהוי האפקטיבי הוא מ-0 ועד 2 מטרים. בנוסף, ניתן לכוונן בגמישות את פרמטרי החיישן באמצעות פוטנציומטר כדי להתאים לתרחישי יישום שונים.\n\n## מפרט טכני (Specification)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן פוטואלקטרי לטווח ארוך (Long-Range Photoelectric Sensor) |\n| מספר (Number) | B0020018 |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות דיגיטלי (Digital Signal) |\n| טווח נתונים (Data Range) | 0 או 1 |\n| סוג ממשק (Interface Type) | Grove |\n| מידות מודול (Module Size) | 62×40 מ"מ |\n\n## שימוש (Usage)\n\n| ![Long 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01Long.png) | | |\n|:---:|:---:|:---:|\n| ![Long 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02Long.png) | ![Long 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03Long.png) | ![Long 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04Long.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן פוטואלקטרי לטווח ארוך** | | |\n\nניתן לחבר את החיישן הפוטואלקטרי לטווח ארוך ליציאות P0, P1, P2, P8, P12, או P16 ברכזת ה-micro:bit (Intelligent Hub). על ידי תכנות, ניתן לעקוב אחר הסטטוס שלו. כאשר מזוהה מכשול, החיישן מפיק רמה לוגית נמוכה ("0") ונורית החיווי האדומה נדלקת. בהיעדר מכשול, הוא מפיק רמה לוגית גבוהה ("1") והנורית האדומה כבויה.\n\n![Long 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05Long.gif)\n\nהחיישן הפוטואלקטרי לטווח ארוך כולל מנגנון מובנה לכוונון רגישות. משתמשים יכולים לכוונן את הרגישות בקלות על ידי סיבוב הפוטנציומטר בחלק האחורי. סיבוב בכיוון השעון מגדיל את טווח הזיהוי והרגישות, בעוד סיבוב נגד כיוון השעון מקטין את הטווח והרגישות.\n\n## קידוד מודולרי (Modular Coding)\n\n![Modular Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/06Long.gif)\n\nבסביבת הקידוד MakeCode, ערך האות של החיישן מיציאת P0 יכול להיקרא באמצעות הרחבת ה-Microbit. הנתונים יכולים לאחר מכן להיות מוצגים על מטריצת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-six-way-color-grayscale",
        title: "חיישן צבע וגווני אפור עם 6 ערוצים (Six-Way Color & Grayscale)", 
        icon: Search, 
        content: `# חיישן צבע וגווני אפור עם שישה ערוצים (Six-Way Color & Grayscale Sensor)

## סקירה (Overview)

![Six 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/01six.png)

חיישן הצבע וגווני האפור בעל שישה ערוצים משתמש בשלושה זוגות של אלמנטים פוטואלקטריים כדי לחוש את צבע המשטח. הוא יכול גם לסייע לרובוט במעקב אחר קו (Line following) תוך כדי חישת צבע האובייקט.

מודול זה יכול לספק פלט נתונים רב-ערוצי, המורכב מאותות אנלוגיים המייצגים את עוצמת האור, וממידע דיגיטלי מעובד של קווים וזיהוי רקע. העיצוב לא רק מבטיח הפעלה פשוטה של המשתמש, אלא גם מעניק רמה גבוהה של גמישות, המתאימה מאוד למורים כדי להסביר את הידע והעיקרון הרלוונטיים של טכנולוגיית מעקב אחר קו וזיהוי צבעים בהתאם לצרכי ההוראה.

בנוסף, המודול מצויד בפונקציות למידה אדפטיבית מתקדמות. על ידי למידה חכמה וזיהוי צבעי רקע וקווים מגוונים, הוא יכול להגדיר ולמטב אוטומטית את סף קבלת ההחלטות, ובכך לשפר משמעותית את הדיוק ואת יכולת ההסתגלות הסביבתית של היישום, ולספק למשתמשים חוויית שימוש חכמה ויעילה יותר.

## עיקרון הפעולה (Principle)

![Six 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/02six.png)

### עיקרון זיהוי צבע (Color Detection Principle)

כל זוג חיישני צבע משלב פונקציות של חיישן רגיש לאור ונורת RGB LED, ויוצר יחידת זיהוי חזקה. בעולם האמיתי, כאשר אנו קולטים אובייקט כאדום, הדבר מצביע בדרך כלל על כך שהאובייקט מחזיר יותר אור אדום ובולע צבעים אחרים ביעילות רבה יותר. בהתבסס על עיקרון זה, כאשר נעשה שימוש בתאורת השלמה אדומה, ככל שצבעו האדום של האובייקט חזק יותר, כך ההחזר שלו של אור אדום חזק יותר, והקריאה של החיישן הרגיש לאור גבוהה יותר. מנגנון זה מאפשר לנו לכמת את "מדד האדום" של האובייקט.

באופן דומה, על ידי התאמת צבע תאורת ההשלמה למחזור בין אדום, ירוק וכחול, ותיעוד בו-זמני של קריאות חיישן האור בכל רגע, אנו יכולים לחשב במדויק את "מדד הירוק" ו"מדד הכחול" של האובייקט, ולאחר מכן להסיק את הצבע הכולל של האובייקט שזוהה.

### הפרעות סביבתיות וניתוח שגיאות זיהוי (Environmental Interference and Detection Error Analysis)

בעולם הפיזי, הפרעות סביבתיות ושגיאות זיהוי הן בעיות נפוצות. יכולתו של חיישן הצבע לזהות את צבעו של אובייקט תלויה בעוצמת האור המוחזר מהאובייקט תחת תאורת ההשלמה. עם זאת, אור סביבתי יכול להילכד גם על ידי חיישן האור ולהכניס שגיאות לחישוב. אפילו באותם תנאי סביבה, שני חיישני צבע כפולים עשויים להפיק קריאות שונות בעת זיהוי אותו אובייקט עקב וריאציות אישיות.

כדי להתמודד עם בעיות אלו, תכננו בקפידה את מעטפת החיישן כדי לבודד את האובייקט המזוהה מהחיישן ולהגן עליו ביעילות מהפרעות אור סביבתי. יתר על כן, פיתחנו אלגוריתמים מתקדמים שמתעדים את קריאות החיישן כאשר תאורת ההשלמה דולקת וכבויה, ומחשבים את ההבדל בין השתיים. בהנחה שעוצמת האור הסביבתי נשארת ללא שינוי במהלך פרק הזמן הקצר הזה, שיטה זו מצמצמת את השגיאות למינימום.

## מבנה (Structure)

![Six 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/03six.png)

| מס' | פריט (Item) | תיאור (Description) |
|:---:|:---|:---|
| ① | נורית חיווי (Indicator Light) | נדלקת כאשר הבדיקה המתאימה מזהה "קו שחור". |
| ② | לחצן למידה (Learning Button) | לחיצה קצרה כדי להיכנס למצב למידה; לחיצה ארוכה לשינוי כתובת המכשיר. |
| ③ | לחצן איפוס (Reset Button) | משמש לאיפוס החיישן. |
| ④ | חישנים (Sensor Probes) | ששת החיישנים של חיישן הצבע וגווני האפור בעל שישה ערוצים. |
| ⑤ | תאורת השלמה (Supplementary Light) | תאורת השלמה המתאימה לכל חיישן. |
| ⑥ | ממשק (Interface) | יציאת HY2.0-4P לאספקת מתח והעברת אותות. |
| ⑦ | חיווי כתובת (Address Indicator) | מציין את כתובת המכשיר; צבעים שונים מייצגים כתובות שונות. |
| ⑧ | ממשק Type-C (Type-C Interface) | לאספקת כוח ועדכוני קושחה. |

## מפרט טכני (Specification)

| פריט | תיאור |
|:---|:---|
| תצורה (Name) | חיישן צבע וגווני אפור ערוצים (Six-Way Color & Grayscale Sensor) |
| קוד (Code) | B0200011 |
| מתח (Voltage) | 5V - DC |
| שיטת תקשורת (Communication Method) | IIC |
| טווח זיהוי גווני אפור (Detection Range - Grayscale) | פלט אנלוגי (0~255) / פלט דיגיטלי (0 או 1) |
| טווח זיהוי צבע (Detection Range - Color) | אדום, ירוק, כחול, צהוב, סגול |
| טמפרטורת פעולה (Operating Temperature) | -10°C ~ +50°C |

## שימוש (Usage)

| ![Six 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/04six.png) | | |
|:---:|:---:|:---:|
| ![Six 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/05six.png) | ![Six 6](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/06six.png) | |
| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | |
| **תרשים חיווט לחיישן 6 ערוצים** | | |

לפרטים על פעולת לחצן הלמידה, עיינו בסעיפים הקודמים.

## קידוד (Coding)

### פלט טורי (Serial Output)

![Six 7](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/07six.gif)

בלוק הפלט הטורי (serial output block) מאפשר למשתמשים לקרוא ערכים אנלוגיים מכל ששת אזורי החישה במקביל, בכך לשפר את קצב איסוף ויציבות הנתונים.

> הערה: הערכים האנלוגים המשודרים בפלט מחושבים תוך כדי קריאות חישה בסנכרון לעיבוד פרספקטיבי ותוצאות הלמידה כפי ששמורים בזיכרון הפנימי.

### פלט דיגיטלי (Digital Output Block)

![Six 8](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/08six.gif)

בלוק זיהוי הצבע מאפיין יכולות זיהוי צבע תוך מתן אפשרות לבחירת ערוץ החיישן לחיפוש (לפי תעודת כתובת) בהסתמך עליו יכול לספק הודעה בהתאם לשאילתת שאלה אם הצבע שזוהה תואם לצבע אליו הוגדרה הבדיקה במידה וכן - יחזיר אמת (Yes) או במידה ולא - שיקר (No). החיישן יכול לזהות במדויק 5 צבעים: 'אדום', 'צהוב', 'ירוק', 'כחול', ו-'סגול'.

![Six 9](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/09six.gif)

**זיהוי מעקב קווים (Line-following block)**
הבלוק מתמקד בהבחנה מדויקת בין קו שחור מול מראה רקע אחר על סמך הלמידה המוקדמת שעבר, פעולה זו יכולה לשדר קלט בוליאני לתוך פקודת רכיב - מה שמסובב פלט דיגיטלי - אמת (Yes) או (No). שימו לב כי מצב "הקו השחור" במודל עבודה זה מזהה מצבי רקע בהם יש עוצמה קטנה בעקבות החזרות אור נמוכות, בה לעומת זאת סוג ה "רקע הכלול" - תלוי בסיטואציה - יש בו החזרות עוצמה וערכים גבוהים כפי שלמד בשלבי תהליכי הלמידה שלו למשימה זו.

### פלט אנלוגי (Analog Output Block)

![Six 10](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/10six.gif)

בלוק פלט דיגיטלי מתרגם את סדרת החיווי מהערך התואם ומנפק ערך תואם (מתורגם לעוצמה ברמות מ 0 ל- 255) מהחיישן הנבחר בתעודת כתובת אל תוך מסוף הפלט.`
      },
      { 
        id: "feat-mq2-gas", 
        title: "חיישן גז (MQ-2 Gas Sensor)", 
        icon: Search, 
        content: `# חיישן גז (MQ-2 Gas Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן הגז MQ-2 משתמש בדו-תחמוצת הבדיל (SnO2) בעל מוליכות נמוכה כחומר הרגיש. כאשר קיימים גזים דליקים בסביבה, המוליכות של החיישן עולה משמעותית עם ריכוז הגז. חיישן זה רגיש ביותר לגז פחמימני מעובה (liquefied gas), פרופאן ומימן, ובמקביל מתפקד היטב בזיהוי גז טבעי ואדי בעירה אחרים.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן גז (MQ-2 Gas Sensor) |\n| קוד (Code) | B0020005 |\n| מידות (Dimension) | 40×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| יציאות (Ports) | Grove |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n\n## שימוש (Usage)\n\n| ![MQ 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/MQ1.png) | | |\n|:---:|:---:|:---:|\n| ![MQ 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/MQ2.png) | ![MQ 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/MQ3.png) | ![MQ 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/MQ4.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן גז MQ-2** | | |\n\nניתן לחבר את חיישן הגז הדליק ליציאות P0, P1 ו-P2 של הרכזת החכמה (Intelligent Hub) של ה-micro:bit. בסביבת הקידוד, ניתן לקרוא את הערכים האנלוגיים של חיישן הגז. המאפיין שלו הוא שהפלט של החיישן עולה עם ריכוז הגז הדליק; לעומת זאת, כאשר ריכוז הגז יורד, הערך המזוהה יורד בהתאם.\n\n> **הערה: טבעי שהחיישן מתחמם במהלך השימוש. אם מתרחשת התחממות יתר, יש להפסיק את השימוש בו מיד כדי למנוע כוויות.**\n\n## קידוד מודולרי (Modular Coding)\n\n![MQ 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/MQ5.gif)\n\nבסביבת הקידוד MakeCode, ניתן לקרוא את ערך אות החיישן מיציאת P0 באמצעות הרחבת micro:bit. לאחר מכן ניתן להציג את הנתונים על גבי מטריצת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-pir-sensor", 
        title: "חיישן תנועה (PIR Sensor)", 
        icon: Search, 
        content: `# חיישן תנועה (PIR Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן ה-PIR (חיישן קרינת אינפרא-אדום פסיבי - Passive Infrared Radiation Sensor) הוא רכיב אלקטרוני המבוסס על חיישן חכם דיגיטלי פירואלקטרי NS612. הוא מסוגל לזהות קרינת אינפרא-אדום הנפלטת על ידי מקורות אינפרא-אדום נעים (כגון גוף האדם), ובכך לחוש את נוכחותו של מקור האינפרא-אדום.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן תנועה (PIR Sensor) |\n| קוד (Code) | B0020028 |\n| מידות (Dimensions) | 28×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0 או 1 |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![PIR 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/PIR1.png) | | |\n|:---:|:---:|:---:|\n| ![PIR 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/PIR2.png) | ![PIR 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/PIR3.png) | ![PIR 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/PIR4.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן תנועה PIR** | | |\n\nניתן לחבר את חיישן ה-PIR לממשק ה-I²C של הרכזת של ה-micro:bit (Micro:bit Hub). בסביבת הקידוד, ניתן לקרוא את ערכי החיישן:\n\n* כאשר החיישן מזהה מקור אינפרא-אדום נע, נורית החיווי הכחולה נדלקת והחיישן מפיק אות בערך 0.\n* אם לא מזוהה מקור אינפרא-אדום נע, הנורית הכחולה כבויה והחיישן מפיק אות בערך 1.\n\n![PIR 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/PIR5.gif)\n\nחיישן ה-PIR מצויד בפוטנציומטר ליניארי הממוקם בחלקו האחורי לכוונון עדין של הרגישות:\n\n* סיבוב הפוטנציומטר בכיוון השעון (clockwise) מגדיל את הרגישות ומרחיב את טווח הזיהוי.\n* סיבוב נגד כיוון השעון (counterclockwise) מקטין את הרגישות ומקצר את טווח הזיהוי.\n\n## קידוד מודולרי (Modular Coding)\n\n![PIR 6](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/PIR6.gif)\n\nבסביבת הקידוד MakeCode, על ידי הוספת הרחבת micro:bit, ניתן לתכנת את המערכת לקרוא את אות חיישן ה-PIR מיציאת P0 ולהציג את הנתונים על גבי תצוגת נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-grayscale-sensor", 
        title: "חיישן גווני אפור (Grayscale Sensor)", 
        icon: Search, 
        content: `# חיישן גווני אפור (Grayscale Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן גווני האפור מצויד בשתי נוריות LED לבנות בבהירות גבוהה ונגד רגיש לאור (פוטו-רזיסטור). כאשר האור הנפלט מהנוריות פוגע במשטחים בעלי רפלקטיביות שונה, עוצמת האור המוחזר תשתנה. התנגדות הנגד הרגיש לאור משתנה בהתאם לעוצמת האור המתקבל, ובכך משקפת את ערך גווני האפור של המשטח הנמדד.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן גווני אפור (Grayscale Sensor) |\n| קוד (Code) | B0020007 |\n| מידות (Dimension) | 28×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| יציאות (Ports) | Grove |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 (שחור ~ לבן) |\n\n## שימוש (Usage)\n\n| ![G 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/G1.png) | | |\n|:---:|:---:|:---:|\n| ![G 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/G2.png) | ![G 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/G3.png) | ![G 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/G4.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן גווני אפור** | | |\n\nניתן לחבר את חיישן גווני האפור ליציאות P0, P1 ו-P2 של הרכזת החכמה של ה-micro:bit. בסביבת התכנות, ניתן לקרוא את הערכים האנלוגיים של החיישן. הערך עולה ככל שהמשטח בהיר יותר, ויורד ככל שהוא כהה יותר.\n\n## קידוד מודולרי (Modular Coding)\n\n![Grayscale Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/G5.gif)\n\nבתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את החיישן לקרוא את רמת האפור בפורט P0 ולהציג את התמורה של האות הדיגיטלי או האנלוגי.`
      },
      {
        id: "feat-photosensitive-sensor",
        title: "חיישן אור (Photosensitive Sensor)",
        icon: Search,
        content: `# חיישן אור (Photosensitive Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן האור (פוטו-רזיסטור) משתמש בנגד רגיש לאור שבו ההתנגדות החשמלית משתנה בהתאם לעוצמת האור הפוגע בו. ככל שעוצמת האור חזקה יותר, כך ההתנגדות קטנה יותר, וערך המתח המתקבל עולה. חיישן זה מתאים לזיהוי רמות תאורה סביבתית, עיצוב מנורות לילה חכמות ומערכות סולאריות.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן אור (Photosensitive Sensor) |\n| קוד (Code) | B0020010 |\n| מידות (Dimension) | 28×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| יציאות (Ports) | Grove |\n| סוג נתונים (Data Type) | אות אנלוגי (Analog Signal) |\n| טווח נתונים (Data Range) | 0~1023 |\n\n## שימוש (Usage)\n\n| ![Photosensitive 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/Ph01.png) | | |\n|:---:|:---:|:---:|\n| ![Photosensitive 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/Ph02.png) | ![Photosensitive 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/Ph03.png) | ![Photosensitive 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/Ph04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן אור** | | |\n\nניתן לחבר את חיישן האור ליציאות P0, P1 ו-P2 של הרכזת החכמה של ה-micro:bit. ככל שסביבת החיישן מוארת יותר, ערך הקריאה מהחיישן יהיה גבוה יותר; ככל שהסביבה חשוכה יותר, הערך הנקרא יהיה נמוך יותר.\n\n## קידוד מודולרי (Modular Coding)\n\n![Photosensitive Coding](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/Ph05.gif)\n\nבתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את החיישן לקרוא את רמת האור בפורט P0 ולהציג את התמורה על גבי מטריצת ה-LED של ה-micro:bit.`
      },
      {
        id: "feat-button-sensor",
        title: "חיישן כפתור (Button Sensor)",
        icon: Search,
        content: `# חיישן לחצן (Button Sensor)\n\n## עיקרון הפעולה (Principle)\n\nחיישן הלחצן הוא רכיב קלט בסיסי המזהה לחיצה פיזית. כאשר הלחצן נלחץ, המעגל נסגר והחיישן מפיק אות לוגי נמוך (0). כאשר הלחצן משוחרר, המעגל נפתח והחיישן מפיק אות לוגי גבוה (1).\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | חיישן לחצן (Button Sensor) |\n| קוד (Code) | B0020002 |\n| מידות (Dimension) | 28×24×12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| יציאות (Ports) | Grove |\n| סוג נתונים (Data Type) | אות דיגיטלי (Digital Signal) |\n| טווח נתונים (Data Range) | 0 או 1 |\n\n## שימוש (Usage)\n\n| ![B 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/B1.png) | | |\n|:---:|:---:|:---:|\n| ![B 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/B2.png) | ![B 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/B3.png) | ![B 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/B4.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט לחיישן לחצן** | | |\n\nניתן לחבר את חיישן הלחצן לממשקי החיישנים הרגילים של הרכזת החכמה של ה-micro:bit, כגון P0, P1, P2, P8, P12 ו-P16. ניתן לתכנת את המערכת כדי לקרוא את סטטוס חיישן הלחצן. כאשר הלחצן נלחץ, חיישן הלחצן מפיק "0". כאשר הלחצן משוחרר, חיישן הלחצן מפיק "1".\n\n## קידוד מודולרי (Modular Coding)\n\n![B 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/B5.gif)\n\nבתוכנת הקידוד MakeCode, ידי הוספת הרחבת Microbit, ניתן לתכנת לקרוא את ערך האות של חיישן הלחצן מיציאת P0 ולהציג נתון זה ויזואלית על גבי תצוגת הכלי נוריות ה-LED של ה-micro:bit.`
      },
      { 
        id: "feat-actuators", 
        title: "3.4 פונקציונליות מפעילים (Actuators)", 
        icon: Zap, 
        content: `# 3.4 פונקציונליות מפעילים (Actuator Function)\n\nבחלק זה נסקור את המפעילים בסביבת ה-micro:bit, עקרון הפעולה שלהם, מפרט טכני, ואופן השימוש בהם.\n\n## רשימת המפעילים בערכה:\n\n* [מנוע סרוו (Servo Motor)](#feat-servo-motor)\n* [מנוע זרם ישר (DC Motor)](#feat-dc-motor)\n* [מנוע גיק סרוו (Geek Servo)](#feat-geek-servo)\n* [מודול נוריות (LED Module)](#feat-led-module)\n* [מודול מאוורר (Fan Module)](#feat-fan-module)\n* [מודול אלקטרומגנט (Electromagnet Module)](#feat-electromagnet-module)\n* [מודול לייזר (Laser Module)](#feat-laser-module)\n* [מודול מסך (OLED Module)](#feat-oled-module)\n* [מודול טבעת נוריות (RGB LED Module)](#feat-rgb-led-module)\n* [מודול הקלטה (Recording Module)](#feat-recording-module)`  
      },
      {
        id: "feat-servo-motor",
        title: "מנוע סרוו (Servo Motor)",
        icon: Zap,
        content: `# מנוע סרוו (Servo Motor)\n\n## מבוא (Introduction)\n\n![Servo Motor 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor01.png)\n\nמנוע הסרוו הוא מודול רב-תכליתי התומך במספר מצבי בקרה של סיבוב, ומאפשר שליטה מדויקת בזוויות סיבוב, מהירות ומיקום. הוא משתמש בתקשורת דיגיטלית I²C לאינטראקציה מהירה וללא השהיה עם בקרים. המנוע כולל לחצן החלפת כתובת I²C ונורית חיווי מצב, המאפשרים למשתמשים להציג בקלות את כתובת המכשיר הנוכחית ומצב הבקרה. חיבור המסוף שלו בסגנון הכנס-הפעל מפשט את החלפת החוטים, ופותר את בעיית קשיי התיקון הנגרמת מחיווט שאינו ניתן לניתוק.\n\n**תכונות עיקריות:**\n\n* פרוטוקול תקשורת I²C סטנדרטי.\n* החלפה ידנית של כתובת I²C עם 4 כתובות ניתנות לבחירה וכתובת מובנית אחת, התומך במספר מנועים בקלות.\n* אלגוריתם מובנה להתאמת מהירות חכמה לתגובה מהירה, מדידת מהירות מדויקת וחישוב מיקום.\n* תפוקת מומנט (Torque) גבוהה.\n* אלגוריתמי הגנה חכמים מובנים כדי לזהות אוטומטית ולהגן מפני תנאים חריגים כמו תקיעה או מומנט-יתר.\n* הגנת חומרה להגבלת תפוקת הכוח במהלך התחממות יתר או חריגות אחרות.\n* פונקציית חיווי מצב תקשורת כדי לראות את מצב התקשורת של המנוע והרכזת בזמן אמת.\n* שליטה על מהירות, מיקום, זווית וזמן פעולה.\n* חיבור מסוף חיצוני להחלפת חוטים מהירה.\n* עיצוב חיבור פין ציר רב-כיווני.\n\n## מבנה (Structural)\n\n![Servo Motor 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor02.png)\n\n| מס' | שם | תיאור |\n|:---:|:---|:---\n| ① | יציאת Grove | מתחבר לרכזת באמצעות כבלי Grove. |\n| ② | לחצן מחליף כתובת | לחצו והחזיקו במשך 3 שניות כדי להחליף את כתובת ה-I²C של המכשיר. למנוע יש 4 כתובות ניתנות לבחירה (0x51, 0x52, 0x53, 0x54) וכתובת מובנית אחת (0x50). הקשה קצרה מאפסת את זווית הסיבוב והמיקום ל-0. |\n| ③ | נורית חיווי מצב | מציינת את כתובת ה-I²C של המכשיר: אדום (0x51), ירוק (0x52), כחול (0x53), צהוב (0x54). כאשר הנורית מתאימה לצבע, היא משקפת את הכתובת הנוכחית. הבהוב מציין תקשורת עם הבקר, בעוד אור קבוע מסמן שאין תקשורת או שגיאת חיבור. |\n| ④ | חיבור פין ציר | תואם לאבני בניין במבנה חוצה. |\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---\n| תצורה (Name) | מנוע סרוו (Servo Motor) |\n| קוד (Code) | B0100028 |\n| משקל (Weight) | כ-47 גרם |\n| מידות (Dimensions) | 72 × 24 × 32 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| תקשורת (Communication) | I²C |\n| כתובת I²C | 4 כתובות מתחלפות (0x51, 0x52, 0x53, 0x54) וכתובת אחת מובנית (0x50) |\n| זרם ללא עומס | 210 mA |\n| זרם תקיעה (Stall) | 2 A |\n| זמן הפעלת הגנת תקיעה | 2s |\n| דיוק בקרה | ±5° |\n| מומנט תקיעה | 0.2 N·m |\n| מהירות מדורגת | 178 RPM |\n| יציאות (Ports) | Grove |\n\n## הוראות שימוש (Usage Instructions)\n\n### 1. חיבור המנוע לרכזת\n\nניתן לחבר את מנוע הסרוו לכל ממשק I²C ברכזת החכמה של ה-micro:bit. ניתן לחבר לכל היותר 4 מנועי סרוו לרכזת. השתמשו בכבל Grove לחיבור.\n\n![Servo Motor 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor03.png)\n\n### 2. בדיקה והגדרת צבע נורית חיווי המצב של המנוע\n\nמנוע הסרוו מציין את כתובת ה-I²C שלו באמצעות צבע נורית חיווי המצב. בעת הקידוד, צבע נורית החיווי משמש גם לאיתור המנוע עליו יש לשלוט. לכן, לאחר מכן, ודאו שאתם בודקים את צבע נורית החיווי. ודאו שהצבעים של מנועי הסרוו המחוברים אינם זהים. אם הנוריות באותו צבע, לחצו לחיצה ארוכה על הלחצן להחלפת כתובת לפני השימוש.\n\n![Servo Motor 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor04.gif)\n\n> **הערה**: שימוש במנועי סרוו בעלי אותו צבע נורית חיבור על אותה רכזת יגרום לפעולה לא תקינה.\n\n### 3. קידוד (Coding Control)\n\nהתוכניות הבאות מאפשרות לכם לסובב את המנוע האדום במהירות של 50% ולהשיג את המהירות או המיקום של המנוע.\n\n| תוכנית לדוגמה 1 | תוכנית לדוגמה 2 |\n|:---:|:---:|\n| ![Servo Motor 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor05.png) | ![Servo Motor 6](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor06.png) |\n| תוכנית זו מדפיסה את המיקום הנוכחי של המנוע האדום דרך היציאה הטורית. | תוכנית זו מדפיסה את מהירות הפעולה הנוכחית של המנוע האדום דרך היציאה הטורית. |\n\nלהלן, נסביר את בלוקי הקידוד לשליטה במנוע יחיד ובצמד מנועים.\n\n### קידוד למנוע יחיד (Single Motor Coding Block)\n\n![Servo Motor 7](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor07.png)\n\n| מס' | תיאור |\n|:---|:---\n| **①** | בקרת מנוע בצבע ספציפי להסתובב במהירות *speed* למשך *seconds* שניות. טווח המהירות -100 עד 100, טווח הזמן 0 עד 65535 שניות. |\n| **②** | בקרת מנוע בצבע ספציפי להסתובב ב-*degrees* מעלות במהירות *speed*. טווח המהירות -100 עד 100, טווח המעלות -32400 עד 32400. |\n| **③** | בלוק זה מיועד למצב סרוו, שבו המיקום של המנוע ברגע ההפעלה הוא נקודת האפס (0), או שהמיקום אופס על ידי לחצן הכתובת. בקרת מנוע בצבע להסתובב לזווית *angle* מעלות במהירות *speed*. טווח הזווית -360 עד 360 מעלות. |\n| **④** | בקרת מנוע בצבע ספציפי להסתובב במהירות קבועה *speed* (-100 עד 100). |\n\n### קידוד למנוע כפול (Double Motor Coding Block)\n\nמודול המנוע הכפול משמש בעיקר בתרחישים שבהם משתמשים בשני מנועי סרוו לבניית שלדת רובוט או יישומים אחרים הדורשים בקרה סינכרונית של שני מנועים.\n\n![Servo Motor 8](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor08.png)\n\nהתמונה למעלה מציגה דוגמה להגדרת שלדה (chassis) כברירת מחדל. החץ האדום מצביע על כיוון ההתקדמות של הרובוט, כאשר מנוע ① מוגדר כמנוע שמאלי ומנוע ② מוגדר כמנוע ימני.\n\n**דוגמת קידוד למנוע סרוו כפול**\n\n![Servo Motor 9](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/ServoMotor09.png)\n\n| מס' | תיאור |\n|:---|:---\n| ① | הגדירו את צבעי המנועים השמאלי והימני בהתאם לצבע נורית המנוע בפועל. |\n| ② | שלטו על מהירות וכיוון שני המנועים בו-זמנית לקביעת תנועת השלדה. |\n| ③ | בצעו עצירה של שני המנועים לעצירת התנועה של הרובוט. |`
      },
      {
        id: "feat-dc-motor",
        title: "מנוע זרם ישר (DC Motor)",
        icon: Zap,
        content: `# מנוע זרם ישר (DC Motor)\n\n## מבוא (Introduction)\n\n![DC Motor 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/DCMotor01.png)\n\nמנוע זרם ישר (DC Motor) הוא מפעיל הממיר אנרגיה חשמלית לתנועה סיבובית מכנית. הוא מתאים להנעת גלגלים של רובוטים, מאווררים ומערכות בעלות תנועה רציפה. המנוע מבוקר באמצעות הרכזת החכמה ה-micro:bit smart hub המאפשרת לקבוע את מהירותו ואת כיוון הסיבוב שלו.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---\n| תצורה (Name) | מנוע זרם ישר (DC Motor) |\n| קוד (Code) | B0020012 |\n| מידות (Dimensions) | 42 × 24 × 24 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| אות בקרה | אות דיגיטלי / PWM |\n| מהירות ללא עומס | 110 RPM ±10% |\n| יציאות (Ports) | Grove / Motor port |\n\n## שימוש (Usage)\n\n| ![DC Motor 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/DCMotor01.png) | | |\n|:---:|:---:|:---:|\n| ![DC Motor 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/DCMotor02.png) | ![DC Motor 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/DCMotor03.png) | ![DC Motor 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/DCMotor04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למנוע זרם ישר** | | |\n\nניתן לחבר את מנועי ה-DC ליציאות המנועים הייעודיות של הרכזת החכמה (smart hub).\n\n## קידוד מודולרי (Modular Coding)\n\n![DC Motor 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/DCMotor05.png)\n\nבתוכנת התכנות MakeCode, בעזרת הרחבת ה-micro:bit, תוכלו לשלוט במהירות ובכיוון של מנוע DC המחובר ליציאה מוגדרת. לדוגמה, הגדרת מהירות ל-50% קדימה או -50% לאחור.`
      },
      {
        id: "feat-geek-servo",
        title: "מנוע גיק סרוו (Geek Servo)",
        icon: Zap,
        content: `# מנוע גיק סרוו (Geek Servo)\n\n## מבוא (Introduction)\n\n![Geek Servo 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/GeekServo01.png)\n\nמנוע ה-Geek Servo הוא מנוע בעל מבנה מיוחד התואם לחלקי לגו, המאפשר בניית דגמים מורכבים בבהירות ודיוק רב. בניגוד לסרוו סטנדרטי, מנוע זה מציע שילוב של זווית סיבוב רחבה וקלות הרכבה על גבי פינים של לבנים מכניות.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---\n| תצורה (Name) | מנוע גיק סרוו (Geek Servo) |\n| קוד (Code) | B0020029 |\n| משקל (Weight) | כ-18 גרם |\n| מתח (Voltage) | 5V - DC |\n| טווח זווית | 270° או 360° סיבוב רציף |\n| יציאות (Ports) | Grove / Servo port |\n\n## שימוש (Usage)\n\n| ![Geek Servo 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/GeekServo01.png) | | |\n|:---:|:---:|:---:|\n| ![Geek Servo 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/GeekServo02.png) | ![Geek Servo 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/GeekServo03.png) | ![Geek Servo 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/GeekServo04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למנוע גיק סרוו** | | |\n\nחברו את מנוע ה-Geek Servo ליציאות הסרוו ברכזת החכמה של ה-micro:bit.\n\n## קידוד מודולרי (Modular Coding)\n\n![Geek Servo 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/GeekServo05.png)\n\nבתוכנת התכנות MakeCode, תוכלו להזיז את מנוע ה-Geek Servo לזווית מסוימת (למשל 90 מעלות או 180 מעלות) או לשלוט על סיבוב רציף שלו במהירות מבוקרת.`
      },
      {
        id: "feat-led-module",
        title: "מודול נוריות (LED Module)",
        icon: Zap,
        content: `# מודול נוריות (LED Module)\n\n## מבוא (Introduction)\n\n![LED Module 1](https://},cs.readthedocs.io/en/latest/_images/LEDModule01.png) | | |\n|:---:|:---:|:---:|\n| ![LED Module 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/LEDModule02.png) | ![LED Module 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/LEDModule03.png) | ![LED Module 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/LEDModule04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למודול נוריות** | | |\n\nניתן לחבר את מודול ה-LED לממשקי הרכזת החכמה של ה-micro:bit: P0, P1, P2, P8, P12, ו-P16.\n\n## קידוד מודולרי (Modular Coding)\n\n![LED Module 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/LEDModule05.gif)\n\nבתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את מודול ה-LED להבהב.`
      },
      {
        id: "feat-fan-module",
        title: "מודול מאוורר (Fan Module)",
        icon: Zap,
        content: `# מודול מאוורר (Fan Module)\n\n## מבוא (Introduction)\n\n![Fan Module 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/FanModule01.png)\n\nמודול המאוורר משתמש במנוע זרם ישר (DC Motor) כדי להמיר אנרגיה חשמלית לאנרגיה מכנית, ובכך להניע את להבי המאוורר להסתובב. ניתן להשתמש במודול זה לעיצוב מאווררים חכמים, מערכות פיזור חום, מדחפים ויישומים דומיים אחרים.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | מודול מאוורר (Fan Module) |\n| קוד (Code) | B0020015 |\n| מידות (Dimensions) | 56 × 41 × 20 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| זרם מדורג | 200 mA |\n| זרם תקיעה (Stall) | 1000 mA |\n| מומנט מרבי (Maximum Torque) | 10 N·m |\n| מהירות מרבית (Max Speed) | 10000 סל"ד (r/min) |\n| אות בקרה (Control Signal) | אות דיגיטלי / אות אנלוגי (Digital Signal / Analog Signal) |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Fan Module 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/FanModule01.png) | | |\n|:---:|:---:|:---:|\n| ![Fan Module 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/FanModule02.png) | ![Fan Module 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/FanModule03.png) | ![Fan Module 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/FanModule04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למודול מאוורר** | | |\n\nניתן לחבר את מודול המאוורר לממשקי הרכזת החכמה של ה-micro:bit: P0, P1, P2, P8, P12, ו-P16.\n\n> **הערה**: הימנעו ממגע פיזי עם להבי המאוורר במהלך הפעולה כדי למנוע פציעה מכנית.\n\n## קידוד מודולרי (Modular Coding)\n\n![Fan Module 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/FanModule05.gif)\n\nבתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את מודול המאוורר להתחיל או לעצור. על ידי שימוש בבלוק ה-"plus" (הוספה), ניתן לכוונן את מהירות המאוורר.`
      },
      {
        id: "feat-electromagnet-module",
        title: "מודול אלקטרומגנט (Electromagnet Module)",
        icon: Zap,
        content: `# מודול אלקטרומגנט (Electromagnet Module)\n\n## מבוא (Introduction)\n\n![Electromagnet Module 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/El01.png)\n\nאלקטרומגנט הוא מכשיר שמייצר מגנטיות כאשר זורם דרכו זרם חשמלי. סליל מוליך המתאים להספק של הליבה מלופף סביב ליבה מגנטית. כאשר זורם זרם דרך הסליל, הוא מייצר שדה מגנטי ופועל כמגנט. השדה המגנטי נעלם כאשר אספקת החשמל מנותקת.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | מודול אלקטרומגנט (Electromagnet Module) |\n| קוד (Code) | B0020044 |\n| מידות (Dimensions) | 28 × 24 × 12 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| אות (Signal) | אות דיגיטלי / אות אנלוגי (Digital Signal / Analog Signal) |\n| כוח משיכה מרבי (Max Pulling Force) | 3 ק"ג (3KG) |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Electromagnet 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/El01.png) | | |\n|:---:|:---:|:---:|\n| ![Electromagnet 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/El02.png) | ![Electromagnet 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/El03.png) | ![Electromagnet 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/El04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למודול אלקטרומגנט** | | |\n\nניתן לחבר את מודול האלקטרומגנט לממשקי הרכזת החכמה של ה-micro:bit: P0, P1, P2, P8, P12, ו-P16.\n\n> **הערה**: אין להפעיל את מודול האלקטרומגנט למשך יותר מ-30 שניות ברציפות. זה נורמלי שהמודול מייצר חום במהלך הפעולה. אם מתרחשת התחממות יתר, הפסיקו את השימוש כדי למנוע כוויות.\n\n## קידוד מודולרי (Modular Coding)\n\n![Electromagnet 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/El05.gif)\n\nבתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את מודול האלקטרומגנט לפעול באופן הבא:\n\n* כאשר כפתור A נלחץ, האלקטרומגנט מייצר שדה מגנטי (נדלק).\n* כאשר כפתור B נלחץ, השדה המגנטי של האלקטרומגנט נעלם (מכבה).\n* בנוסף, ניתן לכוונן את עוצמת השדה המגנטי של האלקטרומגנט באמצעות שימוש בבלוק ה-\"+\" (הוספה).`
      },
      {
        id: "feat-laser-module",
        title: "מודול לייזר (Laser Module)",
        icon: Zap,
        content: `# מודול לייזר (Laser Module)\n\n## מבוא (Introduction)\n\n![Laser Module 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/L01.png)\n\nהרכיב המרכזי של מודול הלייזר הוא דיודת לייזר, שהיא מכשיר חצי מוליך המסוגל להמיר אנרגיה חשמלית ישירות לאנרגיית אור לייזר.\n\nבהשוואה למקורות אור מסורתיים, מאפייני הלייזר נובעים מתהליך פליטה ויצירה ייחודי: כאשר זרם זורם דרך דיודת הלייזר, אלקטרונים עוברים מעברים בתנאים ספציפיים כדי לשחרר פוטונים. פוטונים אלו משתקפים בתוך המדיום, מעוררים מעברי אלקטרונים נוספים, מייצרים אפקט הגברת אור ויוצרים לייזר מרוכז ביותר.\n\n## מפרט טכני (Specifications)\n\n| פריט | תיאור |\n|:---|:---|\n| תצורה (Name) | מודול לייזר (Laser Module) |\n| קוד (Code) | B0020004 |\n| מידות (Dimensions) | 28 × 24 × 20 מ"מ |\n| מתח (Voltage) | 5V - DC |\n| אות בקרה (Control Signal) | אות דיגיטלי / אות אנלוגי (Digital Signal / Analog Signal) |\n| אורך גל (Wavelength) | 650 nm |\n| יציאות (Ports) | Grove |\n\n## שימוש (Usage)\n\n| ![Laser Module 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/L01.png) | | |\n|:---:|:---:|:---:|\n| ![Laser Module 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/L02.png) | ![Laser Module 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/L03.png) | ![Laser Module 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/L04.png) |\n| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |\n| **תרשים חיווט למודול לייזר** | | |\n\nניתן לחבר את מודול הלייזר לממשקי הרכזת החכמה של ה-micro:bit: P0, P1, P2, P8, P12, ו-P16.\n\nבעת שליטה במודול הלייזר באמצעות אות דיגיטלי, מתח כניסה גבוה מפעיל (מדליק) את מודול הלייזר, בעוד מתח כניסה נמוך מכבה אותו.\n\nבעת שליטה במודול הלייזר באמצעות אות אנלוגי, ככל שאות הכניסה גדול יותר, הלייזר בהיר יותר; ככל שאות הכניסה קטן יותר, הלייזר עמום יותר.\n\n> **שמרו על בטיחות**: אל תכוונו את הלייזר לעיניים במהלך השימוש, הדבר עלול לגרום לנזק בלתי הפיך לעיניים!\n\n## קידוד מודולרי (Modular Coding)\n\n![Laser Module 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/L05.gif)\n\nבתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את מודול הלייזר להבהב, ולהשתמש בבלוק ה-\"+\" (הוספה) כדי לכוונן את עוצמת הלייזר.`
      },
      {
        id: "feat-oled-module",
        title: "מודול מסך (OLED Module)",
        icon: Zap,
        content: `# מודול מסך (OLED Module)

## מבוא (Introduction)

![OLED Module 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O03.jpg)

צגי OLED (דיודה פולטת אור אורגנית) משתמשים בחומרים אורגניים לפליטת אור. בניגוד לצגים מסורתיים הדורשים תאורה אחורשונה, צגי OLED פולטים אור משל עצמם, ובכך מציעים בהירות וניגודיות גבוהות עם צריכת חשמל נמוכה ביותר. רזולוציית המסך היא 128 על 64 פיקסלים, וגודלו 0.96 אינץ'. שבב הדוחף (Driver Chip) של המסך הינו SSD1306. לצורך שימוש, יש לחבר אותו ליציאת ה-I²C של ה-**micro:bit smart hub** לצורך תקשורת.

## מפרט טכני (Specifications)

| פריט | תיאור |
|:---|:---|
| תצורה (Name) | מודול מסך (OLED Module) |
| קוד (Code) | B0020002 |
| מידות (Dimension) | 72×24×12 מ"מ |
| מתח (Voltage) | 5V－DC |
| כמות פיקסלים (Pixel Count) | 128×64 (עמודות X שורות) |
| אות בקרה (Control Signal) | I²C |
| כתובת I²C | 60 (0x3C) |
| גודל תצוגה (Display Size) | 0.96 אינץ' |
| יציאות (Ports) | Grove |

## שימוש (Usage)

| ![OLED 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O01.png) | | |
|:---:|:---:|:---:|
| ![OLED 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O02.png) | ![OLED 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O03.jpg) | ![OLED 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O04.png) |
| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |
| **תרשים חיווט למודול מסך OLED** | | |

ניתן לחבר את מודול ה-OLED לכל אחד מ-4 ממשקי תקשורת החיישנים מסוג I²C ברכזת החכמה (smart hub) של ה-micro:bit לצורך קידוד ובקרה. באמצעות קוד, תוכלו תחילה לאתחל את מסך ה-OLED ולאחר מכן לשלוט בו כדי להציג טקסט או מספרים.

## קידוד מודולרי (Modular Coding)

![OLED 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O05.png)

בתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תצוגת ה-OLED מחולקת ל-4 שורות ו-13 עמודות. באפשרותכם ללחוץ כדי לאשר את מיקום ההתחלה להצגת מחרוזות או מספרים. לאחר מכן, תוכלו להזין את הטקסט או המספרים להצגה. בדוגמה המוצגת, מודול התצוגה OLED מתוכנת להציג את המחרוזת "Hello" בשורה הראשונה, עמודה ראשונה, ואת המספר "12" בשורה השנייה, עמודה ראשונה.

![OLED 6](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O06.png)

תצוגת ה-OLED מחולקת ל-4 שורות ו-13 עמודות, כאשר ערכי X נעים בין 0 ל-12 (חופפים לעמודות 1 עד 13). באופן דומה, ערכי Y נעים בטווח של 0 עד 3 (חופפים לשורות 1 עד 4). לאחר מכן תוכלו להזין את הטקסט או המספרים להצגה. ערך צבע של 0 מציג טקסט עם רקע לבן וטקסט שחור, בעוד ערך צבע של 1 מציג רקע שחור עם טקסט לבן.

![OLED 7](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O07.png)

בדוגמה, מודול התצוגה OLED מתוכנת להציג את המחרוזת "Hello" ברקע לבן וטקסט שחור בשורה הראשונה, עמודה ראשונה, ואת המספר "12" ברקע שחור וטקסט לבן בשורה הרביעית, עמודה תשיעית.

![OLED 8](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/O08.png)

באפשרותכם לנקות את מסך תצוגת ה-OLED באמצעות שימוש בבלוק ה-"Clear" (ניקוי).`
      },
      {
        id: "feat-rgb-led-module",
        title: "מודול טבעת נוריות RGB (RGB LED Module)",
        icon: Zap,
        content: `# מודול טבעת נוריות RGB (RGB LED Module)

## מבוא (Introduction)

![RGB 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB01.png)

מודול ה-RGB LED משלב 8 נוריות LED בצבע מלא (Full-color) ומשתמש בשבב הבקרה הראשי WS2812 כדי להשיג שליטה באמצעות חוט בודד (Single-wire control). תכנון זה מאפשר למשתמשים לשלוט בכל נוריות ה-LED באמצעות פין אות בודד, מה שמציע גמישות בהפעלה. בנוסף, על ידי התאמה מדויקת של ערכי ה-RGB, המשתמשים יכולים להציג מגוון רחב של צבעים תוססים. ניתן לכוונן את בהירות טבעת ה-LED בטווח של 0 עד 255, בהתאם לצרכי התאורה השונים.

> **הערה**: בשל עוצמת הבהירות הגבוהה של מודול ה-RGB LED, מומלץ להימנע מחשיפה ישירה ממושכת לעיניים כדי למנוע פגיעה בראייה.

## מפרט טכני (Specifications)

| פריט | תיאור |
|:---|:---|
| תצורה (Name) | מודול טבעת נוריות RGB (RGB LED Module) |
| קוד (Code) | B0020041 |
| מידות (Dimension) | 56×24×12 מ"מ |
| מתח (Voltage) | 5V－DC |
| אות בקרה (Control Signal) | אות דיגיטלי (Digital Signal) |
| מספר נוריות (Number of LEDs) | 8 נוריות (LEDs) |
| יציאות (Ports) | Grove |

## שימוש (Usage)

| ![RGB 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB01.png) | | |
|:---:|:---:|:---:|
| ![RGB 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB02.png) | ![RGB 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB03.png) | ![RGB 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB04.png) |
| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |
| **תרשים חיווט למודול RGB LED** | | |

ניתן לחבר את מודול ה-RGB LED לממשקי החיישנים הרגילים של הרכזת החכמה של ה-micro:bit: P0, P1, P2, P8, P12, ו-P16 לצורך שליטה באמצעות קידוד ותכנות.

## קידוד מודולרי (Modular Coding)

![RGB 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB05.png)

על מנת להשתמש במודול ה-RGB LED, יש לאתחל תחילה את הפורט. בדוגמה זו, "strip" הוא המשתנה ההתחלתי. ניתן להגדיר משתנים שונים שיתאימו למודולי RGB LED שונים בפורטים שונים. באפשרותכם גם לכוונן את הבהירות המתאימה של טבעת ה-LED בטווח של (0~255).

![RGB 6](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB06.png)

מודול זה כולל עשרה צבעים מוגדרים מראש: אדום, כתום, צהוב, ירוק, כחול, אינדיגו, סגול לילך, סגול, שחור ולבן. באפשרותכם להזין את ערכי ה-RGB המתאימים כדי להציג את הצבע הרצוי על גבי טבעת ה-LED.

![RGB 7](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB07.png)

באפשרותכם להזין את ערכי ה-RGB המתאימים כדי להציג את הצבע הרצוי על גבי טבעת ה-LED.

![RGB 8](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RGB08.png)

בתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את מודול ה-RGB LED להציג צבע אדום, כפי שמוצג בתוכנית הדוגמה.`
      },
      {
        id: "feat-recording-module",
        title: "מודול הקלטה (Recording Module)",
        icon: Zap,
        content: `# מודול הקלטה (Recording Module)

## מבוא (Introduction)

מודול ההקלטה (Recording Module) משמש בעיקר ללכידת אותות קול מהסביבה וניהולם כאותות דיגיטליים לצורך אחסון, המאפשר השמעה או שידור מאוחרים יותר. הוא מתפקד כרכיב מרכזי במכשיר הקלטה קטן, ומסוגל להקליט קולות, מוזיקה, אפקטים קוליים סביבתיים ועוד. מודול זה מגיע גם עם 5 דגימות קול מובנות, מה שמקל על יצירת פרויקטים סוחפים.

## מפרט טכני (Specifications)

| פריט | תיאור |
|:---|:---|
| תצורה (Name) | מודול הקלטה (Recording Module) |
| קוד (Code) | B0020030 |
| מידות (Dimension) | 66×40×12 מ"מ |
| מתח (Voltage) | 5V－DC |
| אות בקרה (Control Signal) | I²C |
| יציאות (Ports) | Grove |

## שימוש (Usage)

![Recording Module Overview](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RM01.png)

| מספר | פריט | פונקציונליות |
|:---:|:---:|:---|
| ① | השמעה (Play) | משמיע את אפקט הקול שנבחר כעת |
| ② | הקלטה (Record) | לחץ והחזק כדי להתחיל בהקלטה |
| ③ | לחצן מחליף (Switch Button) | לחיצה בודדת לבחירה ומעבר בין אפקטי קול |
| ④ | מיקרופון (Microphone) | לוכד קולות ורעשי סביבה |

חברו את מודול ההקלטה לכל אחד מחיבורי ה-Grove של הרכזת החכמה (smart hub) של ה-micro:bit. מודול ההקלטה מצויד בשטח אחסון פנימי לאחסון 5 אפקטים קוליים מובנים. באמצעות שימוש בלחצן ההקלטה (Record), משתמשים יכולים להקליט בקלות קטע שמע של עד 30 שניות. אפילו כאשר המודול מקבל מתח בלבד מהרכזת (ללא קידוד), משתמשים יכולים להפעיל אותו כדי להקליט ולהשמיע קולות בלחיצת כפתור פשוטה.

**5 אפקטים קוליים מובנים**: ירי מקלע, ירי לייזר, האצת מכונית מרוץ, תחילת מלחמה, ספירה לאחור.

| ![Recording Module 3](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RM03.png) | ![Recording Module 4](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RM04.png) | ![Recording Module 5](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RM05.png) |
|:---:|:---:|:---:|
| *מבט מהצד (Side View)* | *מבט חזיתי (Front View)* | *מבט מהצד (Side View)* |
| **תרשים חיווט למודול הקלטה Recording Module** | | |

ניתן לחבר את מודול ההקלטה לרכזת החכמה (smart hub) של ה-micro:bit באמצעות ממשק ה-I²C ולשלוט בו באמצעות כתיבת קוד.

## קידוד מודולרי (Modular Coding)

![Recording Module Code](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/RM06.gif)

בתוכנת התכנות MakeCode, באמצעות הוספת הרחבת ה-micro:bit, תוכלו לתכנת את מודול ההקלטה להשמיע את אפקט הקול של "ירי מקלע" (machine gun) כאשר לחצן A נלחץ.`
      }
    ]
  },
  {
    id: "software",
    title: "4. תוכנה והרחבות (Software and Extension Features)",
    chapters: [
      {
        id: "soft-index",
        title: "4. תוכנה והרחבות (ראשי)",
        icon: Settings,
        content: `# תוכנה והרחבות (Software and Extension Features)

ברוכים הבאים לחלק התוכנה וההרחבות של ה-BBC micro:bit. בחלק זה נסקור את פלטפורמת הפיתוח, את שיטות הקידוד השונות ואת הרחבות הקושחה המאפשרות רתימת מלוא העוצמה של החיישנים והמפעילים בערכה.

## מבנה הפרקים (Table of Contents)

### [1. מבוא לתוכנה](#soft-intro)
* **1.1. פונקציות ממשק ה-MakeCode**
  * **1.1.1. ממשק קידוד**
  * **1.1.2. ממשק ניהול פרויקטים ומדריכים**

### [2. קידוד מודולרי](#soft-modular)
* **2.1. ממשק קידוד מודולרי**
  * **2.1.1. מודולי חיישנים**
  * **2.1.2. מודולי מפעילים**
  * **2.1.3. כתיבת בלוקי קוד**
  * **2.1.4. בחירת יציאות / פורטים**
  * **2.1.5. שיפוט לוגי של בלוקי קוד**
  * **2.1.6. הגדרת ערכים לבלוקי קוד**
  * **2.1.7. בלוקי קוד מיוחדים**
* **2.2. בלוקים מתקדמים**
  * **2.2.1. תקשורת טורית (Serial)**
* **2.3. בלוקים אחרים**

### [3. עדכון קושחה](#soft-upgrade)
* **3.1. שיטת שדרוג מנוע סרוו**

### [4. יומן עדכונים של הרחבת micro:bit](#soft-log)`
      },
      { 
        id: "soft-intro", 
        title: "1. מבוא לתוכנה", 
        icon: Settings, 
        content: `# 1. מבוא לתוכנה (Software Introduction)

לשימוש בסיסי בתוכנה, אנא עיינו ב-[**מדריך להתחלה מהירה (Quick Start Guide)**](#quick-start).

## 1.1. פונקציות ממשק ה-MakeCode (MakeCode Interface Functions)

### 1.1.1. ממשק קידוד (Coding Interface)

![Coding Interface](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/S01.png)

| מספר | שם האזור | תיאור |
|:---:|:---|:---|
| ① | אזור קוביות הקוד | אזור זה מכיל את כל קוביות הקוד (Blocks) הנדרשות לפיתוח התוכנית שלך. |
| ② | אזור הקידוד / שטח העבודה | גרור ושחרר קוביות קוד לתוך אזור זה כדי לבנות את התוכנית שלך. |
| ③ | אזור החלפת סוג קוד | כפתורי החלפה בין סוגים שונים של תצוגת קוד. ברירת המחדל היא קוד בלוקים ויזואלי. בצד ימין ניתן לעבור לשפות Python או JavaScript. |
| ④ | אזור פעולות ממשק | הכפתורים כאן הם: ביטול פעולה אחרונה (Undo), ביצוע מחדש (Redo), הקטנה (Zoom Out), והגדלה (Zoom In). |
| ⑤ | אזור סימולציה וניפוי שגיאות | סימולציה ובדיקת הקוד שלכם באזור זה בזמן אמת, צפייה בנתוני תקשורת טורית (Serial) ובמצב החיבור של הרכזת. |
| ⑥ | הורדה | לחיצה על כפתור ההורדה כדי להעביר ולהתקין את התוכנית ישירות לרכזת החצי-מוליכה או החכמה. |
| ⑦ | שמירה | לחיצה על כפתור השמירה כדי לשמור את קובץ הקוד במחשב שלכם. |
| ⑧ | שם הפרויקט | מציג את שם הפרויקט הנוכחי, וניתן ללחוץ עליו כדי לשנות את השם. |
| ⑨ | דף הבית (Home) | לחיצה על כפתור הבית כדי לחזור למסך הראשי של הפלטפורמה. |

> לאחר לחיצה על כפתור הבית בסעיף ⑨, תוכלו לגשת לממשק ניהול הפרויקטים והמדריכים המפורט מטה.

---

### 1.1.2. ממשק ניהול פרויקטים ומדריכים (Project Management and Tutorial Interface)

![Project Management and Tutorial Interface](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/S02.png)

| מספר | פריט | תיאור |
|:---:|:---|:---|
| ① | פרויקט חדש | לחיצה על כפתור הפרויקט החדש כדי ליצור פרויקט קידוד חדש. |
| ② | פרויקטים קודמים | כל הפרויקטים הקודמים ששמרתם יוצגו כאן לגישה מהירה וישירה. |
| ③ | ייבוא פרויקט | לחיצה על כפתור הייבוא כדי להעלות ולפתוח פרויקטים חיצוניים (קבצי \`.hex\`). |
| ④ | הגדרות | לחיצה על כפתור ההגדרות לקביעת הגדרות תוכנה שונות. |
| ⑤ | הצג הכל | אם יש לכם פרויקטים נוספים שאינם מוצגים באזור ②, לחצו על כפתור זה כדי להציג את כולם ביחד. |` 
      },
      { 
        id: "soft-modular", 
        title: "2. קידוד מודולרי", 
        icon: FileText, 
        content: `# 2. קידוד מודולרי (Modular Coding)

## 2.1. ממשק קידוד מודולרי (Modular Coding Interface)

![Modular Coding Interface](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M01.png)

| מספר | פריט | תיאור |
|:---:|:---:|:---|
| ① | בלוקים בסיסיים | בלוקים המסופקים על ידי MakeCode עצמו. |
| ② | הרחבות מיובאות | בלוקי דרייבר המסופקים עבור מודולים היקפיים. |

![Modular Coding GIF 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M02.gif)

הרחבה זו כוללת שתי קטגוריות עיקריות: "חיישנים" (Sensors) ו"מפעילים" (Actuators). בהתאם למאפייני המודול ההיקפי, עליך להשתמש בבלוק המתאים תחת הקטגוריה המתאימה. לדוגמה, כדי להשתמש במודול הפוטנציומטר השייך לחיישנים, עליך למצוא את הבלוק המתאים תחת קטגוריית החיישנים.

לפרטים על הוספת הרחבות, אנא פנו למדריך [התחלה מהירה](#quick-start).

### 2.1.1. מודולי חיישנים (Sensor Modules)

הטבלה להלן מפרטת את סוג הפלט ופרמטרי סוג הנתונים עבור החיישנים המורחבים בערכת ה-micro:bit:

| קוביית קוד (Code Block) | סוג פלט / סוג נתונים (Output Type / Data Type) |
|:---:|:---:|
| photoelectric ארוך טווח (Long-distance Photoelectric) | מתח / אנלוגי (Voltage / Analog) |
| מודול פוטנציומטר (Potentiometer Module) | מתח / אנלוגי (Voltage / Analog) |
| חיישן גווני אפור (Grayscale Sensor) | מתח / אנלוגי (Voltage / Analog) |
| חיישן רגיש לאור (Photosensitive Sensor) | מתח / אנלוגי (Voltage / Analog) |
| חיישן להבה (Flame Sensor) | מתח / אנלוגי (Voltage / Analog) |
| מודול ג'ויסטיק (Joystick Module) | מתח / אנלוגי (Voltage / Analog) |
| חיישן מפלס מים (Water Level Sensor) | מתח / אנלוגי (Voltage / Analog) |
| חיישן גז MQ-2 (MQ-2 Gas Sensor) | מתח / אנלוגי (Voltage / Analog) |
| חיישן לחות קרקע (Soil Moisture Sensor) | מתח / אנלוגי (Voltage / Analog) |
| חיישן טמפרטורה (Temperature Sensor) | מתח / אנלוגי (Voltage / Analog) |
| חיישן פסיבי לאינפרא-אדום PIR (PIR Sensor) | רמה / דיגיטלי (Level / Digital) |
| חיישן הול (Hall Sensor) | רמה / דיגיטלי (Level / Digital) |
| חיישן לחצן (Button Sensor) | רמה / דיגיטלי (Level / Digital) |
| חיישן מרחק אולטרה-סוני (Ultrasonic Sensor) | / |

### 2.1.2. מודולי מפעילים (Actuator Modules)

הטבלה להלן מפרטת את סוג ההינע ופרמטרי סוג הנתונים עבור המפעילים המורחבים בערכת ה-micro:bit:

| קוביית קוד (Code Block) | סוג הינע / סוג נתונים (Drive Type / Data Type) |
|:---:|:---:|
| מודול LED צהוב (Yellow LED Module) | רמה / דיגיטלי (Level / Digital) |
| מודול LED כחול (Blue LED Module) | רמה / דיגיטלי (Level / Digital) |
| מודול LED ירוק (Green LED Module) | רמה / דיגיטלי (Level / Digital) |
| מודול LED אדום (Red LED Module) | רמה / דיגיטלי (Level / Digital) |
| מודול לייזר (Laser Module) | רמה / דיגיטלי (Level / Digital) |
| מודול אלקטרומגנט (Electromagnet Module) | רמה / דיגיטלי (Level / Digital) |
| מודול מאוורר (Fan Module) | PWM |
| מנוע זרם ישר DC (DC Motor) | PWM |
| מודול מסך OLED (OLED Module) | I²C |
| מנוע סרוו (Servo Motor) | I²C |
| מודול הקלטה (Recording Module) | I²C |
| סרוו גיק (Geek Servo) | PWM |
| מודול נוריות RGB (RGB LED Module) | WS2812 |

### 2.1.3. כתיבת בלוקי קוד (Writing Code Blocks)

![Writing Code Blocks](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M03.gif)

יש להציב את קוביות הקוד באזור הקידוד כנדרש. בלוקים שלא מוקמו נכון יסומנו בצבע צהוב זוהר. בלוקים המסומנים בצהוב לא ייכללו בתוכנה שרצה ולא ישפיעו על ביצוע התוכנית.

### 2.1.4. בחירת יציאות / פורטים (Port Selection)

![Port Selection](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M04.gif)

לחצו על הבחירה של הפורט לאחר קוביית הקוד כדי לבחור את הפין או היציאה המתאימה ולחבר את הפורט התואם ברכזת (smart hub) למכשיר. הפורטים הזמינים משתנים עבור כל קוביית קוד. ודאו שהמכשיר מחובר לפורט הנכון שנבחר בקוד, כיוון שחיבור לפורטים אחרים עלול לגרום לתקלות והתנהגות לא צפויה.

> **הערה**: ודאו שאתם מחברים את המכשיר ליציאה הנכונה ברכזת. חיבורים שגויים או רופפים עלולים לגרום לתוכנית לא לפעול כמצופה.

### 2.1.5. שיפוט לוגי של בלוקי קוד (Logic Judgment for Code Blocks)

![Logic Judgment](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M05.gif)

קוביות קוד משושות כמו בלוק "זיהוי ג'ויסטיק" (Joystick Detected) יכולות לשמש לצורך שיפוט ותנאים לוגיים בעזרת משפטים כמו \`אם...\` (If...). כאשר התנאי של הבלוק מתקיים (לדוגמה, הג'ויסטיק נדחף כלפי מעלה), הוא יחזיר אמת (True) ויבצע את הקוד שמתחת ל-\`אז...\` (Then).

### 2.1.6. הגדרת ערכים לבלוקי קוד (Setting Values for Code Blocks)

![Setting Values](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M06.gif)

קוביות קוד בעלות תיבת קלט אובלית לבנה מאפשרות לכם להזין מספרים ישירות או להגדיר משתנים שימלאו את תיבת הקלט. הערכים בתיבת הקלט אינם מוגבלים, אך עליכם להזין את טווח המספרים הנכון בהתאם לכללי השימוש של המודול. אחרת, המודול עלול לפעול באופן לא תקין.

### 2.1.7. בלוקי קוד מיוחדים (Special Code Blocks)

#### 2.1.7.1. מודול נוריות RGB (RGB Block)

![RGB Block 1](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M07.png)

לאחר גרירת בלוק תאורת ה-RGB, המערכת תיצור אוטומטית משתנה בשם \`strip\`. כל התאמה או שינוי של נוריות ה-RGB יצטרכו להתבסס ולהתייחס למשתנה ספציפי זה.

> **הערה**: מודול נוריות ה-RGB יכול לכוונן את כל הנוריות באופן אחיד בלבד, ולא ניתן לקבוע צבעים שונים עבור כל נורית בנפרד.

![RGB Block 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M08.png)

בדוגמת הקוד המצולמת, במהלך שלב האתחול כאשר התוכנית מתחילה (\`on start\`), היא מגדירה תחילה את פורט החיבור ואת עוצמת הבהירות של נוריות ה-RGB; בהמשך, בלולאה אינסופית (\`forever\`), התוכנית קובעת את צבע ה-RGB ללבן, מה שאומר שערכי הבהירות עבור אדום (Red), ירוק (Green) וכחול (Blue) מוגדרים כולם ל-255.

#### 2.1.7.2. בלוק בקרה אלחוטית (Wireless Block)

| | בלוקי שליטה אלחוטית (Wireless Control Blocks) | | |
|:---:|:---:|:---:|:---:|
| **בלוק קוד** | ![Group](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M09.png) | ![Send](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M10.png) | ![Receive](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M11.png) |
| **תיאור** | בלוק הגדרת קבוצה (Set Group) | בלוק שליחת מידע (Send Information) | בלוק קבלת מידע (Receive Information) |

בקרה אלחוטית משתמשת בתדר תדרי 2.4GHz כמדיום תקשורת, ומאפשרת תקשורת אלחוטית ושליטה הדדית בין מספר רכזות חכמות. ראשית, יש להגדיר את אותה קבוצה (ערוץ תקשורת) ברכזות השונות. רכזות באותה קבוצה יכולות לשלוח ולקבל מידע באמצעות "בלוק שליחת מידע" ו"בלוק קבלת מידע".

| קוד | ![Group Code](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M12.png) | ![Group Code 2](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M13.png) |
|:---:|:---:|:---:|
| **תפקיד** | שולח (Sender) | מקבל (Receiver) |

בעת ההפעלה (\`on start\`), השולח והמקבל מוגדרים לאותה קבוצה (בדוגמה זו, נקבע לקבוצה שמספרה 1).

* **השולח (Sender)**: כאשר כפתור "A" נלחץ, נשלח המספר "0". כאשר כפתור "B" נלחץ, נשלח המספר "1".
* **המקבל (Receiver)**: תחילה מקבל את הנתונים ולאחר מכן מזהה אותם. אם הנתונים שנתקבלו הם "0", הוא מכבה את ה-LED הצהוב. אם הנתונים שנתקבלו הם "1", הוא מדליק את ה-LED הצהוב.

---

## 2.2. בלוקים מתקדמים (Advanced Block)

![Advanced Gifs](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M14.gif)

### 2.2.1. תקשורת טורית (Serial)

תקשורת טורית (Serial) משמשת לעתים קרובות לקריאת ערכי מדידה ממודולים שונים והצגתם בצורת דיאגרמות קו וגרפים בזמן אמת. כמו כן, ניתן להשתמש בה לצורך ניפוי שגיאות בקוד (Debugging) על ידי שליחת מידע למחשב כדי לציין שפעולה מסוימת בוצעה בהצלחה לאחר עמידה בתנאים מוגדרים.

![Serial Blocks](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M15.png)

בדוגמה שלעיל, פקודת הכתיבה הטורית הראשונה שולחת את המחרוזת "123" למחשב, בעוד שפקודת הכתיבה הטורית השנייה שולחת את ערך קריאת חיישן האור ישירות למחשב.

כאשר שולחים רק את ערך חיישן האור, תוכלו ללחוץ על כפתור "הצג נתוני מכשיר" (Show Data Device) בצד שמאל של הממשק כדי לצפות בגרף וצורת הגל (waveform) המשתנה בצורה דינמית בהתאם לחשיפה או הסתרה של חיישן האור.

![Serial Gif](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/M16.gif)

---

## 2.3. בלוקים אחרים (Other Blocks)

עבור בלוקים אחרים ופונקציות נוספות שלא הוזכרו לעיל, אנא עיינו בפרק סקירת המאפיינים (Feature Overview).` 
      },
      { 
        id: "soft-upgrade", 
        title: "3. עדכון קושחה", 
        icon: Settings, 
        content: `# 3. עדכון קושחה (Firmware Upgrade)

לצורך הבטחת תפקוד תקין, יציב ומהיר של הרכיבים האלקטרוניים השונים בערכה, ובמיוחד הרכזת החכמה והמנועים השונים, קיימת אפשרות לשדרוג גרסאות הקושחה (Firmware).

## 3.1. שיטת שדרוג מנוע סרוו (Servo Motor Upgrade Method)

מרכז עדכון קושחה (Firmware Upgrade Center): [https://update.icrobot.cn/](https://update.icrobot.cn/)

| | |
|:---:|:---:|
| ![F01](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/F01.gif) | ![F02](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/F02.gif) |
| **1.** הכינו רכיב **ICLink 2.0** אחד, כוונו את מתג ה-SWD ימינה, ואת מתג קדימה/אחורה (forward/reverse) שמאלה. | **2.** השתמשו בכבל Grove כדי לחבר את מנוע הסרוו לפורט J1 ב-ICLink 2.0, ולאחר מכן חברו את ה-ICLink 2.0 למחשב. |
| ![F03](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/F03.gif) | ![F04](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/F04.gif) |
| **3.** לחצו והחזיקו את הכפתור האמצעי של המנוע ובמקביל לחצו על כפתור האיפוס (Reset) ב-**ICLink 2.0**. נורית החיווי של המנוע תשתנה למצב צבעי הקשת (Rainbow). | **4.** פתחו את מרכז עדכוני הקושחה, בחרו במודול מנוע הסרוו (Servo Motor Module), ואז בחרו את גרסת הקושחה המתאימה לשדרוג. |
| ![F05](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/F05.gif) | ![F06](https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/F06.gif) |
| **5.** לחצו על "חיבור" (Connect), בחרו את הפורט הטורי (Serial Port) של המנוע, ולאחר שהחיבור מצליח, סגרו את החלונית. | **6.** לחצו על "שדרוג" (Upgrade) והמתינו עד שסרגל ההתקדמות יושלם במלואו. |` 
      },
      { 
        id: "soft-log", 
        title: "4. יומן עדכונים של הרחבת micro:bit", 
        icon: FileText, 
        content: `# 4. יומן עדכונים של הרחבת micro:bit (micro:bit Extension Update Log)

| גרסה (Version) | תוכן העדכון (Update Content) | תאריך עדכון (Update Date) |
|:---:|:---|:---:|
| [V1.1.8](https://github.com/ICreateRobot/microbit) | 1. תקינה קבועה של מוסכמת השמות להרחבות (Standardized extension naming)<br/>2. עדכון פרוטוקול התקשורת (גרסת 4 סיביות / 4-bit)<br/>3. עדכון פרוטוקול התקשורת של מנוע הסרוו (גרסת 5 סיביות / 5-bit)<br/>4. אופטימיזציה של בקרת מנוע כפול עם \`[speed1][speed2]\` להסתובבות למשך \`[time]\` שניות<br/>5. הסרת מנגנון זיהוי נעילה (stall detection) כאשר מנוע פועל למשך \`*\` שניות<br/>6. אופטימיזציה של מנוע סרוו: תיקון בעיית סיבוב לא תקין של המנוע השמאלי כאשר זווית המיקום \`[location]\` שלילית בתצורת מנוע כפול<br/>7. אופטימיזציה של מנוע סרוו: תיקון בעיית נעילה וקפיאה בתצורת מנוע כפול עם \`[speed1][speed2]\` לסיבוב של \`[location]\` מעלות<br/>8. אופטימיזציה של מנוע סרוו: תיקון בעיית קיפאון במנוע \`[dev]\` לסיבוב מ-\`[speed]\` אל \`[location]\` במודול | 2024-09-03 |` 
      }
    ]
  },
  {
    id: "course",
    title: "5. מקרי בוחן ושיעורים (Course Case)",
    chapters: [
      { 
        id: "course-all", 
        title: "5.1 מערכי שיעור מובנים", 
        icon: CheckCircle, 
        content: `# 5.1 מגוון פרויקטים\n\nבצעו את התרגילים המלאים המגיעים עם הערכה.\n\n${getImgPlaceholder("1_Page40_Image1.jpg", "פרויקט מלא מסוים מתוך הקורס")}` 
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "6. פתרון תקלות (Troubleshooting)",
    chapters: [
      { 
        id: "trouble", 
        title: "6.1 בעיות נפוצות", 
        icon: AlertTriangle, 
        content: `# 6.1 פתרון תקלות נפוצות\n\n* **הלוח לא נדלק:** ודאו שסוללות מותקנות כראוי.\n* **לא ניתן להוריד תוכנית:** בדקו את כבל ה-USB.\n* **מנוע חם או רועד:** הורידו את העומס ועדכנו קושחה.\n\n${getImgPlaceholder("1_Page86_Image1.jpg", "בדיקת לוח")}` 
      }
    ]
  }
];
