/**
 * html-crush
 * Minifies HTML/CSS: valid or broken, pure or mixed with other languages
 * Version: 3.0.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/html-crush/
 */

import{rApply as e}from"ranges-apply";import{Ranges as n}from"ranges-push";import{matchRightIncl as t,matchRight as r,matchLeft as l}from"string-match-left-right";import{expander as i}from"string-range-expander";import{right as s,left as o}from"string-left-right";const u="3.0.3",h=new n({limitToBeAddedWhitespace:!0}),a={lineLengthLimit:500,removeIndentations:!0,removeLineBreaks:!1,removeHTMLComments:!1,removeCSSComments:!0,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100,breakToTheLeftOf:["</td","<html","</html","<head","</head","<meta","<link","<table","<script","</script","<!DOCTYPE","<style","</style","<title","<body","@media","</body","\x3c!--[if","\x3c!--<![endif","<![endif]"],mindTheInlineTags:["a","abbr","acronym","audio","b","bdi","bdo","big","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","label","map","mark","meter","noscript","object","output","picture","progress","q","ruby","s","samp","script","select","slot","small","span","strong","sub","sup","svg","template","textarea","time","u","tt","var","video","wbr"]},m={removeHTMLComments:!1,removeCSSComments:!1};function g(e){return"string"==typeof e}function c(e){return"string"==typeof e&&e.toUpperCase()!==e.toLowerCase()}function p(n,u){const p=Date.now();if(!g(n))throw void 0===n?new Error("html-crush: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error(`html-crush: [THROW_ID_02] the first input argument must be string! It was given as "${typeof n}", equal to:\n${JSON.stringify(n,null,4)}`);if(u&&"object"!=typeof u)throw new Error(`html-crush: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ${typeof u}, equal to ${JSON.stringify(u,null,4)}`);if(u&&Array.isArray(u.breakToTheLeftOf)&&u.breakToTheLeftOf.length)for(let e=0,n=u.breakToTheLeftOf.length;e<n;e++)if(!g(u.breakToTheLeftOf[e]))throw new TypeError(`html-crush: [THROW_ID_05] the opts.breakToTheLeftOf array contains non-string elements! For example, element at index ${e} is of a type "${typeof u.breakToTheLeftOf[e]}" and is equal to:\n${JSON.stringify(u.breakToTheLeftOf[e],null,4)}`);const f={...a,...u};"boolean"==typeof f.removeHTMLComments&&(f.removeHTMLComments=f.removeHTMLComments?1:0);let d="";Array.isArray(f.breakToTheLeftOf)&&f.breakToTheLeftOf.length&&(d=[...new Set(f.breakToTheLeftOf.map((e=>e[0])))].join(""));let T,L=null,b=null,y=!1,v=0,I=0,k=!1,C=!1,O=null,F=null,W=null,w=null,M=null,P=null,S=null,x=null,B=null,A=null;const H=">};",D="<",R="!",_=">",$="<",j="{},:;<>~+",E=j,q=j;let J=!0;const N=n.length,U=Math.floor(N/2);let Y,z;f.reportProgressFunc&&(Y=Math.floor(f.reportProgressFuncTo-.01*(f.reportProgressFuncTo-f.reportProgressFuncFrom)-f.reportProgressFuncFrom));let G=0;if(N){for(let e=0;e<N;e++)if(f.reportProgressFunc&&(N>1e3&&N<2e3?e===U&&f.reportProgressFunc(Math.floor((f.reportProgressFuncTo-f.reportProgressFuncFrom)/2)):N>=2e3&&(z=f.reportProgressFuncFrom+Math.floor(e/N*(Y||1)),z!==G&&(G=z,f.reportProgressFunc(z)))),I++,T&&"number"==typeof T&&e>=T&&(T=void 0),null===w||!n.startsWith("</script",e)||c(n[e+8])){if(!T&&!k&&n.startsWith("<script",e)&&!c(n[e+7])){w=e,T=!0;let n="";(f.removeLineBreaks||f.removeIndentations)&&null!==b&&(b>0&&(n="\n"),h.push(b,e,n)),b=null,L=null}if(null!==B&&null===x&&!/\w/.test(n[e])){x=n.slice(B,e);const t=s(n,~-e);"number"==typeof t&&">"===n[t]&&!n[e].trim()&&s(n,e)?h.push(e,s(n,e)):t&&"/"===n[t]&&">"===n[s(n,t)]&&(!n[e].trim()&&s(n,e)&&h.push(e,s(n,e)),">"!==n[t+1]&&s(n,t+1)&&h.push(t+1,s(n,t+1)))}if(T||k||O||"<"!==n[~-e]||null!==B||(/\w/.test(n[e])?B=e:"/"===n[s(n,~-e)]&&/\w/.test(n[s(n,s(n,~-e))]||"")&&(B=s(n,s(n,~-e)))),T||!k&&!O||null===F||"*"!==n[e]||"/"!==n[e+1]||([M,P]=i({str:n,from:F,to:e+2,ifLeftSideIncludesThisThenCropTightly:E,ifRightSideIncludesThisThenCropTightly:q}),F=null,null!=M?h.push(M,P):(v+=1,e+=1),T=e+2),T||!k&&!O||null!==F||"/"!==n[e]||"*"!==n[e+1]||(m.removeCSSComments||(m.removeCSSComments=!0),f.removeCSSComments&&(F=e)),C&&n.startsWith("![endif",e+1)&&(C=!1),!T&&!k&&!O&&null!==W){let t;n.startsWith("--\x3e",e)?t=3:">"===n[e]&&"]"===n[e-1]&&(t=1),t&&([M,P]=i({str:n,from:W,to:e+t}),W=null,null!=M?f.lineLengthLimit&&I-(P-M)>=f.lineLengthLimit?(h.push(M,P,"\n"),I=-t):(h.push(M,P),I-=P-M):(v+=t-1,e+=t-1),T=e+t)}if(T||k||O||!n.startsWith("\x3c!--",e)||null!==W||(n.startsWith("[if",e+4)?(C||(C=!0),2===f.removeHTMLComments&&(W=e)):!f.removeHTMLComments||C&&2!==f.removeHTMLComments||(W=e),m.removeHTMLComments||(m.removeHTMLComments=!0)),!T&&k&&null===F&&n.startsWith("</style",e)&&!c(n[e+7])?k=!1:T||k||null!==F||!n.startsWith("<style",e)||c(n[e+6])||(k=!0,(f.removeLineBreaks||f.removeIndentations)&&f.breakToTheLeftOf.includes("<style")&&n.startsWith(' type="text/css">',e+6)&&n[e+24]&&h.push(e+23,e+23,"\n")),!T&&!O&&"\"'".includes(n[e])&&n.endsWith("style=",e)&&(O=e),T||n[e].trim()){if(!T&&(!k&&!O||null===F)){if(null!==b){if(f.removeLineBreaks&&(v+=1),J)J=!1,(f.removeIndentations||f.removeLineBreaks)&&h.push(0,e);else if(f.removeIndentations&&!f.removeLineBreaks&&(!y&&null!==L&&e>L?h.push(L+1,e):b+1<e&&(n.endsWith("]>",b)||n.endsWith("--\x3e",b)||n.startsWith("<![",e)||n.startsWith("\x3c!--<![",e)?h.push(b,e):" "===n[b]?h.push(b+1,e):" "===n[~-e]?h.push(b,~-e):h.push(b,e," "))),f.removeLineBreaks||O){if(d.includes(n[e])&&t(n,e,f.breakToTheLeftOf)){"\n"===n[~-e]&&b===~-e||h.push(b,e,"\n"),M=null,P=null,S=null,b=null,v=1;continue}let l=" ";"<"===n[e]&&r(n,e,f.mindTheInlineTags,{cb:e=>!e||!/\w/.test(e)})||(n[~-b]&&_.includes(n[~-b])&&$.includes(n[e])||(k||O)&&null===F&&(E.includes(n[~-b])||q.includes(n[e]))||n.startsWith("!important",e)&&!C||O&&("'"===n[~-b]||'"'===n[~-b])||"}"===n[~-b]&&n.startsWith("</style",e)||">"===n[e]&&("'\"".includes(n[o(n,e)])||"<"===n[s(n,e)])||"/"===n[e]&&">"===n[s(n,e)])&&(l="","/"===n[e]&&">"===n[e+1]&&s(n,e)&&s(n,e)>e+1&&(h.push(e+1,s(n,e)),v-=s(n,e)-e+1)),l&&l.length&&(v+=1),f.lineLengthLimit?v>=f.lineLengthLimit||!n[e+1]||">"===n[e]||"/"===n[e]&&">"===n[e+1]?((v>f.lineLengthLimit||v===f.lineLengthLimit&&n[e+1]&&n[e+1].trim()&&!H.includes(n[e])&&!D.includes(n[e+1]))&&(l="\n",v=1),(v>f.lineLengthLimit||" "!==l||e!==b+1)&&h.push(b,e,l),M=null,P=null,S=null):(null===M||b<M)&&(M=b,P=e,S=l):e===b+1&&" "===l||h.push(b,e,l)}b=null,y||(y=!0)}else J&&(J=!1),f.removeLineBreaks&&(v+=1);y||(y=!0)}}else null===b&&(b=e);if(!T&&!J&&0!==e&&f.removeLineBreaks&&(f.lineLengthLimit||d)&&!n.startsWith("</a",e)){if(d&&t(n,e,f.breakToTheLeftOf)&&n.slice(0,e).trim()&&(!n.startsWith("<![endif]",e)||!l(n,e,"\x3c!--"))){h.push(e,e,"\n"),M=null,P=null,S=null,v=1;continue}if(f.lineLengthLimit&&v<=f.lineLengthLimit){if(!n[e+1]||D.includes(n[e])&&!R.includes(n[e])||H.includes(n[e])||!n[e].trim()){if(null!==M&&null!==P&&(M!==P||S&&S.length)){let t=S;n[e].trim()&&n[e+1]&&n[e+1].trim()&&v+(S?S.length:0)>f.lineLengthLimit&&(t="\n"),v+(t?t.length:0)>f.lineLengthLimit||" "!==t||P!==M+1?"}"===n[~-M]&&"{"===n[P]||h.push(M,P,t):v-=L||0}!(n[e].trim()&&(D.includes(n[e])||n[~-e]&&H.includes(n[~-e]))&&g(A))||x&&f.mindTheInlineTags.includes(x)||"<"===n[e]&&r(n,e,f.mindTheInlineTags,{cb:e=>!e||!/\w/.test(e)})||"<"===n[e]&&r(n,e,f.mindTheInlineTags,{trimCharsBeforeMatching:"/",cb:e=>!e||!/\w/.test(e)})?null!==F||null===M||!(O||!f.mindTheInlineTags||!Array.isArray(f.mindTheInlineTags)||Array.isArray(f.mindTheInlineTags.length)&&!f.mindTheInlineTags.length||!g(x)||Array.isArray(f.mindTheInlineTags)&&f.mindTheInlineTags.length&&g(x)&&!f.mindTheInlineTags.includes(x))||"<"===n[e]&&r(n,e,f.mindTheInlineTags,{trimCharsBeforeMatching:"/",cb:e=>!e||!/\w/.test(e)})||(M=null,P=null,S=null):(M=e,P=e,S=null)}}else if(f.lineLengthLimit)if(!D.includes(n[e])||"<"===n[e]&&r(n,e,f.mindTheInlineTags,{trimCharsBeforeMatching:"/",cb:e=>!e||!/\w/.test(e)}))n[e+1]&&H.includes(n[e])&&g(x)&&Array.isArray(f.mindTheInlineTags)&&f.mindTheInlineTags.length&&!f.mindTheInlineTags.includes(x)?null!==M&&null!==P&&(M!==P||S&&S.length)||(h.push(e+1,e+1,"\n"),v=0):n[e].trim()&&(n[e+1]||null!==M&&null!==P&&(M!==P||S&&S.length)&&h.push(M,P,"\n"));else if(null!==M&&null!==P&&(M!==P||S&&S.length)){const n=S&&S.length?S.length:0;v-(P-M-n)-1>f.lineLengthLimit||(h.push(M,P,S),v-(P-M-n)-1===f.lineLengthLimit&&(h.push(e,e,"\n"),v=0),M=null,P=null,S=null)}else h.push(e,e,"\n"),v=0}if(!T&&!J&&f.removeLineBreaks&&f.lineLengthLimit&&v>=f.lineLengthLimit&&null!==M&&null!==P&&!H.includes(n[e])&&!D.includes(n[e])&&!"/".includes(n[e])&&(v!==f.lineLengthLimit||!n[e+1]||n[e+1].trim())){let t="\n";n[e+1]&&!n[e+1].trim()&&v===f.lineLengthLimit&&(t=S),"\n"===t&&!n[~-M].trim()&&o(n,M)&&(M=o(n,M)+1),h.push(M,P,t),v=e-P,n[e].length&&(v+=1),M=null,P=null,S=null}if((!T&&"\n"===n[e]||"\r"===n[e]&&(!n[e+1]||n[e+1]&&"\n"!==n[e+1]))&&(L=e,y&&(y=!1),!f.removeLineBreaks&&null!==b&&b<e&&n[e+1]&&"\r"!==n[e+1]&&"\n"!==n[e+1]&&h.push(b,e)),n[e+1]||(k&&null!==F?h.push(...i({str:n,from:F,to:e,ifLeftSideIncludesThisThenCropTightly:E,ifRightSideIncludesThisThenCropTightly:q})):b&&"\n"!==n[e]&&"\r"!==n[e]?h.push(b,e+1):b&&("\r"===n[e]&&"\n"===n[e+1]||"\n"===n[e]&&"\r"!==n[e-1])&&h.push(b,e)),!T&&O&&O<e&&n[O]===n[e]&&(O=null),!T&&!k&&n.startsWith("<pre",e)&&!c(n[e+4])){const t=n.indexOf("</pre",e+5);t>0&&(T=t)}if(!T&&!k&&n.startsWith("<code",e)&&!c(n[e+5])){const t=n.indexOf("</code",e+5);t>0&&(T=t)}if(!T&&n.startsWith("<![CDATA[",e)){const t=n.indexOf("]]>",e+9);t>0&&(T=t)}T||k||O||null===B||">"!==n[e]||("<"===n[s(n,e)]&&(A=x),B=null,x=null),"<"===n[e]&&null!==A&&(A=null)}else{if((f.removeIndentations||f.removeLineBreaks)&&e>0&&n[~-e]&&!n[~-e].trim())for(let t=e;t--;)if("\n"===n[t]||"\r"===n[t]||n[t].trim()){t+1<e&&h.push(t+1,e);break}w=null,T=!1,e+=8}if(h.current()){const t=f.reportProgressFuncTo-.01*(f.reportProgressFuncTo-f.reportProgressFuncFrom),r=e(n,h.current(),(e=>{f.reportProgressFunc&&N>=2e3&&(z=Math.floor(t+e/100*(f.reportProgressFuncTo-t)),z!==G&&(G=z,f.reportProgressFunc(z)))}));h.wipe();const l=r.length;return{log:{timeTakenInMilliseconds:Date.now()-p,originalLength:N,cleanedLength:l,bytesSaved:Math.max(N-l,0),percentageReducedOfOriginal:N?Math.round(100*Math.max(N-l,0)/N):0},ranges:h.current(),applicableOpts:m,result:r}}}return{log:{timeTakenInMilliseconds:Date.now()-p,originalLength:N,cleanedLength:N,bytesSaved:0,percentageReducedOfOriginal:0},applicableOpts:m,ranges:[],result:n}}export{p as crush,a as defaults,u as version};
