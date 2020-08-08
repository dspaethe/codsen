/**
 * is-html-attribute-closing
 * Is a character on a given index a closing of an HTML attribute?
 * Version: 1.2.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-attribute-closing
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isHtmlAttributeClosing=e()}(this,(function(){"use strict";var t=new Set(["abbr","accept","accept-charset","accesskey","action","align","alink","allow","alt","archive","async","autocapitalize","autocomplete","autofocus","autoplay","axis","background","background-attachment","background-color","background-image","background-position","background-position-x","background-position-y","background-repeat","bgcolor","border","border-bottom","border-bottom-color","border-bottom-style","border-bottom-width","border-collapse","border-color","border-left","border-left-color","border-left-style","border-left-width","border-right","border-right-color","border-right-style","border-right-width","border-style","border-top","border-top-color","border-top-style","border-top-width","border-width","buffered","capture","cellpadding","cellspacing","challenge","char","charoff","charset","checked","cite","class","classid","clear","clip","code","codebase","codetype","color","cols","colspan","column-span","compact","content","contenteditable","contextmenu","controls","coords","crossorigin","csp","cursor","data","data-*","datetime","declare","decoding","default","defer","dir","direction","dirname","disabled","display","download","draggable","dropzone","enctype","enterkeyhint","face","filter","float","font","font-color","font-emphasize","font-emphasize-position","font-emphasize-style","font-family","font-size","font-style","font-variant","font-weight","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","frame","frameborder","frontuid","headers","height","hidden","high","horiz-align","href","hreflang","hspace","http-equiv","icon","id","importance","inputmode","integrity","intrinsicsize","ismap","itemprop","keytype","kind","label","lang","language","layout-flow","layout-grid","layout-grid-char","layout-grid-line","layout-grid-mode","layout-grid-type","left","letter-spacing","line-break","line-height","link","list","list-image-1","list-image-2","list-image-3","list-style","list-style-image","list-style-position","list-style-type","loading","longdesc","loop","low","manifest","margin","margin-bottom","margin-left","margin-right","margin-top","marginheight","marginwidth","max","maxlength","media","method","min","minlength","mso-ansi-font-size","mso-ansi-font-style","mso-ansi-font-weight","mso-ansi-language","mso-ascii-font-family","mso-background","mso-background-source","mso-baseline-position","mso-bidi-flag","mso-bidi-font-family","mso-bidi-font-size","mso-bidi-font-style","mso-bidi-font-weight","mso-bidi-language","mso-bookmark","mso-border-alt","mso-border-between","mso-border-between-color","mso-border-between-style","mso-border-between-width","mso-border-bottom-alt","mso-border-bottom-color-alt","mso-border-bottom-source","mso-border-bottom-style-alt","mso-border-bottom-width-alt","mso-border-color-alt","mso-border-effect","mso-border-left-alt","mso-border-left-color-alt","mso-border-left-source","mso-border-left-style-alt","mso-border-left-width-alt","mso-border-right-alt","mso-border-right-color-alt","mso-border-right-source","mso-border-right-style-alt","mso-border-right-width-alt","mso-border-shadow","mso-border-source","mso-border-style-alt","mso-border-top-alt","mso-border-top-color-alt","mso-border-top-source","mso-border-top-style-alt","mso-border-top-width-alt","mso-border-width-alt","mso-break-type","mso-build","mso-build-after-action","mso-build-after-color","mso-build-auto-secs","mso-build-avi","mso-build-dual-id","mso-build-order","mso-build-sound-name","mso-bullet-image","mso-cell-special","mso-cellspacing","mso-char-indent","mso-char-indent-count","mso-char-indent-size","mso-char-type","mso-char-wrap","mso-color-alt","mso-color-index","mso-color-source","mso-column-break-before","mso-column-separator","mso-columns","mso-comment-author","mso-comment-continuation","mso-comment-id","mso-comment-reference","mso-data-placement","mso-default-height","mso-default-width","mso-diagonal-down","mso-diagonal-down-color","mso-diagonal-down-source","mso-diagonal-down-style","mso-diagonal-down-width","mso-diagonal-up","mso-diagonal-up-color","mso-diagonal-up-source","mso-diagonal-up-style","mso-diagonal-up-width","mso-displayed-decimal-separator","mso-displayed-thousand-separator","mso-element","mso-element-anchor-horizontal","mso-element-anchor-lock","mso-element-anchor-vertical","mso-element-frame-height","mso-element-frame-hspace","mso-element-frame-vspace","mso-element-frame-width","mso-element-left","mso-element-linespan","mso-element-top","mso-element-wrap","mso-endnote-continuation-notice","mso-endnote-continuation-notice-id","mso-endnote-continuation-notice-src","mso-endnote-continuation-separator","mso-endnote-continuation-separator-id","mso-endnote-continuation-separator-src","mso-endnote-display","mso-endnote-id","mso-endnote-numbering","mso-endnote-numbering-restart","mso-endnote-numbering-start","mso-endnote-numbering-style","mso-endnote-position","mso-endnote-separator","mso-endnote-separator-id","mso-endnote-separator-src","mso-even-footer","mso-even-footer-id","mso-even-footer-src","mso-even-header","mso-even-header-id","mso-even-header-src","mso-facing-pages","mso-fareast-font-family","mso-fareast-hint","mso-fareast-language","mso-field-change","mso-field-change-author","mso-field-change-time","mso-field-change-value","mso-field-code","mso-field-lock","mso-fills-color","mso-first-footer","mso-first-footer-id","mso-first-footer-src","mso-first-header","mso-first-header-id","mso-first-header-src","mso-font-alt","mso-font-charset","mso-font-format","mso-font-info","mso-font-info-charset","mso-font-info-type","mso-font-kerning","mso-font-pitch","mso-font-signature","mso-font-signature-csb-one","mso-font-signature-csb-two","mso-font-signature-usb-four","mso-font-signature-usb-one","mso-font-signature-usb-three","mso-font-signature-usb-two","mso-font-src","mso-font-width","mso-footer","mso-footer-data","mso-footer-id","mso-footer-margin","mso-footer-src","mso-footnote-continuation-notice","mso-footnote-continuation-notice-id","mso-footnote-continuation-notice-src","mso-footnote-continuation-separator","mso-footnote-continuation-separator-id","mso-footnote-continuation-separator-src","mso-footnote-id","mso-footnote-numbering","mso-footnote-numbering-restart","mso-footnote-numbering-start","mso-footnote-numbering-style","mso-footnote-position","mso-footnote-separator","mso-footnote-separator-id","mso-footnote-separator-src","mso-foreground","mso-forms-protection","mso-generic-font-family","mso-grid-bottom","mso-grid-bottom-count","mso-grid-left","mso-grid-left-count","mso-grid-right","mso-grid-right-count","mso-grid-top","mso-grid-top-count","mso-gutter-direction","mso-gutter-margin","mso-gutter-position","mso-hansi-font-family","mso-header","mso-header-data","mso-header-id","mso-header-margin","mso-header-src","mso-height-alt","mso-height-rule","mso-height-source","mso-hide","mso-highlight","mso-horizontal-page-align","mso-hyphenate","mso-ignore","mso-kinsoku-overflow","mso-layout-grid-align","mso-layout-grid-char-alt","mso-layout-grid-origin","mso-level-inherit","mso-level-legacy","mso-level-legacy-indent","mso-level-legacy-space","mso-level-legal-format","mso-level-number-format","mso-level-number-position","mso-level-numbering","mso-level-reset-level","mso-level-start-at","mso-level-style-link","mso-level-suffix","mso-level-tab-stop","mso-level-text","mso-line-break-override","mso-line-grid","mso-line-height-alt","mso-line-height-rule","mso-line-numbers-count-by","mso-line-numbers-distance","mso-line-numbers-restart","mso-line-numbers-start","mso-line-spacing","mso-linked-frame","mso-list","mso-list-change","mso-list-change-author","mso-list-change-time","mso-list-change-values","mso-list-id","mso-list-ins","mso-list-ins-author","mso-list-ins-time","mso-list-name","mso-list-template-ids","mso-list-type","mso-margin-bottom-alt","mso-margin-left-alt","mso-margin-top-alt","mso-mirror-margins","mso-negative-indent-tab","mso-number-format","mso-outline-level","mso-outline-parent","mso-outline-parent-col","mso-outline-parent-row","mso-outline-parent-visibility","mso-outline-style","mso-padding-alt","mso-padding-between","mso-padding-bottom-alt","mso-padding-left-alt","mso-padding-right-alt","mso-padding-top-alt","mso-page-border-aligned","mso-page-border-art","mso-page-border-bottom-art","mso-page-border-display","mso-page-border-left-art","mso-page-border-offset-from","mso-page-border-right-art","mso-page-border-surround-footer","mso-page-border-surround-header","mso-page-border-top-art","mso-page-border-z-order","mso-page-numbers","mso-page-numbers-chapter-separator","mso-page-numbers-chapter-style","mso-page-numbers-start","mso-page-numbers-style","mso-page-orientation","mso-page-scale","mso-pagination","mso-panose-arm-style","mso-panose-contrast","mso-panose-family-type","mso-panose-letterform","mso-panose-midline","mso-panose-proportion","mso-panose-serif-style","mso-panose-stroke-variation","mso-panose-weight","mso-panose-x-height","mso-paper-source","mso-paper-source-first-page","mso-paper-source-other-pages","mso-pattern","mso-pattern-color","mso-pattern-style","mso-print-area","mso-print-color","mso-print-gridlines","mso-print-headings","mso-print-resolution","mso-print-sheet-order","mso-print-title-column","mso-print-title-row","mso-prop-change","mso-prop-change-author","mso-prop-change-time","mso-protection","mso-rotate","mso-row-margin-left","mso-row-margin-right","mso-ruby-merge","mso-ruby-visibility","mso-scheme-fill-color","mso-scheme-shadow-color","mso-shading","mso-shadow-color","mso-space-above","mso-space-below","mso-spacerun","mso-special-character","mso-special-format","mso-style-id","mso-style-name","mso-style-next","mso-style-parent","mso-style-type","mso-style-update","mso-subdocument","mso-symbol-font-family","mso-tab-count","mso-table-anchor-horizontal","mso-table-anchor-vertical","mso-table-bspace","mso-table-del-author","mso-table-del-time","mso-table-deleted","mso-table-dir","mso-table-ins-author","mso-table-ins-time","mso-table-inserted","mso-table-layout-alt","mso-table-left","mso-table-lspace","mso-table-overlap","mso-table-prop-author","mso-table-prop-change","mso-table-prop-time","mso-table-rspace","mso-table-top","mso-table-tspace","mso-table-wrap","mso-text-animation","mso-text-combine-brackets","mso-text-combine-id","mso-text-control","mso-text-fit-id","mso-text-indent-alt","mso-text-orientation","mso-text-raise","mso-title-page","mso-tny-compress","mso-unsynced","mso-vertical-align-alt","mso-vertical-align-special","mso-vertical-page-align","mso-width-alt","mso-width-source","mso-word-wrap","mso-xlrowspan","mso-zero-height","multiple","muted","name","nav-banner-image","navbutton_background_color","navbutton_home_hovered","navbutton_home_normal","navbutton_home_pushed","navbutton_horiz_hovered","navbutton_horiz_normal","navbutton_horiz_pushed","navbutton_next_hovered","navbutton_next_normal","navbutton_next_pushed","navbutton_prev_hovered","navbutton_prev_normal","navbutton_prev_pushed","navbutton_up_hovered","navbutton_up_normal","navbutton_up_pushed","navbutton_vert_hovered","navbutton_vert_normal","navbutton_vert_pushed","nohref","noresize","noshade","novalidate","nowrap","object","onblur","onchange","onclick","ondblclick","onfocus","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onreset","onselect","onsubmit","onunload","open","optimum","overflow","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","panose-1","pattern","ping","placeholder","position","poster","preload","profile","prompt","punctuation-trim","punctuation-wrap","radiogroup","readonly","referrerpolicy","rel","required","rev","reversed","right","row-span","rows","rowspan","ruby-align","ruby-overhang","ruby-position","rules","sandbox","scheme","scope","scoped","scrolling","selected","separator-image","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","standby","start","step","style","summary","tab-interval","tab-stops","tabindex","table-border-color-dark","table-border-color-light","table-layout","target","text","text-align","text-autospace","text-combine","text-decoration","text-effect","text-fit","text-indent","text-justify","text-justify-trim","text-kashida","text-line-through","text-shadow","text-transform","text-underline","text-underline-color","text-underline-style","title","top","top-bar-button","translate","type","unicode-bidi","urlId","usemap","valign","value","valuetype","version","vert-align","vertical-align","visibility","vlink","vnd.ms-excel.numberformat","vspace","white-space","width","word-break","word-spacing","wrap","xmlns","z-index"]);function e(t){return"string"==typeof t&&(t.charCodeAt(0)>96&&t.charCodeAt(0)<123||t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>47&&t.charCodeAt(0)<58||":"===t||"-"===t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}Function.prototype.toString.call(Object);var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e,o){t(o={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&o.path)}},o.exports),o.exports}((function(t,e){var r="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",s="[object Map]",c="[object Set]",l=/\w*$/,m=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,f={};f[r]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object DataView]"]=f["[object Boolean]"]=f["[object Date]"]=f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f[s]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f[c]=f["[object String]"]=f["[object Symbol]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Error]"]=f[n]=f["[object WeakMap]"]=!1;var d="object"==o(a)&&a&&a.Object===Object&&a,h="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=d||h||Function("return this")(),g=e&&!e.nodeType&&e,b=g&&t&&!t.nodeType&&t,y=b&&b.exports===g;function v(t,e){return t.set(e[0],e[1]),t}function _(t,e){return t.add(e),t}function w(t,e,o,r){var n=-1,i=t?t.length:0;for(r&&i&&(o=t[++n]);++n<i;)o=e(o,t[n],n,t);return o}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function x(t){var e=-1,o=Array(t.size);return t.forEach((function(t,r){o[++e]=[r,t]})),o}function O(t,e){return function(o){return t(e(o))}}function k(t){var e=-1,o=Array(t.size);return t.forEach((function(t){o[++e]=t})),o}var M,A=Array.prototype,C=Function.prototype,B=Object.prototype,P=p["__core-js_shared__"],z=(M=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"",S=C.toString,I=B.hasOwnProperty,E=B.toString,L=RegExp("^"+S.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=y?p.Buffer:void 0,T=p.Symbol,W=p.Uint8Array,R=O(Object.getPrototypeOf,Object),N=Object.create,F=B.propertyIsEnumerable,U=A.splice,q=Object.getOwnPropertySymbols,$=D?D.isBuffer:void 0,H=O(Object.keys,Object),V=bt(p,"DataView"),J=bt(p,"Map"),Z=bt(p,"Promise"),G=bt(p,"Set"),K=bt(p,"WeakMap"),Q=bt(Object,"create"),X=jt(V),Y=jt(J),tt=jt(Z),et=jt(G),ot=jt(K),rt=T?T.prototype:void 0,nt=rt?rt.valueOf:void 0;function it(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function at(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function st(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function ct(t){this.__data__=new at(t)}function lt(t,e){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==o(t)}(t)&&kt(t)}(t)&&I.call(t,"callee")&&(!F.call(t,"callee")||E.call(t)==r)}(t)?function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r}(t.length,String):[],i=n.length,a=!!i;for(var s in t)!e&&!I.call(t,s)||a&&("length"==s||_t(s,i))||n.push(s);return n}function mt(t,e,o){var r=t[e];I.call(t,e)&&xt(r,o)&&(void 0!==o||e in t)||(t[e]=o)}function ut(t,e){for(var o=t.length;o--;)if(xt(t[o][0],e))return o;return-1}function ft(t,e,o,a,m,u,d){var h;if(a&&(h=u?a(t,m,u,d):a(t)),void 0!==h)return h;if(!Ct(t))return t;var p=Ot(t);if(p){if(h=function(t){var e=t.length,o=t.constructor(e);e&&"string"==typeof t[0]&&I.call(t,"index")&&(o.index=t.index,o.input=t.input);return o}(t),!e)return function(t,e){var o=-1,r=t.length;e||(e=Array(r));for(;++o<r;)e[o]=t[o];return e}(t,h)}else{var g=vt(t),b=g==n||g==i;if(Mt(t))return function(t,e){if(e)return t.slice();var o=new t.constructor(t.length);return t.copy(o),o}(t,e);if("[object Object]"==g||g==r||b&&!u){if(j(t))return u?t:{};if(h=function(t){return"function"!=typeof t.constructor||wt(t)?{}:(e=R(t),Ct(e)?N(e):{});var e}(b?{}:t),!e)return function(t,e){return pt(t,yt(t),e)}(t,function(t,e){return t&&pt(e,Bt(e),t)}(h,t))}else{if(!f[g])return u?t:{};h=function(t,e,o,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return function(t,e){var o=e?ht(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var o=e?ht(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}(t,r);case s:return function(t,e,o){return w(e?o(x(t),!0):x(t),v,new t.constructor)}(t,r,o);case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,l.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,o){return w(e?o(k(t),!0):k(t),_,new t.constructor)}(t,r,o);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,g,ft,e)}}d||(d=new ct);var y=d.get(t);if(y)return y;if(d.set(t,h),!p)var O=o?function(t){return function(t,e,o){var r=e(t);return Ot(t)?r:function(t,e){for(var o=-1,r=e.length,n=t.length;++o<r;)t[n+o]=e[o];return t}(r,o(t))}(t,Bt,yt)}(t):Bt(t);return function(t,e){for(var o=-1,r=t?t.length:0;++o<r&&!1!==e(t[o],o,t););}(O||t,(function(r,n){O&&(r=t[n=r]),mt(h,n,ft(r,e,o,a,n,t,d))})),h}function dt(t){return!(!Ct(t)||(e=t,z&&z in e))&&(At(t)||j(t)?L:m).test(jt(t));var e}function ht(t){var e=new t.constructor(t.byteLength);return new W(e).set(new W(t)),e}function pt(t,e,o,r){o||(o={});for(var n=-1,i=e.length;++n<i;){var a=e[n],s=r?r(o[a],t[a],a,o,t):void 0;mt(o,a,void 0===s?t[a]:s)}return o}function gt(t,e){var r,n,i=t.__data__;return("string"==(n=o(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function bt(t,e){var o=function(t,e){return null==t?void 0:t[e]}(t,e);return dt(o)?o:void 0}it.prototype.clear=function(){this.__data__=Q?Q(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(Q){var o=e[t];return"__lodash_hash_undefined__"===o?void 0:o}return I.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:I.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,o=ut(e,t);return!(o<0)&&(o==e.length-1?e.pop():U.call(e,o,1),!0)},at.prototype.get=function(t){var e=this.__data__,o=ut(e,t);return o<0?void 0:e[o][1]},at.prototype.has=function(t){return ut(this.__data__,t)>-1},at.prototype.set=function(t,e){var o=this.__data__,r=ut(o,t);return r<0?o.push([t,e]):o[r][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new it,map:new(J||at),string:new it}},st.prototype.delete=function(t){return gt(this,t).delete(t)},st.prototype.get=function(t){return gt(this,t).get(t)},st.prototype.has=function(t){return gt(this,t).has(t)},st.prototype.set=function(t,e){return gt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new at},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var o=this.__data__;if(o instanceof at){var r=o.__data__;if(!J||r.length<199)return r.push([t,e]),this;o=this.__data__=new st(r)}return o.set(t,e),this};var yt=q?O(q,Object):function(){return[]},vt=function(t){return E.call(t)};function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||u.test(t))&&t>-1&&t%1==0&&t<e}function wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||B)}function jt(t){if(null!=t){try{return S.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function xt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=vt(new V(new ArrayBuffer(1)))||J&&vt(new J)!=s||Z&&"[object Promise]"!=vt(Z.resolve())||G&&vt(new G)!=c||K&&"[object WeakMap]"!=vt(new K))&&(vt=function(t){var e=E.call(t),o="[object Object]"==e?t.constructor:void 0,r=o?jt(o):void 0;if(r)switch(r){case X:return"[object DataView]";case Y:return s;case tt:return"[object Promise]";case et:return c;case ot:return"[object WeakMap]"}return e});var Ot=Array.isArray;function kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var Mt=$||function(){return!1};function At(t){var e=Ct(t)?E.call(t):"";return e==n||e==i}function Ct(t){var e=o(t);return!!t&&("object"==e||"function"==e)}function Bt(t){return kt(t)?lt(t):function(t){if(!wt(t))return H(t);var e=[];for(var o in Object(t))I.call(t,o)&&"constructor"!=o&&e.push(o);return e}(t)}t.exports=function(t){return ft(t,!0,!0)}}));function s(t,e){return function(t,e,o){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!o&&t[e+1].trim()||o&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!o&&t[e+2].trim()||o&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(var r=e+1,n=t.length;r<n;r++)if(t[r]&&(!o&&t[r].trim()||o&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}function c(t,e){return function(t,e,o){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(!o&&t[~-e].trim()||o&&(t[~-e].trim()||"\n\r".includes(t[~-e]))))return~-e;if(t[e-2]&&(!o&&t[e-2].trim()||o&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(var r=e;r--;)if(t[r]&&(!o&&t[r].trim()||o&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}function l(t){return t&&"object"===o(t)&&!Array.isArray(t)}function m(t){return"string"==typeof t}function u(t,e,o,r,n,i){var a="function"==typeof o?o():o;if(e<0&&n&&"EOL"===a)return a;if(e>=t.length&&!n)return!1;for(var s=n?1:o.length,c=!1,l=!1,m=r.maxMismatches,u=e,f=!1,d=!1,h=!1;t[u];){var p=i(u);if(r.trimBeforeMatching&&""===t[u].trim()){if(!t[p]&&n&&"EOL"===o)return!0;u=i(u)}else if(!r.i&&r.trimCharsBeforeMatching.includes(t[u])||r.i&&r.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[u].toLowerCase())){if(n&&"EOL"===o&&!t[p])return!0;u=i(u)}else{var g=p>u?o[o.length-s]:o[s-1];if(!r.i&&t[u]===g||r.i&&t[u].toLowerCase()===g.toLowerCase()){if(f||(f=!0),l||(l=!0),s===o.length?d=!0:1===s&&(h=!0),(s-=1)<1)return u}else{if(!(r.maxMismatches&&m&&u))return!(0!==u||1!==s||r.lastMustMatch||!l)&&0;m-=1;for(var b=0;b<=m;b++){var y=p>u?o[o.length-s+1+b]:o[s-2-b],v=t[i(u)];if(y&&(!r.i&&t[u]===y||r.i&&t[u].toLowerCase()===y.toLowerCase())&&(!r.firstMustMatch||s!==o.length)){s-=2,f=!0;break}if(v&&y&&(!r.i&&v===y||r.i&&v.toLowerCase()===y.toLowerCase())&&(!r.firstMustMatch||s!==o.length)){s-=1,f=!0;break}if(void 0===y&&m>=0&&f&&(!r.firstMustMatch||d)&&(!r.lastMustMatch||h))return u}f||(c=u)}if(!1!==c&&c!==u&&(c=!1),s<1)return u;u=i(u)}}return s>0?!(!n||"EOL"!==a)||!!(r.maxMismatches>=s&&l)&&(c||0):void 0}function f(t,e,r,n){return function(t,e,r,n,a){if(l(a)&&Object.prototype.hasOwnProperty.call(a,"trimBeforeMatching")&&"boolean"!=typeof a.trimBeforeMatching)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(a.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var s,c,f,d,h,p=i(i({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1}),a);if(p.trimCharsBeforeMatching="string"==typeof(s=p.trimCharsBeforeMatching)?s.length>0?[s]:[]:s,p.trimCharsBeforeMatching=p.trimCharsBeforeMatching.map((function(t){return m(t)?t:String(t)})),!m(e))return!1;if(!e.length)return!1;if(!Number.isInteger(r)||r<0)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(o(r),", equal to:\n").concat(JSON.stringify(r,null,4)));if(m(n))c=[n];else if(Array.isArray(n))c=n;else if(n){if("function"!=typeof n)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(o(n),", equal to:\n").concat(JSON.stringify(n,null,4)));(c=[]).push(n)}else c=n;if(a&&!l(a))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(o(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(p.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&(d=e,h=t,!0)})))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(d," is longer than 1 character, ").concat(h.length," (equals to ").concat(h,"). Please split it into separate characters and put into array as separate elements."));if(!c||!Array.isArray(c)||Array.isArray(c)&&!c.length||Array.isArray(c)&&1===c.length&&m(c[0])&&!c[0].trim()){if("function"==typeof p.cb){var g,b=r;if("matchLeftIncl"!==t&&"matchRight"!==t||(b+=1),"L"===t[5])for(var y=b;y--;){var v=e[y];if((!p.trimBeforeMatching||p.trimBeforeMatching&&void 0!==v&&v.trim())&&(!p.trimCharsBeforeMatching.length||void 0!==v&&!p.trimCharsBeforeMatching.includes(v))){g=y;break}}else if(t.startsWith("matchRight"))for(var _=b;_<e.length;_++){var w=e[_];if((!p.trimBeforeMatching||p.trimBeforeMatching&&w.trim())&&(!p.trimCharsBeforeMatching.length||!p.trimCharsBeforeMatching.includes(w))){g=_;break}}if(void 0===g)return!1;var j=e[g],x=g+1,O="";return x&&x>0&&(O=e.slice(0,x)),"L"===t[5]?p.cb(j,O,g):(g&&g>0&&(O=e.slice(g)),p.cb(j,O,g))}var k="";throw a||(k=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(k))}for(var M=0,A=c.length;M<A;M++){f="function"==typeof c[M];var C=c[M],B=void 0,P=void 0,z="",S=r;"matchRight"===t?S+=1:"matchLeft"===t&&(S-=1);var I=u(e,S,C,p,f,(function(e){return"L"===t[5]?e-1:e+1}));if(I&&f&&"function"==typeof C&&"EOL"===C())return!(!C()||p.cb&&!p.cb(B,z,P))&&C();if(Number.isInteger(I)&&(P=t.startsWith("matchLeft")?I-1:I+1,z="L"===t[5]?e.slice(0,I):e.slice(P)),P<0&&(P=void 0),e[P]&&(B=e[P]),Number.isInteger(I)&&(!p.cb||p.cb(B,z,P)))return C}return!1}("matchRight",t,e,r,n)}function d(t,e,r){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=function(e,o){return n.some((function(o){return t.startsWith(o,e)}))?{v:!0}:t[e]===r?{v:!1}:void 0},a=e,s=t.length;a<s;a++){var c=i(a);if("object"===o(c))return c.v}return!0}function h(t,e,o,r){for(var n=e,i=t.length;n<i;n++){if(t.startsWith(o,n))return!0;if(t.startsWith(r,n))return!1}return!1}function p(t,o){if(!e(t[o])||!o)return!1;return/^[a-zA-Z0-9:-]*(\s*[=]?\s*((?:'[^']*')|(?:"[^"]*")))|( [^/>'"=]*['"])/.test(t.slice(o))}function g(t,o){if(!e(t[o])||!o)return!1;return/^[a-zA-Z0-9:-]*=(((?:'[^']*')|(?:"[^"]*"))|((?:['"][^'"]*['"]\s*\/?>)))/.test(t.slice(o))}function b(t,o){if(e(t[c(t,o)]))for(var r=o;r--;)if(t[r].trim().length&&!e(t[r]))return t.slice(r+1,o)}function y(t){return"'"===t?'"':"'"}return function(o,r,n){if("string"!=typeof o||!o.trim()||!Number.isInteger(r)||!Number.isInteger(n)||!o[r]||!o[n]||r>=n)return!1;var i,a="'\"".includes(o[r])?o[r]:null,l=null;a&&(l=y(a));for(var m,u=(new Map).set("'",0).set('"',0).set("matchedPairs",0),v=null,_=0,w=!1,j=!1,x=!1,O=!1,k=!1,M=!1,A=r,C=o.length;A<C;A++){if("'\"".includes(o[A])&&w&&j===r&&x<A&&A>=n){var B=A!==n||g(o,s(o,n))||"/>".includes(o[s(o,A)]),P=!(A>n&&o[r]===o[n]&&o[r]===o[A]&&p(o,A+1)),z=A===n&&p(o,n+1),S=i&&i<A&&t.has(o.slice(i,A).trim()),I=i&&i<A&&o[i-1]&&!o[i-1].trim()&&Array.from(o.slice(i,A).trim()).every((function(t){return e(t)}))&&o[r]===o[n],E=void 0;A===n&&(E=b(o,A));var L=A===n&&(!e(o[c(o,A)])||E&&!t.has(E))&&"="!==o[c(o,A)],D="/>".includes(o[s(o,A)])&&A===n,T=e(o[s(o,A)]);return B&&P&&(z||S||I||L)&&(D||T||w&&A!==n)}if("'\"".includes(o[A])){if("'"===o[A]&&'"'===o[A-1]&&'"'===o[A+1]||'"'===o[A]&&"'"===o[A-1]&&"'"===o[A+1])continue;v&&o[A]===o[v]?(u.set("matchedPairs",u.get("matchedPairs")+1),j=v,x=A,v=null,w=!0):w=!1,u.set(o[A],u.get(o[A])+1),_=u.get('"')+u.get("'")}if(">"===o[A]&&!k&&(k=!0,_&&u.get("matchedPairs")&&_===2*u.get("matchedPairs")&&A<n))return!1;if("<"===o[A]&&k&&!M)return M=!0,!1;if(o[A].trim()&&!i)e(o[A])&&(i=A);else if(i&&!e(o[A])){if(m=o.slice(i,A),O=i>=n,"'\"".includes(o[A])&&0===u.get("matchedPairs")&&3===_&&o[r]===o[A]&&t.has(m)){var W=A>n,R=!v,N=v+1>=A,F=o.slice(v+1,A).trim().split(/\s+/).every((function(e){return t.has(e)})),U=A===n,q=_<3,$=!!w,H=!v,V=v+1>=A,J=!o.slice(v+1,A).trim().split(/\s+/).every((function(e){return t.has(e)}));return W&&(R||N||F)||U&&(q||$||H||V||J)}if(m&&t.has(m)&&j===r&&x===n)return!0}if("'\"".includes(o[A])&&(!(u.get('"')%2)||!(u.get("'")%2))&&(u.get('"')+u.get("'"))%2&&(m&&t.has(m)||A>n+1&&t.has(o.slice(n+1,A).trim()))){var Z=A>n,G=!!a,K=o[r]!==o[n],Q=t.has(o.slice(r+1,n).trim()),X=!h(o,A+1,o[n],y(o[n]));return Z&&!(G&&K&&Q&&X)}if(("="===o[A]||!o[A].length&&"="===o[s(o,A)])&&m&&t.has(m)){var Y=A>n,tt=!(!(w&&j===r&&x===n||g(o,i))&&w&&j&&j<=n);return Y&&tt}if(A>n){if(a&&o[A]===a){var et=!!v,ot=v===n,rt=v+1<A&&o.slice(v+1,A).trim(),nt=o.slice(v+1,A).trim().split(/\s+/).every((function(e){return t.has(e)}));return et&&ot&&rt&&nt&&A>=n}if(a&&o[n]===l&&o[A]===l)return!1;if("/"===o[A]||">"===o[A]||"<"===o[A]){var it=o[r]===o[n]&&v===n&&!o.slice(r+1,n).includes(o[r]),at=u.get("matchedPairs")<2,st=b(o,A),ct=(!st||!t.has(st))&&(!(A>n&&u.get("'")&&u.get('"')&&u.get("matchedPairs")>1)||"/>".includes(o[s(o,A)])),lt=_<3||u.get('"')+u.get("'")-2*u.get("matchedPairs")!=2,mt=!w||w&&!(j&&Array.from(o.slice(r+1,j).trim()).every((function(t){return e(t)}))&&t.has(o.slice(r+1,j).trim())),ut=!s(o,A)&&_%2==0,ft=o[r-2]&&"="===o[r-1]&&e(o[r-2]),dt=!d(o,A+1,"<",["='",'="']);return it||(at||ct)&&lt&&(mt||ut||ft||dt)}if("="===o[A]&&f(o,A,["'",'"'],{trimBeforeMatching:!0,trimCharsBeforeMatching:["="]}))return!0}else{var ht=void 0;if(o[A-1]&&o[A-1].trim()&&"="!==o[A-1])ht=A-1;else for(var pt=A;pt--;)if(o[pt].trim()&&"="!==o[pt]){ht=pt;break}if("="===o[A]&&f(o,A,["'",'"'],{cb:function(t){return!"/>".includes(t)},trimBeforeMatching:!0,trimCharsBeforeMatching:["="]})&&e(o[ht]))return!1;if(A===n&&g(o,A+1))return!0;if(A<n&&"'\"".includes(o[A])&&m&&o[c(o,r)]&&"="!==o[c(o,r)]&&j===r&&t.has(m))return!1}if("'\"".includes(o[A])&&A>n)return!!(O&&m&&t.has(m));"'\"".includes(o[A])&&(v=A),i&&!e(o[A])&&(i=null)}return!1}}));
