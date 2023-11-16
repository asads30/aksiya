(function(){"use strict";var e={8062:function(e,t,n){n.d(t,{Z:function(){return c}});n(560);var r=n(4870);const a=(0,r.iH)([]),o=(0,r.iH)({value:"Gift",variant:1,visible:!0,position:10,matched:!1,opened:!1},{value:"Present",variant:2,visible:!0,position:11,matched:!1,opened:!1}),i=e=>{e?.forEach((e=>{a.value.push({value:e,variant:1,visible:!0,position:null,matched:!1,opened:!1}),a.value.push({value:e,variant:2,visible:!0,position:null,matched:!1,opened:!1})}))},u=()=>{a.value.push(o.value),a.value=a.value.map(((e,t)=>({...e,position:t})))};function c(e=null){i(e),u();const t=()=>{a.value=a.value.map((e=>({...e,visible:!0})));const e=JSON.stringify(a.value);a.value=JSON.parse(e)};return{visibleAllCard:t,cardList:a}}},4897:function(e,t,n){var r=n(9242),a=n(3396);function o(e,t){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var i=n(89);const u={},c=(0,i.Z)(u,[["render",o],["__scopeId","data-v-df202088"]]);var s=c,l=n(1020),f=n(1120);const d=e=>{e.directive("tooltip",{mounted(e,t){v(e,t)},updated(e,t){v(e,t)}})};function v(e,t){let n=t.arg||"top",r=t.value||"";e.setAttribute("position",n),e.setAttribute("tooltip",r)}var p=d;const m=e=>{p(e)};var h=m,b=n(68);const g=(0,l.WB)(),y=(0,r.ri)(s);y.directive("ripple",b.Z),h(y),y.use(f.Z).use(g).mount("#app")},1120:function(e,t,n){var r=n(2483),a=n(9036),o=n(1020);const i=[{path:"/",name:"home",component:()=>n.e(761).then(n.bind(n,2221))},{path:"/game",name:"game",component:()=>n.e(450).then(n.bind(n,5465)),beforeEnter:(e,t)=>{if("game"===e.name&&"prize"===t.name)return!1}},{path:"/prize",name:"prize",component:()=>n.e(248).then(n.bind(n,2558))},{path:"/referral",name:"referral",component:()=>n.e(217).then(n.bind(n,8413))},{path:"/guest",name:"guest",component:()=>n.e(205).then(n.bind(n,5745))},{path:"/start",name:"start",component:()=>n.e(598).then(n.bind(n,3754))}],u=(0,r.p7)({history:(0,r.PO)("/"),routes:i});u.beforeEach((async(e,t)=>{const n=(0,a.g)(),{startedGame:r}=(0,o.Jk)(n);if(r.value&&"game"===t.name&&"home"===e.name)return!1})),t.Z=u},9036:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(1020),a=n(8062),o=n(4870),i=n(3396);function u(e){const t=(0,o.iH)(!0),n=s(),r=()=>{e.value=e.value.map(((e,t)=>({...e,matched:!1,position:t,visible:!1})))},a=(0,i.Fl)((()=>1===u.value&&2===n.countVisibleCard?(n.startedGame=!1,!0):(u.value||2!==n.countVisibleCard||(n.startedGame=!1,navigator in window&&navigator.vibrate(300)),!1))),u=(0,i.Fl)((()=>{const t=e.value.filter((e=>!0===e.matched)).length;return t/2}));return{matchesFound:u,newPlayer:t,matchCardGame:r,status:a}}var c=JSON.parse('["+1","+5","+10","+100","Again"]');const s=(0,r.Q_)("GameStore",{state:()=>{const{cardList:e}=(0,a.Z)(c),{newPlayer:t,matchCardGame:n,matchesFound:r,status:i}=u(e),s=(0,o.iH)(!1),l=(0,o.iH)(!1),f=(0,o.iH)(!1),d=(0,o.iH)(0),v=(0,o.iH)(4),p=()=>{d.value=0,l.value=!0},m=()=>{t.value=!1,f.value=!0,n();let e=setInterval((()=>{v.value-=1,v.value<0&&clearInterval(e)}),1e3)};return{userCanFlipCard:l,startedGame:f,countDown:v,startCountDown:m,cardList:e,newPlayer:t,startGame:p,matchCardGame:n,matchesFound:r,status:i,countVisibleCard:d,customAnimationEnded:s}}})}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{205:"ba0675ab",217:"ccc2b435",248:"8466755d",450:"91b158e9",598:"190bee81",761:"bf707370"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{205:"ac727133",217:"e0d1cee7",248:"b3e10349",450:"5adcc989",598:"4a8892d1",761:"1285e6a5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="aksiya-2.0:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(v);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode&&o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,null,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={205:1,217:1,248:1,450:1,598:1,761:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)var l=c(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkaksiya_2_0"]=self["webpackChunkaksiya_2_0"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4897)}));r=n.O(r)})();
//# sourceMappingURL=app.4606f52b.js.map