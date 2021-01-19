/**
 * string-uglify
 * Shorten sets of strings deterministically, to be git-friendly
 * Version: 1.3.4
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-uglify/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).stringUglify={})}(this,(function(e){"use strict";function t(e,t){return void 0===t&&(t=0),e.codePointAt(t)||0}function i(e){var i="abcdefghijklmnopqrstuvwxyz",s="abcdefghijklmnopqrstuvwxyz0123456789",r={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},n={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},l={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},c=[];if(!Array.isArray(e)||!e.length)return e;for(var u=0,f=e.length;u<f;u++)if(e.indexOf(e[u])<u)c.push(c[e.indexOf(e[u])]);else{var o=".#".includes(e[u][0])?e[u][0]:"",h=Array.from(e[u]).reduce((function(e,i){return e+t(i)}),0);if(".#".includes(e[u][0])&&e[u].length<4||!".#".includes(e[u][0])&&e[u].length<3){var a=e[u];if(!c.includes(a)){c.push(a),a.startsWith(".")&&2===a.length&&!1===r[a.slice(1)]?r[a.slice(1)]=!0:a.startsWith("#")&&2===a.length&&!1===n[a.slice(1)]?n[a.slice(1)]=!0:a.startsWith(".")||a.startsWith("#")||1!==a.length||!1!==l[a]||(l[a]=!0);continue}}var d=""+o+i[h%i.length]+s[h%s.length];if(c.includes(d)){for(var g=d,p=0,y=Array.from(e[u]).reduce((function(e,i){return e<200?e+t(i):(e+t(i))%s.length}),0),v=Array.from(e[u]).map((function(e){return t(e)})).reduce((function(e,t){var i=e+t;do{i=String(i).split("").reduce((function(e,t){return e+Number.parseInt(t,10)}),0)}while(i>=10);return i}),0);c.includes(g);)g+=s[y*v*(p+=1)%s.length];d=g}c.push(d),d.startsWith(".")&&2===d.length&&!1===r[d.slice(1)]?r[d.slice(1)]=!0:d.startsWith("#")&&2===d.length&&!1===n[d.slice(1)]?n[d.slice(1)]=!0:d.startsWith(".")||d.startsWith("#")||1!==d.length||!1!==l[d]||(l[d]=!0)}for(var m=0,W=c.length;m<W;m++)c[m].startsWith(".")?!1===r[c[m].slice(1,2)]?(r[c[m].slice(1,2)]=c[m],c[m]=c[m].slice(0,2)):r[c[m].slice(1,2)]===c[m]&&(c[m]=c[m].slice(0,2)):c[m].startsWith("#")?!1===n[c[m].slice(1,2)]?(n[c[m].slice(1,2)]=c[m],c[m]=c[m].slice(0,2)):n[c[m].slice(1,2)]===c[m]&&(c[m]=c[m].slice(0,2)):c[m].startsWith(".")||c[m].startsWith("#")||(l[c[m].slice(0,1)]?l[c[m].slice(0,1)]===c[m]&&(c[m]=c[m].slice(0,1)):(l[c[m].slice(0,1)]=c[m],c[m]=c[m].slice(0,1)));return c}e.uglifyArr=i,e.uglifyById=function(e,t){return i(e)[t]},e.version="1.3.4",Object.defineProperty(e,"__esModule",{value:!0})}));
