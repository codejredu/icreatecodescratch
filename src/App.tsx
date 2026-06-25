/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { sections } from './data';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(sections[0].chapters[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Flatten chapters for easy previous/next navigation
  const allChapters = sections.flatMap(s => s.chapters);
  const activeChapter = allChapters.find((c) => c.id === activeChapterId) || allChapters[0];

  const getAssetUrl = (path: string | undefined) => {
    if (!path) return '';
    // If it's an external URL, return as is
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const base = import.meta.env.BASE_URL || '/';
    return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const query = searchQuery.toLowerCase();
    
    return sections.map(section => ({
      ...section,
      chapters: section.chapters.filter(chapter => 
        chapter.title.toLowerCase().includes(query) || 
        chapter.content.toLowerCase().includes(query)
      )
    })).filter(section => section.chapters.length > 0);
  }, [searchQuery]);

  return (
    <div className="flex h-screen bg-[#edf0f2] text-slate-900 font-sans" dir="rtl">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (ReadTheDocs Style - Menu on Right) */}
      <aside 
        className={`fixed inset-y-0 right-0 z-30 w-[300px] bg-[#343131] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex shrink-0 items-center justify-between p-6 bg-[#2980B9] text-white">
          <h1 className="text-xl font-bold">iCreateRobot Docs</h1>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-white/80 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 bg-[#2e2b2b]">
          <input 
            type="text" 
            placeholder="חיפוש במסמכים..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#edf0f2] text-slate-800 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2980B9]"
          />
        </div>

        <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar">
          {filteredSections.length === 0 ? (
            <div className="text-white/50 text-center text-sm mt-4">
              לא נמצאו תוצאות לחיפוש.
            </div>
          ) : (
            filteredSections.map((section) => (
              <div key={section.id} className="mb-4">
                <h3 className="text-xs font-bold text-white/40 mb-1 px-4 uppercase tracking-wider">{section.title}</h3>
                <div className="space-y-0.5">
                  {section.chapters.map((chapter) => {
                    const Icon = chapter.icon;
                    const isActive = chapter.id === activeChapterId;
                    return (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setActiveChapterId(chapter.id);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-right transition-colors ${isActive ? 'bg-[#2980B9] text-white font-semibold' : 'text-[#c9c9c9] hover:bg-[#403c3c] hover:text-white'}`}
                      >
                        {Icon && <Icon size={16} className={isActive ? 'text-white' : 'text-white/50'} />}
                        <span className="text-[14px] text-right line-clamp-2">{chapter.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-white md:bg-[#edf0f2]">
        {/* Mobile Header */}
        <header className="md:hidden shrink-0 bg-[#2980B9] text-white p-4 flex items-center justify-between z-10 shadow-md">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-bold">iCreateRobot Docs</h1>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto md:p-8 scroll-smooth">
          <div className="max-w-4xl mx-auto bg-white md:shadow-sm md:border border-slate-200 p-6 md:p-10 min-h-full">
            
            {/* Breadcrumb style top */}
            <div className="flex flex-wrap bg-[#edf0f2] md:bg-transparent rounded px-4 py-2 md:p-0 mb-8 border border-slate-200 md:border-none items-center text-sm text-slate-500 gap-2" dir="rtl">
              <button onClick={() => setActiveChapterId(sections[0].chapters[0].id)} className="cursor-pointer hover:text-[#2980B9] transition-colors focus:outline-none" dir="auto">Docs</button>
              <ChevronLeft size={14} className="opacity-50 shrink-0" />
              <button 
                onClick={() => {
                  const section = sections.find(s => s.chapters.some(c => c.id === activeChapterId));
                  if (section) setActiveChapterId(section.chapters[0].id);
                }}
                className="cursor-pointer hover:text-[#2980B9] transition-colors focus:outline-none"
                dir="auto"
              >
                {sections.find(s => s.chapters.some(c => c.id === activeChapterId))?.title}
              </button>
              <ChevronLeft size={14} className="opacity-50 shrink-0" />
              <span className="text-slate-800 font-medium" dir="auto">{activeChapter.title}</span>
            </div>

            <div className="markdown-body prose prose-slate max-w-none prose-headings:text-slate-800 prose-a:text-[#2980B9]">
              {activeChapter.id === 'intro-parts' ? (
                <div className="parts-list-container">
                  <h1 className="text-[32px] font-bold mb-6 text-black mt-8" style={{ fontFamily: 'var(--font-display)' }}>1.2 רשימת חלקים</h1>
                  <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-slate-200">
                    {[
                      { img: './1_Page9_Image1.jpg', name: 'רכזת חכמה micro:bit' },
                      { img: './1_Page9_Image2.jpg', name: 'מנוע סרוו' },
                      { img: './1_Page9_Image3.jpg', name: 'מנוע DC' },
                      { img: './1_Page9_Image4.jpg', name: 'מנוע סרוו Geek' },
                      { img: './1_Page9_Image5.jpg', name: 'מודול פוטנציומטר' },
                      { img: './1_Page9_Image6.jpg', name: 'מודול ג\'ויסטיק' },
                      { img: './1_Page9_Image7.jpg', name: 'מודול נורות RGB' },
                      { img: './1_Page9_Image8.jpg', name: 'מודול מאוורר' },
                      { img: './1_Page9_Image9.jpg', name: 'מודול הקלטה' },
                      { img: './1_Page9_Image10.jpg', name: 'מודול מסך OLED' },
                      { img: './1_Page9_Image11.jpg', name: 'מודול לייזר' },
                      { img: './1_Page9_Image12.jpg', name: 'מודול אלקטרומגנט' },
                      { img: './1_Page9_Image13.jpg', name: 'מודול LED אדומה' },
                      { img: './1_Page9_Image14.jpg', name: 'מודול LED צהובה' },
                      { img: './1_Page9_Image15.jpg', name: 'מודול LED כחולה' },
                      { img: './1_Page9_Image16.jpg', name: 'מודול LED ירוקה' },
                      { img: './1_Page9_Image17.jpg', name: 'חיישן אולטראסוני' },
                      { img: './1_Page9_Image18.jpg', name: 'חיישן גז MQ-2' },
                      { img: './1_Page9_Image19.jpg', name: 'חיישן תנועה PIR' },
                      { img: './1_Page9_Image20.jpg', name: 'חיישן טמפרטורה' },
                      { img: './1_Page9_Image21.jpg', name: 'חיישן להבה' },
                      { img: './1_Page9_Image22.jpg', name: 'חיישן מגנטי (Hall)' },
                      { img: './1_Page9_Image23.jpg', name: 'חיישן גווני אפור' },
                      { img: './1_Page9_Image24.jpg', name: 'חיישן אור' },
                      { img: './1_Page9_Image25.jpg', name: 'חיישן כפתור' },
                      { img: './1_Page9_Image26.jpg', name: 'חיישן לחות אדמה' },
                      { img: './1_Page9_Image27.jpg', name: 'חיישן מפלס מים' },
                      { img: './1_Page9_Image28.jpg', name: 'חיישן פוטואלקטרי לטווח ארוך' },
                      { img: './1_Page9_Image29.jpg', name: 'חיישן צבע אופטי 6 כיוונים' },
                      { img: './1_Page9_Image30.jpg', name: 'כבל Grove' },
                      { img: './1_Page9_Image31.jpg', name: 'כבל Grove זכר-נקבה' },
                    ].map((item, index) => (
                      <div key={index} className="border-r border-b border-slate-200 bg-white flex flex-col items-center justify-between">
                        <div className="flex-1 flex items-center justify-center p-4">
                          {item.img && <img src={getAssetUrl(item.img)} alt={item.name} className="max-w-[150px] max-h-[150px] object-contain border-0 shadow-none my-0" />}
                        </div>
                        <div className="w-full text-center p-3 bg-slate-50 border-t border-slate-200 text-sm font-medium text-slate-700 min-h-[48px] flex items-center justify-center">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-s-4 border-s-gray-300 ps-4 py-1 my-4 text-gray-500 bg-gray-50 rounded-e-lg mt-8">
                    <p>התמונות מציגות את המודולים והחיישנים הכלולים בערכה.</p>
                    <p>אנא התייחסו למוצר בפועל עבור התמונות המדויקות.</p>
                  </blockquote>

                  <h2 className="text-2xl font-bold mb-4 text-[#2980B9] mt-8 pb-2" style={{ fontFamily: 'var(--font-display)' }}>1.3 רשימת הרכיבים האלקטרוניים בערכה</h2>
                  
                  <div className="overflow-x-auto" dir="rtl">
                    <table className="w-full mb-6 border-collapse border border-slate-200 text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-100 font-bold">
                          <th className="p-3 border border-slate-200 text-right">פריט</th>
                          <th className="p-3 border border-slate-200 text-right">ערכת קידוד AI</th>
                          <th className="p-3 border border-slate-200 text-right">ערכת סופר AI</th>
                          <th className="p-3 border border-slate-200 text-right">ערכת בית חכם</th>
                          <th className="p-3 border border-slate-200 text-right">ערכת בסיס</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['רכזת חכמה micro:bit', '1', '1', '1', '1'],
                          ['מנוע סרוו', '—', '2', '—', '—'],
                          ['מנוע DC', '4', '—', '4', '—'],
                          ['מנוע סרוו Geek', '2', '2', '2', '—'],
                          ['מודול פוטנציומטר', '1', '1', '1', '—'],
                          ['מודול ג\'ויסטיק', '—', '1', '—', '1'],
                          ['מודול טבעת נורות RGB', '1', '1', '—', '—'],
                          ['מודול מאוורר', '1', '1', '—', '—'],
                          ['מודול הקלטה', '—', '1', '—', '—'],
                          ['מודול מסך OLED', '1', '1', '1', '—'],
                          ['מודול לייזר', '1', '1', '1', '—'],
                          ['מודול אלקטרומגנט', '1', '1', '—', '—'],
                          ['מודול LED אדומה', '1', '1', '1', '—'],
                          ['מודול LED צהובה', '1', '1', '1', '—'],
                          ['מודול LED כחולה', '1', '1', '1', '—'],
                          ['מודול LED ירוקה', '1', '1', '1', '—'],
                          ['חיישן אולטראסוני', '1', '1', '1', '—'],
                          ['חיישן גז MQ-2', '1', '1', '—', '—'],
                          ['חיישן תנועה PIR', '—', '1', '—', '—'],
                          ['חיישן טמפרטורה', '1', '1', '—', '—'],
                          ['חיישן להבה', '1', '1', '—', '—'],
                          ['חיישן מגנטי (Hall)', '1', '1', '1', '—'],
                          ['חיישן גווני אפור', '2', '2', '2', '—'],
                          ['חיישן אור', '1', '1', '—', '—'],
                          ['חיישן כפתור', '1', '1', '1', '3'],
                          ['חיישן לחות אדמה', '1', '1', '—', '—'],
                          ['חיישן מפלס מים', '1', '1', '—', '—'],
                          ['חיישן פוטואלקטרי לטווח ארוך', '1', '1', '—', '—'],
                          ['כבל Grove', '10', '10', '10', '10'],
                          ['כבל Grove זכר-נקבה', '10', '10', '10', '—'],
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                            <td className="p-2 sm:p-3 text-right border border-slate-200">{row[0]}</td>
                            <td className="p-2 sm:p-3 text-right border border-slate-200">{row[1]}</td>
                            <td className="p-2 sm:p-3 text-right border border-slate-200">{row[2]}</td>
                            <td className="p-2 sm:p-3 text-right border border-slate-200">{row[3]}</td>
                            <td className="p-2 sm:p-3 text-right border border-slate-200">{row[4]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeChapter.id === 'quick-start' ? (
                <div className="quick-start-container font-sans text-[#404040]">
                  <h1 className="text-[32px] font-bold mb-6 text-black mt-8" style={{ fontFamily: 'var(--font-display)' }}>התחלה מהירה</h1>
                  
                  <p className="mb-4 text-[#404040]">
                    מדריך זה יעזור לכם להתחיל במהירות עם <strong>הרכזת החכמה micro:bit Smart Hub</strong> וידריך אתכם בפיתוח יישומים עם דוגמה מעשית. בדוגמה זו נראה כיצד לשלוט במאוורר ובנורית ה-LED האדומה באמצעות לחיצות כפתור.
                  </p>
                  <ul className="list-disc list-inside mb-6 text-[#404040]">
                    <li><strong>לחיצה על הכפתור</strong>: המאוורר פועל, ונורית ה-LED האדומה נדלקת.</li>
                    <li><strong>שחרור הכפתור</strong>: המאוורר עוצר, ונורית ה-LED האדומה נכבית.</li>
                  </ul>

                  <h2 className="text-[24px] font-bold mb-4 mt-8" style={{ color: 'rgb(42, 43, 46)' }}>הכנת חומרה (Hardware Preparation)</h2>
                  
                  <div className="overflow-x-auto mb-8" dir="rtl">
                    <table className="w-full border-collapse border border-[#e1e4e5]" style={{ tableLayout: 'fixed' }}>
                      <tbody>
                        <tr className="border-b border-[#e1e4e5] bg-white">
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/1_Page9_Image1.jpg")} alt="micro:bit Smart Hub" className="max-w-[75%] inline-block m-0" />
                          </td>
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/1_Page9_Image25.jpg")} alt="Button Sensor" className="max-w-[75%] inline-block m-0" />
                          </td>
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/1_Page9_Image30.jpg")} alt="Grove Cables" className="max-w-[75%] inline-block m-0" />
                          </td>
                        </tr>
                        <tr className="border-b border-[#e1e4e5] bg-[#f3f6f6]">
                          <td className="p-2 text-right border border-[#e1e4e5] text-sm text-[#404040]">micro:bit Smart Hub ×1</td>
                          <td className="p-2 text-right border border-[#e1e4e5] text-sm text-[#404040]">חיישן כפתור ×1</td>
                          <td className="p-2 text-right border border-[#e1e4e5] text-sm text-[#404040]">כבלי Grove ×3</td>
                        </tr>
                        <tr className="border-b border-[#e1e4e5] bg-white">
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/1_Page9_Image8.jpg")} alt="Fan Module" className="max-w-[75%] inline-block m-0" />
                          </td>
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/1_Page9_Image13.jpg")} alt="Red LED" className="max-w-[75%] inline-block m-0" />
                          </td>
                          <td className="p-3 border border-[#e1e4e5]"></td>
                        </tr>
                        <tr className="border-b border-[#e1e4e5] bg-[#f3f6f6]">
                          <td className="p-2 text-right border border-[#e1e4e5] text-sm text-[#404040]">מודול מאוורר ×1</td>
                          <td className="p-2 text-right border border-[#e1e4e5] text-sm text-[#404040]">מודול LED אדומה ×1</td>
                          <td className="p-2 border border-[#e1e4e5] bg-[#f3f6f6]"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-[19px] font-bold mb-4 mt-8" style={{ color: 'rgb(13, 13, 13)' }}>הפעלת הרכזת החכמה (Power on the micro:bit Smart Hub)</h3>
                  
                  <div className="overflow-x-auto mb-6" dir="rtl">
                    <table className="w-full border-collapse border border-[#e1e4e5]" style={{ tableLayout: 'fixed' }}>
                      <tbody>
                        <tr className="border-b border-[#e1e4e5] bg-white">
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/PowerOn.jpg")} alt="Power on" className="max-w-[85%] inline-block m-0" />
                          </td>
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/BatteryIndicator.jpg")} alt="Battery indicator" className="max-w-[85%] inline-block m-0" />
                          </td>
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src={getAssetUrl("/ChargingPort.jpg")} alt="Charging port" className="max-w-[85%] inline-block m-0" />
                          </td>
                        </tr>
                        <tr className="border-b border-[#e1e4e5] bg-[#f3f6f6]">
                          <td className="p-2 border border-[#e1e4e5] h-[30px]"></td>
                          <td className="p-2 border border-[#e1e4e5] h-[30px]"></td>
                          <td className="p-2 border border-[#e1e4e5] h-[30px]"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="mb-8 text-[#404040]">
                    לחצו לחיצה ממושכת על כפתור ההפעלה כדי להדליק את המכשיר. לאחר ההפעלה, בדקו את מצב הסוללה. למכשיר יש ארבע נוריות חיווי המייצגות את רמות הסוללה הבאות: 25%, 50%, 75%, ו-100%. אם רק נורית אחת מהבהבת, הדבר מצביע על סוללה חלשה. במקרה זה, השתמשו בכבל micro USB כדי לחבר את המכשיר למטען לטעינה מחדש. ארבע הנוריות יאירו ברצף כאשר הסוללה טעונה במלואה.
                  </p>
                  
                  <h3 className="text-[19px] font-bold mb-4 mt-8" style={{ color: 'rgb(13, 13, 13)' }}>חיבור מודולי הפוטנציומטר, המאוורר וה-LED האדומה לרכזת החכמה</h3>
                  
                  <p className="mb-4 text-[#404040]">
                    בעת החיבור, ודאו שכבלי ה-Grove מחוברים כהלכה, תוך שימת לב לכיוון. כבלים אלו מיועדים למנוע הכנסה הפוכה, לכן ודאו שהם מוכנסים עד הסוף עם מגע תקין.
                  </p>

                  <div className="mb-4 text-center">
                    <img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/09QuickStart.png" alt="Connection" className="mx-auto max-w-full inline-block m-0" />
                  </div>

                  <p className="mb-10 text-[#404040]">
                    בשלב זה, הכנת החומרה לדוגמת ההתחלה המהירה הושלמה. כעת, נמשיך בתכנות <strong>הרכזת החכמה micro:bit</strong>.
                  </p>

                  <h2 className="text-[24px] font-bold mb-4 mt-8" style={{ color: 'rgb(26, 26, 26)' }}>הכנת תוכנה (Software Preparation)</h2>
                  
                  <p className="mb-4 text-[#404040]">
                    <strong>הרכזת החכמה micro:bit</strong> מבוססת על לוח הליבה של micro:bit, וניתן להשתמש בכל תוכנה התומכת ב-micro:bit לשם תכנות. מדריך זה משתמש ב-<strong>Microsoft MakeCode for micro:bit</strong>.
                  </p>

                  <h3 className="text-[19px] font-bold mb-4 mt-8 text-[#0d0d0d]">השגת התוכנה (Get the Software)</h3>
                  <p className="mb-4 text-[#404040]">
                    ניתן להשתמש בתוכנת התכנות בשתי דרכים: באופן מקוון דרך <a href="https://makecode.microbit.org/#editor" target="_blank" rel="noopener noreferrer" className="text-[#2980B9] underline">פלטפורמת הענן</a>, או על ידי הורדה והתקנה של <a href="https://makecode.microbit.org/offline-app" target="_blank" rel="noopener noreferrer" className="text-[#2980B9] underline">התוכנה המקומית</a>. במדריך זה, נשתמש בפלטפורמת התכנות המקוונת.
                  </p>
                  <p className="mb-4 text-[#404040]">
                    היכנסו לקישור לעיל כדי לגשת לפלטפורמת התכנות המקוונת, שם תראו את הממשק הראשי כפי שמוצג למטה.
                  </p>
                  <div className="mb-4">
                    <img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/10QuickStart.png" alt="MakeCode Platform" className="max-w-[800px] w-full mx-auto" />
                  </div>

                  <h3 className="text-[19px] font-bold mb-4 mt-8 text-[#0d0d0d]">השגת ההרחבה (Get the Extension)</h3>
                  <p className="mb-4 text-[#404040]">
                    לפלטפורמת הקידוד <strong>MakeCode</strong> יש <strong>הרחבת micro:bit</strong> ייעודית עבור <strong>הרכזת החכמה micro:bit</strong>. ניתן להוסיף הרחבה זו לגרסאות המקוונות והמקומיות של הפלטפורמה. <a href="https://drive.google.com/drive/folders/1BelSOfzXOhKQjtSsvhnTnV4FC-a3zJ6A" target="_blank" rel="noopener noreferrer" className="text-[#2980B9] underline">לחצו כאן</a> להורדת הגרסה העדכנית ביותר של <strong>הרחבת ה-micro:bit</strong>, וחלצו אותה למחשב שלכם.
                  </p>

                  <h3 className="text-[19px] font-bold mb-4 mt-8 text-[#0d0d0d]">הוספת ההרחבה (Add the Extension)</h3>
                  <p className="mb-4 text-[#404040]">
                    בצעו את השלבים הבאים כדי להוסיף את <strong>הרחבת ה-micro:bit</strong> לפלטפורמת <strong>MakeCode</strong>:
                  </p>
                  <p className="mb-2 font-bold text-[#0d0d0d]">שלב 1:</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/11QuickStart.png" alt="Step 1" className="max-w-[800px] w-full" /></p>
                  <p className="mb-2 font-bold text-[#0d0d0d]">שלב 2:</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/12QuickStart.png" alt="Step 2" className="max-w-[800px] w-full" /></p>
                  <p className="mb-2 font-bold text-[#0d0d0d]">שלב 3:</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/13QuickStart.png" alt="Step 3" className="max-w-[800px] w-full" /></p>
                  <p className="mb-2 font-bold text-[#0d0d0d]">שלב 4:</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/14QuickStart.png" alt="Step 4" className="max-w-[800px] w-full" /></p>
                  <p className="mb-2 font-bold text-[#0d0d0d]">שלב 5:</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/15QuickStart.png" alt="Step 5" className="max-w-[800px] w-full" /></p>
                  
                  <p className="mb-4 text-[#404040]">התהליך הכללי להוספת הרחבה הוא כדלקמן:</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/16QuickStart.gif" alt="gif" className="max-w-[800px] w-full" /></p>
                  <p className="mb-10 text-[#404040]">
                    לאחר השלמת שלבים אלו, ההרחבה תתווסף בהצלחה.
                  </p>

                  <h3 className="text-[19px] font-bold mb-4 mt-8 text-[#0d0d0d]">התחלת קידוד (Start Coding)</h3>
                  <p className="mb-4 text-[#404040]">כעת, בואו נכתוב תוכנית דוגמה בפלטפורמת התכנות.</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/17QuickStart.png" alt="Program logic" className="max-w-[600px] w-full" /></p>
                  <p className="mb-4 text-[#404040]">
                    תוכנית זו תאפשר למאוורר ולנורית ה-LED האדומה להידלק כאשר הכפתור נלחץ, ולהיכבות כאשר הכפתור משוחרר.
                  </p>
                  <p className="mb-4 text-[#404040]">תהליך הקידוד הוא כדלקמן:</p>
                  <p className="mb-10"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/18QuickStart.gif" alt="Coding GIF" className="max-w-[800px] w-full" /></p>

                  <h2 className="text-[24px] font-bold mb-4 mt-8" style={{ color: 'rgb(26, 26, 26)' }}>הורדת התוכנית (Program Download)</h2>
                  <p className="mb-4 text-[#404040]">כעת ניתן לחבר את הרכזת למחשב ולהוריד את התוכנית.</p>
                  <p className="mb-4 text-[#404040]"><strong>שלב 1:</strong> השתמשו בכבל microUSB כדי לחבר את הרכזת למחשב שלכם.</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/19QuickStart.png" alt="Connect microUSB" className="max-w-[600px] w-full" /></p>
                  <p className="mb-4 text-[#404040]"><strong>שלב 2:</strong> חברו את המכשיר לפלטפורמת הקידוד והורידו את התוכנית.</p>
                  <p className="mb-4"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/20QuickStart.gif" alt="Download GIF" className="max-w-[800px] w-full" /></p>
                  <p className="mb-2 font-bold text-[#404040]">הערות:</p>
                  <p className="mb-4 text-[#404040]">
                    לפעמים, עקב חיבור USB לא יציב, ההורדה עלולה להיכשל. כפי שמוצג למטה, הצד ימין מראה הורדה מוצלחת, בעוד הצד שמאל מראה הורדה שנכשלה. אם ההורדה נכשלת, התוכנית תישמר כקובץ <code>.hex</code> במחשב שלכם. במקרה של כישלון, אנא נתקו וחברו מחדש את כבל ה-USB בין המחשב לרכזת, וחזרו על שלב 2.
                  </p>

                  <div className="overflow-x-auto mb-10" dir="rtl">
                    <table className="w-full border-collapse border border-[#e1e4e5]" style={{ tableLayout: 'fixed' }}>
                      <tbody>
                        <tr className="border-b border-[#e1e4e5] bg-white">
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/21QuickStart.png" alt="Success" className="max-w-[80%] mx-auto" />
                          </td>
                          <td className="p-3 text-center border border-[#e1e4e5] align-middle">
                            <img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/22QuickStart.png" alt="Fail" className="max-w-[80%] mx-auto" />
                          </td>
                        </tr>
                        <tr className="border-b border-[#e1e4e5] bg-[#f3f6f6]">
                          <td className="p-4 text-right border border-[#e1e4e5] text-sm text-[#404040] align-top">
                            <strong>הורדה מוצלחת</strong>: כאשר מופיעה ההודעה "Downloaded".
                          </td>
                          <td className="p-4 text-right border border-[#e1e4e5] text-sm text-[#404040] align-top">
                            <strong>הורדה נכשלה</strong>: כאשר מופיעה ההודעה "Download Complete", והקובץ נשמר למחשב שלכם דרך הדפדפן.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-[24px] font-bold mb-4 mt-8" style={{ color: 'rgb(13, 13, 13)' }}>הרצת התוכנית (Run the Program)</h2>
                  <p className="mb-10"><img src="https://icreaterobot-microbit-docs.readthedocs.io/en/latest/_images/23QuickStart.gif" alt="Run GIF" className="max-w-[500px] w-full" /></p>

                </div>
              ) : (
                <Markdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({node, ...props}) => <div className="overflow-x-auto" dir="rtl"><table className="w-full mb-6 border-collapse border border-slate-200 text-sm" {...props} /></div>,
                    thead: ({node, ...props}) => <thead className="bg-slate-100" {...props} />,
                    tr: ({node, ...props}) => <tr className="border-b border-slate-200 even:bg-slate-50 odd:bg-white" {...props} />,
                    th: ({node, align, style, ...props}) => <th className="p-3 border border-slate-200 text-right font-bold" dir="rtl" style={{ ...style, textAlign: 'right' }} {...props} />,
                    td: ({node, align, style, ...props}) => <td className="p-3 border border-slate-200 text-right" dir="rtl" style={{ ...style, textAlign: 'right' }} {...props} />,
                    a: ({node, href, children, ...props}) => {
                      if (href?.startsWith('#')) {
                        return (
                          <a 
                            href={href} 
                            onClick={(e) => {
                              e.preventDefault();
                              const targetId = href.substring(1);
                              setActiveChapterId(targetId);
                            }}
                            className="cursor-pointer"
                            {...props}
                          >
                            {children}
                          </a>
                        );
                      }
                      return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                    },
                    img: ({node, src, alt, ...props}) => {
                      return <img src={getAssetUrl(src)} alt={alt} className="max-w-full my-4 rounded-lg shadow-sm border border-slate-100 animate-fade-in" {...props} />;
                    }
                  }}
                >
                  {activeChapter.content}
                </Markdown>
              )}
            </div>
            
            {/* Navigation Buttons */}
            <div className="mt-16 pt-8 flex items-center justify-between border-t border-slate-100">
              {(() => {
                const currentIndex = allChapters.findIndex(c => c.id === activeChapterId);
                const prev = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
                const next = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

                return (
                  <>
                    <div className="flex-1 text-right">
                      {next && (
                        <button
                          onClick={() => setActiveChapterId(next.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-[#2980B9] bg-blue-50 hover:bg-[#2980B9] hover:text-white transition-colors"
                        >
                          הבא: {next.title} <ChevronLeft size={16} />
                        </button>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      {prev && (
                        <button
                          onClick={() => setActiveChapterId(prev.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                          <ChevronRight size={16} /> הקודם: {prev.title}
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
            
            <div className="mt-12 text-center text-xs text-slate-400">
              © Copyright 2024, iCreateRobot Docs. Theme aligned to ReadTheDocs standard.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
