!function(){var e={115:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.default=e.exports,e.exports.__esModule=!0},941:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},222:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},558:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},398:function(e,t,n){var a=n(910),r=n(299);function c(t,n,o){return r()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},190:function(e){function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e},e.exports.default=e.exports,e.exports.__esModule=!0},764:function(e,t,n){var a=n(53),r=n(299),c=n(598);e.exports=function(e){var t=r();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}},e.exports.default=e.exports,e.exports.__esModule=!0},679:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},698:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},53:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},264:function(e,t,n){var a=n(910);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},555:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.default=e.exports,e.exports.__esModule=!0},299:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},564:function(e){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,c=[],_n=!0,o=!1;try{for(n=n.call(e);!(_n=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);_n=!0);}catch(s){o=!0,r=s}finally{try{_n||null==n.return||n.return()}finally{if(o)throw r}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},255:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},410:function(e,t,n){var a=n(679);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},86:function(e,t,n){var a=n(231);e.exports=function(e,t){if(null==e)return{};var n,r,c=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c},e.exports.default=e.exports,e.exports.__esModule=!0},231:function(e){e.exports=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},598:function(e,t,n){var a=n(370).default,r=n(222);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},910:function(e){function t(n,a){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(n,a)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},406:function(e,t,n){var a=n(941),r=n(564),c=n(927),o=n(255);e.exports=function(e,t){return a(e)||r(e,t)||c(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},370:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},927:function(e,t,n){var a=n(115);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},234:function(e,t,n){var a=n(53),r=n(910),c=n(555),o=n(398);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!c(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return o(e,arguments,a(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r(t,e)},e.exports.default=e.exports,e.exports.__esModule=!0,s(t)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},105:function(e,t){var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},277:function(e,t,n){e.exports=n.p+"images/backup-animation-1-ab43384429a0b398cbe05e0b721d63e4.svg"},535:function(e,t,n){e.exports=n.p+"images/backup-animation-2-e5dec19df8558bb366006daa96ad7700.svg"},882:function(e,t,n){e.exports=n.p+"images/backup-animation-3-958e90e76e0e64b2cfb00a74d905cdaa.svg"},776:function(e,t,n){e.exports=n.p+"images/cloud-3eee13d37d27c9bc66ff5b185368a1ca.svg"},714:function(e,t,n){e.exports=n.p+"images/plugins-236da18a25f40f967474a12c5ebe70c1.svg"},47:function(e,t,n){e.exports=n.p+"images/posts-e758c10ed42cc9b2120e71ade20c404b.svg"},411:function(e,t,n){e.exports=n.p+"images/themes-9e5f7fba8459b0c2b74dca79a3dca790.svg"},562:function(e,t,n){e.exports=n.p+"images/uploads-785565834cf6a3fc5fa3cc4a11b64bce.svg"},132:function(e,t,n){e.exports=n.p+"images/connect-right-d53058f843bf7071f1859f89639782c1.png"},587:function(e,t,n){"use strict";var a=n(843);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,c,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return n.PropTypes=n,n}},268:function(e,t,n){e.exports=n(587)()},843:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}();var a={};!function(){"use strict";n.r(a);var e=window.React,t=n.n(e),r=window.ReactDOM,c=n.n(r),o=window.wp.data,s=n(406),l=n.n(s),i=window.wp.element,u=window.wp.i18n,p=window.wp.apiFetch,f=n.n(p),d=n(698),m=n.n(d),h=n(86),g=n.n(h),v=n(558),b=n.n(v),k=n(190),y=n.n(k),E=n(264),_=n.n(E),x=n(764),j=n.n(x),R=n(679),w=n.n(R),S=n(268),N=n.n(S),M=n(105),O=n.n(M),P=function(n){_()(r,n);var a=j()(r);function r(){return b()(this,r),a.apply(this,arguments)}return y()(r,[{key:"render",value:function(){var n=this.props,a=n.logoColor,r=n.showText,c=n.className,o=g()(n,["logoColor","showText","className"]),s=r?"0 0 118 32":"0 0 32 32";return t().createElement("svg",m()({xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:s,className:O()("jetpack-logo",c)},o),t().createElement("path",{fill:a,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),r&&t().createElement(e.Fragment,null,t().createElement("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),t().createElement("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),t().createElement("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),t().createElement("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),t().createElement("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),t().createElement("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),t().createElement("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})))}}]),r}(t().Component);w()(P,"propTypes",{className:N().string,width:N().number,height:N().number,showText:N().bool,logoColor:N().string}),w()(P,"defaultProps",{className:"",height:32,showText:!0,logoColor:"#00BE28"});var C=P,__=u.__;function z(e){var n=e.title,a=void 0===n?__("An Automattic Airline","jetpack"):n,r=e.height,c=void 0===r?7:r,o=e.className,s=void 0===o?"":o,l=g()(e,["title","height","className"]);return t().createElement("svg",m()({role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:c,className:O()("jp-automattic-byline-logo",s)},l),t().createElement("title",{id:"jp-automattic-byline-logo-title"},a),t().createElement("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),t().createElement("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),t().createElement("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"}))}var T=u.__;function A(e){var n=e.a8cLogoHref,a=e.moduleName,r=void 0===a?T("Jetpack","jetpack"):a,c=e.className,o=void 0===c?"":c,s=g()(e,["a8cLogoHref","moduleName","className"]);return t().createElement("div",m()({className:O()("jp-dashboard-footer",o)},s),t().createElement("div",{className:"jp-dashboard-footer__footer-left"},t().createElement(C,{logoColor:"#000",showText:!1,height:"16",className:"jp-dashboard-footer__jetpack-symbol"}),t().createElement("span",{className:"jp-dashboard-footer__module-name"},r)),t().createElement("div",{className:"jp-dashboard-footer__footer-right"},t().createElement("a",{href:n},t().createElement(z,null))))}var U=window.wp.date,V="SET_CONNECTION_STATUS",I={setConnectionStatus:function(e){return{type:V,connectionStatus:e}}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return t.connectionStatus}return e},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},D=(0,o.combineReducers)({connectionStatus:L,API:H,jetpackStatus:B}),F=n(410),J=n.n(F),q=J()({},I),W={getConnectionStatus:function(e){return e.connectionStatus||{}}},Y={getAPIRoot:function(e){return e.API.WP_API_root||null},getAPINonce:function(e){return e.API.WP_API_nonce||null},getRegistrationNonce:function(e){return e.API.registrationNonce||null}},$={getCalypsoSlug:function(e){return e.jetpackStatus.calypsoSlug||{}}},G=J()(J()(J()({},W),Y),$),X="jetpack-backup-plugin",K={reducer:D,actions:q,selectors:G,initialState:window.JPBACKUP_INITIAL_STATE||{}},Q=function(e){return React.createElement("div",{className:"backup__card"},React.createElement("img",{src:e.icon,alt:""}),React.createElement("div",{className:"backup__card-details"},React.createElement("div",{className:"backup__card-details-items"},e.label),React.createElement("div",{className:"backup__card-details-amount"},e.value)))},Z=n(47),ee=n.n(Z),te=n(776),ne=n.n(te),ae=n(562),re=n.n(ae),ce=n(714),oe=n.n(ce),se=n(411),le=n.n(se),ie=n(277),ue=n.n(ie),pe=n(535),fe=n.n(pe),de=n(882),me=n.n(de),he=u.__,ge=function(){var e=(0,i.useState)(null),t=l()(e,2),n=t[0],a=t[1],r=(0,i.useState)(0),c=l()(r,2),s=c[0],u=c[1],p=(0,i.useState)(""),d=l()(p,2),m=d[0],h=d[1],g=(0,i.useState)({posts:0,uploads:0,plugins:0,themes:0}),v=l()(g,2),b=v[0],k=v[1],y=(0,o.useSelect)((function(e){return e(X).getCalypsoSlug()}),[]),E=0,_=1,x=2,j=3,R=(0,i.useState)(E),w=l()(R,2),S=w[0],N=w[1];(0,i.useEffect)((function(){f()({path:"/jetpack/v4/backups"}).then((function(e){if(0!==e.length){var t=null;if(e.forEach((function(e){null===t&&"finished"===e.status&&e.stats&&(t=e,N(j))})),null===t&&"started"===e[0].status&&(t=e[0],N(_)),t){if("finished"===t.status){var n=t.stats.prefix+"posts";k({plugins:t.stats.plugins.count,themes:t.stats.themes.count,uploads:t.stats.uploads.count,posts:t.stats.tables[n].post_published}),h((0,U.date)("c",t.last_updated+"+00:00"))}"started"===t.status&&(a(t.percent),setTimeout((function(){u(s+1)}),1e3))}else N(x)}}),(function(){N(x)}))}),[s]);var M,O,P,C;return React.createElement("div",{className:"jp-wrap"},E===S&&React.createElement("div",{class:"jp-row"}),_===S&&React.createElement("div",{class:"jp-row"},React.createElement("div",{class:"lg-col-span-5 md-col-span-4 sm-col-span-4"},React.createElement("div",{class:"backup__progress"},React.createElement("div",{class:"backup__progress-info"},React.createElement("p",null,he("Backing up Your Groovy Site…","jetpack-backup")),React.createElement("p",{class:"backup__progress-info-percentage"},n,"%")),React.createElement("div",{class:"backup__progress-bar"},React.createElement("div",{class:"backup__progress-bar-actual",style:{width:n+"%"}}))),React.createElement("h1",null,he("Your first cloud backup will be ready soon","jetpack-backup")),React.createElement("p",null,he("The first backup usually takes a few minutes, so it will become available soon.","jetpack-backup")),React.createElement("p",null,(0,i.createInterpolateElement)(he("In the meanwhile, you can start getting familiar with your <a>backup management on Jetpack.com</a>.","jetpack-backup"),{a:React.createElement("a",{href:"https://cloud.jetpack.com/backup/".concat(y),target:"_blank",rel:"noreferrer"})}))),React.createElement("div",{class:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{class:"backup__animation lg-col-span-6 md-col-span-2 sm-col-span-2"},React.createElement("img",{className:"backup__animation-el-1",src:ue(),alt:""}),React.createElement("img",{className:"backup__animation-el-2",src:fe(),alt:""}),React.createElement("img",{className:"backup__animation-el-3",src:me(),alt:""}))),j===S&&React.createElement("div",{className:"jp-row"},React.createElement("div",{className:"lg-col-span-3 md-col-span-4 sm-col-span-4"},React.createElement("div",{className:"backup__latest"},React.createElement("img",{src:ne(),alt:""}),React.createElement("h2",null,he("Latest Backup","jetpack-backup"))),React.createElement("h1",null,(M=m,O=he("Today","jetpack-backup"),P=(0,U.getDate)(),C=O,(0,U.dateI18n)("zY",P)!==(0,U.dateI18n)("zY",M)&&(C=(0,U.dateI18n)("M j",M)),C+", "+(0,U.dateI18n)("g:i A",M))),React.createElement("a",{class:"button is-full-width",href:"https://cloud.jetpack.com/backup/".concat(y),target:"_blank",rel:"noreferrer"},he("See all your backups","jetpack-backup"))),React.createElement("div",{className:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(Q,{icon:ee(),label:he("Posts","jetpack-backup"),value:b.posts})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(Q,{icon:re(),label:he("Uploads","jetpack-backup"),value:b.uploads})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(Q,{icon:oe(),label:he("Plugins","jetpack-backup"),value:b.plugins})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(Q,{icon:le(),label:he("Themes","jetpack-backup"),value:b.themes}))),x===S&&React.createElement("div",{class:"jp-row"},React.createElement("div",{class:"lg-col-span-5 md-col-span-4 sm-col-span-4"},React.createElement("h1",null,he("We're having trouble backing up your site","jetpack-backup")),React.createElement("p",null,(0,i.createInterpolateElement)(he("Check that your Jetpack Connection is healthy with the <a>Jetpack Debugger</a>.","jetpack-backup"),{a:React.createElement("a",{href:"https://tools.jetpack.com/debug/?url=".concat(y),target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,(0,i.createInterpolateElement)(he("You can also find more information in your <a>backup management on Jetpack.com</a>.","jetpack-backup"),{a:React.createElement("a",{href:"https://cloud.jetpack.com/backup/".concat(y),target:"_blank",rel:"noreferrer"})}))),React.createElement("div",{class:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-6 md-col-span-2 sm-col-span-2"})))};function ve(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={};"undefined"!=typeof window&&(t=null===(n=window.Initial_State)||void 0===n?void 0:n.calypsoEnv);if(0===e.search("https://")){var c=new URL(e);e="https://".concat(c.host).concat(c.pathname),r.url=encodeURIComponent(e)}else r.source=encodeURIComponent(e);Object.keys(a).map((function(e){r[e]=encodeURIComponent(a[e])})),!Object.keys(r).includes("site")&&"undefined"!=typeof jetpack_redirects&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(r.site=jetpack_redirects.currentSiteRawUrl),t&&(r.calypso_env=t);var o=Object.keys(r).map((function(e){return e+"="+r[e]})).join("&");return"https://jetpack.com/redirect/?"+o}var be=window.wp.components,ke=n(234),ye=n.n(ke),Ee=window.lodash;function _e(e){return function(t){_()(a,t);var n=j()(a);function a(){var t;b()(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).name=e,t}return a}(ye()(Error))}var xe=_e("JsonParseError"),je=_e("JsonParseAfterRedirectError"),Re=_e("Api404Error"),we=_e("Api404AfterRedirectError"),Se=_e("FetchNetworkError");function Ne(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((function(){throw e.redirected?new we(e.redirected):new Re})):e.json().catch((function(e){return Oe(e)})).then((function(t){var n=new Error("".concat(t.message," (Status ").concat(e.status,")"));throw n.response=t,n.name="ApiError",n}))}function Me(e){return e.json().catch((function(t){return Oe(t,e.redirected,e.url)}))}function Oe(e,t,n){throw t?new je(n):new xe}function Pe(){throw new Se}var Ce=new function(e,t){var n=e,a={"X-WP-Nonce":t},r={credentials:"same-origin",headers:a},c={method:"post",credentials:"same-origin",headers:(0,Ee.assign)({},a,{"Content-type":"application/json"})},o={setApiRoot:function(e){n=e},setApiNonce:function(e){r={credentials:"same-origin",headers:a={"X-WP-Nonce":e}},c={method:"post",credentials:"same-origin",headers:(0,Ee.assign)({},a,{"Content-type":"application/json"})}},registerSite:function(e,t){return l("".concat(n,"jetpack/v4/connection/register"),c,{body:JSON.stringify({registration_nonce:e,no_iframe:!0,redirect_uri:t})}).then(Ne).then(Me)},fetchAuthorizationUrl:function(e){return s("".concat(n,"jetpack/v4/connection/authorize_url?no_iframe=1&redirect_uri=").concat(encodeURIComponent(e)),r).then(Ne).then(Me)},fetchSiteConnectionStatus:function(){return s("".concat(n,"jetpack/v4/connection"),r).then(Me)},disconnectSite:function(){return l("".concat(n,"jetpack/v4/connection"),c,{body:JSON.stringify({isActive:!1})}).then(Ne).then(Me)}};function s(e,t){return fetch(function(e){var t=e.split("?"),n=t.length>1?t[1]:"",a=n.length?n.split("&"):[];return a.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+a.join("&")}(e),t)}function l(e,t,n){return fetch(e,(0,Ee.assign)({},t,n)).catch(Pe)}(0,Ee.assign)(this,o)},ze=function(t){var n=t.redirectFunc,a=t.connectUrl,r=t.redirectUri,c=t.from,o=(0,e.useState)(null),s=l()(o,2),i=s[0],u=s[1];return a&&a!==i&&u(a),(0,e.useEffect)((function(){i||Ce.fetchAuthorizationUrl(r).then((function(e){return u(e.authorizeUrl)})).catch((function(e){throw e}))}),[]),i?(n(i+(c?(i.includes("?")?"&":"?")+"from="+encodeURIComponent(c):"")),null):null};ze.propTypes={connectUrl:N().string,redirectUri:N().string.isRequired,from:N().string,redirectFunc:N().func},ze.defaultProps={redirectFunc:function(e){return window.location.assign(e)}};var Te=ze,Ae=u.__,Ue=function(n){var a=(0,e.useState)(!1),r=l()(a,2),c=r[0],o=r[1],s=(0,e.useState)(!1),i=l()(s,2),u=i[0],p=i[1],f=(0,e.useState)(null),d=l()(f,2),m=d[0],h=d[1],g=(0,e.useState)(!1),v=l()(g,2),b=v[0],k=v[1],y=(0,e.useState)({}),E=l()(y,2),_=E[0],x=E[1],j=n.apiRoot,R=n.apiNonce,w=n.connectLabel,S=n.onRegistered,N=n.registrationNonce,M=n.redirectUri,O=n.from,P=n.statusCallback;(0,e.useEffect)((function(){Ce.setApiRoot(j),Ce.setApiNonce(R)}),[j,R]),(0,e.useEffect)((function(){k(!0),Ce.fetchSiteConnectionStatus().then((function(e){k(!1),x(e)})).catch((function(e){throw k(!1),e}))}),[]);var C=(0,e.useCallback)((function(e){e&&e.preventDefault(),_.isRegistered?p(!0):(o(!0),Ce.registerSite(N,M).then((function(e){o(!1),S&&S(e),h(e.authorizeUrl),p(!0),x((function(e){return J()(J()({},e),{},{isRegistered:!0})}))})).catch((function(e){throw o(!1),e})))}),[o,h,_,x,S,N,M]),z=(0,e.useCallback)((function(){if(P&&"[object Function]"==={}.toString.call(P))return P(_)}),[_,P]);return t().createElement("div",{className:"jp-connect-button"},z(),b&&"Loading...",(!_.isRegistered||!_.isUserConnected)&&!b&&t().createElement(be.Button,{className:"jp-connect-button--button",label:w,onClick:C,isPrimary:!0,disabled:c||u},w),u&&t().createElement(Te,{connectUrl:m,redirectUri:M,from:O}))};Ue.propTypes={connectLabel:N().string,apiRoot:N().string.isRequired,apiNonce:N().string.isRequired,onRegistered:N().func,from:N().string,redirectUri:N().string.isRequired,registrationNonce:N().string.isRequired},Ue.defaultProps={connectLabel:Ae("Connect","jetpack")};var Ve=Ue,Ie=function(e){var n=e.images,a=e.assetBaseUrl;if(!n.length)return null;var r=[];return n.forEach((function(e){return r.push(t().createElement(t().Fragment,null,t().createElement("img",{src:a+e,alt:""})))})),t().createElement("div",{className:"jp-connect-screen--image-slider"},r)};Ie.propTypes={images:N().arrayOf(N().string).isRequired,assetBaseUrl:N().string},Ie.defaultProps={assetBaseUrl:""};var Le=Ie,He=u.__,Be=function(n){var a=n.title,r=n.apiRoot,c=n.apiNonce,o=n.registrationNonce,s=n.from,u=n.redirectUri,p=n.statusCallback,f=n.images,d=n.children,m=n.assetBaseUrl,h=f.length,g=(0,e.useState)({}),v=l()(g,2),b=v[0],k=v[1],y=(0,e.useCallback)((function(e){if(k(e),p&&"[object Function]"==={}.toString.call(p))return p(e)}),[p,k]);return t().createElement("div",{className:"jp-connect-screen"+(h?" jp-connect-screen--two-columns":"")+(b.hasOwnProperty("isRegistered")?"":" jp-connect-screen--loading")},t().createElement("div",{className:"jp-connect-screen--left"},t().createElement(C,null),t().createElement("h2",null,a),d,t().createElement(Ve,{apiRoot:r,apiNonce:c,registrationNonce:o,from:s,redirectUri:u,statusCallback:y,connectLabel:He("Set up Jetpack","jetpack")}),t().createElement("div",{className:"jp-connnect-screen--tos"},(0,i.createInterpolateElement)(He("By clicking the button above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:t().createElement("a",{href:ve("wpcom-tos"),rel:"noopener noreferrer",target:"_blank"}),shareDetailsLink:t().createElement("a",{href:ve("jetpack-support-what-data-does-jetpack-sync"),rel:"noopener noreferrer",target:"_blank"})}))),h&&t().createElement("div",{className:"jp-connect-screen--right"},t().createElement(Le,{images:f,assetBaseUrl:m})),t().createElement("div",{className:"jp-connect-screen--clearfix"}))};Be.propTypes={title:N().string,body:N().string,apiRoot:N().string.isRequired,apiNonce:N().string.isRequired,from:N().string,redirectUri:N().string.isRequired,registrationNonce:N().string.isRequired,statusCallback:N().func,images:N().arrayOf(N().string),assetBaseUrl:N().string},Be.defaultProps={title:He("Over 5 million WordPress sites are faster and more secure","jetpack"),images:[]};var De=Be,Fe=n(132),Je=n.n(Fe),qe=u.__;var We,Ye=u.__,$e=function(){var n=function(){var n=(0,o.useSelect)((function(e){return e(X).getAPINonce()}),[]),a=(0,o.useSelect)((function(e){return e(X).getAPIRoot()}),[]),r=(0,o.useSelect)((function(e){return e(X).getRegistrationNonce()}),[]),c=(0,o.useSelect)((function(e){return e(X).getConnectionStatus()}),[]),s=(0,o.useDispatch)(X).setConnectionStatus,l=(0,e.useCallback)((function(e){s(e)}),[s]);return[c,function(){return t().createElement(De,{apiRoot:a,apiNonce:n,registrationNonce:r,from:"jetpack-backup",redirectUri:"admin.php?page=jetpack-backup",statusCallback:l,images:[Je()]},t().createElement("p",null,qe("Jetpack Backup requires a user connection to WordPress.com to be able to backup your website.","jetpack-backup")))}]}(),a=l()(n,2),r=a[0],c=a[1],s=(0,i.useState)(null),u=l()(s,2),p=u[0],d=u[1],m=(0,i.useState)(null),h=l()(m,2),g=h[0],v=h[1],b=(0,i.useState)(!1),k=l()(b,2),y=k[0],E=k[1],_=(0,i.useState)(!1),x=l()(_,2),j=x[0],R=x[1],w=(0,i.useState)(!0),S=l()(w,2),N=S[0],M=S[1],O=(0,o.useSelect)((function(e){return e(X).getCalypsoSlug()}),[]);(0,i.useEffect)((function(){0<Object.keys(r).length&&E(!0)}),[r]),(0,i.useEffect)((function(){f()({path:"jetpack/v4/backup-capabilities"}).then((function(e){d(e.capabilities),R(!0)}),(function(){R(!0),v("Failed to fetch site capabilities")}))}),[]);var P=function(){return null!==p&&p.includes("backup")},z=function(){return y&&r.isUserConnected&&r.isRegistered?(N||M(!0),j?P()?React.createElement(ge,null):g?React.createElement("div",null,g):React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-8 md-col-span-8 sm-col-span-4"},React.createElement("h1",null,Ye("Your site does not have backups","jetpack-backup")),React.createElement("p",null,Ye("Get peace of mind knowing your work will be saved, add backups today.","jetpack-backup"),React.createElement("br",null),Ye("Choose from real time or daily backups.","jetpack-backup")),React.createElement("a",{class:"button",href:"https://wordpress.com/plans/".concat(O),target:"_blank",rel:"noreferrer"},Ye("Upgrade now","jetpack-backup"))),React.createElement("div",{class:"lg-col-span-4 md-col-span-0 sm-col-span-0"}))):React.createElement("div",null)):(N&&M(!1),React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-12 md-col-span-8 sm-col-span-4"},c()))))};return React.createElement("div",{id:"jetpack-backup-admin-container",className:"jp-content"},function(){if(N)return React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-12 md-col-span-8 sm-col-span-4"},React.createElement("div",{className:"jp-masthead"},React.createElement("div",{className:"jp-masthead__inside-container"},React.createElement("div",{className:"jp-masthead__logo-container"},React.createElement(C,{className:"jetpack-logo__masthead"})))))))}(),React.createElement("div",{className:"content"},React.createElement("div",{className:"jp-hero"},z()),React.createElement("div",{className:"jp-section"},React.createElement("div",{className:"jp-wrap"},P()&&React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-6 md-col-span-4 sm-col-span-4"},React.createElement("h2",null,Ye("Where are my backups stored?","jetpack-backup")),React.createElement("p",null,Ye("All the backups are safely stored in the cloud and available for you at any time on Jetpack.com, with full details about status and content.","jetpack-backup")),!p.includes("backup-realtime")&&React.createElement("a",{class:"jp-cut",href:"https://wordpress.com/checkout/"+O+"/jetpack_backup_realtime"},React.createElement("span",null,Ye("Your site is updated with new content several times a day","jetpack-backup")),React.createElement("span",null,Ye("Consider upgrading to real-time protection","jetpack-backup")))),React.createElement("div",{class:"lg-col-span-1 md-col-span-1 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-5 md-col-span-3 sm-col-span-4"},React.createElement("h2",null,Ye("Your site's heartbeat","jetpack-backup")),React.createElement("p",null,Ye("The activity log lets you see everything that’s going on with your site outlined in an organized, readable way.","jetpack-backup")),React.createElement("p",null,React.createElement("a",{href:"https://cloud.jetpack.com/activity-log/"+O,target:"_blank",rel:"noreferrer"},Ye("See your site's activity","jetpack-backup"))))),y&&r.isUserConnected&&r.isRegistered&&React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-6 md-col-span-4 sm-col-span-4"}),React.createElement("div",{class:"lg-col-span-1 md-col-span-1 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-5 md-col-span-3 sm-col-span-4"},React.createElement(i.Fragment,null,React.createElement("h2",null,Ye("Manage your connection","jetpack-backup")),React.createElement("p",{className:"notice notice-success"},Ye("Site and User Connected.","jetpack-backup")))))))),function(){if(N)return React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-12 md-col-span-8 sm-col-span-4"},React.createElement(A,{moduleName:Ye("Jetpack Backup","jetpack-backup"),a8cLogoHref:"https://www.jetpack.com"}))))}())};(0,o.registerStore)(X,K),null!==(We=document.getElementById("jetpack-backup-root"))&&c().render(t().createElement($e,null),We)}();var r=window;for(var c in a)r[c]=a[c];a.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();