import mammoth from 'mammoth';
import TurndownService from 'turndown';
import { DocData, DocSection } from '../types';

export type ThemeColor = 'activePresenter' | 'classic' | 'grayscale' | 'blue' | 'blueGreen' | 'green' | 'greenYellow' | 'red' | 'redViolet' | 'yellow' | 'yellowOrange';

export async function processDocx(arrayBuffer: ArrayBuffer, theme: ThemeColor = 'activePresenter'): Promise<DocData> {
  try {
    const result = await mammoth.convertToHtml({ arrayBuffer });
    let html = result.value;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // המרת פסקאות שמתחילות ב-# לכותרות, והסרת ה-# מכותרות קיימות
    doc.querySelectorAll('p, h1, h2, h3, h4').forEach(el => {
      const text = el.textContent || '';
      const match = text.match(/^(#{1,4})\s*(.*)/);
      if (match) {
        const level = match[1].length;
        const newText = match[2].trim();
        
        if (el.tagName.toLowerCase() !== `h${level}`) {
          const heading = doc.createElement(`h${level}`);
          heading.textContent = newText;
          el.parentNode?.replaceChild(heading, el);
        } else {
          el.textContent = newText;
        }
      }
    });

    const headings = doc.querySelectorAll('h1, h2, h3, h4');
    const sections: DocSection[] = [];

    headings.forEach((heading, index) => {
      const id = `sec-${index}`;
      heading.setAttribute('id', id);
      
      let textContent = heading.textContent || 'ללא כותרת';
      let tag = '';

      // זיהוי תגיות טקסט לעיצובים מיוחדים
      if (textContent.includes('[אזהרה]')) {
        tag = 'warning';
        textContent = textContent.replace('[אזהרה]', '').trim();
      } else if (textContent.includes('[מידע]')) {
        tag = 'info';
        textContent = textContent.replace('[מידע]', '').trim();
      } else if (textContent.includes('[הצלחה]')) {
        tag = 'success';
        textContent = textContent.replace('[הצלחה]', '').trim();
      }

      // עדכון הטקסט ב-DOM כדי להסתיר את התגית מהתצוגה
      heading.textContent = textContent;

      // הגדרת עיצוב בסיסי
      const baseClasses = 'mt-8 mb-4 font-bold py-3 px-4 rounded-lg border-r-4 shadow-sm scroll-mt-20 block w-full';
      
      if (tag === 'warning') {
        heading.className = `${baseClasses} text-red-900 bg-red-50 border-red-500`;
      } else if (tag === 'info') {
        heading.className = `${baseClasses} text-teal-900 bg-teal-50 border-teal-500`;
      } else if (tag === 'success') {
        heading.className = `${baseClasses} text-green-900 bg-green-50 border-green-500`;
      } else {
        // Theme configurations
        const themes: Record<ThemeColor, { h1: string, h2: string, h3: string, link: string }> = {
          activePresenter: {
            h1: 'text-gray-900 bg-gray-100 border-gray-600',
            h2: 'text-blue-800 bg-blue-50 border-blue-500',
            h3: 'text-emerald-800 bg-emerald-50 border-emerald-500',
            link: 'text-orange-600 hover:text-orange-800'
          },
          classic: {
            h1: 'text-gray-900 bg-gray-100 border-gray-500',
            h2: 'text-yellow-800 bg-yellow-50 border-yellow-400',
            h3: 'text-red-800 bg-red-50 border-red-400',
            link: 'text-blue-500 hover:text-blue-700'
          },
          grayscale: {
            h1: 'text-black bg-gray-200 border-black',
            h2: 'text-gray-900 bg-gray-100 border-gray-600',
            h3: 'text-gray-800 bg-gray-50 border-gray-400',
            link: 'text-gray-600 hover:text-gray-800'
          },
          blue: {
            h1: 'text-blue-900 bg-blue-100 border-blue-800',
            h2: 'text-blue-800 bg-blue-50 border-blue-600',
            h3: 'text-indigo-800 bg-indigo-50 border-indigo-400',
            link: 'text-blue-600 hover:text-blue-800'
          },
          blueGreen: {
            h1: 'text-slate-900 bg-blue-100 border-slate-800',
            h2: 'text-blue-800 bg-blue-50 border-blue-500',
            h3: 'text-emerald-800 bg-emerald-50 border-emerald-500',
            link: 'text-sky-600 hover:text-sky-800'
          },
          green: {
            h1: 'text-emerald-900 bg-emerald-100 border-emerald-800',
            h2: 'text-green-800 bg-green-50 border-green-600',
            h3: 'text-teal-800 bg-teal-50 border-teal-500',
            link: 'text-emerald-600 hover:text-emerald-800'
          },
          greenYellow: {
            h1: 'text-lime-900 bg-lime-100 border-lime-800',
            h2: 'text-green-800 bg-green-50 border-green-600',
            h3: 'text-yellow-800 bg-yellow-50 border-yellow-500',
            link: 'text-lime-600 hover:text-lime-800'
          },
          red: {
            h1: 'text-red-900 bg-red-100 border-red-800',
            h2: 'text-orange-900 bg-orange-50 border-orange-600',
            h3: 'text-amber-900 bg-amber-50 border-amber-600',
            link: 'text-red-600 hover:text-red-800'
          },
          redViolet: {
            h1: 'text-fuchsia-900 bg-fuchsia-100 border-fuchsia-800',
            h2: 'text-purple-900 bg-purple-50 border-purple-600',
            h3: 'text-pink-900 bg-pink-50 border-pink-500',
            link: 'text-fuchsia-600 hover:text-fuchsia-800'
          },
          yellow: {
            h1: 'text-amber-900 bg-amber-100 border-amber-800',
            h2: 'text-yellow-800 bg-yellow-50 border-yellow-500',
            h3: 'text-orange-800 bg-orange-50 border-orange-500',
            link: 'text-amber-600 hover:text-amber-800'
          },
          yellowOrange: {
            h1: 'text-orange-900 bg-orange-100 border-orange-800',
            h2: 'text-amber-900 bg-amber-50 border-amber-600',
            h3: 'text-yellow-900 bg-yellow-50 border-yellow-600',
            link: 'text-orange-600 hover:text-orange-800'
          }
        };

        const activeTheme = themes[theme] || themes.activePresenter;

        if (heading.tagName === 'H2') {
           heading.className = `${baseClasses} ${activeTheme.h2}`;
        } else if (heading.tagName === 'H3') {
           heading.className = `${baseClasses} ${activeTheme.h3}`;
        } else {
           heading.className = `${baseClasses} ${activeTheme.h1}`;
        }
      }

      // התאמות גודל טקסט לפי רמת הכותרת
      if (heading.tagName === 'H1') heading.classList.add('text-3xl');
      if (heading.tagName === 'H2') heading.classList.add('text-xl');
      if (heading.tagName === 'H3') heading.classList.add('text-lg');
      
      sections.push({
        id,
        title: textContent,
        level: parseInt(heading.tagName[1]),
      });
    });

    // Style standard elements generated by mammoth
    doc.querySelectorAll('p').forEach(p => p.className = 'mb-4 leading-relaxed text-gray-700');
    doc.querySelectorAll('ul').forEach(ul => ul.className = 'list-disc list-inside mb-4 space-y-1');
    doc.querySelectorAll('ol').forEach(ol => ol.className = 'list-decimal list-inside mb-4 space-y-1');
    doc.querySelectorAll('a').forEach(a => a.className = 'text-blue-600 hover:underline');
    doc.querySelectorAll('table').forEach(table => {
      // Create a wrapper for modern table styling (shadow, rounded corners, responsive scroll)
      const wrapper = doc.createElement('div');
      wrapper.className = 'overflow-x-auto mb-8 bg-white shadow-sm border border-gray-200 rounded-lg';
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);

      table.className = 'min-w-full divide-y divide-gray-200 text-right';
    });

    // Style table rows
    doc.querySelectorAll('tr').forEach(tr => {
      tr.className = 'hover:bg-gray-50 transition-colors group';
    });

    // Style table headers
    doc.querySelectorAll('th').forEach(th => {
      th.className = 'px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border-b border-gray-200 text-right';
    });

    // Style table cells
    doc.querySelectorAll('td').forEach(td => {
      td.className = 'px-4 py-3 text-sm text-gray-700 border-b border-gray-100 group-last:border-b-0 align-top';
    });

    const styledHtml = doc.body.innerHTML;

    // Convert original HTML to Markdown for GitHub
    const turndownService = new TurndownService({ headingStyle: 'atx' });
    const markdown = turndownService.turndown(html);

    return {
      html: styledHtml,
      markdown,
      sections,
    };
  } catch (error) {
    console.error('Error processing DOCX:', error);
    throw new Error('שגיאה בעיבוד הקובץ. אנא ודא שזהו קובץ DOCX תקין.');
  }
}
