!function(){var e={115:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.default=e.exports,e.exports.__esModule=!0},941:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},222:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},558:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},398:function(e,t,n){var a=n(910),r=n(299);function c(t,n,o){return r()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},764:function(e,t,n){var a=n(53),r=n(299),c=n(598);e.exports=function(e){var t=r();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}},e.exports.default=e.exports,e.exports.__esModule=!0},679:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},53:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},264:function(e,t,n){var a=n(910);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},555:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.default=e.exports,e.exports.__esModule=!0},299:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},564:function(e){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,c=[],_n=!0,o=!1;try{for(n=n.call(e);!(_n=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);_n=!0);}catch(s){o=!0,r=s}finally{try{_n||null==n.return||n.return()}finally{if(o)throw r}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},255:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},410:function(e,t,n){var a=n(679);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},598:function(e,t,n){var a=n(370).default,r=n(222);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},910:function(e){function t(n,a){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(n,a)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},406:function(e,t,n){var a=n(941),r=n(564),c=n(927),o=n(255);e.exports=function(e,t){return a(e)||r(e,t)||c(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},370:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},927:function(e,t,n){var a=n(115);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},234:function(e,t,n){var a=n(53),r=n(910),c=n(555),o=n(398);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!c(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return o(e,arguments,a(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r(t,e)},e.exports.default=e.exports,e.exports.__esModule=!0,s(t)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},277:function(e,t,n){e.exports=n.p+"images/backup-animation-1-ab43384429a0b398cbe05e0b721d63e4.svg"},535:function(e,t,n){e.exports=n.p+"images/backup-animation-2-e5dec19df8558bb366006daa96ad7700.svg"},882:function(e,t,n){e.exports=n.p+"images/backup-animation-3-958e90e76e0e64b2cfb00a74d905cdaa.svg"},776:function(e,t,n){e.exports=n.p+"images/cloud-3eee13d37d27c9bc66ff5b185368a1ca.svg"},714:function(e,t,n){e.exports=n.p+"images/plugins-236da18a25f40f967474a12c5ebe70c1.svg"},47:function(e,t,n){e.exports=n.p+"images/posts-e758c10ed42cc9b2120e71ade20c404b.svg"},411:function(e,t,n){e.exports=n.p+"images/themes-9e5f7fba8459b0c2b74dca79a3dca790.svg"},562:function(e,t,n){e.exports=n.p+"images/uploads-785565834cf6a3fc5fa3cc4a11b64bce.svg"},587:function(e,t,n){"use strict";var a=n(843);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,c,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return n.PropTypes=n,n}},268:function(e,t,n){e.exports=n(587)()},843:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}();var a={};!function(){"use strict";n.r(a);var e=window.React,t=n.n(e),r=window.ReactDOM,c=n.n(r),o=window.wp.data,s=n(406),l=n.n(s),i=window.wp.element,u=window.wp.i18n,p=window.wp.apiFetch,f=n.n(p),d=window.wp.date,m="SET_CONNECTION_STATUS",b={setConnectionStatus:function(e){return{type:m,connectionStatus:e}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.connectionStatus}return e},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},y=(0,o.combineReducers)({connectionStatus:g,API:h,connectionData:v,jetpackStatus:k}),_=n(410),x=n.n(_),E=x()({},b),R={getConnectionStatus:function(e){return e.connectionStatus||{}}},w={getAPIRoot:function(e){return e.API.WP_API_root||null},getAPINonce:function(e){return e.API.WP_API_nonce||null},getRegistrationNonce:function(e){return e.API.registrationNonce||null}},j={getDoNotUseConnectionIframe:function(e){return e.connectionData.doNotUseConnectionIframe||null}},S={getCalypsoSlug:function(e){return e.jetpackStatus.calypsoSlug||{}}},N=x()(x()(x()(x()({},R),w),j),S),P="jetpack-backup-plugin",O={reducer:y,actions:E,selectors:N,initialState:window.JPBACKUP_INITIAL_STATE||{}},C=function(e){return React.createElement("div",{className:"backup__card"},React.createElement("img",{src:e.icon,alt:""}),React.createElement("div",{className:"backup__card-details"},React.createElement("div",{className:"backup__card-details-items"},e.label),React.createElement("div",{className:"backup__card-details-amount"},e.value)))},M=n(47),A=n.n(M),I=n(776),T=n.n(I),U=n(562),D=n.n(U),F=n(714),B=n.n(F),J=n(411),W=n.n(J),z=n(277),L=n.n(z),Y=n(535),q=n.n(Y),$=n(882),H=n.n($),__=u.__,X=function(){var e=(0,i.useState)(null),t=l()(e,2),n=t[0],a=t[1],r=(0,i.useState)(0),c=l()(r,2),s=c[0],u=c[1],p=(0,i.useState)(""),m=l()(p,2),b=m[0],g=m[1],h=(0,i.useState)({posts:0,uploads:0,plugins:0,themes:0}),v=l()(h,2),k=v[0],y=v[1],_=(0,o.useSelect)((function(e){return e(P).getCalypsoSlug()}),[]),x=0,E=1,R=2,w=3,j=(0,i.useState)(x),S=l()(j,2),N=S[0],O=S[1];(0,i.useEffect)((function(){f()({path:"/jetpack/v4/backups"}).then((function(e){if(0!==e.length){var t=null;if(e.forEach((function(e){null===t&&"finished"===e.status&&e.stats&&(t=e,O(w))})),null===t&&"started"===e[0].status&&(t=e[0],O(E)),t){if("finished"===t.status){var n=t.stats.prefix+"posts";y({plugins:t.stats.plugins.count,themes:t.stats.themes.count,uploads:t.stats.uploads.count,posts:t.stats.tables[n].post_published}),g((0,d.date)("c",t.last_updated+"+00:00"))}"started"===t.status&&(a(t.percent),setTimeout((function(){u(s+1)}),1e3))}else O(R)}}),(function(){O(R)}))}),[s]);var M,I,U,F;return React.createElement("div",{className:"jp-wrap"},x===N&&React.createElement("div",{class:"jp-row"}),E===N&&React.createElement("div",{class:"jp-row"},React.createElement("div",{class:"lg-col-span-5 md-col-span-4 sm-col-span-4"},React.createElement("div",{class:"backup__progress"},React.createElement("div",{class:"backup__progress-info"},React.createElement("p",null,__("Backing up Your Groovy Site…","jetpack-backup")),React.createElement("p",{class:"backup__progress-info-percentage"},n,"%")),React.createElement("div",{class:"backup__progress-bar"},React.createElement("div",{class:"backup__progress-bar-actual",style:{width:n+"%"}}))),React.createElement("h1",null,__("Your first cloud backup will be ready soon","jetpack-backup")),React.createElement("p",null,__("The first backup usually takes a few minutes, so it will become available soon.","jetpack-backup")),React.createElement("p",null,(0,i.createInterpolateElement)(__("In the meanwhile, you can start getting familiar with your <a>backup management on Jetpack.com</a>.","jetpack-backup"),{a:React.createElement("a",{href:"https://cloud.jetpack.com/backup/".concat(_),target:"_blank",rel:"noreferrer"})}))),React.createElement("div",{class:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{class:"backup__animation lg-col-span-6 md-col-span-2 sm-col-span-2"},React.createElement("img",{className:"backup__animation-el-1",src:L(),alt:""}),React.createElement("img",{className:"backup__animation-el-2",src:q(),alt:""}),React.createElement("img",{className:"backup__animation-el-3",src:H(),alt:""}))),w===N&&React.createElement("div",{className:"jp-row"},React.createElement("div",{className:"lg-col-span-3 md-col-span-4 sm-col-span-4"},React.createElement("div",{className:"backup__latest"},React.createElement("img",{src:T(),alt:""}),React.createElement("h2",null,__("Latest Backup","jetpack-backup"))),React.createElement("h1",null,(M=b,I=__("Today","jetpack-backup"),U=(0,d.getDate)(),F=I,(0,d.dateI18n)("zY",U)!==(0,d.dateI18n)("zY",M)&&(F=(0,d.dateI18n)("M j",M)),F+", "+(0,d.dateI18n)("g:i A",M))),React.createElement("a",{class:"button is-full-width",href:"https://cloud.jetpack.com/backup/".concat(_),target:"_blank",rel:"noreferrer"},__("See all your backups","jetpack-backup"))),React.createElement("div",{className:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(C,{icon:A(),label:__("Posts","jetpack-backup"),value:k.posts})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(C,{icon:D(),label:__("Uploads","jetpack-backup"),value:k.uploads})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(C,{icon:B(),label:__("Plugins","jetpack-backup"),value:k.plugins})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(C,{icon:W(),label:__("Themes","jetpack-backup"),value:k.themes}))),R===N&&React.createElement("div",{class:"jp-row"},React.createElement("div",{class:"lg-col-span-5 md-col-span-4 sm-col-span-4"},React.createElement("h1",null,__("We're having trouble backing up your site","jetpack-backup")),React.createElement("p",null,(0,i.createInterpolateElement)(__("Check that your Jetpack Connection is healthy with the <a>Jetpack Debugger</a>.","jetpack-backup"),{a:React.createElement("a",{href:"https://tools.jetpack.com/debug/?url=".concat(_),target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,(0,i.createInterpolateElement)(__("You can also find more information in your <a>backup management on Jetpack.com</a>.","jetpack-backup"),{a:React.createElement("a",{href:"https://cloud.jetpack.com/backup/".concat(_),target:"_blank",rel:"noreferrer"})}))),React.createElement("div",{class:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-6 md-col-span-2 sm-col-span-2"})))},G=window.wp.components,K=n(268),V=n.n(K),Q=n(558),Z=n.n(Q),ee=n(264),te=n.n(ee),ne=n(764),ae=n.n(ne),re=n(234),ce=n.n(re),oe=window.lodash;function se(e){return function(t){te()(a,t);var n=ae()(a);function a(){var t;Z()(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).name=e,t}return a}(ce()(Error))}var le=se("JsonParseError"),ie=se("JsonParseAfterRedirectError"),ue=se("Api404Error"),pe=se("Api404AfterRedirectError"),fe=se("FetchNetworkError");function de(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((function(){throw e.redirected?new pe(e.redirected):new ue})):e.json().catch((function(e){return be(e)})).then((function(t){var n=new Error("".concat(t.message," (Status ").concat(e.status,")"));throw n.response=t,n.name="ApiError",n}))}function me(e){return e.json().catch((function(t){return be(t,e.redirected,e.url)}))}function be(e,t,n){throw t?new ie(n):new le}function ge(){throw new fe}var he=new function(e,t){var n=e,a={"X-WP-Nonce":t},r={credentials:"same-origin",headers:a},c={method:"post",credentials:"same-origin",headers:(0,oe.assign)({},a,{"Content-type":"application/json"})},o={setApiRoot:function(e){n=e},setApiNonce:function(e){r={credentials:"same-origin",headers:a={"X-WP-Nonce":e}},c={method:"post",credentials:"same-origin",headers:(0,oe.assign)({},a,{"Content-type":"application/json"})}},registerSite:function(e,t){return(a="".concat(n,"jetpack/v4/connection/register"),r=c,o={body:JSON.stringify({registration_nonce:e,no_iframe:!0,redirect_uri:t})},fetch(a,(0,oe.assign)({},r,o)).catch(ge)).then(de).then(me);var a,r,o},fetchAuthorizationUrl:function(e){return s("".concat(n,"jetpack/v4/connection/authorize_url?no_iframe=1&redirect_uri=").concat(encodeURIComponent(e)),r).then(de).then(me)},fetchSiteConnectionStatus:function(){return s("".concat(n,"jetpack/v4/connection"),r).then(me)}};function s(e,t){return fetch(function(e){var t=e.split("?"),n=t.length>1?t[1]:"",a=n.length?n.split("&"):[];return a.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+a.join("&")}(e),t)}(0,oe.assign)(this,o)},ve=function(t){var n=t.redirectFunc,a=t.connectUrl,r=t.redirectUri,c=t.from,o=(0,e.useState)(null),s=l()(o,2),i=s[0],u=s[1];return a&&a!==i&&u(a),(0,e.useEffect)((function(){i||he.fetchAuthorizationUrl(r).then((function(e){return u(e.authorizeUrl)})).catch((function(e){throw e}))}),[]),i?(n(i+(c?(i.includes("?")?"&":"?")+"from="+encodeURIComponent(c):"")),null):null};ve.propTypes={connectUrl:V().string,redirectUri:V().string.isRequired,from:V().string,redirectFunc:V().func},ve.defaultProps={redirectFunc:function(e){return window.location.assign(e)}};var ke=ve,ye=u.__,_e=function(n){var a=(0,e.useState)(!1),r=l()(a,2),c=r[0],o=r[1],s=(0,e.useState)(!1),i=l()(s,2),u=i[0],p=i[1],f=(0,e.useState)(null),d=l()(f,2),m=d[0],b=d[1],g=(0,e.useState)(!1),h=l()(g,2),v=h[0],k=h[1],y=(0,e.useState)({}),_=l()(y,2),E=_[0],R=_[1],w=n.apiRoot,j=n.apiNonce,S=n.connectLabel,N=n.onRegistered,P=n.registrationNonce,O=n.redirectUri,C=n.from,M=n.statusCallback;(0,e.useEffect)((function(){he.setApiRoot(w),he.setApiNonce(j)}),[w,j]),(0,e.useEffect)((function(){k(!0),he.fetchSiteConnectionStatus().then((function(e){k(!1),R(e)})).catch((function(e){throw k(!1),e}))}),[]);var A=(0,e.useCallback)((function(e){e&&e.preventDefault(),E.isRegistered?p(!0):(o(!0),he.registerSite(P,O).then((function(e){o(!1),N&&N(e),b(e.authorizeUrl),p(!0),R((function(e){return x()(x()({},e),{},{isRegistered:!0})}))})).catch((function(e){throw o(!1),e})))}),[o,b,E,R,N,P,O]),I=(0,e.useCallback)((function(){if(M&&"[object Function]"==={}.toString.call(M))return M(E)}),[E,M]);return t().createElement("div",{className:"jp-connect-button"},I(),v&&"Loading...",(!E.isRegistered||!E.isUserConnected)&&!v&&t().createElement(G.Button,{className:"jp-connect-button--button",label:S,onClick:A,isPrimary:!0,disabled:c||u},S),u&&t().createElement(ke,{connectUrl:m,redirectUri:O,from:C}))};_e.propTypes={connectLabel:V().string,apiRoot:V().string.isRequired,apiNonce:V().string.isRequired,onRegistered:V().func,from:V().string,redirectUri:V().string.isRequired,registrationNonce:V().string.isRequired},_e.defaultProps={connectLabel:ye("Connect","jetpack")};var xe=_e;var Ee,Re=u.__,we=function(){var n=function(){var n=(0,o.useSelect)((function(e){return e(P).getAPINonce()}),[]),a=(0,o.useSelect)((function(e){return e(P).getAPIRoot()}),[]),r=(0,o.useSelect)((function(e){return e(P).getDoNotUseConnectionIframe()}),[]),c=(0,o.useSelect)((function(e){return e(P).getRegistrationNonce()}),[]),s=(0,o.useSelect)((function(e){return e(P).getConnectionStatus()}),[]),l=(0,o.useDispatch)(P).setConnectionStatus,i=(0,e.useCallback)((function(e){l(e)}),[l]);return[s,function(){return t().createElement(xe,{apiRoot:a,apiNonce:n,forceCalypsoFlow:r,registrationNonce:c,from:"jetpack-backup",redirectUri:"admin.php?page=jetpack-backup",statusCallback:i})}]}(),a=l()(n,2),r=a[0],c=a[1],s=(0,i.useState)(null),u=l()(s,2),p=u[0],d=u[1],m=(0,i.useState)(null),b=l()(m,2),g=b[0],h=b[1],v=(0,i.useState)(!1),k=l()(v,2),y=k[0],_=k[1],x=(0,i.useState)(!1),E=l()(x,2),R=E[0],w=E[1],j=(0,o.useSelect)((function(e){return e(P).getCalypsoSlug()}),[]);(0,i.useEffect)((function(){0<Object.keys(r).length&&_(!0)}),[r]),(0,i.useEffect)((function(){f()({path:"jetpack/v4/backup-capabilities"}).then((function(e){d(e.capabilities),w(!0)}),(function(){w(!0),h("Failed to fetch site capabilities")}))}),[]);var S=function(){return y?R?r.isUserConnected&&r.isRegistered?null!==p&&p.includes("backup")?React.createElement(X,null):g?React.createElement("div",null,g):React.createElement("div",null,Re("No Backup Capabilities","jetpack-backup")):React.createElement(i.Fragment,null,React.createElement("p",{className:"notice notice-error"},Re("Jetpack Backup requires a user connection to WordPress.com to be able to backup your website.","jetpack-backup")),c()):React.createElement("div",null):c()};return React.createElement("div",{id:"jetpack-backup-admin-container",className:"jp-content"},React.createElement("div",{className:"jp-header"},React.createElement("h1",null,"Jetpack Backup Plugin - Placeholder Header")),React.createElement("div",{className:"content"},React.createElement("div",null,React.createElement("div",{className:"jp-hero"},S()),React.createElement("div",{className:"jp-section"},React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-6 md-col-span-4 sm-col-span-4"},React.createElement("h2",null,Re("Where are my backups stored?","jetpack-backup")),React.createElement("p",null,Re("All the backups are safely stored in the cloud and available for you at any time on Jetpack.com, with full details about status and content.","jetpack-backup")),null!==p&&!p.includes("backup-realtime")&&React.createElement("a",{class:"jp-cut",href:"https://wordpress.com/checkout/"+j+"/jetpack_backup_realtime"},React.createElement("span",null,Re("Your site is updated with new content several times a day","jetpack-backup")),React.createElement("span",null,Re("Consider upgrading to real-time protection","jetpack-backup")))),React.createElement("div",{class:"lg-col-span-1 md-col-span-1 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-5 md-col-span-3 sm-col-span-4"},React.createElement("h2",null,Re("Your site's heartbeat","jetpack-backup")),React.createElement("p",null,Re("The activity log lets you see everything that’s going on with your site outlined in an organized, readable way.","jetpack-backup")),React.createElement("p",null,React.createElement("a",{href:"https://cloud.jetpack.com/activity-log/"+j,target:"_blank",rel:"noreferrer"},Re("See your site's activity","jetpack-backup"))))),y&&r.isUserConnected&&r.isRegistered&&React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-6 md-col-span-4 sm-col-span-4"}),React.createElement("div",{class:"lg-col-span-1 md-col-span-1 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-5 md-col-span-3 sm-col-span-4"},React.createElement(i.Fragment,null,React.createElement("h2",null,Re("Manage your connection","jetpack-backup")),React.createElement("p",{className:"notice notice-success"},Re("Site and User Connected.","jetpack-backup"))))))))),React.createElement("div",{className:"jp-footer"},"Jetpack Backup 1.0 - Placeholder Footer"))};(0,o.registerStore)(P,O),null!==(Ee=document.getElementById("jetpack-backup-root"))&&c().render(t().createElement(we,null),Ee)}();var r=window;for(var c in a)r[c]=a[c];a.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();