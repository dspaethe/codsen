/**
 * is-html-tag-opening
 * Does an HTML tag start at given position?
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-html-tag-opening/
 */

import{matchRightIncl as t,matchRight as e}from"string-match-left-right";import{left as n}from"string-left-right";const r={allowCustomTagNames:!1,skipOpeningBracket:!1},s=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function i(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t}function a(t,e){return"<"===t[e]||"<"===t[n(t,e)]}const o="2.0.10";function p(o,p=0,g){if("string"!=typeof o)throw new Error(`is-html-tag-opening: [THROW_ID_01] the first input argument should have been a string but it was given as "${typeof o}", value being ${JSON.stringify(o,null,4)}`);if(!Number.isInteger(p)||p<0)throw new Error(`is-html-tag-opening: [THROW_ID_02] the second input argument should have been a natural number string index but it was given as "${typeof p}", value being ${JSON.stringify(p,null,4)}`);const l={...r,...g},m="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",c=new RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*\\w+[\\\\ \\t\\r\\n/]*\\/?[\\\\ \\t\\r\\n/]*>`,"g"),u=new RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*[${m}]+[-${m}]*[\\\\ \\t\\r\\n/]*>`,"g"),d=new RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['"\\w]`,"g"),w=new RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\w+\\s+[${m}]+[-${m}]*(?:-\\w+)?\\s*=\\s*['"\\w]`),h=new RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\/?\\s*\\w+\\s*\\/?\\s*>`,"g"),b=new RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\/?\\s*[${m}]+[-${m}]*\\s*\\/?\\s*>`,"g"),f=new RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*\\w+(?:\\s*\\w+)?\\s*\\w+=['"]`,"g"),k=new RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*[${m}]+[-${m}]*\\s+(?:\\s*\\w+)?\\s*\\w+=['"]`,"g"),$=new RegExp(`^<${l.skipOpeningBracket?"?\\/?":""}([\\\\ \\t\\r\\n/]*[${m}]+)+[\\\\ \\t\\r\\n/]*[\\\\/=>]`,""),O=new RegExp("^\\/\\s*\\w+s*>"),v=p?o.slice(p):o,x=n(o,p);let y=!1,B=!1;const E={cb:i,i:!0,trimCharsBeforeMatching:["/","\\","!"," ","\t","\n","\r"]};l.allowCustomTagNames?((l.skipOpeningBracket&&("<"===o[p-1]||"/"===o[p-1]&&"<"===o[n(o,x)])||"<"===v[0]&&v[1]&&v[1].trim())&&($.test(v)||/^<\w+$/.test(v))||u.test(v)&&a(o,p)||w.test(v)||b.test(v)&&a(o,p)||k.test(v)||"/"===o[p]&&"<"!==o[x]&&O.test(v))&&(B=!0):(((l.skipOpeningBracket&&("<"===o[p-1]||"/"===o[p-1]&&"<"===o[n(o,x)])||("<"===v[0]||"/"===v[0]&&(!o[x]||"<"!==o[x]))&&v[1]&&v[1].trim())&&$.test(v)||c.test(v)&&a(o,p)||d.test(v)||h.test(v)&&a(o,p)||f.test(v))&&(y=!0),y&&t(o,p,s,{cb:t=>void 0===t?(("<"===o[p]&&o[p+1]&&o[p+1].trim()||"<"===o[p-1])&&(B=!0),!0):t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t,i:!0,trimCharsBeforeMatching:["<","/","\\","!"," ","\t","\n","\r"]})&&(B=!0)),!B&&"<"===o[p]&&o[p+1]&&o[p+1].trim()&&e(o,p,s,E)&&(B=!0);return"string"==typeof o&&p<o.length&&B}export{r as defaults,p as isOpening,o as version};
