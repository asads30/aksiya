"use strict";(self["webpackChunkaksiya_2_0"]=self["webpackChunkaksiya_2_0"]||[]).push([[450],{8678:function(e,a,s){s.d(a,{Z:function(){return b}});var t=s(3396),l=s(7139);const i=e=>((0,t.dD)("data-v-79738d5f"),e=e(),(0,t.Cn)(),e),n={class:"aheader"},r={class:"container"},o={class:"header-left"},d=i((()=>(0,t._)("svg",{width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{d:"M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335",stroke:"white","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})],-1))),c={class:"header-center"},u={class:"header-right"},v={key:0,class:"header-right-text"},p={name:"HeaderComponent",inheritAttrs:!1,customOptions:{}};var m=Object.assign(p,{props:{left:{type:Boolean},leftText:{type:String},center:{type:Boolean},centerText:{type:String,required:!0},right:{type:Boolean},rightText:{type:String},color:{type:String}},setup(e){return(a,s)=>{const i=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",r,[(0,t._)("div",o,[e.left&&!e.leftText?((0,t.wg)(),(0,t.j4)(i,{key:0,to:"/"},{default:(0,t.w5)((()=>[d])),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",c,[e.center?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"header-center-text",style:(0,l.j5)("black"===e.color?"color: #000;":"")},(0,l.zw)(e.centerText),5)):(0,t.kq)("",!0)]),(0,t._)("div",u,[e.right?((0,t.wg)(),(0,t.iD)("div",v)):(0,t.kq)("",!0)])])])}}}),g=s(89);const f=(0,g.Z)(m,[["__scopeId","data-v-79738d5f"]]);var b=f},5465:function(e,a,s){s.r(a),s.d(a,{default:function(){return Ce}});s(560);var t=s(3396),l=s(4870),i=s(7139),n=s.p+"img/end-survey.162b70f7.svg",r=s.p+"img/prize-photo.91880364.svg",o=s.p+"img/prize-photo-2.c71cc4a4.svg",d=s(1020),c=s(9036),u=s(9242),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAAAKCAYAAADCZlkBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgB7dpNSsNAGMbxZ1IRRJQiom5cCa57A+tJ7BFE3CfdS65gvUm9gR5AENxq6UIRg2F8R4gLQTtt0izK/4F88Ibkx2TxEibjVOXc99VRamc927r6J/tb0sG2ovI0lSZvqh1MTEzMmuZYXjfK3SjU3PeVS59aMYt5SCxYeunxRXr9UO1gYmJiNmaGXpe7odOFH1gLvFZE5gEfnqX3QrWDiYmJ2bhZ6jSxxnemiPBiMTExV8a0Kb41O/TVEFiU9ok5aXeQmJiYmAuYvdD8bCrw7x8ch3ZlZ1NRYOi0xadqBxMTE3PJZjex3V2L4MxgYmJiLt30ug1zfsPf9Y5rf5CYmJiYLZqjaqlLZp0wrcCjXWljffbdTQ4SExMTsxXT2wdf7jL3UwhLXqTB8Z5OeLGYmJgrZk6t6d0rUaYrNw6FLwgCoSFOwXekAAAAAElFTkSuQmCC";const p=["src","alt"],m=["src","alt"],g={key:2,draggable:"false",src:"/images/checkmark.svg",class:"icon-checkmark",alt:""},f=(0,t._)("div",{class:"card-face is-back"},null,-1);var b={__name:"CardBoard",props:{matched:{type:Boolean,default:!1},position:{type:Number,required:!0},value:{type:String,required:!0},visible:{type:Boolean,default:!1},opened:{type:Boolean,default:!1},cardSize:{type:Number}},emits:["select-card"],setup(e,{emit:a}){(0,u.sj)((e=>({"7a990e4f":_.value,dcfa48c4:y.value})));const s=(0,c.g)(),{countVisibleCard:n,startedGame:r,userCanFlipCard:o}=(0,d.Jk)(s),v=(0,l.iH)("Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum ipsum"),b=e,w=a,_=(0,t.Fl)((()=>+b.cardSize+"px")),y=(0,t.Fl)((()=>+b.cardSize+"px")),h=(0,t.Fl)((()=>!!b.visible&&"is-flipped")),k=(0,t.Fl)((()=>(b.opened&&n.value,!1))),C=()=>{!b.matched&&o.value&&(!b.visible&&r.value&&(s.countVisibleCard+=1),w("select-card",{position:b.position,faceValue:b.value}))};return(a,s)=>{const n=(0,t.Q2)("tooltip");return(0,t.wg)(),(0,t.iD)("div",{class:(0,i.C_)(["card",h.value]),style:(0,i.j5)(k.value),onClick:C},[(0,t._)("div",{class:(0,i.C_)(["card-face is-front",{"is-border":!b.opened}])},[(0,t.wy)(((0,t.wg)(),(0,t.iD)("span",null,["Gift"!==e.value&&"Present"!==e.value?((0,t.wg)(),(0,t.iD)("img",{key:0,draggable:"false",class:"card-image",src:`/images/${e.value}.svg`,alt:e.value},null,8,p)):((0,t.wg)(),(0,t.iD)("img",{key:1,draggable:"false",class:"card-image",src:`/images/${e.value}.png`,alt:e.value},null,8,m)),e.matched?((0,t.wg)(),(0,t.iD)("img",g)):(0,t.kq)("",!0)])),[[n,(0,l.SU)(r)?null:v.value,void 0,{top:!0}]])],2),f],6)}}};const w=b;var _=w;const y=()=>{const e=(0,l.iH)(0),a=(0,l.iH)(!1),s=(0,l.iH)(null),t=()=>{function t(e,a){return e.setSeconds(e.getSeconds()+1),e.setMinutes(e.getMinutes()+a),e}const l=t(new Date,2);s.value=setInterval((()=>{let t=(new Date).getTime(),i=l-t;e.value=Math.floor(i%6e4/1e3),i<0&&(a.value=!0,clearInterval(s.value))}),1e3)};return{secondsTimeLine:e,startCountDownGame:t,timeEnded:a,intervalTimeout:s}};var h=s.p+"img/Vector.311a8e9b.svg";const k={id:"modalTitle"},C={id:"modalDescription"};var A={__name:"ModalWindow",props:{btnName:{type:String,default:"Начать"},headerCloseBtn:{type:Boolean},lottieAnimation:{type:Boolean}},emits:["close","closeBtnModal"],setup(e,{emit:a}){const s=a,l=()=>s("close"),n=()=>s("close"),r=()=>s("closeBtnModal");return(a,s)=>((0,t.wg)(),(0,t.j4)(u.uT,{name:"modal-fade"},{default:(0,t.w5)((()=>[(0,t._)("div",{class:"modal-backdrop",onClick:n},[(0,t._)("div",{onClick:s[0]||(s[0]=(0,u.iM)((()=>{}),["stop"])),class:"modal",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},[(0,t._)("header",k,[(0,t.WI)(a.$slots,"header"),e.headerCloseBtn?((0,t.wg)(),(0,t.iD)("img",{key:0,draggable:"false",src:h,alt:"",class:"btn-close",onClick:r,"aria-label":"Close modal"})):(0,t.kq)("",!0)]),(0,t._)("section",C,[(0,t.WI)(a.$slots,"body")]),(0,t._)("footer",null,[(0,t.WI)(a.$slots,"footer",{},(()=>[(0,t._)("button",{type:"button",class:"btn-green",onClick:l,"aria-label":"Close modal"},(0,i.zw)(e.btnName),1)]))])])])])),_:3}))}},x=s(89);const S=(0,x.Z)(A,[["__scopeId","data-v-647b1ef7"]]);var T=S;const U=e=>((0,t.dD)("data-v-5ce47778"),e=e(),(0,t.Cn)(),e),L={class:"opened-card"},z={class:"count-opened"},B=U((()=>(0,t._)("span",{class:"line"},"/",-1))),D=U((()=>(0,t._)("span",{class:"total-chances"},"2",-1))),Y={class:"timeline"},j={class:"myProgress"},F=U((()=>(0,t._)("img",{src:n,loading:"lazy",class:"header-end-image",draggable:"false",alt:""},null,-1))),Z=U((()=>(0,t._)("p",{class:"header-text"},"Ууууупс время истекло",-1))),q=U((()=>(0,t._)("div",{class:"border-header"},null,-1))),W=U((()=>(0,t._)("p",{class:"modal-body-content"},"Вы потеряли один шанс розыгрыша в игре.",-1)));var V={__name:"GameBoard",props:{cardList:{type:Array,required:!0},status:{type:Boolean,default:!1,required:!0},screenWidth:{type:Number,required:!0}},emits:["flip-card"],setup(e,{emit:a}){(0,u.sj)((e=>({"36a6e64c":A.value,"36a6e64d":x.value,"36a6e64b":C.value})));const s=e,n=y(),r=(0,c.g)(),{newPlayer:o,startedGame:p,countVisibleCard:m,userCanFlipCard:g,countDown:f}=(0,d.Jk)(r),b=(0,l.iH)(null),w=(0,l.iH)(null),h=(0,l.iH)(!1),k=a,C=(0,t.Fl)((()=>{let e=s.screenWidth+10;return"-"+e+"px"})),A=(0,t.Fl)((()=>{let e=2*(s.screenWidth+10);return"-"+e+"px"})),x=(0,t.Fl)((()=>{let e=3*(s.screenWidth+10);return"-"+e+"px"})),S=e=>{g.value&&k("flip-card",e)};return(0,t.YP)((()=>n.timeEnded.value),(e=>{m.value<2&&e&&(h.value=!0,g.value=!1,p.value=!1)})),(0,t.YP)((()=>f.value),(()=>{f.value<1&&(w.value.$el?.classList.add("a"),setTimeout((()=>{w.value.$el?.classList.remove("a"),r.startGame()}),6e3))})),(0,t.YP)((()=>g.value),(e=>{e?(b.value.classList.add("timeline-anim"),n.startCountDownGame()):(o.value=!1,clearInterval(n.intervalTimeout.value))})),(a,s)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{style:(0,i.j5)(0!==(0,l.SU)(n).secondsTimeLine.value?"opacity: 1":"opacity: 0.3"),class:"game-status"},[(0,t._)("p",L,[(0,t.Uk)(" Открыто карт "),(0,t._)("span",z,(0,i.zw)((0,l.SU)(m)),1),B,D]),(0,t._)("p",Y,(0,i.zw)((0,l.SU)(n).secondsTimeLine.value<10&&(0,l.SU)(n).secondsTimeLine.value>0?`00:0${(0,l.SU)(n).secondsTimeLine.value}`:(0,l.SU)(n).secondsTimeLine.value>=10?`00:${(0,l.SU)(n).secondsTimeLine.value}`:0===(0,l.SU)(n).secondsTimeLine.value?"01:00":(0,l.SU)(n).secondsTimeLine.value<0?"00:00":""),1)],4),(0,t._)("div",j,[(0,t._)("div",{ref_key:"progressGame",ref:b,style:(0,i.j5)({animationPlayState:(0,l.SU)(p)?"running":"paused"})},[(0,t._)("img",{draggable:"false",style:(0,i.j5)(0!==(0,l.SU)(n).secondsTimeLine.value?"opacity: 1":"opacity: 0.3"),src:v,class:"myBar",alt:""},null,4)],4)]),(0,t._)("div",null,[(0,t.Wm)(u.W3,{tag:"section",class:"game-board",ref_key:"cardItems",ref:w,name:"shuffle-card"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cardList,(a=>((0,t.wg)(),(0,t.j4)(_,{key:`${a.value}-${a.variant}`,matched:a.matched,value:a.value,visible:a.visible,position:a.position,opened:a.opened,cardSize:e.screenWidth,onSelectCard:S},null,8,["matched","value","visible","position","opened","cardSize"])))),128))])),_:1},512)]),h.value?((0,t.wg)(),(0,t.j4)(T,{key:0,btnName:"Закрыть",onClose:s[0]||(s[0]=e=>h.value=!1)},{header:(0,t.w5)((()=>[F,Z,q])),body:(0,t.w5)((()=>[W])),footer:(0,t.w5)((()=>[])),_:1})):(0,t.kq)("",!0)],64))}};const G=(0,x.Z)(V,[["__scopeId","data-v-5ce47778"]]);var I=G;const E={class:"btn-game"},M=["disabled"];var P={__name:"NewGameButton",setup(e){const a=(0,c.g)(),s=()=>{a.startCountDown()};return(e,n)=>{const r=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.iD)("div",E,[(0,t.wy)(((0,t.wg)(),(0,t.iD)("button",{onClickOnce:s,disabled:!(0,l.SU)(a).newPlayer,class:(0,i.C_)((0,l.SU)(a).newPlayer?"btn-active":"btn-disabled")},[(0,t.Uk)(" Начать игру ")],42,M)),[[r,"rgba(255, 255, 255, 0.35)",void 0,{click:!0,500:!0}]])])}}};const H=(0,x.Z)(P,[["__scopeId","data-v-6c737e5d"]]);var N=H,J=s.p+"img/Prize.004043cb.svg",R=s.p+"img/Rules.19ea3c0a.svg";const X=e=>((0,t.dD)("data-v-d92cb1da"),e=e(),(0,t.Cn)(),e),Q={class:"game-rules"},O={class:"prizes"},$=X((()=>(0,t._)("div",null,[(0,t._)("img",{src:J,draggable:"false",alt:""}),(0,t._)("p",{class:"about-prize"},"О призах")],-1))),K=[$],ee={"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasBottom","aria-controls":"offcanvasBottom",class:"rules"},ae=X((()=>(0,t._)("div",null,[(0,t._)("button",{type:"button",class:"rule-game"},"Правила игры"),(0,t._)("div")],-1))),se=X((()=>(0,t._)("img",{draggable:"false",src:R,alt:""},null,-1))),te=[ae,se],le=X((()=>(0,t._)("div",{class:"title-game"},[(0,t._)("p",null,"Найдите пару и получите приз")],-1)));function ie(e,a){const s=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",Q,[(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",O,K)),[[s,"rgba(255, 255, 255, 0.35)",void 0,{click:!0,500:!0}]]),(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",ee,te)),[[s,"rgba(255, 255, 255, 0.35)",void 0,{click:!0,500:!0}]])]),le],64)}const ne={},re=(0,x.Z)(ne,[["render",ie],["__scopeId","data-v-d92cb1da"]]);var oe=re,de=s(8678),ce=s(8062),ue=s(1120);const ve={class:"game-container"},pe={class:"game-wrapper"},me={key:0,class:"started-game-count"},ge={class:"count-time"},fe=(0,t._)("img",{draggable:"false",src:n,loading:"lazy",class:"header-end-image",alt:""},null,-1),be=(0,t._)("p",{class:"header-text"},"Испытайте удачу по позже, ничего не выиграли",-1),we=(0,t._)("div",{class:"border-header"},null,-1),_e=(0,t._)("p",{class:"modal-body-content"},"Испытайте удачу по позже в клике",-1),ye=(0,t.uE)('<div style="height:65%;" data-bs-scroll="true" class="offcanvas offcanvas-bottom rounded-top-5" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel"><div class="offcanvas-btn mx-auto" data-bs-dismiss="offcanvas" aria-label="Close"></div><div style="padding:15px 0;" class="offcanvas-header mx-auto"><h5 style="font-family:&#39;Golos Text&#39;, sans-serif !important;" class="offcanvas-title text-center text-nowrap fs-2 fw-bold" id="offcanvasBottomLabel"> Информация об призах </h5></div><div style="padding:0 20px;" class="offcanvas-body"><div class="mb-4"><p class="info-prize"> Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел «Акция». После этого пользователь автоматически становится участником и получает 1 шанс на участие в розыгрыше основных призов. </p><p class="info-prize"> Главная задача участника – накопить как можно больше шансов для выигрыша одного или нескольких основных призов. Копите шансы, приглашая друзей по своему промокоду. </p><p class="info-prize"> Вы можете следить за ходом розыгрышей основных призов в прямых эфирах на официальных страничках компании: </p></div><h1 style="font-family:&#39;Golos Text&#39;, sans-serif !important;margin-bottom:15px;" class="text-center text-nowrap fs-2 fw-bold"> Описание призов </h1><div class="prizes-description"><div><div class="prize-item"><img src="'+r+'" draggable="false" alt=""></div><p class="prize-text"> Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел «Акция». </p></div></div><div class="prizes-description"><div><div class="prize-item"><img src="'+r+'" draggable="false" alt=""></div><p class="prize-text"> Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел «Акция». </p></div></div><div class="prizes-description"><div><div class="prize-item"><img src="'+r+'" draggable="false" alt=""></div><p class="prize-text"> Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел «Акция». </p></div></div><div class="prizes-description"><div><div class="prize-item"><img src="'+o+'" draggable="false" alt=""></div><p class="prize-text"> Чтобы стать участником акции – необходимо пройти идентификацию в приложении Click Up и зайти в раздел «Акция». </p></div></div></div></div>',1);var he={__name:"GameView",setup(e){const a=(0,l.iH)([]),s=(0,l.iH)(!1),n=(0,c.g)(),{cardList:r,matchesFound:o,status:u,countDown:v,startedGame:p,userCanFlipCard:m,countVisibleCard:g}=(0,d.Jk)(n),f=(0,t.Fl)((()=>{let e=window.screen.width-60;return e/3})),b=(0,ce.Z)(),w=e=>{if(!m.value)return!1;if(r.value[e.position].visible=!0,r.value[e.position].opened=!0,a.value[0]){if(a.value[0].position===e.position&&a.value[0].faceValue===e.faceValue)return!1;a.value[1]=e}else a.value[0]=e};return(0,t.YP)(o,(e=>{1===e&&setTimeout((()=>{p.value=!1,ue.Z.push({name:"prize"})}),3e3)})),(0,t.YP)(a,(e=>{if(2===e.length){const t=e[0],l=e[1];m.value=!1,t.faceValue===l.faceValue?(r.value[t.position].matched=!0,r.value[l.position].matched=!0,m.value=!1):(p.value=!1,setTimeout((()=>{s.value=!0}),5e3)),a.value.length=0}}),{deep:!0}),(0,t.YP)((()=>p.value),(e=>{e||2!==g.value||setTimeout((()=>{b.visibleAllCard()}),1700)})),(e,a)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",ve,[(0,t.Wm)(de.Z,{"center-text":"Найди пару",center:"",left:""}),(0,t._)("div",pe,[(0,t.Wm)(oe),(0,t.Wm)(I,{cardList:(0,l.SU)(r),status:(0,l.SU)(u),onFlipCard:w,screenWidth:f.value},null,8,["cardList","status","screenWidth"])]),(0,t.Wm)(N)]),(0,l.SU)(v)<=3&&(0,l.SU)(v)>=1?((0,t.wg)(),(0,t.iD)("div",me,[(0,t._)("p",ge,(0,i.zw)((0,l.SU)(v)),1)])):(0,t.kq)("",!0),s.value?((0,t.wg)(),(0,t.j4)(T,{key:1,btnName:"Закрыть",onClose:a[0]||(a[0]=e=>s.value=!1)},{header:(0,t.w5)((()=>[fe,be,we])),body:(0,t.w5)((()=>[_e])),footer:(0,t.w5)((()=>[])),_:1})):(0,t.kq)("",!0),ye],64))}};const ke=he;var Ce=ke}}]);
//# sourceMappingURL=450.91b158e9.js.map