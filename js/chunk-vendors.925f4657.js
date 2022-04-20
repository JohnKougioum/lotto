(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),s=n("e330"),a=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=i.Error,h=s(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return h(this,e);var n=o(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=n("40d5"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},"04d1":function(e,t,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"0538":function(e,t,n){"use strict";var r=n("da84"),i=n("e330"),o=n("59ed"),s=n("861d"),a=n("1a2d"),c=n("f36a"),u=n("40d5"),l=r.Function,h=i([].concat),d=i([].join),f={},p=function(e,t,n){if(!a(f,t)){for(var r=[],i=0;i<t;i++)r[i]="a["+i+"]";f[t]=l("C,a","return new C("+d(r,",")+")")}return f[t](e,n)};e.exports=u?l.bind:function(e){var t=o(this),n=t.prototype,r=c(arguments,1),i=function(){var n=h(r,c(arguments));return this instanceof i?p(t,n.length,n):t.apply(e,n)};return s(n)&&(i.prototype=n),i}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):o(i(e))}},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function i(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0a06":function(e,t,n){"use strict";var r=n("c532"),i=n("30b5"),o=n("f6b4"),s=n("5270"),a=n("4a7b"),c=n("848b"),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!i){var h=[s,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(l),o=Promise.resolve(t);while(h.length)o=o.then(h.shift(),h.shift());return o}var d=t;while(r.length){var f=r.shift(),p=r.shift();try{d=f(d)}catch(v){p(v);break}}try{o=s(d)}catch(v){return Promise.reject(v)}while(l.length)o=o.then(l.shift(),l.shift());return o},l.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===u||i(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=Math.floor,s=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,v=l;return void 0!==h&&(h=i(h),v=u),a(d,v,(function(i,a){var u;switch(s(a,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,f);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var d=o(l/10);return 0===d?i:d<=p?void 0===r[d-1]?s(a,1):r[d-1]+s(a,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1148:function(e,t,n){"use strict";var r=n("da84"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r.RangeError;e.exports=function(e){var t=o(s(this)),n="",r=i(e);if(r<0||r==1/0)throw a("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),d=n("50c4"),f=n("577e"),p=n("dc4a"),v=n("4dae"),m=n("14c3"),g=n("9263"),y=n("9f7f"),_=n("d039"),b=y.UNSUPPORTED_Y,w=4294967295,C=Math.min,E=[].push,O=o(/./.exec),k=o(E),I=o("".slice),T=!_((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));s("split",(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=f(u(this)),s=void 0===n?w:n>>>0;if(0===s)return[];if(void 0===e)return[o];if(!a(e))return i(t,o,e,s);var c,l,h,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,y=new RegExp(e.source,p+"g");while(c=i(g,y,o)){if(l=y.lastIndex,l>m&&(k(d,I(o,m,c.index)),c.length>1&&c.index<o.length&&r(E,d,v(c,1)),h=c[0].length,m=l,d.length>=s))break;y.lastIndex===c.index&&y.lastIndex++}return m===o.length?!h&&O(y,"")||k(d,""):k(d,I(o,m)),d.length>s?v(d,0,s):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=u(this),s=void 0==t?void 0:p(t,e);return s?i(s,t,r,n):i(o,f(r),t,n)},function(e,r){var i=c(this),s=f(e),a=n(o,i,s,r,o!==t);if(a.done)return a.value;var u=l(i,RegExp),p=i.unicode,v=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(b?"g":"y"),g=new u(b?"^(?:"+i.source+")":i,v),y=void 0===r?w:r>>>0;if(0===y)return[];if(0===s.length)return null===m(g,s)?[s]:[];var _=0,E=0,O=[];while(E<s.length){g.lastIndex=b?0:E;var T,x=m(g,b?I(s,E):s);if(null===x||(T=C(d(g.lastIndex+(b?E:0)),s.length))===_)E=h(s,E,p);else{if(k(O,I(s,_,E)),O.length===y)return O;for(var S=1;S<=x.length-1;S++)if(k(O,x[S]),O.length===y)return O;E=_=T}}return k(O,I(s,_)),O}]}),!T,b)},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var r=i(n,e,t);return null!==r&&o(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"18a5":function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("anchor")},{anchor:function(e){return i(this,"a","name",e)}})},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return M})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return z})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return U})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return J})),n.d(t,"r",(function(){return B})),n.d(t,"s",(function(){return Z})),n.d(t,"t",(function(){return g})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return _})),n.d(t,"w",(function(){return b})),n.d(t,"x",(function(){return F})),n.d(t,"y",(function(){return C})),n.d(t,"z",(function(){return O})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return E})),n.d(t,"C",(function(){return w})),n.d(t,"D",(function(){return j})),n.d(t,"E",(function(){return A})),n.d(t,"F",(function(){return $})),n.d(t,"G",(function(){return oe})),n.d(t,"H",(function(){return q})),n.d(t,"I",(function(){return H})),n.d(t,"J",(function(){return D})),n.d(t,"K",(function(){return X})),n.d(t,"L",(function(){return Q})),n.d(t,"M",(function(){return N})),n.d(t,"N",(function(){return k}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},l=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function _(){return"object"===typeof self&&self.self===self}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function O(){return"object"===typeof indexedDB}function k(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new T(r,s,n);return a}}function S(e,t){return e.replace(P,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return JSON.parse(e)}function N(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=A(h(o[0])||""),n=A(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},j=function(e){const t=R(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},L=function(e){const t=R(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(V(n)&&V(o)){if(!U(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function H(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function B(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function z(e,t){const n=new G(e,t);return n.subscribe.bind(n)}class G{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Y),void 0===r.error&&(r.error=Y),void 0===r.complete&&(r.complete=Y);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Y(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return new Promise((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}})}class te{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new ne(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new re(this._db.createObjectStore(e,t))}close(){this._db.close()}}class ne{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new re(this._transaction.objectStore(e))}}class re{constructor(e){this._store=e}index(e){return new ie(this._store.index(e))}createIndex(e,t,n){return new ie(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return ee(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return ee(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return ee(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ee(e,"Error clearing IndexedDB object store")}}class ie{constructor(e){this._index=e}get(e){const t=this._index.get(e);return ee(t,"Error reading from IndexedDB")}}function oe(e,t,n){return new Promise((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=e=>{r(new te(e.target.result))},o.onerror=e=>{var t;i("Error opening indexedDB: "+(null===(t=e.target.error)||void 0===t?void 0:t.message))},o.onupgradeneeded=e=>{n(new te(o.result),e.oldVersion,e.newVersion,new ne(o.transaction))}}catch(o){i("Error opening indexedDB: "+o.message)}})}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,v=function(e,t){this.stopped=e,this.result=t},m=v.prototype;e.exports=function(e,t,n){var r,g,y,_,b,w,C,E=n&&n.that,O=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),T=i(t,E),x=function(e){return r&&f(r,"normal",e),new v(!0,e)},S=function(e){return O?(s(e),I?T(e[0],e[1],x):T(e[0],e[1])):I?T(e,x):T(e)};if(k)r=e;else{if(g=d(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(y=0,_=u(e);_>y;y++)if(b=S(e[y]),b&&l(m,b))return b;return new v(!1)}r=h(e,g)}w=r.next;while(!(C=o(w,r)).done){try{b=S(C.value)}catch(P){f(r,"throw",P)}if("object"==typeof b&&b&&l(m,b))return b}return new v(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:v+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("5a34"),s=n("1d80"),a=n("577e"),c=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~u(a(s(this)),a(o(e)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var r=n("e330"),i=n("5e77").PROPER,o=n("6eeb"),s=n("825a"),a=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),h="toString",d=RegExp.prototype,f=d[h],p=r(l),v=u((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),m=i&&f.name!=h;(v||m)&&o(RegExp.prototype,h,(function(){var e=s(this),t=c(e.source),n=e.flags,r=c(void 0===n&&a(d,e)&&!("flags"in d)?p(e):n);return"/"+t+"/"+r}),{unsafe:!0})},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6b75");function i(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=n("06c5");n("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||o(e)||Object(s["a"])(e)||a()}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function o(e){return!0===e}function s(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function h(e){return"[object RegExp]"===u.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function m(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}m("slot,component",!0);var g=m("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(e,t){return _.call(e,t)}function w(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var C=/-(\w)/g,E=w((function(e){return e.replace(C,(function(e,t){return t?t.toUpperCase():""}))})),O=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),k=/\B([A-Z])/g,I=w((function(e){return e.replace(k,"-$1").toLowerCase()}));function T(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function x(e,t){return e.bind(t)}var S=Function.prototype.bind?x:T;function P(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function N(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function R(e,t,n){}var j=function(e,t,n){return!1},L=function(e){return e};function M(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return M(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return M(e[n],t[n])}))}catch(u){return!1}}function D(e,t){for(var n=0;n<e.length;n++)if(M(e[n],t))return n;return-1}function F(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var $="data-server-rendered",U=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:j,async:!0,_lifecycleHooks:V},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+H.source+".$_\\d]");function G(e){if(!z.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var K,Y="__proto__"in{},J="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Q&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ne=Z&&Z.indexOf("edge/")>0,re=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),ie=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),oe={}.watch,se=!1;if(J)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){se=!0}}),window.addEventListener("test-passive",null,ae)}catch(Os){}var ce=function(){return void 0===K&&(K=!J&&!Q&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),K},ue=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var he,de="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);he="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=R,pe=0,ve=function(){this.id=pe++,this.subs=[]};ve.prototype.addSub=function(e){this.subs.push(e)},ve.prototype.removeSub=function(e){y(this.subs,e)},ve.prototype.depend=function(){ve.target&&ve.target.addDep(this)},ve.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ve.target=null;var me=[];function ge(e){me.push(e),ve.target=e}function ye(){me.pop(),ve.target=me[me.length-1]}var _e=function(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},be={child:{configurable:!0}};be.child.get=function(){return this.componentInstance},Object.defineProperties(_e.prototype,be);var we=function(e){void 0===e&&(e="");var t=new _e;return t.text=e,t.isComment=!0,t};function Ce(e){return new _e(void 0,void 0,void 0,String(e))}function Ee(e){var t=new _e(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Oe=Array.prototype,ke=Object.create(Oe),Ie=["push","pop","shift","unshift","splice","sort","reverse"];Ie.forEach((function(e){var t=Oe[e];W(ke,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Te=Object.getOwnPropertyNames(ke),xe=!0;function Se(e){xe=e}var Pe=function(e){this.value=e,this.dep=new ve,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(Y?Ae(e,ke):Ne(e,ke,Te),this.observeArray(e)):this.walk(e)};function Ae(e,t){e.__proto__=t}function Ne(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(e,o,t[o])}}function Re(e,t){var n;if(c(e)&&!(e instanceof _e))return b(e,"__ob__")&&e.__ob__ instanceof Pe?n=e.__ob__:xe&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Pe(e)),t&&n&&n.vmCount++,n}function je(e,t,n,r,i){var o=new ve,s=Object.getOwnPropertyDescriptor(e,t);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Re(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ve.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&De(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Re(t),o.notify())}})}}function Le(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Me(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}function De(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&De(t)}Pe.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)je(e,t[n])},Pe.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Re(e[t])};var Fe=q.optionMergeStrategies;function $e(e,t){if(!t)return e;for(var n,r,i,o=de?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=e[n],i=t[n],b(e,n)?r!==i&&l(r)&&l(i)&&$e(r,i):Le(e,n,i));return e}function Ue(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?$e(r,i):i}:t?e?function(){return $e("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ve(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?qe(n):n}function qe(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function He(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Fe.data=function(e,t,n){return n?Ue(e,t,n):t&&"function"!==typeof t?e:Ue(e,t)},V.forEach((function(e){Fe[e]=Ve})),U.forEach((function(e){Fe[e+"s"]=He})),Fe.watch=function(e,t,n,r){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var s=i[o],a=t[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Fe.props=Fe.methods=Fe.inject=Fe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Fe.provide=Ue;var Be=function(e,t){return void 0===t?e:t};function We(e,t){var n=e.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=E(i),s[o]={type:null})}else if(l(n))for(var a in n)i=n[a],o=E(a),s[o]=l(i)?i:{type:i};else 0;e.props=s}}function ze(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var s=n[o];r[o]=l(s)?A({from:o},s):{from:s}}else 0}}function Ge(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ke(e,t,n){if("function"===typeof t&&(t=t.options),We(t,n),ze(t,n),Ge(t),!t._base&&(t.extends&&(e=Ke(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ke(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)b(e,o)||a(o);function a(r){var i=Fe[r]||Be;s[r]=i(e[r],t[r],n,r)}return s}function Ye(e,t,n,r){if("string"===typeof n){var i=e[t];if(b(i,n))return i[n];var o=E(n);if(b(i,o))return i[o];var s=O(o);if(b(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Je(e,t,n,r){var i=t[e],o=!b(n,e),s=n[e],a=tt(Boolean,i.type);if(a>-1)if(o&&!b(i,"default"))s=!1;else if(""===s||s===I(e)){var c=tt(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Qe(r,i,e);var u=xe;Se(!0),Re(s),Se(u)}return s}function Qe(e,t,n){if(b(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Ze(t.type)?r.call(e):r}}var Xe=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Xe);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ge();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Os){it(Os,r,"errorCaptured hook")}}}it(e,t,n)}finally{ye()}}function rt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch((function(e){return nt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Os){nt(Os,r,i)}return o}function it(e,t,n){if(q.errorHandler)try{return q.errorHandler.call(null,e,t,n)}catch(Os){Os!==e&&ot(Os,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!J&&!Q||"undefined"===typeof console)throw e;console.error(e)}var st,at=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var ht=Promise.resolve();st=function(){ht.then(lt),re&&setTimeout(R)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())st="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var dt=1,ft=new MutationObserver(lt),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),st=function(){dt=(dt+1)%2,pt.data=String(dt)},at=!0}function vt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(Os){nt(Os,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,st()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var mt=new he;function gt(e){yt(e,mt),mt.clear()}function yt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!c(e)||Object.isFrozen(e)||e instanceof _e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i){n=e.length;while(n--)yt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)yt(e[r[n]],t)}}}var _t=w((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function bt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return rt(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)rt(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function wt(e,t,n,i,s,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=_t(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=bt(u,a)),o(h.once)&&(u=e[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(h=_t(c),i(h.name,t[c],h.capture))}function Ct(e,t,n){var s;e instanceof _e&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),y(s.fns,c)}r(a)?s=bt([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=bt([a,c]),s.merged=!0,e[t]=s}function Et(e,t,n){var o=t.options.props;if(!r(o)){var s={},a=e.attrs,c=e.props;if(i(a)||i(c))for(var u in o){var l=I(u);Ot(s,c,u,l,!0)||Ot(s,a,u,l,!1)}return s}}function Ot(e,t,n,r,o){if(i(t)){if(b(t,n))return e[n]=t[n],o||delete t[n],!0;if(b(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function kt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function It(e){return a(e)?[Ce(e)]:Array.isArray(e)?xt(e):void 0}function Tt(e){return i(e)&&i(e.text)&&s(e.isComment)}function xt(e,t){var n,s,c,u,l=[];for(n=0;n<e.length;n++)s=e[n],r(s)||"boolean"===typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=xt(s,(t||"")+"_"+n),Tt(s[0])&&Tt(u)&&(l[c]=Ce(u.text+s[0].text),s.shift()),l.push.apply(l,s)):a(s)?Tt(u)?l[c]=Ce(u.text+s):""!==s&&l.push(Ce(s)):Tt(s)&&Tt(u)?l[c]=Ce(u.text+s.text):(o(e._isVList)&&i(s.tag)&&r(s.key)&&i(t)&&(s.key="__vlist"+t+"_"+n+"__"),l.push(s)));return l}function St(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Pt(e){var t=At(e.$options.inject,e);t&&(Se(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),Se(!0))}function At(e,t){if(e){for(var n=Object.create(null),r=de?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from,a=t;while(a){if(a._provided&&b(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in e[o]){var c=e[o].default;n[o]="function"===typeof c?c.call(t):c}else 0}}return n}}function Nt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Rt)&&delete n[u];return n}function Rt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function jt(e){return e.isComment&&e.asyncFactory}function Lt(e,t,r){var i,o=Object.keys(t).length>0,s=e?!!e.$stable:!o,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=Mt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Dt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),W(i,"$stable",s),W(i,"$key",a),W(i,"$hasNormal",o),i}function Mt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:It(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!jt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Dt(e,t){return function(){return e[t]}}function Ft(e,t){var n,r,o,s,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(de&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(s=Object.keys(e),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=t(e[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function $t(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ut(e){return Ye(this.$options,"filters",e,!0)||L}function Vt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function qt(e,t,n,r,i){var o=q.keyCodes[t]||n;return i&&r&&!q.keyCodes[t]?Vt(i,r):o?Vt(o,e):r?I(r)!==t:void 0===e}function Ht(e,t,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=N(n));var s=function(s){if("class"===s||"style"===s||g(s))o=e;else{var a=e.attrs&&e.attrs.type;o=r||q.mustUseProp(t,a,s)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=E(s),u=I(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=e.on||(e.on={});l["update:"+s]=function(e){n[s]=e}}};for(var a in n)s(a)}else;return e}function Bt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),zt(r,"__static__"+e,!1)),r}function Wt(e,t,n){return zt(e,"__once__"+t+(n?"_"+n:""),!0),e}function zt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Gt(e[r],t+"_"+r,n);else Gt(e,t,n)}function Gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Kt(e,t){if(t)if(l(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Yt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Yt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Jt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Qt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=Wt,e._n=v,e._s=p,e._l=Ft,e._t=$t,e._q=M,e._i=D,e._m=Bt,e._f=Ut,e._k=qt,e._b=Ht,e._v=Ce,e._e=we,e._u=Yt,e._g=Kt,e._d=Jt,e._p=Qt}function Zt(e,t,r,i,s){var a,c=this,u=s.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=At(u.inject,i),this.slots=function(){return c.$slots||Lt(e.scopedSlots,c.$slots=Nt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Lt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Lt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=fn(a,e,t,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return fn(a,e,t,n,r,h)}}function en(e,t,r,o,s){var a=e.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Je(l,u,t||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Zt(r,c,s,o,e),d=a.render.call(null,h._c,h);if(d instanceof _e)return tn(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=It(d)||[],p=new Array(f.length),v=0;v<f.length;v++)p[v]=tn(f[v],r,h.parent,a,h);return p}}function tn(e,t,n,r,i){var o=Ee(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nn(e,t){for(var n in t)e[E(n)]=t[n]}Xt(Zt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var r=e.componentInstance=an(e,An);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Mn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):Fn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?$n(t,!0):t.$destroy())}},on=Object.keys(rn);function sn(e,t,n,s,a){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=En(l,u),void 0===e))return Cn(l,t,n,s,a);t=t||{},Cr(e),i(t.model)&&ln(e.options,t);var h=Et(t,e,a);if(o(e.options.functional))return en(e,h,t,n,s);var d=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cn(t);var p=e.options.name||a,v=new _e("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:s},l);return v}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var r=on[n],i=t[r],o=rn[r];i===o||i&&i._merged||(t[r]=i?un(o,i):o)}}function un(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),s=o[r],a=t.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var hn=1,dn=2;function fn(e,t,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=dn),pn(e,t,n,r,i)}function pn(e,t,n,r,o){if(i(n)&&i(n.__ob__))return we();if(i(n)&&i(n.is)&&(t=n.is),!t)return we();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=It(r):o===hn&&(r=kt(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||q.getTagNamespace(t),s=q.isReservedTag(t)?new _e(q.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!i(c=Ye(e.$options,"components",t))?new _e(t,n,r,void 0,void 0,e):sn(c,n,e,r,t)):s=sn(t,n,e,r);return Array.isArray(s)?s:i(s)?(i(a)&&vn(s,a),i(n)&&mn(n),s):we()}function vn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var s=0,a=e.children.length;s<a;s++){var c=e.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&vn(c,t,n)}}function mn(e){c(e.style)&&gt(e.style),c(e.class)&&gt(e.class)}function gn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=Nt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return fn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return fn(e,t,n,r,i,!0)};var o=r&&r.data;je(e,"$attrs",o&&o.attrs||n,null,!0),je(e,"$listeners",t._parentListeners||n,null,!0)}var yn,_n=null;function bn(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return vt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Lt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{_n=t,e=r.call(t._renderProxy,t.$createElement)}catch(Os){nt(Os,t,"render"),e=t._vnode}finally{_n=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof _e||(e=we()),e.parent=i,e}}function wn(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function Cn(e,t,n,r,i){var o=we();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function En(e,t){if(o(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=_n;if(n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var s=e.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(s,n)}));var h=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){e.resolved=wn(n,t),a?s.length=0:h(!0)})),p=F((function(t){i(e.errorComp)&&(e.error=!0,h(!0))})),v=e(d,p);return c(v)&&(f(v)?r(e.resolved)&&v.then(d,p):f(v.component)&&(v.component.then(d,p),i(v.error)&&(e.errorComp=wn(v.error,t)),i(v.loading)&&(e.loadingComp=wn(v.loading,t),0===v.delay?e.loading=!0:u=setTimeout((function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))}),v.delay||200)),i(v.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),v.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function On(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||jt(n)))return n}}function kn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Sn(e,t)}function In(e,t){yn.$on(e,t)}function Tn(e,t){yn.$off(e,t)}function xn(e,t){var n=yn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Sn(e,t,n){yn=e,wt(t,n||{},In,Tn,xn,e),yn=void 0}function Pn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;var a=s.length;while(a--)if(o=s[a],o===t||o.fn===t){s.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'+e+'"',o=0,s=n.length;o<s;o++)rt(n[o],t,r,t,i)}return t}}var An=null;function Nn(e){var t=An;return An=e,function(){An=t}}function Rn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function jn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Nn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Un(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Un(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Ln(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=we),Un(e,"beforeMount"),r=function(){e._update(e._render(),n)},new rr(e,r,R,{before:function(){e._isMounted&&!e._isDestroyed&&Un(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Un(e,"mounted")),e}function Mn(e,t,r,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){Se(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Je(f,p,t,e)}Se(!0),e.$options.propsData=t}r=r||n;var v=e.$options._parentListeners;e.$options._parentListeners=r,Sn(e,r,v),u&&(e.$slots=Nt(o,i.context),e.$forceUpdate())}function Dn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Fn(e,t){if(t){if(e._directInactive=!1,Dn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Fn(e.$children[n]);Un(e,"activated")}}function $n(e,t){if((!t||(e._directInactive=!0,!Dn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)$n(e.$children[n]);Un(e,"deactivated")}}function Un(e,t){ge();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)rt(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Vn=[],qn=[],Hn={},Bn=!1,Wn=!1,zn=0;function Gn(){zn=Vn.length=qn.length=0,Hn={},Bn=Wn=!1}var Kn=0,Yn=Date.now;if(J&&!ee){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Jn.now()})}function Qn(){var e,t;for(Kn=Yn(),Wn=!0,Vn.sort((function(e,t){return e.id-t.id})),zn=0;zn<Vn.length;zn++)e=Vn[zn],e.before&&e.before(),t=e.id,Hn[t]=null,e.run();var n=qn.slice(),r=Vn.slice();Gn(),er(n),Xn(r),ue&&q.devtools&&ue.emit("flush")}function Xn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Un(r,"updated")}}function Zn(e){e._inactive=!1,qn.push(e)}function er(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Fn(e[t],!0)}function tr(e){var t=e.id;if(null==Hn[t]){if(Hn[t]=!0,Wn){var n=Vn.length-1;while(n>zn&&Vn[n].id>e.id)n--;Vn.splice(n+1,0,e)}else Vn.push(e);Bn||(Bn=!0,vt(Qn))}}var nr=0,rr=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new he,this.newDepIds=new he,this.expression="","function"===typeof t?this.getter=t:(this.getter=G(t),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var e;ge(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Os){if(!this.user)throw Os;nt(Os,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&gt(e),ye(),this.cleanupDeps()}return e},rr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},rr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tr(this)},rr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function or(e,t,n){ir.get=function(){return this[t][n]},ir.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ir)}function sr(e){e._watchers=[];var t=e.$options;t.props&&ar(e,t.props),t.methods&&vr(e,t.methods),t.data?cr(e):Re(e._data={},!0),t.computed&&hr(e,t.computed),t.watch&&t.watch!==oe&&mr(e,t.watch)}function ar(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;o||Se(!1);var s=function(o){i.push(o);var s=Je(o,t,n,e);je(r,o,s),o in e||or(e,"_props",o)};for(var a in t)s(a);Se(!0)}function cr(e){var t=e.$options.data;t=e._data="function"===typeof t?ur(t,e):t||{},l(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||B(o)||or(e,"_data",o)}Re(t,!0)}function ur(e,t){ge();try{return e.call(t,t)}catch(Os){return nt(Os,t,"data()"),{}}finally{ye()}}var lr={lazy:!0};function hr(e,t){var n=e._computedWatchers=Object.create(null),r=ce();for(var i in t){var o=t[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(e,s||R,R,lr)),i in e||dr(e,i,o)}}function dr(e,t,n){var r=!ce();"function"===typeof n?(ir.get=r?fr(t):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(t):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(e,t,ir)}function fr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ve.target&&t.depend(),t.value}}function pr(e){return function(){return e.call(this,this)}}function vr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?R:S(t[n],e)}function mr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)gr(e,n,r[i]);else gr(e,n,r)}}function gr(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function yr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Le,e.prototype.$delete=Me,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return gr(r,e,t,n);n=n||{},n.user=!0;var i=new rr(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';ge(),rt(t,r,[i.value],r,o),ye()}return function(){i.teardown()}}}var _r=0;function br(e){e.prototype._init=function(e){var t=this;t._uid=_r++,t._isVue=!0,e&&e._isComponent?wr(t,e):t.$options=Ke(Cr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Rn(t),kn(t),gn(t),Un(t,"beforeCreate"),Pt(t),sr(t),St(t),Un(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function wr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Cr(e){var t=e.options;if(e.super){var n=Cr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Er(e);i&&A(e.extendOptions,i),t=e.options=Ke(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Er(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Or(e){this._init(e)}function kr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Ir(e){e.mixin=function(e){return this.options=Ke(this.options,e),this}}function Tr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Ke(n.options,e),s["super"]=n,s.options.props&&xr(s),s.options.computed&&Sr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,U.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=A({},s.options),i[r]=s,s}}function xr(e){var t=e.options.props;for(var n in t)or(e.prototype,"_props",n)}function Sr(e){var t=e.options.computed;for(var n in t)dr(e.prototype,n,t[n])}function Pr(e){U.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Ar(e){return e&&(e.Ctor.options.name||e.tag)}function Nr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Rr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&jr(n,o,r,i)}}}function jr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}br(Or),yr(Or),Pn(Or),jn(Or),bn(Or);var Lr=[String,RegExp,Array],Mr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:Ar(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&jr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)jr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Rr(e,(function(e){return Nr(t,e)}))})),this.$watch("exclude",(function(t){Rr(e,(function(e){return!Nr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=On(e),n=t&&t.componentOptions;if(n){var r=Ar(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Nr(o,r))||s&&r&&Nr(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Dr={KeepAlive:Mr};function Fr(e){var t={get:function(){return q}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:A,mergeOptions:Ke,defineReactive:je},e.set=Le,e.delete=Me,e.nextTick=vt,e.observable=function(e){return Re(e),e},e.options=Object.create(null),U.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,A(e.options.components,Dr),kr(e),Ir(e),Tr(e),Pr(e)}Fr(Or),Object.defineProperty(Or.prototype,"$isServer",{get:ce}),Object.defineProperty(Or.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Or,"FunctionalRenderContext",{value:Zt}),Or.version="2.6.14";var $r=m("style,class"),Ur=m("input,textarea,option,select,progress"),Vr=function(e,t,n){return"value"===n&&Ur(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},qr=m("contenteditable,draggable,spellcheck"),Hr=m("events,caret,typing,plaintext-only"),Br=function(e,t){return Yr(t)||"false"===t?"false":"contenteditable"===e&&Hr(t)?t:"true"},Wr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),zr="http://www.w3.org/1999/xlink",Gr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kr=function(e){return Gr(e)?e.slice(6,e.length):""},Yr=function(e){return null==e||!1===e};function Jr(e){var t=e.data,n=e,r=e;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Qr(r.data,t));while(i(n=n.parent))n&&n.data&&(t=Qr(t,n.data));return Xr(t.staticClass,t.class)}function Qr(e,t){return{staticClass:Zr(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Xr(e,t){return i(e)||i(t)?Zr(e,ei(t)):""}function Zr(e,t){return e?t?e+" "+t:e:t||""}function ei(e){return Array.isArray(e)?ti(e):c(e)?ni(e):"string"===typeof e?e:""}function ti(e){for(var t,n="",r=0,o=e.length;r<o;r++)i(t=ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(e){return ii(e)||oi(e)};function ai(e){return oi(e)?"svg":"math"===e?"math":void 0}var ci=Object.create(null);function ui(e){if(!J)return!0;if(si(e))return!1;if(e=e.toLowerCase(),null!=ci[e])return ci[e];var t=document.createElement(e);return e.indexOf("-")>-1?ci[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(t.toString())}var li=m("text,number,password,search,email,tel,url");function hi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function di(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(e,t){return document.createElementNS(ri[e],t)}function pi(e){return document.createTextNode(e)}function vi(e){return document.createComment(e)}function mi(e,t,n){e.insertBefore(t,n)}function gi(e,t){e.removeChild(t)}function yi(e,t){e.appendChild(t)}function _i(e){return e.parentNode}function bi(e){return e.nextSibling}function wi(e){return e.tagName}function Ci(e,t){e.textContent=t}function Ei(e,t){e.setAttribute(t,"")}var Oi=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:vi,insertBefore:mi,removeChild:gi,appendChild:yi,parentNode:_i,nextSibling:bi,tagName:wi,setTextContent:Ci,setStyleScope:Ei}),ki={create:function(e,t){Ii(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ii(e,!0),Ii(t))},destroy:function(e){Ii(e,!0)}};function Ii(e,t){var n=e.data.ref;if(i(n)){var r=e.context,o=e.componentInstance||e.elm,s=r.$refs;t?Array.isArray(s[n])?y(s[n],o):s[n]===o&&(s[n]=void 0):e.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var Ti=new _e("",{},[]),xi=["create","activate","update","remove","destroy"];function Si(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&Pi(e,t)||o(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function Pi(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,o=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Ai(e,t,n){var r,o,s={};for(r=t;r<=n;++r)o=e[r].key,i(o)&&(s[o]=r);return s}function Ni(e){var t,n,s={},c=e.modules,u=e.nodeOps;for(t=0;t<xi.length;++t)for(s[xi[t]]=[],n=0;n<c.length;++n)i(c[n][xi[t]])&&s[xi[t]].push(c[n][xi[t]]);function l(e){return new _e(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function f(e,t,n,r,s,a,c){if(i(e.elm)&&i(a)&&(e=a[c]=Ee(e)),e.isRootInsert=!s,!p(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;i(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),C(e),_(e,h,t),i(l)&&w(e,t),y(n,e.elm,r)):o(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function p(e,t,n,r){var s=e.data;if(i(s)){var a=i(e.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(e,!1),i(e.componentInstance))return v(e,t),y(n,e.elm,r),o(a)&&g(e,t,n,r),!0}}function v(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(w(e,t),C(e)):(Ii(e),t.push(e))}function g(e,t,n,r){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ti,a);t.push(a);break}y(n,e.elm,r)}function y(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function _(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else a(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return i(e.tag)}function w(e,n){for(var r=0;r<s.create.length;++r)s.create[r](Ti,e);t=e.data.hook,i(t)&&(i(t.create)&&t.create(Ti,e),i(t.insert)&&n.push(e))}function C(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}i(t=An)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function E(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function O(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)O(e.children[n])}function k(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(I(r),O(r)):d(r.elm))}}function I(e,t){if(i(t)||i(e.data)){var n,r=s.remove.length+1;for(i(t)?t.listeners+=r:t=h(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&I(n,t),n=0;n<s.remove.length;++n)s.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else d(e.elm)}function T(e,t,n,o,s){var a,c,l,h,d=0,p=0,v=t.length-1,m=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],w=!s;while(d<=v&&p<=y)r(m)?m=t[++d]:r(g)?g=t[--v]:Si(m,_)?(S(m,_,o,n,p),m=t[++d],_=n[++p]):Si(g,b)?(S(g,b,o,n,y),g=t[--v],b=n[--y]):Si(m,b)?(S(m,b,o,n,y),w&&u.insertBefore(e,m.elm,u.nextSibling(g.elm)),m=t[++d],b=n[--y]):Si(g,_)?(S(g,_,o,n,p),w&&u.insertBefore(e,g.elm,m.elm),g=t[--v],_=n[++p]):(r(a)&&(a=Ai(t,d,v)),c=i(_.key)?a[_.key]:x(_,t,d,v),r(c)?f(_,o,e,m.elm,!1,n,p):(l=t[c],Si(l,_)?(S(l,_,o,n,p),t[c]=void 0,w&&u.insertBefore(e,l.elm,m.elm)):f(_,o,e,m.elm,!1,n,p)),_=n[++p]);d>v?(h=r(n[y+1])?null:n[y+1].elm,E(e,h,n,p,y,o)):p>y&&k(t,d,v)}function x(e,t,n,r){for(var o=n;o<r;o++){var s=t[o];if(i(s)&&Si(e,s))return o}}function S(e,t,n,a,c,l){if(e!==t){i(t.elm)&&i(a)&&(t=a[c]=Ee(t));var h=t.elm=e.elm;if(o(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?N(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(e,t);var p=e.children,v=t.children;if(i(f)&&b(t)){for(d=0;d<s.update.length;++d)s.update[d](e,t);i(d=f.hook)&&i(d=d.update)&&d(e,t)}r(t.text)?i(p)&&i(v)?p!==v&&T(h,p,v,n,l):i(v)?(i(e.text)&&u.setTextContent(h,""),E(h,null,v,0,v.length-1,n)):i(p)?k(p,0,p.length-1):i(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(e,t)}}}function P(e,t,n){if(o(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var A=m("attrs,class,staticClass,staticStyle,key");function N(e,t,n,r){var s,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(t,!0),i(s=t.componentInstance)))return v(t,n),!0;if(i(a)){if(i(u))if(e.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!N(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else _(t,u,n);if(i(c)){var f=!1;for(var p in c)if(!A(p)){f=!0,w(t,n);break}!f&&c["class"]&&gt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,h=[];if(r(e))c=!0,f(t,h);else{var d=i(e.nodeType);if(!d&&Si(e,t))S(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute($)&&(e.removeAttribute($),n=!0),o(n)&&N(e,t,h))return P(t,h,!0),e;e=l(e)}var p=e.elm,v=u.parentNode(p);if(f(t,h,p._leaveCb?null:v,u.nextSibling(p)),i(t.parent)){var m=t.parent,g=b(t);while(m){for(var y=0;y<s.destroy.length;++y)s.destroy[y](m);if(m.elm=t.elm,g){for(var _=0;_<s.create.length;++_)s.create[_](Ti,m);var w=m.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Ii(m);m=m.parent}}i(v)?k([e],0,0):i(e.tag)&&O(e)}}return P(t,h,c),t.elm}i(e)&&O(e)}}var Ri={create:ji,update:ji,destroy:function(e){ji(e,Ti)}};function ji(e,t){(e.data.directives||t.data.directives)&&Li(e,t)}function Li(e,t){var n,r,i,o=e===Ti,s=t===Ti,a=Di(e.data.directives,e.context),c=Di(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,$i(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):($i(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)$i(u[n],"inserted",t,e)};o?Ct(t,"insert",h):h()}if(l.length&&Ct(t,"postpatch",(function(){for(var n=0;n<l.length;n++)$i(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||$i(a[n],"unbind",e,e,s)}var Mi=Object.create(null);function Di(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=Mi),i[Fi(r)]=r,r.def=Ye(t.$options,"directives",r.name,!0);return i}function Fi(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function $i(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Os){nt(Os,n.context,"directive "+e.name+" "+t+" hook")}}var Ui=[ki,Ri];function Vi(e,t){var n=t.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var o,s,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(o in i(l.__ob__)&&(l=t.data.attrs=A({},l)),l)s=l[o],a=u[o],a!==s&&qi(c,o,s,t.data.pre);for(o in(ee||ne)&&l.value!==u.value&&qi(c,"value",l.value),u)r(l[o])&&(Gr(o)?c.removeAttributeNS(zr,Kr(o)):qr(o)||c.removeAttribute(o))}}function qi(e,t,n,r){r||e.tagName.indexOf("-")>-1?Hi(e,t,n):Wr(t)?Yr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):qr(t)?e.setAttribute(t,Br(t,n)):Gr(t)?Yr(n)?e.removeAttributeNS(zr,Kr(t)):e.setAttributeNS(zr,t,n):Hi(e,t,n)}function Hi(e,t,n){if(Yr(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var Bi={create:Vi,update:Vi};function Wi(e,t){var n=t.elm,o=t.data,s=e.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Jr(t),c=n._transitionClasses;i(c)&&(a=Zr(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var zi,Gi={create:Wi,update:Wi},Ki="__r",Yi="__c";function Ji(e){if(i(e[Ki])){var t=ee?"change":"input";e[t]=[].concat(e[Ki],e[t]||[]),delete e[Ki]}i(e[Yi])&&(e.change=[].concat(e[Yi],e.change||[]),delete e[Yi])}function Qi(e,t,n){var r=zi;return function i(){var o=t.apply(null,arguments);null!==o&&eo(e,i,n,r)}}var Xi=at&&!(ie&&Number(ie[1])<=53);function Zi(e,t,n,r){if(Xi){var i=Kn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}zi.addEventListener(e,t,se?{capture:n,passive:r}:n)}function eo(e,t,n,r){(r||zi).removeEventListener(e,t._wrapper||t,n)}function to(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};zi=t.elm,Ji(n),wt(n,i,Zi,eo,Qi,t.context),zi=void 0}}var no,ro={create:to,update:to};function io(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,o,s=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=A({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Os){}}}}function oo(e,t){return!e.composing&&("OPTION"===e.tagName||so(e,t)||ao(e,t))}function so(e,t){var n=!0;try{n=document.activeElement!==e}catch(Os){}return n&&e.value!==t}function ao(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return v(n)!==v(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var co={create:io,update:io},uo=w((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function lo(e){var t=ho(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ho(e){return Array.isArray(e)?N(e):"string"===typeof e?uo(e):e}function fo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&A(r,n)}(n=lo(e.data))&&A(r,n);var o=e;while(o=o.parent)o.data&&(n=lo(o.data))&&A(r,n);return r}var po,vo=/^--/,mo=/\s*!important$/,go=function(e,t,n){if(vo.test(t))e.style.setProperty(t,n);else if(mo.test(n))e.style.setProperty(I(t),n.replace(mo,""),"important");else{var r=_o(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},yo=["Webkit","Moz","ms"],_o=w((function(e){if(po=po||document.createElement("div").style,e=E(e),"filter"!==e&&e in po)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<yo.length;n++){var r=yo[n]+t;if(r in po)return r}}));function bo(e,t){var n=t.data,o=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=t.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,d=ho(t.data.style)||{};t.data.normalizedStyle=i(d.__ob__)?A({},d):d;var f=fo(t,!0);for(a in h)r(f[a])&&go(c,a,"");for(a in f)s=f[a],s!==h[a]&&go(c,a,null==s?"":s)}}var wo={create:bo,update:bo},Co=/\s+/;function Eo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Co).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Oo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Co).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function ko(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&A(t,Io(e.name||"v")),A(t,e),t}return"string"===typeof e?Io(e):void 0}}var Io=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),To=J&&!te,xo="transition",So="animation",Po="transition",Ao="transitionend",No="animation",Ro="animationend";To&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Po="WebkitTransition",Ao="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(No="WebkitAnimation",Ro="webkitAnimationEnd"));var jo=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Lo(e){jo((function(){jo(e)}))}function Mo(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Eo(e,t))}function Do(e,t){e._transitionClasses&&y(e._transitionClasses,t),Oo(e,t)}function Fo(e,t,n){var r=Uo(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===xo?Ao:Ro,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var $o=/\b(transform|all)(,|$)/;function Uo(e,t){var n,r=window.getComputedStyle(e),i=(r[Po+"Delay"]||"").split(", "),o=(r[Po+"Duration"]||"").split(", "),s=Vo(i,o),a=(r[No+"Delay"]||"").split(", "),c=(r[No+"Duration"]||"").split(", "),u=Vo(a,c),l=0,h=0;t===xo?s>0&&(n=xo,l=s,h=o.length):t===So?u>0&&(n=So,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?xo:So:null,h=n?n===xo?o.length:c.length:0);var d=n===xo&&$o.test(r[Po+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Vo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return qo(t)+qo(e[n])})))}function qo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ho(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=ko(e.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,l=o.enterToClass,h=o.enterActiveClass,d=o.appearClass,f=o.appearToClass,p=o.appearActiveClass,m=o.beforeEnter,g=o.enter,y=o.afterEnter,_=o.enterCancelled,b=o.beforeAppear,w=o.appear,C=o.afterAppear,E=o.appearCancelled,O=o.duration,k=An,I=An.$vnode;while(I&&I.parent)k=I.context,I=I.parent;var T=!k._isMounted||!e.isRootInsert;if(!T||w||""===w){var x=T&&d?d:u,S=T&&p?p:h,P=T&&f?f:l,A=T&&b||m,N=T&&"function"===typeof w?w:g,R=T&&C||y,j=T&&E||_,L=v(c(O)?O.enter:O);0;var M=!1!==s&&!te,D=zo(N),$=n._enterCb=F((function(){M&&(Do(n,P),Do(n,S)),$.cancelled?(M&&Do(n,x),j&&j(n)):R&&R(n),n._enterCb=null}));e.data.show||Ct(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,$)})),A&&A(n),M&&(Mo(n,x),Mo(n,S),Lo((function(){Do(n,x),$.cancelled||(Mo(n,P),D||(Wo(L)?setTimeout($,L):Fo(n,a,$)))}))),e.data.show&&(t&&t(),N&&N(n,$)),M||D||$()}}}function Bo(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=ko(e.data.transition);if(r(o)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,d=o.beforeLeave,f=o.leave,p=o.afterLeave,m=o.leaveCancelled,g=o.delayLeave,y=o.duration,_=!1!==s&&!te,b=zo(f),w=v(c(y)?y.leave:y);0;var C=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(Do(n,l),Do(n,h)),C.cancelled?(_&&Do(n,u),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(E):E()}function E(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),_&&(Mo(n,u),Mo(n,h),Lo((function(){Do(n,u),C.cancelled||(Mo(n,l),b||(Wo(w)?setTimeout(C,w):Fo(n,a,C)))}))),f&&f(n,C),_||b||C())}}function Wo(e){return"number"===typeof e&&!isNaN(e)}function zo(e){if(r(e))return!1;var t=e.fns;return i(t)?zo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Go(e,t){!0!==t.data.show&&Ho(t)}var Ko=J?{create:Go,activate:Go,remove:function(e,t){!0!==e.data.show?Bo(e,t):t()}}:{},Yo=[Bi,Gi,ro,co,wo,Ko],Jo=Yo.concat(Ui),Qo=Ni({nodeOps:Oi,modules:Jo});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&os(e,"input")}));var Xo={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ct(n,"postpatch",(function(){Xo.componentUpdated(e,t,n)})):Zo(e,t,n.context),e._vOptions=[].map.call(e.options,ns)):("textarea"===n.tag||li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",rs),e.addEventListener("compositionend",is),e.addEventListener("change",is),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Zo(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,ns);if(i.some((function(e,t){return!M(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return ts(e,i)})):t.value!==t.oldValue&&ts(t.value,i);o&&os(e,"change")}}}};function Zo(e,t,n){es(e,t,n),(ee||ne)&&setTimeout((function(){es(e,t,n)}),0)}function es(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=D(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(M(ns(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function ts(e,t){return t.every((function(t){return!M(t,e)}))}function ns(e){return"_value"in e?e._value:e.value}function rs(e){e.target.composing=!0}function is(e){e.target.composing&&(e.target.composing=!1,os(e.target,"input"))}function os(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ss(e){return!e.componentInstance||e.data&&e.data.transition?e:ss(e.componentInstance._vnode)}var as={bind:function(e,t,n){var r=t.value;n=ss(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ho(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Ho(n,(function(){e.style.display=e.__vOriginalDisplay})):Bo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},cs={model:Xo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ls(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?ls(On(t.children)):e}function hs(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[E(o)]=i[o];return t}function ds(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fs(e){while(e=e.parent)if(e.data.transition)return!0}function ps(e,t){return t.key===e.key&&t.tag===e.tag}var vs=function(e){return e.tag||jt(e)},ms=function(e){return"show"===e.name},gs={name:"transition",props:us,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(vs),n.length)){0;var r=this.mode;0;var i=n[0];if(fs(this.$vnode))return i;var o=ls(i);if(!o)return i;if(this._leaving)return ds(e,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=hs(this),u=this._vnode,l=ls(u);if(o.data.directives&&o.data.directives.some(ms)&&(o.data.show=!0),l&&l.data&&!ps(o,l)&&!jt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,Ct(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ds(e,i);if("in-out"===r){if(jt(o))return u;var d,f=function(){d()};Ct(c,"afterEnter",f),Ct(c,"enterCancelled",f),Ct(h,"delayLeave",(function(e){d=e}))}}return i}}},ys=A({tag:String,moveClass:String},us);delete ys.mode;var _s={props:ys,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Nn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=hs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(bs),e.forEach(ws),e.forEach(Cs),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Mo(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ao,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ao,e),n._moveCb=null,Do(n,t))})}})))},methods:{hasMove:function(e,t){if(!To)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Oo(n,e)})),Eo(n,t),n.style.display="none",this.$el.appendChild(n);var r=Uo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bs(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ws(e){e.data.newPos=e.elm.getBoundingClientRect()}function Cs(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Es={Transition:gs,TransitionGroup:_s};Or.config.mustUseProp=Vr,Or.config.isReservedTag=si,Or.config.isReservedAttr=$r,Or.config.getTagNamespace=ai,Or.config.isUnknownElement=ui,A(Or.options.directives,cs),A(Or.options.components,Es),Or.prototype.__patch__=J?Qo:R,Or.prototype.$mount=function(e,t){return e=e&&J?hi(e):void 0,Ln(this,e,t)},J&&setTimeout((function(){q.devtools&&ue&&ue.emit("init",Or)}),0),t["a"]=Or}).call(this,n("c8ba"))},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},"2ca0":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("06cf").f,s=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=i("".startsWith),f=i("".slice),p=Math.min,v=l("startsWith"),m=!h&&!v&&!!function(){var e=o(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!m&&!v},{startsWith:function(e){var t=a(u(this));c(e);var n=s(p(arguments.length>1?arguments[1]:void 0,t.length)),r=a(e);return d?d(t,r,n):f(t,n,n+r.length)===r}})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("d6d6"),g=n("1cdc"),y=n("605d"),_=a.setImmediate,b=a.clearImmediate,w=a.process,C=a.Dispatch,E=a.Function,O=a.MessageChannel,k=a.String,I=0,T={},x="onreadystatechange";try{r=a.location}catch(R){}var S=function(e){if(h(T,e)){var t=T[e];delete T[e],t()}},P=function(e){return function(){S(e)}},A=function(e){S(e.data)},N=function(e){a.postMessage(k(e),r.protocol+"//"+r.host)};_&&b||(_=function(e){m(arguments.length,1);var t=l(e)?e:E(e),n=p(arguments,1);return T[++I]=function(){c(t,void 0,n)},i(I),I},b=function(e){delete T[e]},y?i=function(e){w.nextTick(P(e))}:C&&C.now?i=function(e){C.now(P(e))}:O&&!g?(o=new O,s=o.port2,o.port1.onmessage=A,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",A,!1)):i=x in v("script")?function(e){f.appendChild(v("script"))[x]=function(){f.removeChild(this),S(e)}}:function(e){setTimeout(P(e),0)}),e.exports={set:_,clear:b}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"2f62":function(e,t,n){"use strict";(function(e){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return L}));var i="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var v=function(e){this.register([],e,!1)};function m(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;m(e.concat(r),t.getChild(r),n.modules[r])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},v.prototype.update=function(e){m([],this.root,e)},v.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var y=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;E(this,u,[],this._modules.root),C(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:g.config.devtools;l&&s(this)},_={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function w(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;E(e,n,[],e._modules.root,!0),C(e,n,t)}function C(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:o}),g.config.silent=s,e.strict&&S(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function E(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=P(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=O(e,s,n);r.forEachMutation((function(t,n){var r=s+n;I(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;T(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;x(e,r,t,u)})),r.forEachChild((function(r,o){E(e,t,n.concat(o),r,i)}))}function O(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=A(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=A(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return k(e,t)}},state:{get:function(){return P(e.state,n)}}}),i}function k(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function I(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function x(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function S(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function P(e,t){return t.reduce((function(e,t){return e[t]}),e)}function A(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function N(e){g&&e===g||(g=e,r(g))}_.state.get=function(){return this._vm._data.$$state},_.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=A(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},y.prototype.dispatch=function(e,t){var n=this,r=A(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),E(this,this.state,e,this._modules.get(e),n.preserveState),C(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=P(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),w(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),w(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,_);var R=U((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=V(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),j=U((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=V(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),L=U((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||V(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=U((function(e,t){var n={};return F(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=V(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),D=function(e){return{mapState:R.bind(null,e),mapGetters:L.bind(null,e),mapMutations:j.bind(null,e),mapActions:M.bind(null,e)}};function F(e){return $(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function $(e){return Array.isArray(e)||l(e)}function U(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function V(e,t,n){var r=e._modulesNamespaceMap[n];return r}function q(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,o){var s=c(o);if(n(e,h,s)){var a=W(),u=i(e),d="mutation "+e.type+a;H(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),B(l)}h=s})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=W(),i=s(e),a="action "+e.type+r;H(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),B(l)}})))}}function H(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function B(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function W(){var e=new Date;return" @ "+G(e.getHours(),2)+":"+G(e.getMinutes(),2)+":"+G(e.getSeconds(),2)+"."+G(e.getMilliseconds(),3)}function z(e,t){return new Array(t+1).join(e)}function G(e,t){return z("0",t-e.toString().length)+e}var K={Store:y,install:N,version:"3.6.2",mapState:R,mapMutations:j,mapGetters:L,mapActions:M,createNamespacedHelpers:D,createLogger:q};t["a"]=K}).call(this,n("c8ba"))},"30b5":function(e,t,n){"use strict";var r=n("c532");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},3410:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("7b0b"),s=n("e163"),a=n("e177"),c=i((function(){s(1)}));r({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(e){return s(o(e))}})},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}var o=n("06c5");n("d9e2");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){return r(e)||i(e,t)||Object(o["a"])(e,t)||s()}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},"38cf":function(e,t,n){var r=n("23e7"),i=n("1148");r({target:"String",proto:!0},{repeat:i})},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3ea3":function(e,t,n){var r=n("23e7"),i=n("f748"),o=Math.abs,s=Math.pow;r({target:"Math",stat:!0},{cbrt:function(e){return i(e=+e)*s(o(e),1/3)}})},"3f8c":function(e,t){e.exports={}},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},"466d":function(e,t,n){"use strict";var r=n("c65b"),i=n("d784"),o=n("825a"),s=n("50c4"),a=n("577e"),c=n("1d80"),u=n("dc4a"),l=n("8aa5"),h=n("14c3");i("match",(function(e,t,n){return[function(t){var n=c(this),i=void 0==t?void 0:u(t,e);return i?r(i,t,n):new RegExp(t)[e](a(n))},function(e){var r=o(this),i=a(e),c=n(t,r,i);if(c.done)return c.value;if(!r.global)return h(r,i);var u=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=h(r,i))){var v=a(d[0]);f[p]=v,""===v&&(r.lastIndex=l(i,s(r.lastIndex),u)),p++}return 0===p?null:f}]}))},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},"4ae1":function(e,t,n){var r=n("23e7"),i=n("d066"),o=n("2ba4"),s=n("0538"),a=n("5087"),c=n("825a"),u=n("861d"),l=n("7c73"),h=n("d039"),d=i("Reflect","construct"),f=Object.prototype,p=[].push,v=h((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),m=!h((function(){d((function(){}))})),g=v||m;r({target:"Reflect",stat:!0,forced:g,sham:g},{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(m&&!v)return d(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return o(p,r,t),new(o(s,e,r))}var i=n.prototype,h=l(u(i)?i:f),g=o(e,h,t);return u(g)?g:h}})},"4c3d":function(e,t,n){"use strict";(function(t){var r=n("c532"),i=n("c8af"),o=n("387f"),s=n("cafa"),a={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}function l(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var h={transitional:s,adapter:u(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),l(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw o(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){h.headers[e]=r.merge(a)})),e.exports=h}).call(this,n("4362"))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=o(e),u=i(t,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)s(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),d=n("9a1f"),f=n("35a1"),p=r.Array;e.exports=function(e){var t=s(e),n=u(this),r=arguments.length,v=r>1?arguments[1]:void 0,m=void 0!==v;m&&(v=i(v,r>2?arguments[2]:void 0));var g,y,_,b,w,C,E=f(t),O=0;if(!E||this==p&&c(E))for(g=l(t),y=n?new this(g):p(g);g>O;O++)C=m?v(t[O],O):t[O],h(y,O,C);else for(b=d(t,E),w=b.next,y=n?new this:[];!(_=o(w,b)).done;O++)C=m?a(b,v,[_.value,O],!0):_.value,h(y,O,C);return y.length=O,y}},"4e82":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("59ed"),s=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),h=n("a640"),d=n("04d1"),f=n("d998"),p=n("2d00"),v=n("512c"),m=[],g=i(m.sort),y=i(m.push),_=u((function(){m.sort(void 0)})),b=u((function(){m.sort(null)})),w=h("sort"),C=!u((function(){if(p)return p<70;if(!(d&&d>3)){if(f)return!0;if(v)return v<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:t+r,v:n})}for(m.sort((function(e,t){return t.v-e.v})),r=0;r<m.length;r++)t=m[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),E=_||!b||!w||!C,O=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:c(t)>c(n)?1:-1}};r({target:"Array",proto:!0,forced:E},{sort:function(e){void 0!==e&&o(e);var t=s(this);if(C)return void 0===e?g(t):g(t,e);var n,r,i=[],c=a(t);for(r=0;r<c;r++)r in t&&y(i,t[r]);l(i,O(e)),n=i.length,r=0;while(r<n)t[r]=i[r++];while(r<c)delete t[r++];return t}})},"4f60":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("1fd5"),i=n("22e5"),o=n("589b"),s=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(o["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o["deleteApp"])(this._delegate)))}_getService(e,t=o["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(o["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(o["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o["registerVersion"],setLogLevel:o["setLogLevel"],onLog:o["onLog"],apps:null,SDK_VERSION:o["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o["_DEFAULT_ENTRY_NAME"],!Object(r["k"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o["initializeApp"](i,s);if(Object(r["k"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(o["_registerComponent"](t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["p"])(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["p"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["m"],ErrorFactory:r["b"],deepExtend:r["p"]}),e}const d=h(),f=new s["b"]("@firebase/app-compat"),p="@firebase/app-compat",v="0.1.21";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){Object(o["registerVersion"])(p,v,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["v"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=d;m();var y="firebase",_="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
g.registerVersion(y,_,"app-compat")},"4fad":function(e,t,n){var r=n("d039"),i=n("861d"),o=n("c6b6"),s=n("d86b"),a=Object.isExtensible,c=r((function(){a(1)}));e.exports=c||s?function(e){return!!i(e)&&((!s||"ArrayBuffer"!=o(e))&&(!a||a(e)))}:a},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"512c":function(e,t,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ua})),n.d(t,"b",(function(){return Qs})),n.d(t,"c",(function(){return ea})),n.d(t,"d",(function(){return Ws})),n.d(t,"e",(function(){return ta})),n.d(t,"f",(function(){return Hs})),n.d(t,"g",(function(){return zs})),n.d(t,"h",(function(){return Gs}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const a="@firebase/database",c="0.12.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(e){u=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["M"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["E"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o["k"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),v=f("sessionStorage"),m=new s["b"]("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),y=function(e){const t=Object(o["L"])(e),n=new o["d"];n.update(t);const r=n.digest();return o["g"].encodeByteArray(r)},_=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=_.apply(null,r):t+="object"===typeof r?Object(o["M"])(r):r,t+=" "}return t};let b=null,w=!0;const C=function(e,t){Object(o["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=s["a"].VERBOSE,b=m.log.bind(m),t&&v.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,v.remove("logging_enabled"))},E=function(...e){if(!0===w&&(w=!1,null===b&&!0===v.get("logging_enabled")&&C(!0)),b){const t=_.apply(null,e);b(t)}},O=function(e){return function(...t){E(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+_(...e);m.error(t)},I=function(...e){const t="FIREBASE FATAL ERROR: "+_(...e);throw m.error(t),new Error(t)},T=function(...e){const t="FIREBASE WARNING: "+_(...e);m.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&T("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if(Object(o["B"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},A="[MIN_NAME]",N="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===A||t===N)return-1;if(t===A||e===N)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},j=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["M"])(t))},M=function(e){if("object"!==typeof e||null===e)return Object(o["M"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o["M"])(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},D=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){Object(o["e"])(!S(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,u;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},V=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function q(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const H=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,W=2147483647,z=function(e){if(H.test(e)){const t=Number(e);if(t>=B&&t<=W)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw T("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){T(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',T(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",ue="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(o["e"])("string"===typeof t,"typeof type must == string"),Object(o["e"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o["k"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o["n"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},ve={};function me(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return ve[n]||(ve[n]=t()),ve[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="start",be="close",we="pLPCommand",Ce="pRTLPCB",Ee="id",Oe="pw",ke="ser",Ie="cb",Te="seg",xe="ts",Se="d",Pe="dframe",Ae=1870,Ne=30,Re=Ae-Ne,je=25e3,Le=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=O(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new De((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===_e)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[_e]="t",e[ke]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ie]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!Object(o["B"])()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!V())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o["M"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o["i"])(t),r=D(n,Re);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o["B"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[Ee]=e,n[Oe]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o["M"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class De{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["B"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=De.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Oe]=this.myPW,e[ke]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ne+n.length<=Ae))break;{const e=this.pendingSegs.shift();n=n+"&"+Te+r+"="+e.seg+"&"+xe+r+"="+e.ts+"&"+Se+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(je)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(o["B"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,$e=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class Ve{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=O(this.connId),this.stats_=me(t),this.connURL=Ve.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[ee]=Z,!Object(o["B"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(i[ne]=re),t&&(i[te]=t),n&&(i[oe]=n),r&&(i[ae]=r),de(e,ce,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["B"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${u}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",VUE_APP_FIREBASE_KEY:"AIzaSyCdoyS2Ex3N6d1YfrmPaDhRhjSHuK2D5pM",VUE_APP_FIREBASE_DATABASE_URL:"https://project-lotto-5df00-default-rtdb.europe-west1.firebasedatabase.app/",BASE_URL:"/lotto/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new Ue(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ue(this.connURL,[],e)}}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!Ve.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o["E"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o["M"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=D(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ve.responsesRequiredToBeHealthy=2,Ve.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,Ve]}initTransports_(e){const t=Ve&&Ve["isAvailable"]();let n=t&&!Ve.previouslyFailed();if(e.webSocketOnly&&(t||T("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ve];else{const e=this.transports_=[];for(const t of qe.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=6e4,Be=5e3,We=10240,ze=102400,Ge="t",Ke="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=O("c:"+this.id+":"),this.transportManager_=new qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>We?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?k("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&T("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(o["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["A"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(o["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function yt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function _t(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Et{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["K"])(this.parts_[n]);It(this)}}function Ot(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["K"])(t),It(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=Object(o["K"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function It(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Tt(e))}function Tt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new xt}getInitialEvent(e){return Object(o["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1e3,Pt=3e5,At=3e3,Nt=3e4,Rt=1.3,jt=3e4,Lt="server_kill",Mt=3;class Dt extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dt.nextPersistentConnectionId_++,this.log_=O("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=St,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["B"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["M"])(i)),Object(o["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},At),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["e"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Dt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(o["k"])(e,"w")){const n=Object(o["J"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();T(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(o["u"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o["D"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o["M"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+Object(o["M"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>jt&&(this.reconnectDelay_=St),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Dt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(e){Object(o["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{T(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)},i))}catch(k){this.log_("Failed to get token: "+k),s||(this.repoInfo_.nodeAdmin&&T(k),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["x"])(this.interruptReasons_)&&(this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Nt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o["B"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,Object(o["A"])()?e["framework.cordova"]=1:Object(o["C"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(o["x"])(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0,Dt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(A,e),r=new Ft(A,t);return 0!==this.compare(n,r)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class Vt extends $t{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw Object(o["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(N,Ut)}makePost(e,t){return Object(o["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,Ut)}toString(){return".key"}}const qt=new Vt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=r?r:zt.EMPTY_NODE,this.right=null!=i?i:zt.EMPTY_NODE}copy(e,t,n,r,i){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class Wt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ht(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ht(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return R(e.name,t.name)}function Kt(e,t){return R(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}zt.EMPTY_NODE=new Wt;const Qt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(o["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["k"])(t,".sv"),"Priority must be a string or number.")}else Object(o["e"])(e===Yt||e.isEmpty(),"priority of unexpected type.");Object(o["e"])(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _t(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(o["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["e"])(r>=0,"Unknown leaf type: "+t),Object(o["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends $t{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(N,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ft(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new Bt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Bt.BLACK):(a(r,Bt.BLACK),a(r,Bt.RED))}return o},s=new un(e.length),a=o(s);return new zt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=Object(o["J"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return Object(o["k"])(this.indexSet_,e.toString())}addIndex(e,t){Object(o["e"])(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ft.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?ln(n,e.getCompare()):dn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=s,new fn(l,u)}addToIndexes(e,t){const n=Object(o["F"])(this.indexes_,(n,r)=>{const i=Object(o["J"])(this.indexSet_,r);if(Object(o["e"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ft.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),ln(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ft(e.name,r))),i.insert(e,e.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o["F"])(this.indexes_,n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Ft(e.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class vn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(o["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new vn(new zt(Kt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new vn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new vn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(o["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,(o,s)=>{t[o]=s.val(e),n++,i&&vn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends vn{constructor(){super(new zt(Kt),vn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vn.EMPTY_NODE}isEmpty(){return!1}}const gn=new mn;Object.defineProperties(Ft,{MIN:{value:new Ft(A,vn.EMPTY_NODE)},MAX:{value:new Ft(N,gn)}}),Vt.__EMPTY_NODE=vn.EMPTY_NODE,nn.__childrenNodeConstructor=vn,Jt(gn),on(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function _n(e,t=null){if(null===e)return vn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,_n(t))}if(e instanceof Array||!yn){let n=vn.EMPTY_NODE;return F(e,(t,r)=>{if(Object(o["k"])(e,t)&&"."!==t.substring(0,1)){const e=_n(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(_n(t))}{const n=[];let r=!1;const i=e;if(F(i,(e,t)=>{if("."!==e.substring(0,1)){const i=_n(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ft(e,i)))}}),0===n.length)return vn.EMPTY_NODE;const o=ln(n,Gt,e=>e.name,Kt);if(r){const e=ln(n,an.getCompare());return new vn(o,_n(t),new fn({".priority":e},{".priority":an}))}return new vn(o,_n(t),fn.Default)}}rn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends $t{constructor(e){super(),this.indexPath_=e,Object(o["e"])(!_t(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}makePost(e,t){const n=_n(e),r=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,r)}maxPost(){const e=vn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Ft(N,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends $t{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=_n(e);return new Ft(t,n)}toString(){return".value"}}const Cn=new wn,En="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",On=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=En.charAt(n%64),n=Math.floor(n/64);Object(o["e"])(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=En.charAt(t[i]);return Object(o["e"])(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e){return{type:"value",snapshotNode:e}}function In(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Tn(t,a)):Object(o["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(In(t,n)):s.trackChildChange(xn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,r)=>{t.hasChild(e)||n.trackChildChange(Tn(e,r))}),t.isLeafNode()||t.forEachChild(an,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(xn(t,r,i))}else n.trackChildChange(In(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.indexedFilter_=new Pn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=An.getStartPost_(e),this.endPost_=An.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ft(t,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(vn.EMPTY_NODE);const i=this;return t.forEachChild(an,(e,t)=>{i.matches(new Ft(e,t))||(r=r.updateImmediateChild(e,vn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.rangedFilter_=new An(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ft(t,n))||(n=vn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=vn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(vn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;Object(o["e"])(a.numChildren()===this.limit_,"");const c=new Ft(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(xn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Tn(t,e));const n=a.updateImmediateChild(t,vn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(In(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(Tn(u.name,u.node)),i.trackChildChange(In(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,vn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jn(e){return e.loadsAllData()?new Pn(e.getIndex()):e.hasLimit()?new Nn(e):new An(e)}function Ln(e,t){const n=e.copy();return n.index_=t,n}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===qt?n="$key":(Object(o["e"])(e.index_ instanceof bn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(o["M"])(n),e.startSet_&&(t["startAt"]=Object(o["M"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(o["M"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(o["M"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(o["M"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Dn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=O("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Fn.getListenId_(e,n),a={};this.listens_[s]=a;const c=Mn(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(o["J"])(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Fn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),r=new o["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o["H"])(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(o["E"])(a.responseText)}catch(e){T("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&T("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return{value:null,children:new Map}}function Vn(e,t,n){if(_t(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Un());const i=e.children.get(r);t=ft(t),Vn(i,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):Hn(e,(e,r)=>{const i=new ut(t.toString()+"/"+e);qn(r,i,n)})}function Hn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e4,zn=3e4,Gn=3e5;class Kn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bn(e);const n=Wn+(zn-Wn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,r)=>{r>0&&Object(o["k"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Gn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;function Jn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Jn()}operationForChild(e){if(_t(this.path)){if(null!=this.affectedTree.value)return Object(o["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new Zn(lt(),t,this.revert)}}return Object(o["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Zn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return _t(this.path)?new er(this.source,lt()):new er(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(e){return _t(this.path)?new tr(this.source,lt(),this.snap.getImmediateChild(e)):new tr(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Yn.MERGE}operationForChild(e){if(_t(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new tr(this.source,lt(),t.value):new nr(this.source,lt(),t)}return Object(o["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_t(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function or(e,t,n,r){const i=[],o=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Sn(t.childName,t.snapshotNode))}),sr(e,i,"child_removed",t,r,n),sr(e,i,"child_added",t,r,n),sr(e,i,"child_moved",o,r,n),sr(e,i,"child_changed",t,r,n),sr(e,i,"value",t,r,n),i}function sr(e,t,n,r,i,o){const s=r.filter(e=>e.type===n);s.sort((t,n)=>cr(e,t,n)),s.forEach(n=>{const r=ar(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function ar(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function cr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["f"])("Should only compare child_ events.");const r=new Ft(t.childName,t.snapshotNode),i=new Ft(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t){return{eventCache:e,serverCache:t}}function lr(e,t,n,r){return ur(new rr(t,n,r),e.serverCache)}function hr(e,t,n,r){return ur(e.eventCache,new rr(t,n,r))}function dr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;const vr=()=>(pr||(pr=new zt(j)),pr);class mr{constructor(e,t=vr()){this.value=e,this.children=t}static fromObject(e){let t=new mr(null);return F(e,(e,n)=>{t=t.set(new ut(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(_t(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=yt(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_t(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new mr(null)}}set(e,t){if(_t(e))return new mr(t,this.children);{const n=ht(e),r=this.children.get(n)||new mr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new mr(this.value,o)}}remove(e){if(_t(e))return this.children.isEmpty()?new mr(null):new mr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new mr(null):new mr(this.value,i)}return this}}get(e){if(_t(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(_t(e))return t;{const n=ht(e),r=this.children.get(n)||new mr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new mr(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(yt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(_t(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),yt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(_t(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),yt(t,r),n):new mr(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(yt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.writeTree_=e}static empty(){return new gr(new mr(null))}}function yr(e,t,n){if(_t(t))return new gr(new mr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=bt(i,t);return o=o.updateChild(s,n),new gr(e.writeTree_.set(i,o))}{const r=new mr(n),i=e.writeTree_.setTree(t,r);return new gr(i)}}}function _r(e,t,n){let r=e;return F(n,(e,n)=>{r=yr(r,yt(t,e),n)}),r}function br(e,t){if(_t(t))return gr.empty();{const n=e.writeTree_.setTree(t,new mr(null));return new gr(n)}}function wr(e,t){return null!=Cr(e,t)}function Cr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function Er(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new Ft(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))}),t}function Or(e,t){if(_t(t))return e;{const n=Cr(e,t);return new gr(null!=n?new mr(n):e.writeTree_.subtree(t))}}function kr(e){return e.writeTree_.isEmpty()}function Ir(e,t){return Tr(lt(),e.writeTree_,t)}function Tr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(o["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Tr(yt(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(yt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e,t){return Jr(t,e)}function Sr(e,t,n,r,i){Object(o["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=yr(e.visibleWrites,t,n)),e.lastWriteId=r}function Pr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Ar(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Nr(t,r.path)?i=!1:Ct(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Rr(e),!0;if(r.snap)e.visibleWrites=br(e.visibleWrites,r.path);else{const t=r.children;F(t,t=>{e.visibleWrites=br(e.visibleWrites,yt(r.path,t))})}return!0}return!1}function Nr(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(yt(e.path,n),t))return!0;return!1}function Rr(e){e.visibleWrites=Lr(e.allWrites,jr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function jr(e){return e.visible}function Lr(e,t,n){let r=gr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=bt(n,e),r=yr(r,t,s.snap)):Ct(e,n)&&(t=bt(e,n),r=yr(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw Object(o["f"])("WriteRecord should have .snap or .children");if(Ct(n,e))t=bt(n,e),r=_r(r,t,s.children);else if(Ct(e,n))if(t=bt(e,n),_t(t))r=_r(r,lt(),s.children);else{const e=Object(o["J"])(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=yr(r,lt(),n)}}}}}return r}function Mr(e,t,n,r,i){if(r||i){const o=Or(e.visibleWrites,t);if(!i&&kr(o))return n;if(i||null!=n||wr(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},s=Lr(e.allWrites,o,t),a=n||vn.EMPTY_NODE;return Ir(s,a)}return null}{const r=Cr(e.visibleWrites,t);if(null!=r)return r;{const r=Or(e.visibleWrites,t);if(kr(r))return n;if(null!=n||wr(r,lt())){const e=n||vn.EMPTY_NODE;return Ir(r,e)}return null}}}function Dr(e,t,n){let r=vn.EMPTY_NODE;const i=Cr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Or(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=Ir(Or(i,new ut(e)),t);r=r.updateImmediateChild(e,n)}),Er(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Or(e.visibleWrites,t);return Er(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Fr(e,t,n,r,i){Object(o["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=yt(t,n);if(wr(e.visibleWrites,s))return null;{const t=Or(e.visibleWrites,s);return kr(t)?i.getChild(n):Ir(t,i.getChild(n))}}function $r(e,t,n,r){const i=yt(t,n),o=Cr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Or(e.visibleWrites,i);return Ir(t,r.getNode().getImmediateChild(n))}return null}function Ur(e,t){return Cr(e.visibleWrites,t)}function Vr(e,t,n,r,i,o,s){let a;const c=Or(e.visibleWrites,t),u=Cr(c,lt());if(null!=u)a=u;else{if(null==n)return[];a=Ir(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function qr(){return{visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1}}function Hr(e,t,n,r){return Mr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return Dr(e.writeTree,e.treePath,t)}function Wr(e,t,n,r){return Fr(e.writeTree,e.treePath,t,n,r)}function zr(e,t){return Ur(e.writeTree,yt(e.treePath,t))}function Gr(e,t,n,r,i,o){return Vr(e.writeTree,e.treePath,t,n,r,i,o)}function Kr(e,t,n){return $r(e.writeTree,e.treePath,t,n)}function Yr(e,t){return Jr(yt(e.treePath,t),e.writeTree)}function Jr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,xn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Tn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,In(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["f"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,xn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Zr=new Xr;class ei{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fr(this.viewCache_),i=Gr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e){return{filter:e}}function ni(e,t){Object(o["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ri(e,t,n,r,i){const s=new Qr;let a,c;if(n.type===Yn.OVERWRITE){const u=n;u.source.fromUser?a=ai(e,t,u.path,u.snap,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!_t(u.path),a=si(e,t,u.path,u.snap,r,i,c,s))}else if(n.type===Yn.MERGE){const u=n;u.source.fromUser?a=ui(e,t,u.path,u.children,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=hi(e,t,u.path,u.children,r,i,c,s))}else if(n.type===Yn.ACK_USER_WRITE){const o=n;a=o.revert?pi(e,t,o.path,r,i,s):di(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw Object(o["f"])("Unknown operation type: "+n.type);a=fi(e,t,n.path,r,s)}const u=s.getChanges();return ii(t,a,u),{viewCache:a,changes:u}}function ii(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=dr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(kn(dr(t)))}}function oi(e,t,n,r,i,s){const a=t.eventCache;if(null!=zr(r,n))return t;{let c,u;if(_t(n))if(Object(o["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fr(t),i=n instanceof vn?n:vn.EMPTY_NODE,o=Br(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Hr(r,fr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ht(n);if(".priority"===l){Object(o["e"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const s=Wr(r,n,i,u);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=Wr(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else h=Kr(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return lr(t,c,a.isFullyInitialized()||_t(n),e.filter.filtersNodes())}}function si(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(_t(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,Zr,null)}const h=hr(t,u,c.isFullyInitialized()||_t(n),l.filtersNodes()),d=new ei(i,h,o);return oi(e,h,n,i,d,a)}function ai(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new ei(i,t,o);if(_t(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=lr(t,u,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=lr(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(_t(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,r):vn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=lr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ci(e,t){return e.eventCache.isCompleteForChild(t)}function ui(e,t,n,r,i,o,s){let a=t;return r.foreach((r,c)=>{const u=yt(n,r);ci(t,ht(u))&&(a=ai(e,a,u,c,i,o,s))}),r.foreach((r,c)=>{const u=yt(n,r);ci(t,ht(u))||(a=ai(e,a,u,c,i,o,s))}),a}function li(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function hi(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=_t(n)?r:new mr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=li(e,c,r);u=si(e,u,new ut(n),l,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=li(e,c,r);u=si(e,u,new ut(n),l,i,o,s,a)}}),u}function di(e,t,n,r,i,o,s){if(null!=zr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(_t(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return si(e,t,n,c.getNode().getChild(n),i,o,a,s);if(_t(n)){let r=new mr(null);return c.getNode().forEachChild(qt,(e,t)=>{r=r.set(new ut(e),t)}),hi(e,t,n,r,i,o,a,s)}return t}{let u=new mr(null);return r.foreach((e,t)=>{const r=yt(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))}),hi(e,t,n,u,i,o,a,s)}}function fi(e,t,n,r,i){const o=t.serverCache,s=hr(t,o.getNode(),o.isFullyInitialized()||_t(n),o.isFiltered());return oi(e,s,n,r,Zr,i)}function pi(e,t,n,r,i,s){let a;if(null!=zr(r,n))return t;{const c=new ei(r,t,i),u=t.eventCache.getNode();let l;if(_t(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Hr(r,fr(t));else{const e=t.serverCache.getNode();Object(o["e"])(e instanceof vn,"serverChildren would be complete if leaf node"),n=Br(r,e)}n=n,l=e.filter.updateFullNode(u,n,s)}else{const i=ht(n);let o=Kr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?e.filter.updateChild(u,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,vn.EMPTY_NODE,ft(n),c,s):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Hr(r,fr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=zr(r,lt()),lr(t,l,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Pn(n.getIndex()),i=jn(n);this.processor_=ti(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(vn.EMPTY_NODE,s.getNode(),null),u=new rr(a,o.isFullyInitialized(),r.filtersNodes()),l=new rr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ur(l,u),this.eventGenerator_=new ir(this.query_)}get query(){return this.query_}}function mi(e){return e.viewCache_.serverCache.getNode()}function gi(e,t){const n=fr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!_t(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function yi(e){return 0===e.eventRegistrations_.length}function _i(e,t){e.eventRegistrations_.push(t)}function bi(e,t,n){const r=[];if(n){Object(o["e"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function wi(e,t,n,r){t.type===Yn.MERGE&&null!==t.source.queryId&&(Object(o["e"])(fr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["e"])(dr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ri(e.processor_,i,t,n,r);return ni(e.processor_,s.viewCache),Object(o["e"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ei(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Ci(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,(e,t)=>{r.push(In(e,t))})}return n.isFullyInitialized()&&r.push(kn(n.getNode())),Ei(e,r,n.getNode(),t)}function Ei(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return or(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi,ki;class Ii{constructor(){this.views=new Map}}function Ti(e){Object(o["e"])(!Oi,"__referenceConstructor has already been defined"),Oi=e}function xi(){return Object(o["e"])(Oi,"Reference.ts has not been loaded"),Oi}function Si(e){return 0===e.views.size}function Pi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o["e"])(null!=s,"SyncTree gave us an op for an invalid query."),wi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(wi(o,t,n,r));return i}}function Ai(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Hr(n,i?r:null),o=!1;e?o=!0:r instanceof vn?(e=Br(n,r),o=!1):(e=vn.EMPTY_NODE,o=!1);const s=ur(new rr(e,o,!1),new rr(r,i,!1));return new vi(t,s)}return s}function Ni(e,t,n,r,i,o){const s=Ai(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),_i(s,n),Ci(s,n)}function Ri(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Fi(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(bi(u,n,r)),yi(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(bi(t,n,r)),yi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Fi(e)&&o.push(new(xi())(t._repo,t._path)),{removed:o,events:s}}function ji(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Li(e,t){let n=null;for(const r of e.views.values())n=n||gi(r,t);return n}function Mi(e,t){const n=t._queryParams;if(n.loadsAllData())return $i(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Di(e,t){return null!=Mi(e,t)}function Fi(e){return null!=$i(e)}function $i(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){Object(o["e"])(!ki,"__referenceConstructor has already been defined"),ki=e}function Vi(){return Object(o["e"])(ki,"Reference.ts has not been loaded"),ki}let qi=1;class Hi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mr(null),this.pendingWriteTree_=qr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bi(e,t,n,r,i){return Sr(e.pendingWriteTree_,t,n,r,i),i?to(e,new tr(Jn(),t,n)):[]}function Wi(e,t,n=!1){const r=Pr(e.pendingWriteTree_,t),i=Ar(e.pendingWriteTree_,t);if(i){let t=new mr(null);return null!=r.snap?t=t.set(lt(),!0):F(r.children,e=>{t=t.set(new ut(e),!0)}),to(e,new Zn(r.path,t,n))}return[]}function zi(e,t,n){return to(e,new tr(Qn(),t,n))}function Gi(e,t,n){const r=mr.fromObject(n);return to(e,new nr(Qn(),t,r))}function Ki(e,t){return to(e,new er(Qn(),t))}function Yi(e,t,n){const r=ao(e,n);if(r){const n=co(r),i=n.path,o=n.queryId,s=bt(i,t),a=new er(Xn(o),s);return uo(e,i,a)}return[]}function Ji(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||Di(o,t))){const a=Ri(o,t,n,r);Si(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;s=a.events;const u=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),l=e.syncPointTree_.findOnPath(i,(e,t)=>Fi(t));if(u&&!l){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=lo(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=io(e,r);e.listenProvider_.startListening(ho(i),oo(e,i),o.hashFn,o.onComplete)}}}if(!l&&c.length>0&&!r)if(u){const n=null;e.listenProvider_.stopListening(ho(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(so(t));e.listenProvider_.stopListening(ho(t),n)});fo(e,c)}return s}function Qi(e,t,n,r){const i=ao(e,r);if(null!=i){const r=co(i),o=r.path,s=r.queryId,a=bt(o,t),c=new tr(Xn(s),a,n);return uo(e,o,c)}return[]}function Xi(e,t,n,r){const i=ao(e,r);if(i){const r=co(i),o=r.path,s=r.queryId,a=bt(o,t),c=mr.fromObject(n),u=new nr(Xn(s),a,c);return uo(e,o,u)}return[]}function Zi(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=bt(e,r);i=i||Li(t,n),s=s||Fi(t)});let a,c=e.syncPointTree_.get(r);if(c?(s=s||Fi(c),i=i||Li(c,lt())):(c=new Ii,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=vn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Li(t,lt());n&&(i=i.updateImmediateChild(e,n))})}const u=Di(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=so(t);Object(o["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=po();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const l=xr(e.pendingWriteTree_,r);let h=Ni(c,t,n,l,i,a);if(!u&&!s){const n=Mi(c,t);h=h.concat(vo(e,t,n))}return h}function eo(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=bt(e,t),i=Li(n,r);if(i)return i});return Mr(i,t,o,n,r)}function to(e,t){return no(t,e.syncPointTree_,null,xr(e.pendingWriteTree_,lt()))}function no(e,t,n,r){if(_t(e.path))return ro(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=Li(i,lt()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Yr(r,s);o=o.concat(no(a,c,e,t))}return i&&(o=o.concat(Pi(i,e,r,n))),o}}function ro(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=Li(i,lt()));let o=[];return t.children.inorderTraversal((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Yr(r,t),c=e.operationForChild(t);c&&(o=o.concat(ro(c,i,s,a)))}),i&&(o=o.concat(Pi(i,e,r,n))),o}function io(e,t){const n=t.query,r=oo(e,n);return{hashFn:()=>{const e=mi(t)||vn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Yi(e,n._path,r):Ki(e,n._path);{const r=q(t,n);return Ji(e,n,null,r)}}}}function oo(e,t){const n=so(t);return e.queryToTagMap.get(n)}function so(e){return e._path.toString()+"$"+e._queryIdentifier}function ao(e,t){return e.tagToQueryMap.get(t)}function co(e){const t=e.indexOf("$");return Object(o["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function uo(e,t,n){const r=e.syncPointTree_.get(t);Object(o["e"])(r,"Missing sync point for query tag that we're tracking");const i=xr(e.pendingWriteTree_,t);return Pi(r,n,i,null)}function lo(e){return e.fold((e,t,n)=>{if(t&&Fi(t)){const e=$i(t);return[e]}{let e=[];return t&&(e=ji(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function ho(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Vi())(e._repo,e._path):e}function fo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=so(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function po(){return qi++}function vo(e,t,n){const r=t._path,i=oo(e,t),s=io(e,n),a=e.listenProvider_.startListening(ho(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(o["e"])(!Fi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!_t(e)&&t&&Fi(t))return[$i(t).query];{let e=[];return t&&(e=e.concat(ji(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(ho(r),oo(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mo(t)}node(){return this.node_}}class go{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new go(this.syncTree_,t)}node(){return eo(this.syncTree_,this.path_)}}const yo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},_o=function(e,t,n){return e&&"object"===typeof e?(Object(o["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?bo(e[".sv"],t,n):"object"===typeof e[".sv"]?wo(e[".sv"],t):void Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},bo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["e"])(!1,"Unexpected server value: "+e)}},wo=function(e,t,n){e.hasOwnProperty("increment")||Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(o["e"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Co=function(e,t,n,r){return Oo(t,new go(n,e),r)},Eo=function(e,t,n){return Oo(e,new mo(t),n)};function Oo(e,t,n){const r=e.getPriority().val(),i=_o(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=_o(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,_n(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,(e,r)=>{const i=Oo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Io(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=ht(n);while(null!==i){const e=Object(o["J"])(r.node.children,i)||{children:{},childCount:0};r=new ko(i,r,e),n=ft(n),i=ht(n)}return r}function To(e){return e.node.value}function xo(e,t){e.node.value=t,Lo(e)}function So(e){return e.node.childCount>0}function Po(e){return void 0===To(e)&&!So(e)}function Ao(e,t){F(e.node.children,(n,r)=>{t(new ko(n,e,r))})}function No(e,t,n,r){n&&!r&&t(e),Ao(e,e=>{No(e,t,!0,r)}),n&&r&&t(e)}function Ro(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function jo(e){return new ut(null===e.parent?e.name:jo(e.parent)+"/"+e.name)}function Lo(e){null!==e.parent&&Mo(e.parent,e.name,e)}function Mo(e,t,n){const r=Po(n),i=Object(o["k"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Lo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Lo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=/[\[\].#$\/\u0000-\u001F\u007F]/,Fo=/[\[\].#$\u0000-\u001F\u007F]/,$o=10485760,Uo=function(e){return"string"===typeof e&&0!==e.length&&!Do.test(e)},Vo=function(e){return"string"===typeof e&&0!==e.length&&!Fo.test(e)},qo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Vo(e)},Ho=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!S(e)||e&&"object"===typeof e&&Object(o["k"])(e,".sv")},Bo=function(e,t,n,r){r&&void 0===t||Wo(Object(o["q"])(e,"value"),t,n)},Wo=function(e,t,n){const r=n instanceof ut?new Et(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Tt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Tt(r)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+Tt(r));if("string"===typeof t&&t.length>$o/3&&Object(o["K"])(t)>$o)throw new Error(e+"contains a string greater than "+$o+" utf8 bytes "+Tt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Uo(t)))throw new Error(e+" contains an invalid key ("+t+") "+Tt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ot(r,t),Wo(e,o,r),kt(r)}),n&&i)throw new Error(e+' contains ".value" child '+Tt(r)+" in addition to actual children.")}},zo=function(e,t,n,r){if((!r||void 0!==n)&&!Vo(n))throw new Error(Object(o["q"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Go=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zo(e,t,n,r)},Ko=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Yo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Uo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!qo(n))throw new Error(Object(o["q"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qo(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Xo(e,t,n){Qo(e,n),es(e,e=>wt(e,t))}function Zo(e,t,n){Qo(e,n),es(e,e=>Ct(e,t)||Ct(t,e))}function es(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(ts(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ts(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&E("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="repo_interrupt",rs=25;class is{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Un(),this.transactionQueueTree_=new ko,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function os(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||K())e.server_=new Fn(e.repoInfo_,(t,n,r,i)=>{cs(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>us(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["M"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Dt(e.repoInfo_,t,(t,n,r,i)=>{cs(e,t,n,r,i)},t=>{us(e,t)},t=>{ls(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ge(e.repoInfo_,()=>new Kn(e.stats_,e.server_)),e.infoData_=new $n,e.infoSyncTree_=new Hi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=zi(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),hs(e,"connected",!1),e.serverSyncTree_=new Hi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);Zo(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ss(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function as(e){return yo({timestamp:ss(e)})}function cs(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(o["F"])(n,e=>_n(e));a=Xi(e.serverSyncTree_,s,t,i)}else{const t=_n(n);a=Qi(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o["F"])(n,e=>_n(e));a=Gi(e.serverSyncTree_,s,t)}else{const t=_n(n);a=zi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Es(e,s)),Zo(e.eventQueue_,c,a)}function us(e,t){hs(e,"connected",t),!1===t&&ps(e)}function ls(e,t){F(t,(t,n)=>{hs(e,t,n)})}function hs(e,t,n){const r=new ut("/.info/"+t),i=_n(n);e.infoData_.updateSnapshot(r,i);const o=zi(e.infoSyncTree_,r,i);Zo(e.eventQueue_,r,o)}function ds(e){return e.nextWriteId_++}function fs(e,t,n,r,i){ys(e,"set",{path:t.toString(),value:n,priority:r});const o=as(e),s=_n(n,r),a=eo(e.serverSyncTree_,t),c=Eo(s,a,o),u=ds(e),l=Bi(e.serverSyncTree_,t,c,u,!0);Qo(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||T("set at "+t+" failed: "+n);const s=Wi(e.serverSyncTree_,u,!o);Zo(e.eventQueue_,t,s),_s(e,i,n,r)});const h=Ss(e,t);Es(e,h),Zo(e.eventQueue_,h,[])}function ps(e){ys(e,"onDisconnectEvents");const t=as(e),n=Un();qn(e.onDisconnect_,lt(),(r,i)=>{const o=Co(r,i,e.serverSyncTree_,t);Vn(n,r,o)});let r=[];qn(n,lt(),(t,n)=>{r=r.concat(zi(e.serverSyncTree_,t,n));const i=Ss(e,t);Es(e,i)}),e.onDisconnect_=Un(),Zo(e.eventQueue_,lt(),r)}function vs(e,t,n){let r;r=".info"===ht(t._path)?Zi(e.infoSyncTree_,t,n):Zi(e.serverSyncTree_,t,n),Xo(e.eventQueue_,t._path,r)}function ms(e,t,n){let r;r=".info"===ht(t._path)?Ji(e.infoSyncTree_,t,n):Ji(e.serverSyncTree_,t,n),Xo(e.eventQueue_,t._path,r)}function gs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ns)}function ys(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function _s(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function bs(e,t,n){return eo(e.serverSyncTree_,t,n)||vn.EMPTY_NODE}function ws(e,t=e.transactionQueueTree_){if(t||xs(e,t),To(t)){const n=Is(e,t);Object(o["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&Cs(e,jo(t),n)}else So(t)&&Ao(t,t=>{ws(e,t)})}function Cs(e,t,n){const r=n.map(e=>e.currentWriteId),i=bs(e,t,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];Object(o["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),u=t;e.server_.put(u.toString(),c,r=>{ys(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Wi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();xs(e,Io(e.transactionQueueTree_,t)),ws(e,e.transactionQueueTree_),Zo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{T("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Es(e,t)}},a)}function Es(e,t){const n=ks(e,t),r=jo(n),i=Is(e,n);return Os(e,i,r),r}function Os(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),a=s.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const s=t[c],u=bt(n,s.path);let l,h=!1;if(Object(o["e"])(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(Wi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=rs)h=!0,l="maxretry",i=i.concat(Wi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=bs(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Wo("transaction failed: Data returned ",r,s.path);let t=_n(r);const c="object"===typeof r&&null!=r&&Object(o["k"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,l=as(e),h=Eo(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ds(e),a.splice(a.indexOf(u),1),i=i.concat(Bi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Wi(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(Wi(e.serverSyncTree_,s.currentWriteId,!0))}Zo(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(l),!1,null))))}xs(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);ws(e,e.transactionQueueTree_)}function ks(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===To(r))r=Io(r,n),t=ft(t),n=ht(t);return r}function Is(e,t){const n=[];return Ts(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Ts(e,t,n){const r=To(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ao(t,t=>{Ts(e,t,n)})}function xs(e,t){const n=To(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,xo(t,n.length>0?n:void 0)}Ao(t,t=>{xs(e,t)})}function Ss(e,t){const n=jo(ks(e,t)),r=Io(e.transactionQueueTree_,t);return Ro(r,t=>{Ps(e,t)}),Ps(e,r),No(r,t=>{Ps(e,t)}),n}function Ps(e,t){const n=To(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o["e"])(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Wi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?xo(t,void 0):n.length=s+1,Zo(e.eventQueue_,jo(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Ns(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):T(`Invalid query segment '${n}' in query '${e}'`)}return t}const Rs=function(e,t){const n=js(e),r=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new ut(n.pathString)}},js=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=As(e.substring(l,h)));const d=Ns(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["M"])(this.snapshot.exportVal())}}class Ms{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return _t(this._path)?null:pt(this._path)}get ref(){return new Vs(this._repo,this._path)}get _queryIdentifier(){const e=Dn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Dn(this._queryParams)}isEqual(e){if(e=Object(o["s"])(e),!(e instanceof Fs))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+vt(this._path)}}function $s(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function Us(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===qt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==A)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==N)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===an){if(null!=t&&!Ho(t)||null!=n&&!Ho(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(o["e"])(e.getIndex()instanceof bn||e.getIndex()===Cn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Vs extends Fs{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=gt(this._path);return null===e?null:new Vs(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class qs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=Bs(this.ref,e);return new qs(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new qs(n,Bs(this.ref,t),an)))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hs(e,t){return e=Object(o["s"])(e),e._checkNotDeleted("ref"),void 0!==t?Bs(e._root,t):e._root}function Bs(e,t){return e=Object(o["s"])(e),null===ht(e._path)?Go("child","path",t,!1):zo("child","path",t,!1),new Vs(e._repo,yt(e._path,t))}function Ws(e,t){e=Object(o["s"])(e),Ko("push",e._path),Bo("push",t,e._path,!0);const n=ss(e._repo),r=On(n),i=Bs(e,r),s=Bs(e,r);let a;return a=null!=t?Gs(s,t).then(()=>s):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function zs(e){return Ko("remove",e._path),Gs(e,null)}function Gs(e,t){e=Object(o["s"])(e),Ko("set",e._path),Bo("set",t,e._path,!1);const n=new o["a"];return fs(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class Ks{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ls("value",this,new qs(e.snapshotNode,new Vs(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ms(this,e,t):null}matches(e){return e instanceof Ks&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ys{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ms(this,e,t):null}createEvent(e,t){Object(o["e"])(null!=e.childName,"Child events should have a childName.");const n=Bs(new Vs(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Ls(e.type,this,new qs(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ys&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Js(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{ms(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ds(n,o||void 0),a="value"===t?new Ks(s):new Ys(t,s);return vs(e._repo,e,a),()=>ms(e._repo,e,a)}function Qs(e,t,n,r){return Js(e,"value",t,n,r)}class Xs{}class Zs extends Xs{constructor(e){super(),this._path=e}_apply(e){$s(e,"orderByChild");const t=new ut(this._path);if(_t(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new bn(t),r=Ln(e._queryParams,n);return Us(r),new Fs(e._repo,e._path,r,!0)}}function ea(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return zo("orderByChild","path",e,!1),new Zs(e)}function ta(e,...t){let n=Object(o["s"])(e);for(const r of t)n=r._apply(n);return n}Ti(Vs),Ui(Vs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const na="FIREBASE_DATABASE_EMULATOR_HOST",ra={};let ia=!1;function oa(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Rs(s,o),u=c.repoInfo,l=void 0;"undefined"!==typeof e&&(l=Object({NODE_ENV:"production",VUE_APP_FIREBASE_KEY:"AIzaSyCdoyS2Ex3N6d1YfrmPaDhRhjSHuK2D5pM",VUE_APP_FIREBASE_DATABASE_URL:"https://project-lotto-5df00-default-rtdb.europe-west1.firebasedatabase.app/",BASE_URL:"/lotto/"})[na]),l?(a=!0,s=`http://${l}?ns=${u.namespace}`,c=Rs(s,o),u=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new X(X.OWNER):new Q(t.name,t.options,n);Yo("Invalid Firebase Database URL",c),_t(c.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const d=aa(u,t,h,new J(t.name,r));return new ca(d,t)}function sa(e,t){const n=ra[t];n&&n[e.key]===e||I(`Database ${t}(${e.repoInfo_}) has already been deleted.`),gs(e),delete n[e.key]}function aa(e,t,n,r){let i=ra[t.name];i||(i={},ra[t.name]=i);let o=i[e.toURLString()];return o&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new is(e,ia,n,r),i[e.toURLString()]=o,o}class ca{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(os(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vs(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(sa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")}}function ua(e=Object(r["getApp"])(),t){return Object(r["_getProvider"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function la(e){l(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return oa(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(a,c,e),Object(r["registerVersion"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Dt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};la()}).call(this,n("4362"))},5270:function(e,t,n){"use strict";var r=n("c532"),i=n("c401"),o=n("2e67"),s=n("4c3d"),a=n("7a77");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),h=n("50c4"),d=n("577e"),f=n("1d80"),p=n("8aa5"),v=n("dc4a"),m=n("0cb2"),g=n("14c3"),y=n("b622"),_=y("replace"),b=Math.max,w=Math.min,C=o([].concat),E=o([].push),O=o("".indexOf),k=o("".slice),I=function(e){return void 0===e?e:String(e)},T=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),S=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,n){var o=x?"$":"$0";return[function(e,n){var r=f(this),o=void 0==e?void 0:v(e,_);return o?i(o,e,r,n):i(t,d(r),e,n)},function(e,i){var s=c(this),a=d(e);if("string"==typeof i&&-1===O(i,o)&&-1===O(i,"$<")){var f=n(t,s,a,i);if(f.done)return f.value}var v=u(i);v||(i=d(i));var y=s.global;if(y){var _=s.unicode;s.lastIndex=0}var T=[];while(1){var x=g(s,a);if(null===x)break;if(E(T,x),!y)break;var S=d(x[0]);""===S&&(s.lastIndex=p(a,h(s.lastIndex),_))}for(var P="",A=0,N=0;N<T.length;N++){x=T[N];for(var R=d(x[0]),j=b(w(l(x.index),a.length),0),L=[],M=1;M<x.length;M++)E(L,I(x[M]));var D=x.groups;if(v){var F=C([R],L,j,a);void 0!==D&&E(F,D);var $=d(r(i,void 0,F))}else $=m(R,a,j,L,D,i);j>=A&&(P+=k(a,A,j)+$,A=j+R.length)}return P+k(a,A)}]}),!S||!T||x)},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Y})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return M})),n.d(t,"_addComponent",(function(){return U})),n.d(t,"_addOrOverwriteComponent",(function(){return V})),n.d(t,"_apps",(function(){return F})),n.d(t,"_clearComponents",(function(){return W})),n.d(t,"_components",(function(){return $})),n.d(t,"_getProvider",(function(){return H})),n.d(t,"_registerComponent",(function(){return q})),n.d(t,"_removeServiceInstance",(function(){return B})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return Q})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("22e5"),i=n("e691"),o=n("1fd5");n.d(t,"FirebaseError",(function(){return o["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.20",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",_="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",E="@firebase/installations-compat",O="@firebase/messaging",k="@firebase/messaging-compat",I="@firebase/performance",T="@firebase/performance-compat",x="@firebase/remote-config",S="@firebase/remote-config-compat",P="@firebase/storage",A="@firebase/storage-compat",N="@firebase/firestore",R="@firebase/firestore-compat",j="firebase",L="9.6.10",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[_]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[E]:"fire-iid-compat",[O]:"fire-fcm",[k]:"fire-fcm-compat",[I]:"fire-perf",[T]:"fire-perf-compat",[x]:"fire-rc",[S]:"fire-rc-compat",[P]:"fire-gcs",[A]:"fire-gcs-compat",[N]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},F=new Map,$=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e,t){e.container.addOrOverwriteComponent(t)}function q(e){const t=e.name;if($.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;$.set(t,e);for(const n of F.values())U(n,e);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function B(e,t,n=M){H(e,t).clearInstance(n)}function W(){$.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},G=new o["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=L;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["o"])(e,s.options)&&Object(o["o"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of $.values())a.addComponent(r);const c=new K(e,n,a);return F.set(i,c),c}function Q(e=M){const t=F.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function X(){return Array.from(F.values())}async function Z(e){const t=e.name;F.has(t)&&(F.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="firebase-heartbeat-database",ie=1,oe="firebase-heartbeat-store";let se=null;function ae(){return se||(se=Object(o["G"])(re,ie,(e,t)=>{switch(t){case 0:e.createObjectStore(oe)}}).catch(e=>{throw G.create("storage-open",{originalErrorMessage:e.message})})),se}async function ce(e){try{const t=await ae();return t.transaction(oe).objectStore(oe).get(le(e))}catch(t){throw G.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await ae(),r=n.transaction(oe,"readwrite"),i=r.objectStore(oe);return await i.put(t,le(e)),r.complete}catch(n){throw G.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=1024,de=2592e6;class fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new me(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=de}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pe(),{heartbeatsToSend:t,unsentEntries:n}=ve(this._heartbeatsCache.heartbeats),r=Object(o["j"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pe(){const e=new Date;return e.toISOString().substring(0,10)}function ve(e,t=he){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ge(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["z"])()&&Object(o["N"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ge(e){return Object(o["j"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){q(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),q(new r["a"]("heartbeat",e=>new fe(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ye("")},"58a8":function(e,t,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=n("5899"),a=r("".replace),c="["+s+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(e){return function(t){var n=o(i(t));return 1&e&&(n=a(n,u,"")),2&e&&(n=a(n,l,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5a34":function(e,t,n){var r=n("da84"),i=n("44e7"),o=r.TypeError;e.exports=function(e){if(i(e))throw o("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5cce":function(e,t){e.exports={version:"0.26.1"}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5f02":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var v,m=h(arguments[s++]),g=d?p(a(m),d(m)):a(m),y=g.length,_=0;while(y>_)v=g[_++],r&&!o(f,m,v)||(n[v]=m[v])}return n}:d},6547:function(e,t,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=o(s(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var r=n("51b0");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]})),n.d(t,"g",(function(){return r["g"]})),n.d(t,"h",(function(){return r["h"]}))},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),v=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},m=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?m:v},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),v="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return o(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g),w=c(b.get),C=c(b.has),E=c(b.set);r=function(e,t){if(C(b,e))throw new m(v);return t.facade=e,E(b,e,t),t},i=function(e){return w(b,e)||{}},o=function(e){return C(b,e)}}else{var O=f("state");p[O]=!0,r=function(e,t){if(h(e,O))throw new m(v);return t.facade=e,l(e,O,t),t},i=function(e){return h(e,O)?e[O]:{}},o=function(e){return h(e,O)}}e.exports={set:r,get:i,has:o,enforce:y,getterFor:_}},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),e!==r?(h?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},"6f53":function(e,t,n){var r=n("83ab"),i=n("e330"),o=n("df75"),s=n("fc6a"),a=n("d1e7").f,c=i(a),u=i([].push),l=function(e){return function(t){var n,i=s(t),a=o(i),l=a.length,h=0,d=[];while(l>h)n=a[h++],r&&!c(i,n)||u(d,e?[n,i[n]]:i[n]);return d}};e.exports={entries:l(!0),values:l(!1)}},7156:function(e,t,n){var r=n("1626"),i=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7bc6":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));n("5530"),n("3835"),n("ac1f"),n("466d"),n("a15b"),n("d81d"),n("1276"),n("d9e2"),n("b0c0"),n("5319"),n("498a"),n("d3b7"),n("25f0"),n("38cf"),n("99af"),n("fb6a"),n("2ca0"),n("07ac");var r=n("d9bd");n("80d2"),n("8da5");function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function o(e){var t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError("Colors can only be numbers or strings, recieved ".concat(null==e?e:e.constructor.name," instead"));var n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((function(e){return e+e})).join("")),6!==n.length&&Object(r["c"])("'".concat(e,"' is not a valid rgb color")),t=parseInt(n,16)}return t<0?(Object(r["c"])("Colors cannot be negative: '".concat(e,"'")),t=0):(t>16777215||isNaN(t))&&(Object(r["c"])("'".concat(e,"' is not a valid rgb color")),t=16777215),t}function s(e){var t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return s(o(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var e=s.length;while(e--)delete b[f][s[e]];return b()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[v]=e):n=b(),void 0===t?n:o.f(n,t)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),s="find",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),v=n("3f8c"),m=n("ae93"),g=s.PROPER,y=s.CONFIGURABLE,_=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),C="keys",E="values",O="entries",k=function(){return this};e.exports=function(e,t,n,s,p,m,I){c(n,t,s);var T,x,S,P=function(e){if(e===p&&L)return L;if(!b&&e in R)return R[e];switch(e){case C:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case O:return function(){return new n(this,e)}}return function(){return new n(this)}},A=t+" Iterator",N=!1,R=e.prototype,j=R[w]||R["@@iterator"]||p&&R[p],L=!b&&j||P(p),M="Array"==t&&R.entries||j;if(M&&(T=u(M.call(new e)),T!==Object.prototype&&T.next&&(o||u(T)===_||(l?l(T,_):a(T[w])||f(T,w,k)),h(T,A,!0,!0),o&&(v[A]=k))),g&&p==E&&j&&j.name!==E&&(!o&&y?d(R,"name",E):(N=!0,L=function(){return i(j,this)})),p)if(x={values:P(E),keys:m?L:P(C),entries:P(O)},I)for(S in x)(b||N||!(S in R))&&f(R,S,x[S]);else r({target:t,proto:!0,forced:b||N},x);return o&&!I||R[w]===L||f(R,w,L,{name:p}),v[t]=L,x}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"80d2":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"m",(function(){return h})),n.d(t,"j",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"l",(function(){return _})),n.d(t,"b",(function(){return b})),n.d(t,"k",(function(){return w}));n("3835");var r=n("53ca");n("5530"),n("ac1f"),n("5319"),n("498a"),n("99af"),n("b64b"),n("d3b7"),n("1276"),n("a630"),n("3ca3"),n("a9e3"),n("dca8"),n("2ca0"),n("fb6a"),n("4e82"),n("d81d"),n("25f0"),n("4de4"),n("b0c0"),n("38cf"),n("b680"),n("cb29"),n("2b0e");try{if("undefined"!==typeof window){var i=Object.defineProperty({},"passive",{get:function(){!0}});window.addEventListener("testListener",i,i),window.removeEventListener("testListener",i,i)}}catch(C){console.warn(C)}function o(e,t,n){var r=t.length-1;if(r<0)return void 0===e?n:e;for(var i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function s(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;var n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((function(n){return s(e[n],t[n])}))}function a(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),o(e,t.split("."),n)):n}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):"".concat(Number(e)).concat(t)}function u(e){return null!==e&&"object"===Object(r["a"])(e)}var l=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function h(e,t){var n=e.$vuetify.icons.component;if(t.startsWith("$")){var r="$vuetify.icons.values.".concat(t.split("$").pop().split(".").pop()),i=a(e,r,t);if("string"!==typeof i)return i;t=i}return null==n?t:{component:n,props:{icon:t}}}function d(e){return Object.keys(e)}var f=/-(\w)/g,p=function(e){return e.replace(f,(function(e,t){return t?t.toUpperCase():""}))};function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}function m(e){return null!=e?Array.isArray(e)?e:[e]:[]}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in t){var r=e[n],i=t[n];u(r)&&u(i)?e[n]=w(r,i):e[n]=i}return e}},"81d5":function(e,t,n){"use strict";var r=n("7b0b"),i=n("23cb"),o=n("07fa");e.exports=function(e){var t=r(this),n=o(t),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)t[a++]=e;return t}},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"83b9":function(e,t,n){"use strict";var r=n("d925"),i=n("e683");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"848b":function(e,t,n){"use strict";var r=n("5cce").version,i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};function s(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var o=r[i],s=t[o];if(s){var a=e[o],c=void 0===a||s(a,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}}i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(i(r," has been removed"+(t?" in "+t:"")));return t&&!o[r]&&(o[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:s,validators:i}},"857a":function(e,t,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=/"/g,a=r("".replace);e.exports=function(e,t,n,r){var c=o(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+a(o(r),s,"&quot;")+'"'),u+">"+c+"</"+t+">"}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,o).replace(s,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=v(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:y(t,i),matched:e?g(e):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function v(e){if(Array.isArray(e))return e.map(v);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=v(e[n]);return t}return e}var m=p(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||d;return(n||"/")+o(r)+i}function _(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function w(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&C(e.query,t.query)}function C(e,t){for(var n in t)if(!(n in e))return!1;return!0}function E(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var O={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=l[c],v=p&&p.component;return v?(p.configProps&&k(v,s,p.route,p.configProps),a(v,s,i)):a()}var m=u.matched[h],g=m&&m.components[c];if(!m||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=m.instances[c];(t&&n!==e||!t&&n===e)&&(m.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){m.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==m.instances[c]&&(m.instances[c]=e.componentInstance),E(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),k(g,s,u,y)),a(g,s,i)}};function k(e,t,n,i){var o=t.props=I(n,i);if(o){o=t.props=r({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function I(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function T(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function x(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function S(e){return e.replace(/\/+/g,"/")}var P=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},A=J,N=D,R=F,j=V,L=Y,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=h&&h!==d,_="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||a,C=p||v;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:_,partial:y,asterisk:!!g,pattern:C?H(C):g?".*":"[^"+q(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function F(e,t){return V(D(e,t),t)}function $(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function V(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",W(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?$:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(P(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function q(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function B(e,t){return e.keys=t,e}function W(e){return e&&e.sensitive?"":"i"}function z(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(e,t)}function G(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(J(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",W(n));return B(o,t)}function K(e,t,n){return Y(D(e,n),t,n)}function Y(e,t,n){P(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=q(a);else{var c=q(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=q(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",B(new RegExp("^"+o,W(n)),t)}function J(e,t,n){return P(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?z(e,t):P(e)?G(e,t,n):K(e,t,n)}A.parse=N,A.compile=R,A.tokensToFunction=j,A.tokensToRegExp=L;var Q=Object.create(null);function X(e,t,n){t=t||{};try{var r=Q[e]||(Q[e]=A.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Z(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var a=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=X(c,a,"path "+t.path)}else 0;return o}var l=x(o.path||""),h=t&&t.path||"/",d=l.path?T(l.path,h,n||o.append):h,f=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,g=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[m]=_(i,g,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:w(i,g);var y=u[m]?this.ariaCurrentValue:null,b=function(e){oe(e)&&(t.replace?n.replace(s,re):n.push(s,re))},C={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){C[e]=b})):C[this.event]=b;var E={class:u},O=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[v],isExactActive:u[m]});if(O){if(1===O.length)return O[0];if(O.length>1||!O.length)return 0===O.length?e():e("span",{},O)}if("a"===this.tag)E.on=C,E.attrs={href:c,"aria-current":y};else{var k=se(this.$slots.default);if(k){k.isStatic=!1;var I=k.data=r({},k.data);for(var T in I.on=I.on||{},I.on){var x=I.on[T];T in C&&(I.on[T]=Array.isArray(x)?x:[x])}for(var S in C)S in I.on?I.on[S].push(C[S]):I.on[S]=b;var P=k.data.attrs=r({},k.data.attrs);P.href=c,P["aria-current"]=y}else E.on=C}return e(this.tag,E,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",O),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function le(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?S(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=A(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:S(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ue(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=Z(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],v=i[p];if(pe(v.regex,a.path,a.params))return d(v,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,f=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var v=ve(c,e),m=X(v,f,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=X(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function ve(e,t){return T(e,t.parent?t.parent.path:"/",!0)}var me=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return me.now().toFixed(3)}var ye=ge();function _e(){return ye}function be(e){return ye=e}var we=Object.create(null);function Ce(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=_e(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ke),function(){window.removeEventListener("popstate",ke)}}function Ee(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Ie(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Re(e,o)})).catch((function(e){0})):Re(s,o))}))}}function Oe(){var e=_e();e&&(we[e]={x:window.pageXOffset,y:window.pageYOffset})}function ke(e){Oe(),e.state&&e.state.key&&be(e.state.key)}function Ie(){var e=_e();if(e)return we[e]}function Te(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function xe(e){return Ae(e.x)||Ae(e.y)}function Se(e){return{x:Ae(e.x)?e.x:window.pageXOffset,y:Ae(e.y)?e.y:window.pageYOffset}}function Pe(e){return{x:Ae(e.x)?e.x:0,y:Ae(e.y)?e.y:0}}function Ae(e){return"number"===typeof e}var Ne=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Ne.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Pe(i),t=Te(r,i)}else xe(e)&&(t=Se(e))}else n&&xe(e)&&(t=Se(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var je=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Oe();var n=window.history;try{if(t){var i=r({},n.state);i.key=_e(),n.replaceState(i,"",e)}else n.pushState({key:be(ge())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Me(e){Le(e,!0)}function De(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function $e(e,t){return He(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+We(t)+'" via a navigation guard.')}function Ue(e,t){var n=He(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ve(e,t){return He(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function qe(e,t){return He(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function He(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Be=["params","query","hash"];function We(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return Be.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function ze(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ge(e,t){return ze(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e){return function(t,n,r){var i=!1,o=0,s=null;Ye(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Ze((function(t){Xe(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Ze((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=ze(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ye(e,t){return Je(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Je(e){return Array.prototype.concat.apply([],e)}var Qe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xe(e){return e.__esModule||Qe&&"Module"===e[Symbol.toStringTag]}function Ze(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Ye(e,(function(e,r,i,o){var s=it(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Je(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",at,!0)}function st(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ge(e,Fe.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!Ge(e)&&ze(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(_(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ee(this.router,i,e,!1),o(Ue(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(ot(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),Ke(h)),f=function(t,n){if(r.pending!==e)return o(Ve(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(qe(i,e))):ze(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o($e(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};De(d,f,(function(){var n=ct(h),s=n.concat(r.router.resolveHooks);De(s,f,(function(){if(r.pending!==e)return o(Ve(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){E(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=je&&n;r&&this.listeners.push(Ce());var i=function(){var n=e.current,i=ht(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ee(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(S(r.base+e.fullPath)),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Me(S(r.base+e.fullPath)),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=S(this.base+this.current.fullPath);e?Le(t):Me(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(S(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=je&&n;r&&this.listeners.push(Ce());var i=function(){var t=e.current;pt()&&e.transitionTo(vt(),(function(n){r&&Ee(e.router,n,t,!0),je||yt(n.fullPath)}))},o=je?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;vt()!==t&&(e?gt(t):yt(t))},t.prototype.getCurrentLocation=function(){return vt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(S(e+"/#"+t)),!0}function pt(){var e=vt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function vt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function mt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){je?Le(mt(e)):window.location.hash=e}function yt(e){je?Me(mt(e)):window.location.replace(mt(e))}var _t=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ge(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!je&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new _t(this,e.base);break;default:0}},wt={currentRoute:{configurable:!0}};function Ct(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Et(e,t,n){var r="hash"===n?"#"+t:t;return e?S(e+"/"+r):r}bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},wt.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=je&&i;o&&"fullPath"in e&&Ee(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return Ct(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return Ct(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return Ct(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Z(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Et(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,wt),bt.install=ae,bt.version="3.5.3",bt.isNavigationFailure=Ge,bt.NavigationFailureType=Fe,bt.START_LOCATION=m,ce&&window.Vue&&window.Vue.use(bt),t["a"]=bt},"8da5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n("80d2"),i=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],o=function(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055},s=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],a=function(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)};function c(e){for(var t=Array(3),n=o,s=i,a=0;a<3;++a)t[a]=Math.round(255*Object(r["c"])(n(s[a][0]*e[0]+s[a][1]*e[1]+s[a][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function u(e){for(var t=[0,0,0],n=a,r=s,i=n((e>>16&255)/255),o=n((e>>8&255)/255),c=n((e>>0&255)/255),u=0;u<3;++u)t[u]=r[u][0]*i+r[u][1]*o+r[u][2]*c;return t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,m=i("".charAt),g=i("".indexOf),y=i("".replace),_=i("".slice),b=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=a.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],E=b||C||w||h||d;E&&(v=function(e){var t,n,i,a,c,h,d,E=this,O=l(E),k=o(e),I=O.raw;if(I)return I.lastIndex=E.lastIndex,t=r(v,I,k),E.lastIndex=I.lastIndex,t;var T=O.groups,x=w&&E.sticky,S=r(s,E),P=E.source,A=0,N=k;if(x&&(S=y(S,"y",""),-1===g(S,"g")&&(S+="g"),N=_(k,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==m(k,E.lastIndex-1))&&(P="(?: "+P+")",N=" "+N,A++),n=new RegExp("^(?:"+P+")",S)),C&&(n=new RegExp("^"+P+"$(?!\\s)",S)),b&&(i=E.lastIndex),a=r(p,x?n:E,N),x?a?(a.input=_(a.input,A),a[0]=_(a[0],A),a.index=E.lastIndex,E.lastIndex+=a[0].length):E.lastIndex=0:b&&a&&(E.lastIndex=E.global?a.index+a[0].length:i),C&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&T)for(a.groups=h=u(null),c=0;c<T.length;c++)d=T[c],h[d[0]]=a[d[1]];return a}),e.exports=v},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"95ed":function(e,t,n){},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),s=new S(r||[]);return o._invoke=k(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function m(){}function g(){}function y(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==n&&r.call(w,o)&&(_=w);var C=y.prototype=m.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return A()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=I(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=y,c(C,"constructor",y),c(y,"constructor",g),g.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},E(O.prototype),c(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new O(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},E(C),c(C,a,"Generator"),c(C,o,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",y=i.TypeError,_=p>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=d("concat"),w=function(e){if(!a(e))return!1;var t=e[v];return void 0!==t?!!t:s(e)},C=!_||!b;r({target:"Array",proto:!0,forced:C},{concat:function(e){var t,n,r,i,o,s=c(this),a=h(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],w(o)){if(i=u(o),d+i>m)throw y(g);for(n=0;n<i;n++,d++)n in o&&l(a,d,o[n])}else{if(d>=m)throw y(g);l(a,d++,o)}return a.length=d,a}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(s){i(e,"throw",s)}}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp,s=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),c=s||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("44ad"),s=n("fc6a"),a=n("a640"),c=i([].join),u=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(e){return c(s(this),void 0===e?",":e)}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),v=n("1626"),m=n("861d"),g=n("3a9b"),y=n("d9b5"),_=n("825a"),b=n("7b0b"),w=n("fc6a"),C=n("a04b"),E=n("577e"),O=n("5c6c"),k=n("7c73"),I=n("df75"),T=n("241c"),x=n("057f"),S=n("7418"),P=n("06cf"),A=n("9bf2"),N=n("37e8"),R=n("d1e7"),j=n("f36a"),L=n("6eeb"),M=n("5692"),D=n("f772"),F=n("d012"),$=n("90e3"),U=n("b622"),V=n("e538"),q=n("746f"),H=n("d44e"),B=n("69f3"),W=n("b727").forEach,z=D("hidden"),G="Symbol",K="prototype",Y=U("toPrimitive"),J=B.set,Q=B.getterFor(G),X=Object[K],Z=i.Symbol,ee=Z&&Z[K],te=i.TypeError,ne=i.QObject,re=o("JSON","stringify"),ie=P.f,oe=A.f,se=x.f,ae=R.f,ce=c([].push),ue=M("symbols"),le=M("op-symbols"),he=M("string-to-symbol-registry"),de=M("symbol-to-string-registry"),fe=M("wks"),pe=!ne||!ne[K]||!ne[K].findChild,ve=l&&d((function(){return 7!=k(oe({},"a",{get:function(){return oe(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=ie(X,t);r&&delete X[t],oe(e,t,n),r&&e!==X&&oe(X,t,r)}:oe,me=function(e,t){var n=ue[e]=k(ee);return J(n,{type:G,tag:e,description:t}),l||(n.description=t),n},ge=function(e,t,n){e===X&&ge(le,t,n),_(e);var r=C(t);return _(n),f(ue,r)?(n.enumerable?(f(e,z)&&e[z][r]&&(e[z][r]=!1),n=k(n,{enumerable:O(0,!1)})):(f(e,z)||oe(e,z,O(1,{})),e[z][r]=!0),ve(e,r,n)):oe(e,r,n)},ye=function(e,t){_(e);var n=w(t),r=I(n).concat(Ee(n));return W(r,(function(t){l&&!a(be,n,t)||ge(e,t,n[t])})),e},_e=function(e,t){return void 0===t?k(e):ye(k(e),t)},be=function(e){var t=C(e),n=a(ae,this,t);return!(this===X&&f(ue,t)&&!f(le,t))&&(!(n||!f(this,t)||!f(ue,t)||f(this,z)&&this[z][t])||n)},we=function(e,t){var n=w(e),r=C(t);if(n!==X||!f(ue,r)||f(le,r)){var i=ie(n,r);return!i||!f(ue,r)||f(n,z)&&n[z][r]||(i.enumerable=!0),i}},Ce=function(e){var t=se(w(e)),n=[];return W(t,(function(e){f(ue,e)||f(F,e)||ce(n,e)})),n},Ee=function(e){var t=e===X,n=se(t?le:w(e)),r=[];return W(n,(function(e){!f(ue,e)||t&&!f(X,e)||ce(r,ue[e])})),r};if(h||(Z=function(){if(g(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,t=$(e),n=function(e){this===X&&a(n,le,e),f(this,z)&&f(this[z],t)&&(this[z][t]=!1),ve(this,t,O(1,e))};return l&&pe&&ve(X,t,{configurable:!0,set:n}),me(t,e)},ee=Z[K],L(ee,"toString",(function(){return Q(this).tag})),L(Z,"withoutSetter",(function(e){return me($(e),e)})),R.f=be,A.f=ge,N.f=ye,P.f=we,T.f=x.f=Ce,S.f=Ee,V.f=function(e){return me(U(e),e)},l&&(oe(ee,"description",{configurable:!0,get:function(){return Q(this).description}}),u||L(X,"propertyIsEnumerable",be,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),W(I(fe),(function(e){q(e)})),r({target:G,stat:!0,forced:!h},{for:function(e){var t=E(e);if(f(he,t))return he[t];var n=Z(t);return he[t]=n,de[n]=t,n},keyFor:function(e){if(!y(e))throw te(e+" is not a symbol");if(f(de,e))return de[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:_e,defineProperty:ge,defineProperties:ye,getOwnPropertyDescriptor:we}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:Ce,getOwnPropertySymbols:Ee}),r({target:"Object",stat:!0,forced:d((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(b(e))}}),re){var Oe=!h||d((function(){var e=Z();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));r({target:"JSON",stat:!0,forced:Oe},{stringify:function(e,t,n){var r=j(arguments),i=t;if((m(t)||void 0!==e)&&!y(e))return p(t)||(t=function(e,t){if(v(i)&&(t=a(i,this,e,t)),!y(t))return t}),r[1]=t,s(re,null,r)}})}if(!ee[Y]){var ke=ee.valueOf;L(ee,Y,(function(e){return a(ke,this)}))}H(Z,G),F[z]=!0},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("e330"),s=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("241c").f,v=n("06cf").f,m=n("9bf2").f,g=n("408a"),y=n("58a8").trim,_="Number",b=i[_],w=b.prototype,C=i.TypeError,E=o("".slice),O=o("".charCodeAt),k=function(e){var t=d(e,"number");return"bigint"==typeof t?t:I(t)},I=function(e){var t,n,r,i,o,s,a,c,u=d(e,"number");if(h(u))throw C("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),t=O(u,0),43===t||45===t){if(n=O(u,2),88===n||120===n)return NaN}else if(48===t){switch(O(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=E(u,2),s=o.length,a=0;a<s;a++)if(c=O(o,a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(s(_,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var T,x=function(e){var t=arguments.length<1?0:b(k(e)),n=this;return l(w,n)&&f((function(){g(n)}))?u(Object(t),n,x):t},S=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;S.length>P;P++)c(b,T=S[P])&&!c(x,T)&&m(x,T,v(b,T));x.prototype=w,w.constructor=x,a(i,_,x)}},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},ab36:function(e,t,n){var r=n("861d"),i=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},addb:function(e,t,n){var r=n("4dae"),i=Math.floor,o=function(e,t){var n=e.length,c=i(n/2);return n<8?s(e,t):a(e,o(r(e,0,c),t),o(r(e,c),t),t)},s=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,o=n.length,s=0,a=0;while(s<i||a<o)e[s+a]=s<i&&a<o?r(t[s],n[a])<=0?t[s++]:n[a++]:s<i?t[s++]:n[a++];return e};e.exports=o},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var v=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));v?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b50d:function(e,t,n){"use strict";var r=n("c532"),i=n("467f"),o=n("7aac"),s=n("30b5"),a=n("83b9"),c=n("c345"),u=n("3934"),l=n("2d83"),h=n("cafa"),d=n("7a77");e.exports=function(e){return new Promise((function(t,n){var f,p=e.data,v=e.headers,m=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}r.isFormData(p)&&delete v["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var _=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(_+":"+b)}var w=a(e.baseURL,e.url);function C(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,o=m&&"text"!==m&&"json"!==m?y.response:y.responseText,s={data:o,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};i((function(e){t(e),g()}),(function(e){n(e),g()}),s),y=null}}if(y.open(e.method.toUpperCase(),s(w,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=C:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(C)},y.onabort=function(){y&&(n(l("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(l("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||h;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||u(w))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;E&&(v[e.xsrfHeaderName]=E)}"setRequestHeader"in y&&r.forEach(v,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete v[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),m&&"json"!==m&&(y.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){y&&(n(!e||e&&e.type?new d("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),p||(p=null),y.send(p)}))}},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),g=n("a4b4"),y=n("605d"),_=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,C=h.Promise,E=f(h,"queueMicrotask"),O=E&&E.value;O||(r=function(){var e,t;y&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},v||y||g||!_||!b?!m&&C&&C.resolve?(u=C.resolve(void 0),u.constructor=C,l=d(u.then,u),s=function(){l(r)}):y?s=function(){w.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=b.createTextNode(""),new _(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=O||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b680:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e330"),s=n("5926"),a=n("408a"),c=n("1148"),u=n("d039"),l=i.RangeError,h=i.String,d=Math.floor,f=o(c),p=o("".slice),v=o(1..toFixed),m=function(e,t,n){return 0===t?n:t%2===1?m(e,t-1,n*e):m(e*e,t/2,n)},g=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},y=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=d(i/1e7)},_=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=d(r/t),r=r%t*1e7},b=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=h(e[t]);n=""===n?r:n+f("0",7-r.length)+r}return n},w=u((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!u((function(){v({})}));r({target:"Number",proto:!0,forced:w},{toFixed:function(e){var t,n,r,i,o=a(this),c=s(e),u=[0,0,0,0,0,0],d="",v="0";if(c<0||c>20)throw l("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return h(o);if(o<0&&(d="-",o=-o),o>1e-21)if(t=g(o*m(2,69,1))-69,n=t<0?o*m(2,-t,1):o/m(2,t,1),n*=4503599627370496,t=52-t,t>0){y(u,0,n),r=c;while(r>=7)y(u,1e7,0),r-=7;y(u,m(10,r,1),0),r=t-1;while(r>=23)_(u,1<<23),r-=23;_(u,1<<r),y(u,1,1),_(u,2),v=b(u)}else y(u,0,n),y(u,1<<-t,0),v=b(u)+f("0",c);return c>0?(i=v.length,v=d+(i<=c?"0."+f("0",c-i)+v:p(v,0,i-c)+"."+p(v,i-c))):v=d+v,v}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,v,m,g){for(var y,_,b=s(p),w=o(b),C=r(v,m),E=a(w),O=0,k=g||c,I=t?k(p,E):n||d?k(p,0):void 0;E>O;O++)if((f||O in w)&&(y=w[O],_=C(y,O,b),e))if(t)I[O]=_;else if(_)switch(e){case 3:return!0;case 5:return y;case 6:return O;case 2:u(I,y)}else switch(e){case 4:return!1;case 7:u(I,y)}return h?-1:i||l?l:I}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b980:function(e,t,n){var r=n("d039"),i=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bc3a:function(e,t,n){e.exports=n("cee4")},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c345:function(e,t,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},c401:function(e,t,n){"use strict";var r=n("c532"),i=n("4c3d");e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},c430:function(e,t){e.exports=!1},c532:function(e,t,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function o(e){return Array.isArray(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"[object FormData]"===i.call(e)}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t}function h(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function v(e){return"[object Date]"===i.call(e)}function m(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function _(e){return f(e)&&y(e.pipe)}function b(e){return"[object URLSearchParams]"===i.call(e)}function w(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function O(){var e={};function t(t,n){p(e[n])&&p(t)?e[n]=O(e[n],t):p(t)?e[n]=O({},t):o(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)E(arguments[n],t);return e}function k(e,t,n){return E(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function I(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:s,isDate:v,isFile:m,isBlob:g,isFunction:y,isStream:_,isURLSearchParams:b,isStandardBrowserEnv:C,forEach:E,merge:O,extend:k,trim:w,stripBOM:I}},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c770:function(e,t,n){var r=n("e330"),i=r("".replace),o=function(e){return String(Error(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(o);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,s,"");return e}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8d2:function(e,t,n){var r=n("5e77").PROPER,i=n("d039"),o=n("5899"),s="​᠎";e.exports=function(e){return i((function(){return!!o[e]()||s[e]()!==s||r&&o[e].name!==e}))}},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cafa:function(e,t,n){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},cb29:function(e,t,n){var r=n("23e7"),i=n("81d5"),o=n("44d2");r({target:"Array",proto:!0},{fill:i}),o("fill")},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},cee4:function(e,t,n){"use strict";var r=n("c532"),i=n("1d2b"),o=n("0a06"),s=n("4a7b"),a=n("4c3d");function c(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n.create=function(t){return c(s(e,t))},n}var u=c(a);u.Axios=o,u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.VERSION=n("5cce").version,u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e,t){if(e<t)throw i("Not enough arguments");return e}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var v=r(/./[d]),m=t(d,""[e],(function(e,t,n,i,s){var a=r(e),c=t.exec;return c===o||c===l.exec?f&&!s?{done:!0,value:v(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,m[0]),i(l,d,m[1])}h&&c(l[d],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},d86b:function(e,t,n){var r=n("d039");e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},d9bd:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c}));n("caad"),n("2532"),n("99af"),n("ac1f"),n("5319"),n("b0c0"),n("466d"),n("a15b"),n("d81d"),n("38cf");var r=n("f309");function i(e,t,n){if(!r["a"].config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return"[Vuetify] ".concat(e)+(t?d(t):"")}}function o(e,t,n){var r=i(e,t,n);null!=r&&console.warn(r)}function s(e,t,n){var r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){s("[BREAKING] '".concat(e,"' has been removed, use '").concat(t,"' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide"),n,r)}function c(e,t,n){o("[REMOVED] '".concat(e,"' has been removed. You can safely omit it."),t,n)}var u=/(?:^|[-_])(\w)/g,l=function(e){return e.replace(u,(function(e){return e.toUpperCase()})).replace(/[-_]/g,"")};function h(e,t){if(e.$root===e)return"<Root>";var n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{},r=n.name||n._componentTag,i=n.__file;if(!r&&i){var o=i.match(/([^/\\]+)\.vue$/);r=o&&o[1]}return(r?"<".concat(l(r),">"):"<Anonymous>")+(i&&!1!==t?" at ".concat(i):"")}function d(e){if(e._isVue&&e.$parent){var t=[],n=0;while(e){if(t.length>0){var r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map((function(e,t){return"".concat(0===t?"---\x3e ":" ".repeat(5+2*t)).concat(Array.isArray(e)?"".concat(h(e[0]),"... (").concat(e[1]," recursive calls)"):h(e))})).join("\n")}return"\n\n(found in ".concat(h(e),")")}},d9e2:function(e,t,n){var r=n("23e7"),i=n("da84"),o=n("2ba4"),s=n("e5cb"),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},dca8:function(e,t,n){var r=n("23e7"),i=n("bb2f"),o=n("d039"),s=n("861d"),a=n("f183").onFreeze,c=Object.freeze,u=o((function(){c(1)}));r({target:"Object",stat:!0,forced:u,sham:!i},{freeze:function(e){return c&&s(e)?c(a(e)):e}})},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=o.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var v={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(v[t]=!0),t};d(m,f),m.prototype=p,p.constructor=m;var g="Symbol(test)"==String(f("test")),y=s(p.toString),_=s(p.valueOf),b=/^Symbol\((.*)\)[^)]+$/,w=s("".replace),C=s("".slice);h(p,"description",{configurable:!0,get:function(){var e=_(this),t=y(e);if(a(v,e))return"";var n=g?C(t,7,-1):w(t,b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=s.set,f=s.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(v){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e5cb:function(e,t,n){"use strict";var r=n("d066"),i=n("1a2d"),o=n("9112"),s=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("7156"),l=n("e391"),h=n("ab36"),d=n("c770"),f=n("b980"),p=n("c430");e.exports=function(e,t,n,v){var m=v?2:1,g=e.split("."),y=g[g.length-1],_=r.apply(null,g);if(_){var b=_.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return _;var w=r("Error"),C=t((function(e,t){var n=l(v?t:e,void 0),r=v?new _(e):new _;return void 0!==n&&o(r,"message",n),f&&o(r,"stack",d(r.stack,2)),this&&s(b,this)&&u(r,this,C),arguments.length>m&&h(r,arguments[m]),r}));if(C.prototype=b,"Error"!==y&&(a?a(C,w):c(C,w,{name:!0})),c(C,_),!p)try{b.name!==y&&o(b,"name",y),b.constructor=C}catch(E){}return C}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),v=n("d2bb"),m=n("d44e"),g=n("2626"),y=n("59ed"),_=n("1626"),b=n("861d"),w=n("19aa"),C=n("8925"),E=n("2266"),O=n("1c7e"),k=n("4840"),I=n("2cf4").set,T=n("b575"),x=n("cdf9"),S=n("44de"),P=n("f069"),A=n("e667"),N=n("01b4"),R=n("69f3"),j=n("94ca"),L=n("b622"),M=n("6069"),D=n("605d"),F=n("2d00"),$=L("species"),U="Promise",V=R.getterFor(U),q=R.set,H=R.getterFor(U),B=d&&d.prototype,W=d,z=B,G=u.TypeError,K=u.document,Y=u.process,J=P.f,Q=J,X=!!(K&&K.createEvent&&u.dispatchEvent),Z=_(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=j(U,(function(){var e=C(W),t=e!==String(W);if(!t&&66===F)return!0;if(c&&!z["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new W((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[$]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&M&&!Z})),ue=ce||!O((function(e){W.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!b(e)||!_(t=e.then))&&t},he=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&me(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(G("Promise-chain cycle")):(r=le(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},de=function(e,t){e.notified||(e.notified=!0,T((function(){var n,r=e.reactions;while(n=r.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var r,i;X?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&S("Unhandled promise rejection",n)},pe=function(e){h(I,u,(function(){var t,n=e.facade,r=e.value,i=ve(e);if(i&&(t=A((function(){D?Y.emit("unhandledRejection",r,n):fe(ee,n,r)})),e.rejection=D||ve(e)?se:oe,t.error))throw t.value}))},ve=function(e){return e.rejection!==oe&&!e.parent},me=function(e){h(I,u,(function(){var t=e.facade;D?Y.emit("rejectionHandled",t):fe(te,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},ye=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,de(e,!0))},_e=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw G("Promise can't be resolved itself");var r=le(t);r?T((function(){var n={done:!1};try{h(r,t,ge(_e,n,e),ge(ye,n,e))}catch(i){ye(n,i,e)}})):(e.value=t,e.state=re,de(e,!1))}catch(i){ye({done:!1},i,e)}}};if(ce&&(W=function(e){w(this,z),y(e),h(r,this);var t=V(this);try{e(ge(_e,t),ge(ye,t))}catch(n){ye(t,n)}},z=W.prototype,r=function(e){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:new N,rejection:!1,state:ne,value:void 0})},r.prototype=p(z,{then:function(e,t){var n=H(this),r=J(k(this,W));return n.parent=!0,r.ok=!_(e)||e,r.fail=_(t)&&t,r.domain=D?Y.domain:void 0,n.state==ne?n.reactions.add(r):T((function(){he(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=V(e);this.promise=e,this.resolve=ge(_e,t),this.reject=ge(ye,t)},P.f=J=function(e){return e===W||e===o?new i(e):Q(e)},!c&&_(d)&&B!==Object.prototype)){s=B.then,ae||(f(B,"then",(function(e,t){var n=this;return new W((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f(B,"catch",z["catch"],{unsafe:!0}));try{delete B.constructor}catch(be){}v&&v(B,z)}a({global:!0,wrap:!0,forced:ce},{Promise:W}),m(W,U,!1,!0),g(U),o=l(U),a({target:U,stat:!0,forced:ce},{reject:function(e){var t=J(this);return h(t.reject,void 0,e),t.promise}}),a({target:U,stat:!0,forced:c||ce},{resolve:function(e){return x(c&&this===o?W:this,e)}}),a({target:U,stat:!0,forced:ue},{all:function(e){var t=this,n=J(t),r=n.resolve,i=n.reject,o=A((function(){var n=y(t.resolve),o=[],s=0,a=1;E(e,(function(e){var c=s++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=J(t),r=n.reject,i=A((function(){var i=y(t.resolve);E(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return cr})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ct})),n.d(t,"e",(function(){return lt}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function _(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){_(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=Object(i["_getProvider"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["o"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["w"])()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["A"])()||Object(r["C"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["H"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const n=Object(r["s"])(e),i=await n.getIdToken(t),o=z(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(W(o.auth_time)),issuedAtTime:H(W(o.iat)),expirationTime:H(W(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["h"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(e){const t=z(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,q(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=Object(r["s"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["H"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:E}=t;g(_&&E,e,"internal-error");const O=re.fromJSON(this.name,E);g("string"===typeof _,e,"internal-error"),ie(l,e.name),ie(h,e.name),g("boolean"===typeof b,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(v,e.name),ie(m,e.name),ie(y,e.name);const k=new oe({uid:_,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:O,createdAt:m,lastLoginAt:y});return C&&Array.isArray(C)&&(k.providerData=C.map(e=>Object.assign({},e))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["t"])()){return/firefox\//i.test(e)}function de(e=Object(r["t"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["t"])()){return/crios\//i.test(e)}function pe(e=Object(r["t"])()){return/iemobile/i.test(e)}function ve(e=Object(r["t"])()){return/android/i.test(e)}function me(e=Object(r["t"])()){return/blackberry/i.test(e)}function ge(e=Object(r["t"])()){return/webos/i.test(e)}function ye(e=Object(r["t"])()){return/iphone|ipad|ipod/i.test(e)}function _e(e=Object(r["t"])()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return Object(r["y"])()&&10===document.documentMode}function we(e=Object(r["t"])()){return ye(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["t"])());break;case"Worker":n=`${le(Object(r["t"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ie(this),this.idTokenSubscription=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["s"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return Object(r["s"])(e)}class Ie{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["m"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}async function Ae(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Se(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class Le extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Re(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Re(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Re(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["H"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",j(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t))}async function Fe(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const $e={["USER_NOT_FOUND"]:"user-not-found"};async function Ue(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,n),$e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ve({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ve({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ue(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ve({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=Object(r["I"])(Object(r["r"])(e))["link"],n=t?Object(r["I"])(Object(r["r"])(t))["deep_link_id"]:null,i=Object(r["I"])(Object(r["r"])(e))["deep_link_id"],o=i?Object(r["I"])(Object(r["r"])(i))["link"]:null;return o||i||n||t||e}class Be{constructor(e){var t,n,i,o,s,a;const c=Object(r["I"])(Object(r["r"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qe(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new Be(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Be.parseLink(t);return g(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password",We.EMAIL_PASSWORD_SIGN_IN_METHOD="password",We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return D(e,"POST","/v1/accounts:signUp",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=z(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(ke(e),t)}async function at(e,t,n){const r=ke(e),i=await Xe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["s"])(e),We.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t,n,i){return Object(r["s"])(e).onAuthStateChanged(t,n,i)}function lt(e){return Object(r["s"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",j(e,t))}function dt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,t))}new WeakMap;const ft="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){const e=Object(r["t"])();return de(e)||ye(e)}const mt=1e3,gt=10;class yt extends pt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vt()&&Ce(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yt.type="LOCAL";const _t=yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends pt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bt.type="SESSION";const wt=bt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Ct(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.receivers=[];class kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Ot("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function Tt(e){It().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function St(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Pt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function At(){return xt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="firebaseLocalStorageDb",Rt=1,jt="firebaseLocalStorage",Lt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dt(e,t){return e.transaction([jt],t?"readwrite":"readonly").objectStore(jt)}function Ft(){const e=indexedDB.deleteDatabase(Nt);return new Mt(e).toPromise()}function $t(){const e=indexedDB.open(Nt,Rt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(jt,{keyPath:Lt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(jt)?t(n):(n.close(),await Ft(),t(await $t()))})})}async function Ut(e,t,n){const r=Dt(e,!0).put({[Lt]:t,value:n});return new Mt(r).toPromise()}async function Vt(e,t){const n=Dt(e,!1).get(t),r=await new Mt(n).toPromise();return void 0===r?null:r.value}function qt(e,t){const n=Dt(e,!0).delete(t);return new Mt(n).toPromise()}const Ht=800,Bt=3;class Wt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await $t()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(At()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await St(),!this.activeServiceWorker)return;this.sender=new kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Pt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $t();return await Ut(e,ft,"1"),await qt(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ut(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Vt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Dt(e,!1).getAll();return new Mt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wt.type="LOCAL";const zt=Wt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",j(e,t))}function Kt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Yt().appendChild(r)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qt("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt="recaptcha";async function Zt(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===Xt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Gt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(e){this.providerId=en.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return Zt(this.auth,e,Object(r["s"])(t))}static credential(e,t){return Ve._fromVerification(e,t)}static credentialFromResult(e){const t=e;return en.credentialFromTaggedObject(t)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ve._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class nn extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Re(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Re(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Re(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rn(e){return ot(e.auth,new nn(e),e.bypassAuthState)}function on(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new nn(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new nn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return on;default:f(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new S(2e3,1e4);class un extends an{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Ot();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="pendingRedirect",hn=new Map;class dn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=vn(t),r=pn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function pn(e){return w(e._redirectPersistence)}function vn(e){return ce(ln,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t,n=!1){const r=ke(e),i=tn(r,t),o=new dn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=6e5;class yn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!bn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(e))}saveEventToCache(e){this.cachedEventUids.add(_n(e)),this.lastProcessedEventTime=Date.now()}}function _n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function bn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,On=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Cn(e);for(const r of t)try{if(In(r))return}catch(n){}f(e,"unauthorized-domain")}function In(e){const t=O(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!On.test(n))return!1;if(En.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new S(3e4,6e4);function xn(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Sn(e){return new Promise((t,n)=>{var r,i,o;function s(){xn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xn(),n(p(e,"network-request-failed"))},timeout:Tn.get()})}if(null===(i=null===(r=It().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=It().gapi)||void 0===o?void 0:o.load)){const t=Qt("iframefcb");return It()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Pn=null,e})}let Pn=null;function An(e){return Pn=Pn||Sn(e),Pn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new S(5e3,15e3),Rn="__/auth/iframe",jn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,jn):`https://${e.config.authDomain}/${Rn}`,o={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},s=Mn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["H"])(o).slice(1)}`}async function Fn(e){const t=await An(e),n=It().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Dn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=It().setTimeout(()=>{r(i)},Nn.get());function s(){It().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Un=500,Vn=600,qn="_blank",Hn="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Wn(e,t,n,i=Un,o=Vn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$n),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["t"])().toLowerCase();n&&(c=fe(l)?qn:n),he(l)&&(t=t||Hn,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(_e(l)&&"_self"!==c)return zn(t||"",c),new Bn(null);const d=window.open(t||"",c,h);g(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Bn(d)}function zn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Kn="emulator/auth/handler";function Yn(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["SDK_VERSION"],eventId:s};if(t instanceof ze){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["x"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(e)}?${Object(r["H"])(u).slice(1)}`}function Jn({config:e}){return e.emulator?P(e,Kn):`https://${e.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=mn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Yn(e,t,n,O(),r);return Wn(e,o,Ot())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Tt(Yn(e,t,n,O(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Fn(e),n=new yn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Qn,{type:Qn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Qn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ye()}}const Zn=Xn;class er{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class tr extends er{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tr(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(e){return tr._fromCredential(e)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ir="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new Oe(t,r,i);return E(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new or(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(rr,ir,sr(e)),Object(i["registerVersion"])(rr,ir,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e=Object(i["getApp"])()){const t=Object(i["_getProvider"])(e,"auth");return t.isInitialized()?t.getImmediate():C(e,{popupRedirectResolver:Zn,persistence:[zt,_t,wt]})}ar("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f183:function(e,t,n){var r=n("23e7"),i=n("e330"),o=n("d012"),s=n("861d"),a=n("1a2d"),c=n("9bf2").f,u=n("241c"),l=n("057f"),h=n("4fad"),d=n("90e3"),f=n("bb2f"),p=!1,v=d("meta"),m=0,g=function(e){c(e,v,{value:{objectID:"O"+m++,weakData:{}}})},y=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,v)){if(!h(e))return"F";if(!t)return"E";g(e)}return e[v].objectID},_=function(e,t){if(!a(e,v)){if(!h(e))return!0;if(!t)return!1;g(e)}return e[v].weakData},b=function(e){return f&&p&&h(e)&&!a(e,v)&&g(e),e},w=function(){C.enable=function(){},p=!0;var e=u.f,t=i([].splice),n={};n[v]=1,e(n).length&&(u.f=function(n){for(var r=e(n),i=0,o=r.length;i<o;i++)if(r[i]===v){t(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l.f}))},C=e.exports={enable:w,fastKey:y,getWeakData:_,onFreeze:b};o[v]=!0},f309:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ne}));var r={};n.r(r),n.d(r,"linear",(function(){return S})),n.d(r,"easeInQuad",(function(){return P})),n.d(r,"easeOutQuad",(function(){return A})),n.d(r,"easeInOutQuad",(function(){return N})),n.d(r,"easeInCubic",(function(){return R})),n.d(r,"easeOutCubic",(function(){return j})),n.d(r,"easeInOutCubic",(function(){return L})),n.d(r,"easeInQuart",(function(){return M})),n.d(r,"easeOutQuart",(function(){return D})),n.d(r,"easeInOutQuart",(function(){return F})),n.d(r,"easeInQuint",(function(){return $})),n.d(r,"easeOutQuint",(function(){return U})),n.d(r,"easeInOutQuint",(function(){return V}));n("d9e2");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n("d3b7"),n("159b"),n("caad"),n("2532");var a=n("2b0e"),c=n("d9bd");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!u.installed){u.installed=!0,a["a"]!==e&&Object(c["b"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");var n=t.components||{},r=t.directives||{};for(var i in r){var o=r[i];e.directive(i,o)}(function t(n){if(n){for(var r in n){var i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate:function(){var t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount:function(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted:function(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}}n("a4d3"),n("b64b");function l(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function h(e,t){if(null==e)return{};var n,r,i=l(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}n("4ae1"),n("f8c9"),n("3410");function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var m=n("53ca");function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if(t&&("object"===Object(m["a"])(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function _(e){var t=v();return function(){var n,r=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}n("95ed");var b={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}},w={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:b},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}},C=n("80d2"),E=function(){function e(){i(this,e),this.framework={}}return s(e,[{key:"init",value:function(e,t){}}]),e}(),O=["preset"],k=function(e){f(n,e);var t=_(n);function n(e,r){var o;i(this,n),o=t.call(this);var s=Object(C["k"])({},w),a=r.userPreset,u=a.preset,l=void 0===u?{}:u,d=h(a,O);return null!=l.preset&&Object(c["c"])("Global presets do not support the **preset** option, it can be safely omitted"),r.preset=Object(C["k"])(Object(C["k"])(s,l),d),o}return s(n)}(E);k.property="presets";n("07ac");var I=function(e){f(n,e);var t=_(n);function n(){var e;return i(this,n),e=t.apply(this,arguments),e.bar=0,e.top=0,e.left=0,e.insetFooter=0,e.right=0,e.bottom=0,e.footer=0,e.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}},e}return s(n,[{key:"register",value:function(e,t,n){this.application[t][e]=n,this.update(t)}},{key:"unregister",value:function(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}},{key:"update",value:function(e){this[e]=Object.values(this.application[e]).reduce((function(e,t){return e+t}),0)}}]),n}(E);I.property="application";n("b0c0");var T=function(e){f(n,e);var t=_(n);function n(e){var r;i(this,n),r=t.call(this),r.xs=!1,r.sm=!1,r.md=!1,r.lg=!1,r.xl=!1,r.xsOnly=!1,r.smOnly=!1,r.smAndDown=!1,r.smAndUp=!1,r.mdOnly=!1,r.mdAndDown=!1,r.mdAndUp=!1,r.lgOnly=!1,r.lgAndDown=!1,r.lgAndUp=!1,r.xlOnly=!1,r.name="xs",r.height=0,r.width=0,r.mobile=!0,r.resizeTimeout=0;var o=e[n.property],s=o.mobileBreakpoint,a=o.scrollBarWidth,c=o.thresholds;return r.mobileBreakpoint=s,r.scrollBarWidth=a,r.thresholds=c,r}return s(n,[{key:"init",value:function(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,o=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),s=n<this.thresholds.lg-this.scrollBarWidth&&!(o||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=o,this.lg=s,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(o||s||a),this.smAndUp=!r&&(i||o||s||a),this.mdOnly=o,this.mdAndDown=(r||i||o)&&!(s||a),this.mdAndUp=!(r||i)&&(o||s||a),this.lgOnly=s,this.lgAndDown=(r||i||o||s)&&!a,this.lgAndUp=!(r||i||o)&&(s||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case o:this.name="md";break;case s:this.name="lg";break;default:this.name="xl";break}if("number"!==typeof this.mobileBreakpoint){var c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}else this.mobile=n<parseInt(this.mobileBreakpoint,10)}},{key:"onResize",value:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}},{key:"getClientWidth",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},{key:"getClientHeight",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}]),n}(E);T.property="breakpoint";var x=n("5530"),S=function(e){return e},P=function(e){return Math.pow(e,2)},A=function(e){return e*(2-e)},N=function(e){return e<.5?2*Math.pow(e,2):(4-2*e)*e-1},R=function(e){return Math.pow(e,3)},j=function(e){return Math.pow(--e,3)+1},L=function(e){return e<.5?4*Math.pow(e,3):(e-1)*(2*e-2)*(2*e-2)+1},M=function(e){return Math.pow(e,4)},D=function(e){return 1-Math.pow(--e,4)},F=function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},$=function(e){return Math.pow(e,5)},U=function(e){return 1+Math.pow(--e,5)},V=function(e){return e<.5?16*Math.pow(e,5):1+16*Math.pow(--e,5)};function q(e){if("number"===typeof e)return e;var t=W(e);if(!t)throw"string"===typeof e?new Error('Target element "'.concat(e,'" not found.')):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received ".concat(B(e)," instead."));var n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function H(e){var t=W(e);if(t)return t;throw"string"===typeof e?new Error('Container element "'.concat(e,'" not found.')):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received ".concat(B(e)," instead."))}function B(e){return null==e?e:e.constructor.name}function W(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(x["a"])({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},t),i=H(n.container);if(n.appOffset&&z.framework.application){var o=i.classList.contains("v-navigation-drawer"),s=i.classList.contains("v-navigation-drawer--clipped"),a=z.framework.application,c=a.bar,u=a.top;n.offset+=c,o&&!s||(n.offset+=u)}var l,h=performance.now();l="number"===typeof e?q(e)-n.offset:q(e)-q(i)-n.offset;var d=i.scrollTop;if(l===d)return Promise.resolve(l);var f="function"===typeof n.easing?n.easing:r[n.easing];if(!f)throw new TypeError('Easing function "'.concat(n.easing,'" not found.'));return new Promise((function(e){return requestAnimationFrame((function t(r){var o=r-h,s=Math.abs(n.duration?Math.min(o/n.duration,1):1);i.scrollTop=Math.floor(d+(l-d)*f(s));var a=i===document.body?document.documentElement.clientHeight:i.clientHeight,c=a+i.scrollTop>=i.scrollHeight;if(1===s||l>i.scrollTop&&c)return e(l);requestAnimationFrame(t)}))}))}z.framework={},z.init=function(){};var G=function(e){f(n,e);var t=_(n);function n(){var e;return i(this,n),e=t.call(this),y(e,z)}return s(n)}(E);G.property="goTo";n("ddb0"),n("dca8");var K={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"},Y=K,J={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},Q=J,X={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},Z=X,ee={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"},te=ee,ne={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"},re=ne;n("ac1f"),n("1276");function ie(e,t){var n={};for(var r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var oe=ie("font-awesome-icon",te),se=Object.freeze({mdiSvg:Y,md:Q,mdi:Z,fa:te,fa4:re,faSvg:oe}),ae=function(e){f(n,e);var t=_(n);function n(e){var r;i(this,n),r=t.call(this);var o=e[n.property],s=o.iconfont,a=o.values,c=o.component;return r.component=c,r.iconfont=s,r.values=Object(C["k"])(se[s],a),r}return s(n)}(E);ae.property="icons";n("e01a"),n("5319"),n("2ca0"),n("99af");var ce="$vuetify.",ue=Symbol("Lang fallback");function le(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i=t.replace(ce,""),o=Object(C["g"])(e,i,ue);return o===ue&&(n?(Object(c["b"])('Translation key "'.concat(i,'" not found in fallback')),o=t):(Object(c["c"])('Translation key "'.concat(i,'" not found, falling back to default')),o=le(r,t,!0,r))),o}var he=function(e){f(n,e);var t=_(n);function n(e){var r;i(this,n),r=t.call(this),r.defaultLocale="en";var o=e[n.property],s=o.current,a=o.locales,c=o.t;return r.current=s,r.locales=a,r.translator=c||r.defaultTranslator,r}return s(n,[{key:"currentLocale",value:function(e){var t=this.locales[this.current],n=this.locales[this.defaultLocale];return le(t,e,!1,n)}},{key:"t",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.startsWith(ce)?this.translator.apply(this,[e].concat(n)):this.replace(e,n)}},{key:"defaultTranslator",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.replace(this.currentLocale(e),n)}},{key:"replace",value:function(e,t){return e.replace(/\{(\d+)\}/g,(function(e,n){return String(t[+n])}))}}]),n}(E);he.property="lang";n("7db0");var de=n("3835"),fe=(n("18a5"),n("7bc6")),pe=n("8da5"),ve=(n("3ea3"),.20689655172413793),me=function(e){return e>Math.pow(ve,3)?Math.cbrt(e):e/(3*Math.pow(ve,2))+4/29},ge=function(e){return e>ve?Math.pow(e,3):3*Math.pow(ve,2)*(e-4/29)};function ye(e){var t=me,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function _e(e){var t=ge,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}var be=["anchor"],we=["anchor"];function Ce(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.anchor,i=h(e,be),o=Object.keys(i),s={},a=0;a<o.length;++a){var c=o[a],u=e[c];null!=u&&(n?t?("base"===c||c.startsWith("lighten")||c.startsWith("darken"))&&(s[c]=Object(fe["a"])(u)):"object"===Object(m["a"])(u)?s[c]=Ce(u,!0,n):s[c]=xe(c,Object(fe["b"])(u)):s[c]={base:Object(fe["c"])(Object(fe["b"])(u))})}return t||(s.anchor=r||s.base||s.primary.base),s}var Ee=function(e,t){return"\n.v-application .".concat(e," {\n  background-color: ").concat(t," !important;\n  border-color: ").concat(t," !important;\n}\n.v-application .").concat(e,"--text {\n  color: ").concat(t," !important;\n  caret-color: ").concat(t," !important;\n}")},Oe=function(e,t,n){var r=t.split(/(\d)/,2),i=Object(de["a"])(r,2),o=i[0],s=i[1];return"\n.v-application .".concat(e,".").concat(o,"-").concat(s," {\n  background-color: ").concat(n," !important;\n  border-color: ").concat(n," !important;\n}\n.v-application .").concat(e,"--text.text--").concat(o,"-").concat(s," {\n  color: ").concat(n," !important;\n  caret-color: ").concat(n," !important;\n}")},ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"--v-".concat(e,"-").concat(t)},Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"var(".concat(ke(e,t),")")};function Te(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.anchor,r=h(e,we),i=Object.keys(r);if(!i.length)return"";var o="",s="",a=t?Ie("anchor"):n;s+=".v-application a { color: ".concat(a,"; }"),t&&(o+="  ".concat(ke("anchor"),": ").concat(n,";\n"));for(var c=0;c<i.length;++c){var u=i[c],l=e[u];s+=Ee(u,t?Ie(u):l.base),t&&(o+="  ".concat(ke(u),": ").concat(l.base,";\n"));for(var d=Object(C["j"])(l),f=0;f<d.length;++f){var p=d[f],v=l[p];"base"!==p&&(s+=Oe(u,p,t?Ie(u,p):v),t&&(o+="  ".concat(ke(u,p),": ").concat(v,";\n")))}}return t&&(o=":root {\n".concat(o,"}\n\n")),o+s}function xe(e,t){for(var n={base:Object(fe["c"])(t)},r=5;r>0;--r)n["lighten".concat(r)]=Object(fe["c"])(Se(t,r));for(var i=1;i<=4;++i)n["darken".concat(i)]=Object(fe["c"])(Pe(t,i));return n}function Se(e,t){var n=ye(pe["b"](e));return n[0]=n[0]+10*t,pe["a"](_e(n))}function Pe(e,t){var n=ye(pe["b"](e));return n[0]=n[0]-10*t,pe["a"](_e(n))}var Ae=function(e){f(n,e);var t=_(n);function n(e){var r;i(this,n),r=t.call(this),r.disabled=!1,r.isDark=null,r.unwatch=null,r.vueMeta=null;var o=e[n.property],s=o.dark,a=o.disable,c=o.options,u=o.themes;return r.dark=Boolean(s),r.defaults=r.themes=u,r.options=c,a?(r.disabled=!0,y(r)):(r.themes={dark:r.fillVariant(u.dark,!0),light:r.fillVariant(u.light,!1)},r)}return s(n,[{key:"css",set:function(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}},{key:"dark",get:function(){return Boolean(this.isDark)},set:function(e){var t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}},{key:"applyTheme",value:function(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}},{key:"clearCss",value:function(){this.css=""}},{key:"init",value:function(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}},{key:"setTheme",value:function(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}},{key:"resetThemes",value:function(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}},{key:"checkOrCreateStyleElement",value:function(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}},{key:"fillVariant",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}},{key:"genStyleElement",value:function(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}},{key:"initVueMeta",value:function(e){var t=this;if(this.vueMeta=e.$meta(),this.isVueMeta23)e.$nextTick((function(){t.applyVueMeta23()}));else{var n="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",r=e.$options[n]||{};e.$options[n]=function(){r.style=r.style||[];var e=r.style.find((function(e){return"vuetify-theme-stylesheet"===e.id}));return e?e.cssText=t.generatedStyles:r.style.push({cssText:t.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(t.options||{}).cspNonce}),r}}}},{key:"applyVueMeta23",value:function(){var e=this.vueMeta.addApp("vuetify"),t=e.set;t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}},{key:"initSSR",value:function(e){var t=this.options.cspNonce?' nonce="'.concat(this.options.cspNonce,'"'):"";e.head=e.head||"",e.head+='<style type="text/css" id="vuetify-theme-stylesheet"'.concat(t,">").concat(this.generatedStyles,"</style>")}},{key:"initTheme",value:function(e){var t=this;"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(function(){var n=a["a"].observable({themes:t.themes});t.unwatch=e.$watch((function(){return n.themes}),(function(){return t.applyTheme()}),{deep:!0})})),this.applyTheme())}},{key:"currentTheme",get:function(){var e=this.dark?"dark":"light";return this.themes[e]}},{key:"generatedStyles",get:function(){var e,t=this.parsedTheme,n=this.options||{};return null!=n.themeCache&&(e=n.themeCache.get(t),null!=e)||(e=Te(t,n.customProperties),null!=n.minifyTheme&&(e=n.minifyTheme(e)),null!=n.themeCache&&n.themeCache.set(t,e)),e}},{key:"parsedTheme",get:function(){return Ce(this.currentTheme||{},void 0,Object(C["f"])(this.options,["variations"],!0))}},{key:"isVueMeta23",get:function(){return"function"===typeof this.vueMeta.addApp}}]),n}(E);Ae.property="theme";var Ne=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(k),this.use(I),this.use(T),this.use(G),this.use(ae),this.use(he),this.use(Ae)}return s(e,[{key:"init",value:function(e,t){var n=this;this.installed.forEach((function(r){var i=n.framework[r];i.framework=n.framework,i.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}},{key:"use",value:function(e){var t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}]),e}();Ne.install=u,Ne.installed=!1,Ne.version="2.6.4",Ne.config={silent:!1}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f6b4:function(e,t,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},f748:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},f8c9:function(e,t,n){var r=n("23e7"),i=n("da84"),o=n("d44e");r({global:!0},{Reflect:{}}),o(i.Reflect,"Reflect",!0)},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e8b5"),s=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),d=n("b622"),f=n("1dde"),p=n("f36a"),v=f("slice"),m=d("species"),g=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var n,r,i,d=l(this),f=u(d),v=c(e,f),_=c(void 0===t?f:t,f);if(o(d)&&(n=d.constructor,s(n)&&(n===g||o(n.prototype))?n=void 0:a(n)&&(n=n[m],null===n&&(n=void 0)),n===g||void 0===n))return p(d,v,_);for(r=new(void 0===n?g:n)(y(_-v,0)),i=0;v<_;v++,i++)v in d&&h(r,i,d[v]);return r.length=i,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.925f4657.js.map