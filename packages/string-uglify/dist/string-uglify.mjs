/**
 * string-uglify
 * Shorten sets of strings deterministically, to be git-friendly
 * Version: 1.4.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-uglify/
 */

const t="1.4.10";function e(t,e=0){return t.codePointAt(e)||0}function s(t){const s="abcdefghijklmnopqrstuvwxyz",i="abcdefghijklmnopqrstuvwxyz0123456789",l={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},n={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},r={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},c=[];if(!Array.isArray(t)||!t.length)return t;for(let h=0,u=t.length;h<u;h++){if(t.indexOf(t[h])<h){c.push(c[t.indexOf(t[h])]);continue}const u=".#".includes(t[h][0])?t[h][0]:"",o=Array.from(t[h]).reduce(((t,s)=>t+e(s)),0);if(".#".includes(t[h][0])&&t[h].length<4||!".#".includes(t[h][0])&&t[h].length<3){const e=t[h];if(!c.includes(e)){c.push(e),e.startsWith(".")&&2===e.length&&!1===l[e.slice(1)]?l[e.slice(1)]=!0:e.startsWith("#")&&2===e.length&&!1===n[e.slice(1)]?n[e.slice(1)]=!0:e.startsWith(".")||e.startsWith("#")||1!==e.length||!1!==r[e]||(r[e]=!0);continue}}let a=`${u}${s[o%s.length]}${i[o%i.length]}`;if(c.includes(a)){let s=a,l=0;const n=Array.from(t[h]).reduce(((t,s)=>t<200?t+e(s):(t+e(s))%i.length),0),r=Array.from(t[h]).map((t=>e(t))).reduce(((t,e)=>{let s=t+e;do{s=String(s).split("").reduce(((t,e)=>t+Number.parseInt(e,10)),0)}while(s>=10);return s}),0);for(;c.includes(s);)l+=1,s+=i[n*r*l%i.length];a=s}c.push(a),a.startsWith(".")&&2===a.length&&!1===l[a.slice(1)]?l[a.slice(1)]=!0:a.startsWith("#")&&2===a.length&&!1===n[a.slice(1)]?n[a.slice(1)]=!0:a.startsWith(".")||a.startsWith("#")||1!==a.length||!1!==r[a]||(r[a]=!0)}for(let t=0,e=c.length;t<e;t++)c[t].startsWith(".")?!1===l[c[t].slice(1,2)]?(l[c[t].slice(1,2)]=c[t],c[t]=c[t].slice(0,2)):l[c[t].slice(1,2)]===c[t]&&(c[t]=c[t].slice(0,2)):c[t].startsWith("#")?!1===n[c[t].slice(1,2)]?(n[c[t].slice(1,2)]=c[t],c[t]=c[t].slice(0,2)):n[c[t].slice(1,2)]===c[t]&&(c[t]=c[t].slice(0,2)):c[t].startsWith(".")||c[t].startsWith("#")||(r[c[t].slice(0,1)]?r[c[t].slice(0,1)]===c[t]&&(c[t]=c[t].slice(0,1)):(r[c[t].slice(0,1)]=c[t],c[t]=c[t].slice(0,1)));return c}function i(t,e){return s(t)[e]}export{s as uglifyArr,i as uglifyById,t as version};
