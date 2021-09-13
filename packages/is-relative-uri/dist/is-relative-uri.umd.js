/**
 * @name is-relative-uri
 * @fileoverview Is given string a relative URI?
 * @version 4.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/is-relative-uri/}
 */

!function(s,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((s="undefined"!=typeof globalThis?globalThis:s||self).isRelativeUri={})}(this,(function(s){"use strict";const e=["aaa","aaas","about","acap","acct","acd","acr","adiumxtra","adt","afp","afs","aim","amss","android","appdata","apt","ark","attachment","aw","barion","beshare","bitcoin","bitcoincash","blob","bolo","browserext","calculator","callto","cap","cast","casts","chrome","chrome-extension","cid","coap","coap+tcp","coap+ws","coaps","coaps+tcp","coaps+ws","com-eventbrite-attendee","content","conti","crid","cvs","dab","dav","diaspora","dict","did","dis","dlna-playcontainer","dlna-playsingle","dns","dntp","dpp","drm","drop","dtn","dvb","ed2k","elsi","example","facetime","fax","feed","feedready","filesystem","finger","first-run-pen-experience","fish","fm","fuchsia-pkg","geo","gg","git","gizmoproject","go","gopher","graph","gtalk","h323","ham","hcap","hcp","hxxp","hxxps","hydrazone","iax","icap","icon","im","imap","info","iotdisco","ipn","ipp","ipps","irc6","ircs","iris","iris.beep","iris.lwz","iris.xpc","iris.xpcs","isostore","itms","jabber","jar","jms","keyparc","lastfm","ldap","ldaps","leaptofrogans","lorawan","lvlt","magnet","mailserver","maps","market","message","microsoft.windows.camera","microsoft.windows.camera.multipicker","microsoft.windows.camera.picker","mid","mms","modem","mongodb","moz","ms-access","ms-browser-extension","ms-calculator","ms-drive-to","ms-enrollment","ms-excel","ms-eyecontrolspeech","ms-gamebarservices","ms-gamingoverlay","ms-getoffice","ms-help","ms-infopath","ms-inputapp","ms-lockscreencomponent-config","ms-media-stream-id","ms-mixedrealitycapture","ms-mobileplans","ms-officeapp","ms-people","ms-project","ms-powerpoint","ms-publisher","ms-restoretabcompanion","ms-screenclip","ms-screensketch","ms-search","ms-search-repair","ms-secondary-screen-controller","ms-secondary-screen-setup","ms-settings","ms-settings-airplanemode","ms-settings-bluetooth","ms-settings-camera","ms-settings-cellular","ms-settings-cloudstorage","ms-settings-connectabledevices","ms-settings-displays-topology","ms-settings-emailandaccounts","ms-settings-language","ms-settings-location","ms-settings-lock","ms-settings-nfctransactions","ms-settings-notifications","ms-settings-power","ms-settings-privacy","ms-settings-proximity","ms-settings-screenrotation","ms-settings-wifi","ms-settings-workplace","ms-spd","ms-sttoverlay","ms-transit-to","ms-useractivityset","ms-virtualtouchpad","ms-visio","ms-walk-to","ms-whiteboard","ms-whiteboard-cmd","ms-word","msnim","msrp","msrps","mss","mtqp","mumble","mupdate","mvn","news","nfs","ni","nih","nntp","notes","ocf","oid","onenote","onenote-cmd","opaquelocktoken","openpgp4fpr","pack","palm","paparazzi","payment","payto","pkcs11","platform","pop","pres","prospero","proxy","pwid","psyc","pttp","qb","query","quic-transport","redis","rediss","reload","res","resource","rmi","rsync","rtmfp","rtmp","rtsp","rtsps","rtspu","secondlife","service","session","sftp","sgn","shttp","sieve","simpleledger","sip","sips","skype","smb","sms","smtp","snews","snmp","soap.beep","soap.beeps","soldat","spiffe","spotify","ssh","steam","stun","stuns","submit","svn","tag","teamspeak","tel","teliaeid","telnet","tftp","things","thismessage","tip","tn3270","tool","turn","turns","tv","udp","unreal","urn","ut2004","v-event","vemmi","ventrilo","videotex","vnc","view-source","wais","webcal","wpid","ws","wss","wtai","wyciwyg","xcon","xcon-userid","xfire","xmlrpc.beep","xmlrpc.beeps","xmpp","xri","ymsgr","z39.50","z39.50r","z39.50s"];s.isRel=function(s,t){if("string"!=typeof s)throw new Error(`is-relative-uri: [THROW_ID_01] input string must be string, it was given as "${s}" (type ${typeof s})`);if(t&&"object"!=typeof t)throw new Error(`is-relative-uri: [THROW_ID_02] opts be plain object, it was given as ${t} (type ${typeof t})`);const a={flagUpUrisWithSchemes:!0,offset:0,...t};if(a.offset&&!Number.isInteger(a.offset))throw new Error(`is-relative-uri: [THROW_ID_02] opts.offset must be an integer, it was given as ${a.offset} (type ${typeof a.offset})`);return a.offset||(a.offset=0),s.split("").some((s=>!s.trim()))?{res:!1,message:"Remove whitespace."}:s.match(/\/\s*\/\s*\//g)?{res:!1,message:"Three consecutive slashes found."}:s.match(/.\/\s*\//g)?{res:!1,message:"Character followed by two slashes."}:s.includes("...")?{res:!1,message:"Three consecutive dots."}:s.includes("%")&&!s.match(/%[0-9a-f]/gi)?{res:!1,message:'Unescaped "%" character.'}:s.includes("<")?{res:!1,message:'Unescaped "<" character.'}:s.includes(">")?{res:!1,message:'Unescaped ">" character.'}:s.includes("[")?{res:!1,message:'Unescaped "[" character.'}:s.includes("]")?{res:!1,message:'Unescaped "]" character.'}:s.includes("{")?{res:!1,message:'Unescaped "{" character.'}:s.includes("}")?{res:!1,message:'Unescaped "}" character.'}:s.includes("|")?{res:!1,message:'Unescaped "|" character.'}:s.includes("\\")?{res:!1,message:"Unescaped backslash (\\) character."}:s.includes("^")?{res:!1,message:"Unescaped caret (^) character."}:s.endsWith(".")&&!s.startsWith(".")?{res:!1,message:"Ends with dot, is file extension missing?"}:s.includes("??")?{res:!1,message:"Two consecutive question marks."}:s.includes("##")?{res:!1,message:"Two consecutive hashes."}:s.endsWith("#")?{res:!1,message:"Ends with a hash."}:s.includes("#")&&s.slice(s.indexOf("#")+1).includes("/")?{res:!1,message:"Slash follows hash."}:s.match(/\.\.[^/]/g)?{res:!1,message:"Two dots should be followed by a slash."}:a.flagUpUrisWithSchemes&&(s.startsWith("http:")||s.startsWith("https:")||s.startsWith("ftp:")||s.startsWith("mailto:")||s.startsWith("file:")||s.startsWith("data:")||s.startsWith("irc:")||e.some((e=>s.startsWith(`${e}:`))))?{res:!1,message:null}:{res:!0,message:null}},s.version="4.0.1",Object.defineProperty(s,"__esModule",{value:!0})}));
