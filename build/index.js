!function(){var e={679:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},698:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},105:function(e,t){var a;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var c={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var o in a)c.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},277:function(e,t,a){e.exports=a.p+"images/backup-animation-1-ab43384429a0b398cbe05e0b721d63e4.svg"},535:function(e,t,a){e.exports=a.p+"images/backup-animation-2-e5dec19df8558bb366006daa96ad7700.svg"},882:function(e,t,a){e.exports=a.p+"images/backup-animation-3-958e90e76e0e64b2cfb00a74d905cdaa.svg"},776:function(e,t,a){e.exports=a.p+"images/cloud-3eee13d37d27c9bc66ff5b185368a1ca.svg"},714:function(e,t,a){e.exports=a.p+"images/plugins-236da18a25f40f967474a12c5ebe70c1.svg"},47:function(e,t,a){e.exports=a.p+"images/posts-e758c10ed42cc9b2120e71ade20c404b.svg"},411:function(e,t,a){e.exports=a.p+"images/themes-9e5f7fba8459b0c2b74dca79a3dca790.svg"},562:function(e,t,a){e.exports=a.p+"images/uploads-785565834cf6a3fc5fa3cc4a11b64bce.svg"},132:function(e,t,a){e.exports=a.p+"images/connect-right-d53058f843bf7071f1859f89639782c1.png"},587:function(e,t,a){"use strict";var c=a(843);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,r){if(r!==c){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},268:function(e,t,a){e.exports=a(587)()},843:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function a(c){var n=t[c];if(void 0!==n)return n.exports;var s=t[c]={exports:{}};return e[c](s,s.exports,a),s.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var c in t)a.o(t,c)&&!a.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}();var c={};!function(){"use strict";a.r(c);var e=window.React,t=a.n(e),n=window.ReactDOM,s=a.n(n),r=window.wp.data,o=window.wp.element,l=window.wp.i18n,i=window.wp.apiFetch,p=a.n(i);function u(e,t={}){const a={};let c;var n;"undefined"!=typeof window&&(c=null===(n=window.Initial_State)||void 0===n?void 0:n.calypsoEnv);if(0===e.search("https://")){const t=new URL(e);e=`https://${t.host}${t.pathname}`,a.url=encodeURIComponent(e)}else a.source=encodeURIComponent(e);Object.keys(t).map((e=>{a[e]=encodeURIComponent(t[e])})),!Object.keys(a).includes("site")&&"undefined"!=typeof jetpack_redirects&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(a.site=jetpack_redirects.currentSiteRawUrl),c&&(a.calypso_env=c);return"https://jetpack.com/redirect/?"+Object.keys(a).map((e=>e+"="+a[e])).join("&")}var m=a(698),d=a.n(m),g=a(679),h=a.n(g),f=a(268),k=a.n(f),b=a(105),v=a.n(b);class E extends t().Component{render(){const{logoColor:a,showText:c,className:n,...s}=this.props,r=c?"0 0 118 32":"0 0 32 32";return t().createElement("svg",d()({xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:r,className:v()("jetpack-logo",n)},s),t().createElement("path",{fill:a,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),c&&t().createElement(e.Fragment,null,t().createElement("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),t().createElement("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),t().createElement("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),t().createElement("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),t().createElement("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),t().createElement("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),t().createElement("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})))}}h()(E,"propTypes",{className:k().string,width:k().number,height:k().number,showText:k().bool,logoColor:k().string}),h()(E,"defaultProps",{className:"",height:32,showText:!0,logoColor:"#00BE28"});var j=E;const __=l.__;function R({title:e=__("An Automattic Airline","jetpack"),height:a=7,className:c="",...n}){return t().createElement("svg",d()({role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:a,className:v()("jp-automattic-byline-logo",c)},n),t().createElement("title",{id:"jp-automattic-byline-logo-title"},e),t().createElement("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),t().createElement("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),t().createElement("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"}))}const _=l.__;function w({a8cLogoHref:e,moduleName:a=_("Jetpack","jetpack"),className:c="",...n}){return t().createElement("div",d()({className:v()("jp-dashboard-footer",c)},n),t().createElement("div",{className:"jp-dashboard-footer__footer-left"},t().createElement(j,{logoColor:"#000",showText:!1,height:"16",className:"jp-dashboard-footer__jetpack-symbol"}),t().createElement("span",{className:"jp-dashboard-footer__module-name"},a)),t().createElement("div",{className:"jp-dashboard-footer__footer-right"},t().createElement("a",{href:e},t().createElement(R,null))))}var y=window.wp.date;const N="SET_CONNECTION_STATUS",S={setConnectionStatus:e=>({type:N,connectionStatus:e})};var C=(e={},t)=>{switch(t.type){case N:return t.connectionStatus}return e};var P=(e={})=>e;var M=(e={})=>e;const U=(0,r.combineReducers)({connectionStatus:C,API:P,jetpackStatus:M});const x={...S};const z={...{getConnectionStatus:e=>e.connectionStatus||{}},...{getAPIRoot:e=>e.API.WP_API_root||null,getAPINonce:e=>e.API.WP_API_nonce||null,getRegistrationNonce:e=>e.API.registrationNonce||null},...{getCalypsoSlug:e=>e.jetpackStatus.calypsoSlug||{}}};const I="jetpack-backup-plugin",T={reducer:U,actions:x,selectors:z,initialState:window.JPBACKUP_INITIAL_STATE||{}};var L=e=>React.createElement("div",{className:"backup__card"},React.createElement("img",{src:e.icon,alt:""}),React.createElement("div",{className:"backup__card-details"},React.createElement("div",{className:"backup__card-details-items"},e.label),React.createElement("div",{className:"backup__card-details-amount"},e.value))),A=a(47),V=a.n(A),O=a(776),H=a.n(O),B=a(562),D=a.n(B),q=a(714),J=a.n(q),W=a(411),F=a.n(W),$=a(277),Y=a.n($),G=a(535),X=a.n(G),K=a(882),Q=a.n(K);const Z=l.__;var ee=()=>{const[e,t]=(0,o.useState)(null),[a,c]=(0,o.useState)(0),[n,s]=(0,o.useState)(""),[l,i]=(0,o.useState)({posts:0,uploads:0,plugins:0,themes:0}),m=(0,r.useSelect)((e=>e(I).getCalypsoSlug()),[]),d=0,g=1,h=2,f=3,[k,b]=(0,o.useState)(d);(0,o.useEffect)((()=>{p()({path:"/jetpack/v4/backups"}).then((e=>{if(0===e.length)return;let n=null;if(e.forEach((e=>{null===n&&"finished"===e.status&&e.stats&&(n=e,b(f))})),null===n&&"started"===e[0].status&&(n=e[0],b(g)),n){if("finished"===n.status){const e=n.stats.prefix+"posts";i({plugins:n.stats.plugins.count,themes:n.stats.themes.count,uploads:n.stats.uploads.count,posts:n.stats.tables[e].post_published}),s((0,y.date)("c",n.last_updated+"+00:00"))}"started"===n.status&&(t(n.percent),setTimeout((()=>{c(a+1)}),1e3))}else b(h)}),(()=>{b(h)}))}),[a]);return React.createElement("div",{className:"jp-wrap"},d===k&&React.createElement("div",{class:"jp-row"}),g===k&&React.createElement("div",{class:"jp-row"},React.createElement("div",{class:"lg-col-span-5 md-col-span-4 sm-col-span-4"},React.createElement("div",{class:"backup__progress"},React.createElement("div",{class:"backup__progress-info"},React.createElement("p",null,Z("Backing up Your Groovy Site…","jetpack-backup")),React.createElement("p",{class:"backup__progress-info-percentage"},e,"%")),React.createElement("div",{class:"backup__progress-bar"},React.createElement("div",{class:"backup__progress-bar-actual",style:{width:e+"%"}}))),React.createElement("h1",null,Z("Your first cloud backup will be ready soon","jetpack-backup")),React.createElement("p",null,Z("The first backup usually takes a few minutes, so it will become available soon.","jetpack-backup")),React.createElement("p",null,(0,o.createInterpolateElement)(Z("In the meanwhile, you can start getting familiar with your <a>backup management on Jetpack.com</a>.","jetpack-backup"),{a:React.createElement("a",{href:u("jetpack-backup",{site:m}),target:"_blank",rel:"noreferrer"})}))),React.createElement("div",{class:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{class:"backup__animation lg-col-span-6 md-col-span-2 sm-col-span-2"},React.createElement("img",{className:"backup__animation-el-1",src:Y(),alt:""}),React.createElement("img",{className:"backup__animation-el-2",src:X(),alt:""}),React.createElement("img",{className:"backup__animation-el-3",src:Q(),alt:""}))),f===k&&React.createElement("div",{className:"jp-row"},React.createElement("div",{className:"lg-col-span-3 md-col-span-4 sm-col-span-4"},React.createElement("div",{className:"backup__latest"},React.createElement("img",{src:H(),alt:""}),React.createElement("h2",null,Z("Latest Backup","jetpack-backup"))),React.createElement("h1",null,(e=>{const t=Z("Today","jetpack-backup"),a=(0,y.getDate)();let c=t;return(0,y.dateI18n)("zY",a)!==(0,y.dateI18n)("zY",e)&&(c=(0,y.dateI18n)("M j",e)),c+", "+(0,y.dateI18n)("g:i A",e)})(n)),React.createElement("a",{class:"button is-full-width",href:u("jetpack-backup",{site:m}),target:"_blank",rel:"noreferrer"},Z("See all your backups","jetpack-backup"))),React.createElement("div",{className:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(L,{icon:V(),label:Z("Posts","jetpack-backup"),value:l.posts})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(L,{icon:D(),label:Z("Uploads","jetpack-backup"),value:l.uploads})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(L,{icon:J(),label:Z("Plugins","jetpack-backup"),value:l.plugins})),React.createElement("div",{className:"lg-col-span-2 md-col-span-2 sm-col-span-2"},React.createElement(L,{icon:F(),label:Z("Themes","jetpack-backup"),value:l.themes}))),h===k&&React.createElement("div",{class:"jp-row"},React.createElement("div",{class:"lg-col-span-5 md-col-span-4 sm-col-span-4"},React.createElement("h1",null,Z("We're having trouble backing up your site","jetpack-backup")),React.createElement("p",null,(0,o.createInterpolateElement)(Z("Check that your Jetpack Connection is healthy with the <a>Jetpack Debugger</a>.","jetpack-backup"),{a:React.createElement("a",{href:u("backup-plugin-debug",{site:m}),target:"_blank",rel:"noreferrer"})})),React.createElement("p",null,(0,o.createInterpolateElement)(Z("You can also find more information in your <a>backup management on Jetpack.com</a>.","jetpack-backup"),{a:React.createElement("a",{href:u("jetpack-backup",{site:m}),target:"_blank",rel:"noreferrer"})}))),React.createElement("div",{class:"lg-col-span-1 md-col-span-4 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-6 md-col-span-2 sm-col-span-2"})))},te=window.wp.components,ae=window.lodash;function ce(e){class t extends Error{constructor(...t){super(...t),this.name=e}}return t}const ne=ce("JsonParseError"),se=ce("JsonParseAfterRedirectError"),re=ce("Api404Error"),oe=ce("Api404AfterRedirectError"),le=ce("FetchNetworkError");function ie(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((()=>{throw e.redirected?new oe(e.redirected):new re})):e.json().catch((e=>ue(e))).then((t=>{const a=new Error(`${t.message} (Status ${e.status})`);throw a.response=t,a.name="ApiError",a}))}function pe(e){return e.json().catch((t=>ue(t,e.redirected,e.url)))}function ue(e,t,a){throw t?new se(a):new ne}function me(){throw new le}var de=new function(e,t){let a=e,c={"X-WP-Nonce":t},n={credentials:"same-origin",headers:c},s={method:"post",credentials:"same-origin",headers:(0,ae.assign)({},c,{"Content-type":"application/json"})};const r={setApiRoot(e){a=e},setApiNonce(e){c={"X-WP-Nonce":e},n={credentials:"same-origin",headers:c},s={method:"post",credentials:"same-origin",headers:(0,ae.assign)({},c,{"Content-type":"application/json"})}},registerSite:(e,t)=>l(`${a}jetpack/v4/connection/register`,s,{body:JSON.stringify({registration_nonce:e,no_iframe:!0,redirect_uri:t})}).then(ie).then(pe),fetchAuthorizationUrl:e=>o(`${a}jetpack/v4/connection/authorize_url?no_iframe=1&redirect_uri=${encodeURIComponent(e)}`,n).then(ie).then(pe),fetchSiteConnectionStatus:()=>o(`${a}jetpack/v4/connection`,n).then(pe),fetchSiteConnectionData:()=>o(`${a}jetpack/v4/connection/data`,n).then(pe),disconnectSite:()=>l(`${a}jetpack/v4/connection`,s,{body:JSON.stringify({isActive:!1})}).then(ie).then(pe)};function o(e,t){return fetch(function(e){const t=e.split("?"),a=t.length>1?t[1]:"",c=a.length?a.split("&"):[];return c.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+c.join("&")}(e),t)}function l(e,t,a){return fetch(e,(0,ae.assign)({},t,a)).catch(me)}(0,ae.assign)(this,r)};const ge=t=>{const{redirectFunc:a,connectUrl:c,redirectUri:n,from:s}=t,[r,o]=(0,e.useState)(null);return c&&c!==r&&o(c),(0,e.useEffect)((()=>{r||de.fetchAuthorizationUrl(n).then((e=>o(e.authorizeUrl))).catch((e=>{throw e}))}),[]),r?(a(r+(s?(r.includes("?")?"&":"?")+"from="+encodeURIComponent(s):"")),null):null};ge.propTypes={connectUrl:k().string,redirectUri:k().string.isRequired,from:k().string,redirectFunc:k().func},ge.defaultProps={redirectFunc:e=>window.location.assign(e)};var he=ge;const fe=l.__,ke=a=>{const[c,n]=(0,e.useState)(!1),[s,r]=(0,e.useState)(!1),[o,l]=(0,e.useState)(null),[i,p]=(0,e.useState)(!1),[u,m]=(0,e.useState)({}),{apiRoot:d,apiNonce:g,connectLabel:h,onRegistered:f,registrationNonce:k,redirectUri:b,from:v,statusCallback:E}=a;(0,e.useEffect)((()=>{de.setApiRoot(d),de.setApiNonce(g)}),[d,g]),(0,e.useEffect)((()=>{p(!0),de.fetchSiteConnectionStatus().then((e=>{p(!1),m(e)})).catch((e=>{throw p(!1),e}))}),[]);const j=(0,e.useCallback)((e=>{e&&e.preventDefault(),u.isRegistered?r(!0):(n(!0),de.registerSite(k,b).then((e=>{n(!1),f&&f(e),l(e.authorizeUrl),r(!0)})).catch((e=>{throw n(!1),e})))}),[n,l,u,f,k,b]),R=(0,e.useCallback)((()=>{if(E&&"[object Function]"==={}.toString.call(E))return E(u)}),[u,E]);return t().createElement("div",{className:"jp-connect-button"},R(),i&&"Loading...",(!u.isRegistered||!u.isUserConnected)&&!i&&t().createElement(te.Button,{className:"jp-connect-button--button",label:h,onClick:j,isPrimary:!0,disabled:c||s},h),s&&t().createElement(he,{connectUrl:o,redirectUri:b,from:v}))};ke.propTypes={connectLabel:k().string,apiRoot:k().string.isRequired,apiNonce:k().string.isRequired,onRegistered:k().func,from:k().string,redirectUri:k().string.isRequired,registrationNonce:k().string.isRequired},ke.defaultProps={connectLabel:fe("Connect","jetpack")};var be=ke;const ve=e=>{const{images:a,assetBaseUrl:c}=e;if(!a.length)return null;const n=[];return a.forEach((e=>n.push(t().createElement(t().Fragment,null,t().createElement("img",{src:c+e,alt:""}))))),t().createElement("div",{className:"jp-connect-screen--image-slider"},n)};ve.propTypes={images:k().arrayOf(k().string).isRequired,assetBaseUrl:k().string},ve.defaultProps={assetBaseUrl:""};var Ee=ve;const je=l.__,Re=a=>{const{title:c,apiRoot:n,apiNonce:s,registrationNonce:r,from:l,redirectUri:i,statusCallback:p,images:m,children:d,assetBaseUrl:g}=a,h=m.length,[f,k]=(0,e.useState)({}),b=(0,e.useCallback)((e=>{if(k(e),p&&"[object Function]"==={}.toString.call(p))return p(e)}),[p,k]);return t().createElement("div",{className:"jp-connect-screen"+(h?" jp-connect-screen--two-columns":"")+(f.hasOwnProperty("isRegistered")?"":" jp-connect-screen--loading")},t().createElement("div",{className:"jp-connect-screen--left"},t().createElement(j,null),t().createElement("h2",null,c),d,t().createElement(be,{apiRoot:n,apiNonce:s,registrationNonce:r,from:l,redirectUri:i,statusCallback:b,connectLabel:je("Set up Jetpack","jetpack")}),t().createElement("div",{className:"jp-connnect-screen--tos"},(0,o.createInterpolateElement)(je("By clicking the button above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:t().createElement("a",{href:u("wpcom-tos"),rel:"noopener noreferrer",target:"_blank"}),shareDetailsLink:t().createElement("a",{href:u("jetpack-support-what-data-does-jetpack-sync"),rel:"noopener noreferrer",target:"_blank"})}))),h&&t().createElement("div",{className:"jp-connect-screen--right"},t().createElement(Ee,{images:m,assetBaseUrl:g})),t().createElement("div",{className:"jp-connect-screen--clearfix"}))};Re.propTypes={title:k().string,body:k().string,apiRoot:k().string.isRequired,apiNonce:k().string.isRequired,from:k().string,redirectUri:k().string.isRequired,registrationNonce:k().string.isRequired,statusCallback:k().func,images:k().arrayOf(k().string),assetBaseUrl:k().string},Re.defaultProps={title:je("Over 5 million WordPress sites are faster and more secure","jetpack"),images:[]};var _e=Re;const we=l.__,ye=a=>{const[c,n]=(0,e.useState)(!1),[s,r]=(0,e.useState)(!1),[l,i]=(0,e.useState)(!1),[p,m]=(0,e.useState)(!1),{apiRoot:d,apiNonce:g,title:h,onDisconnected:f,onError:k,errorMessage:b,children:v}=a;(0,e.useEffect)((()=>{de.setApiRoot(d),de.setApiNonce(g)}),[d,g]);const E=(0,e.useCallback)((e=>{e&&e.preventDefault(),n(!0)}),[n]),R=(0,e.useCallback)((e=>{e&&e.preventDefault(),n(!1)}),[n]),_=(0,e.useCallback)((e=>{e&&e.preventDefault(),m(!1),r(!0),de.disconnectSite().then((()=>{r(!1),i(!0)})).catch((e=>{r(!1),m(e),k&&k(e)}))}),[r,i,m,k]),w=(0,e.useCallback)((e=>{e&&e.preventDefault(),f&&f(),R()}),[f,R]);return t().createElement(t().Fragment,null,t().createElement(te.Button,{variant:"link",onClick:E,className:"jp-disconnect-dialog__link"},we("Disconnect","jetpack")),c&&t().createElement(te.Modal,{title:"",contentLabel:h,aria:{labelledby:"jp-disconnect-dialog__heading"},onRequestClose:R,shouldCloseOnClickOutside:!1,shouldCloseOnEsc:!1,isDismissible:!1,className:"jp-disconnect-dialog"+(l?" jp-disconnect-dialog__success":"")},!l&&t().createElement("div",null,t().createElement("div",{className:"jp-disconnect-dialog__content"},t().createElement("h1",{id:"jp-disconnect-dialog__heading"},h),v),t().createElement("div",{className:"jp-disconnect-dialog__actions"},t().createElement("div",{className:"jp-row"},t().createElement("div",{className:"lg-col-span-8 md-col-span-8 sm-col-span-4"},t().createElement("p",null,(0,o.createInterpolateElement)(we("<strong>Need help?</strong> Learn more about the <jpConnectionInfoLink>Jetpack connection</jpConnectionInfoLink> or <jpSupportLink>contact Jetpack support</jpSupportLink>","jetpack"),{strong:t().createElement("strong",null),jpConnectionInfoLink:t().createElement("a",{href:u("why-the-wordpress-com-connection-is-important-for-jetpack"),rel:"noopener noreferrer",target:"_blank",className:"jp-disconnect-dialog__link"}),jpSupportLink:t().createElement("a",{href:u("jetpack-support"),rel:"noopener noreferrer",target:"_blank",className:"jp-disconnect-dialog__link"})}))),t().createElement("div",{className:"jp-disconnect-dialog__button-wrap lg-col-span-4 md-col-span-8 sm-col-span-4"},t().createElement(te.Button,{isPrimary:!0,disabled:s,onClick:R,className:"jp-disconnect-dialog__btn-dismiss"},we("Stay connected","jetpack")),t().createElement(te.Button,{isPrimary:!0,disabled:s,onClick:_,className:"jp-disconnect-dialog__btn-disconnect"},we("Disconnect","jetpack")))),p&&t().createElement("p",{className:"jp-disconnect-dialog__error"},b))),l&&t().createElement("div",null,t().createElement(j,null),t().createElement("h1",null,(0,o.createInterpolateElement)(we("Jetpack has been <br/>successfully disconnected.","jetpack"),{br:t().createElement("br",null)})),t().createElement(te.Button,{isPrimary:!0,onClick:w,className:"jp-disconnect-dialog__btn-back-to-wp"},we("Back to WordPress","jetpack")))))};ye.propTypes={apiRoot:k().string.isRequired,apiNonce:k().string.isRequired,title:k().string,onDisconnected:k().func,onError:k().func,errorMessage:k().string},ye.defaultProps={title:we("Are you sure you want to disconnect?","jetpack"),errorMessage:we("Failed to disconnect. Please try again.","jetpack")};var Ne=ye;const Se=l.__,Ce=a=>{const{apiRoot:c,apiNonce:n,isRegistered:s,isUserConnected:r,redirectUri:o,title:l,connectionInfoText:i,onDisconnected:p}=a,[u,m]=(0,e.useState)(!1),[d,g]=(0,e.useState)({}),[h,f]=(0,e.useState)(!1),k=(0,e.useRef)();(0,e.useEffect)((()=>{de.setApiRoot(c),de.setApiNonce(n)}),[c,n]),(0,e.useEffect)((()=>{m(!0),de.fetchSiteConnectionData().then((e=>{var t,a,c;m(!1),g(null===(t=e.currentUser)||void 0===t?void 0:t.wpcomUser);const n=null===(a=e.currentUser)||void 0===a||null===(c=a.wpcomUser)||void 0===c?void 0:c.avatar;n&&(k.current.style.backgroundImage=`url('${n}')`)})).catch((e=>{throw m(!1),e}))}),[m,g]);const b=(0,e.useCallback)((e=>{e&&e.preventDefault(),p&&p()}),[p]);return s?t().createElement("div",{className:"jp-connection-status-card"},t().createElement("h3",null,l),t().createElement("p",null,i),t().createElement("div",{className:"jp-connection-status-card--status"},t().createElement("div",{className:"jp-connection-status-card--cloud"}),t().createElement("div",{className:"jp-connection-status-card--line"+(r?"":" jp-connection-status-card--site-only")}),t().createElement("div",{className:"jp-connection-status-card--jetpack-logo"}),t().createElement("div",{className:"jp-connection-status-card--avatar",ref:k})),t().createElement("ul",{className:"jp-connection-status-card--list"},t().createElement("li",{className:"jp-connection-status-card--list-item-success"},Se("Site connected.","jetpack")," ",t().createElement(Ne,{apiRoot:c,apiNonce:n,onDisconnected:b},t().createElement("h2",null,Se("Jetpack is currently powering multiple products on your site.","jetpack"),t().createElement("br",null),Se("Once you disconnect Jetpack, these will no longer work.","jetpack")))),r&&!u&&t().createElement("li",{className:"jp-connection-status-card--list-item-success"},Se("Logged in as","jetpack")," ",null==d?void 0:d.display_name),!r&&!u&&t().createElement("li",{className:"jp-connection-status-card--list-item-error"},Se("Your WordPress.com account is not connected.","jetpack"))),!r&&!u&&t().createElement(te.Button,{isPrimary:!0,disabled:h,onClick:f,className:"jp-connection-status-card--btn-connect-user"},Se("Connect your WordPress.com account","jetpack")),h&&t().createElement(he,{redirectUri:o})):null};Ce.propTypes={apiRoot:k().string.isRequired,apiNonce:k().string.isRequired,isRegistered:k().bool.isRequired,isUserConnected:k().bool.isRequired,redirectUri:k().string.isRequired,title:k().string,connectionInfoText:k().string,onDisconnected:k().func},Ce.defaultProps={title:Se("Connection","jetpack"),connectionInfoText:Se("Leverages the Jetpack Cloud for more features on your side.","jetpack")};var Pe=Ce,Me=a(132),Ue=a.n(Me);const xe=l.__;const ze=l.__;var Ie=()=>{const[a,c,n]=function(){const a=(0,r.useSelect)((e=>e(I).getAPINonce()),[]),c=(0,r.useSelect)((e=>e(I).getAPIRoot()),[]),n=(0,r.useSelect)((e=>e(I).getRegistrationNonce()),[]),s=(0,r.useSelect)((e=>e(I).getConnectionStatus()),[]),{setConnectionStatus:o}=(0,r.useDispatch)(I),l=(0,e.useCallback)((e=>{o(e)}),[o]),i=(0,e.useCallback)((()=>{o({isActive:!1,isRegistered:!1,isUserConnected:!1})}),[o]);return[s,()=>t().createElement(_e,{apiRoot:c,apiNonce:a,registrationNonce:n,from:"jetpack-backup",redirectUri:"admin.php?page=jetpack-backup",statusCallback:l,images:[Ue()]},t().createElement("p",null,xe("Jetpack Backup requires a user connection to WordPress.com to be able to backup your website.","jetpack-backup"))),()=>t().createElement(Pe,{isRegistered:s.isRegistered,isUserConnected:s.isUserConnected,apiRoot:c,apiNonce:a,onDisconnected:i,redirectUri:"admin.php?page=jetpack-backup"})]}(),[s,l]=(0,o.useState)(null),[i,m]=(0,o.useState)(null),[d,g]=(0,o.useState)(!1),[h,f]=(0,o.useState)(!1),[k,b]=(0,o.useState)(!0),v=(0,r.useSelect)((e=>e(I).getCalypsoSlug()),[]);(0,o.useEffect)((()=>{0<Object.keys(a).length&&g(!0)}),[a]),(0,o.useEffect)((()=>{p()({path:"jetpack/v4/backup-capabilities"}).then((e=>{l(e.capabilities),f(!0)}),(()=>{f(!0),m("Failed to fetch site capabilities")}))}),[]);const E=()=>null!==s&&s.includes("backup"),R=()=>d&&a.isUserConnected&&a.isRegistered?(k||b(!0),h?E()?React.createElement(ee,null):i?React.createElement("div",null,i):React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-8 md-col-span-8 sm-col-span-4"},React.createElement("h1",null,ze("Your site does not have backups","jetpack-backup")),React.createElement("p",null,ze("Get peace of mind knowing your work will be saved, add backups today.","jetpack-backup"),React.createElement("br",null),ze("Choose from real time or daily backups.","jetpack-backup")),React.createElement("a",{class:"button",href:u("backup-plugin-upgrade"),target:"_blank",rel:"noreferrer"},ze("Upgrade now","jetpack-backup"))),React.createElement("div",{class:"lg-col-span-4 md-col-span-0 sm-col-span-0"}))):React.createElement("div",null)):(k&&b(!1),React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-12 md-col-span-8 sm-col-span-4"},c()))));return React.createElement("div",{id:"jetpack-backup-admin-container",className:"jp-content"},(()=>{if(k)return React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-12 md-col-span-8 sm-col-span-4"},React.createElement("div",{className:"jp-masthead"},React.createElement("div",{className:"jp-masthead__inside-container"},React.createElement("div",{className:"jp-masthead__logo-container"},React.createElement(j,{className:"jetpack-logo__masthead"})))))))})(),React.createElement("div",{className:"content"},React.createElement("div",{className:"jp-hero"},R()),React.createElement("div",{className:"jp-section"},React.createElement("div",{className:"jp-wrap"},E()&&React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-6 md-col-span-4 sm-col-span-4"},React.createElement("h2",null,ze("Where are my backups stored?","jetpack-backup")),React.createElement("p",null,ze("All the backups are safely stored in the cloud and available for you at any time on Jetpack.com, with full details about status and content.","jetpack-backup")),!s.includes("backup-realtime")&&React.createElement("a",{class:"jp-cut",href:u("backup-plugin-realtime-upgrade",{site:v})},React.createElement("span",null,ze("Your site is updated with new content several times a day","jetpack-backup")),React.createElement("span",null,ze("Consider upgrading to real-time protection","jetpack-backup")))),React.createElement("div",{class:"lg-col-span-1 md-col-span-1 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-5 md-col-span-3 sm-col-span-4"},React.createElement("h2",null,ze("Your site's heartbeat","jetpack-backup")),React.createElement("p",null,ze("The activity log lets you see everything that’s going on with your site outlined in an organized, readable way.","jetpack-backup")),React.createElement("p",null,React.createElement("a",{href:u("backup-plugin-activity-log",{site:v}),target:"_blank",rel:"noreferrer"},ze("See your site's activity","jetpack-backup"))))),d&&a.isUserConnected&&a.isRegistered&&React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-6 md-col-span-4 sm-col-span-4"}),React.createElement("div",{class:"lg-col-span-1 md-col-span-1 sm-col-span-0"}),React.createElement("div",{class:"lg-col-span-5 md-col-span-3 sm-col-span-4"},n()))))),(()=>{if(k)return React.createElement("div",{className:"jp-wrap"},React.createElement("div",{className:"jp-row"},React.createElement("div",{class:"lg-col-span-12 md-col-span-8 sm-col-span-4"},React.createElement(w,{moduleName:ze("Jetpack Backup","jetpack-backup"),a8cLogoHref:"https://www.jetpack.com"}))))})())};(0,r.registerStore)(I,T),function(){const e=document.getElementById("jetpack-backup-root");null!==e&&s().render(t().createElement(Ie,null),e)}()}();var n=window;for(var s in c)n[s]=c[s];c.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})}();