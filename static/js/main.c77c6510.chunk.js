(this.webpackJsonpfindr=this.webpackJsonpfindr||[]).push([[0],{51:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,s,d,b,u,p,l,j,m,h,x,f,g,O,v,y,w=t(5),k=t.n(w),S=t(37),C=t.n(S),E=t(11),G=t(12),I=t(13),Y=t(6),z=I.a.div(a||(a=Object(G.a)(["\nposition: absolute;\nheight: 50px;\nwidth: 50px;\ntransform: translate(-25px, -25px);\nborder-radius: 50%;\npointer-events: none;\noverflow: unset;\nborder: 2px solid rgba(255, 0, 0, .5);\n"]))),X=function(e){return Object(Y.jsx)(z,{id:"selection-window",style:{display:0===e.coords.length?"none":"block",left:"".concat(e.coords[0],"px"),top:"".concat(e.coords[1],"px")}})},A=t.p+"static/media/futurama.28c70fc7.png",B=I.a.div(c||(c=Object(G.a)(["\nposition: relative;\nwidth: fit-content;\nheight: fit-content;\n"]))),J=function(e){var n=e.show,t=e.handleGameboardClick,a=e.checkCharacter,c=e.selectionCoords,r=e.characters,i=Object(w.useState)(r),o=Object(E.a)(i,2),s=o[0],d=o[1];return Object(w.useEffect)((function(){d(r)}),[r]),Object(Y.jsxs)(B,{id:"gameboard",style:{display:n},onClick:t,children:[Object(Y.jsx)("img",{src:A,alt:"collage of Futurama characters"}),Object(Y.jsx)(X,{coords:c,characters:s,checkCharacter:a})]})},D=t.p+"static/media/futurama-logo.87be2040.png",q=I.a.div(r||(r=Object(G.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: 2em;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: .5em;\n    border-radius: 0 0 1em 0;\n    background-image: linear-gradient(rgba(10,140,186,1),\n        rgba(10,140,186,.5));\n    box-shadow: \n        1px 1px 4px rgba(0,0,0,.4),\n        2px 2px 8px rgba(0,0,0,.15);\n"]))),K=I.a.img(i||(i=Object(G.a)(["\n    width: 25vmax;\n"]))),M=I.a.div(o||(o=Object(G.a)(["\n    height: 5vmax;\n    width: 5vmax;\n    border-radius: .5em;\n\n    background-position: center;\n    background-size: cover;\n"]))),N=I.a.div(s||(s=Object(G.a)(["\n    display: flex;\n    gap: .5em;\n"]))),R=function(e){var n=e.show,t=e.characters,a=Object(w.useState)(t),c=Object(E.a)(a,2),r=c[0],i=c[1];return Object(w.useEffect)((function(){i(t)}),[t]),Object(Y.jsxs)(q,{id:"scorebox",style:{display:n},children:[Object(Y.jsx)(K,{src:D}),Object(Y.jsx)(N,{id:"character-list",children:r.map((function(e){return Object(Y.jsx)(M,{className:"scorebox-character-avi",style:{backgroundImage:"url(".concat(e.img,")"),opacity:e.found?".5":"1"}},e.name)}))})]})},T=I.a.div(d||(d=Object(G.a)(["\npadding: 2.5vmax;\nposition: absolute;\nz-index: 3;\npointer-events: initial;\nborder-radius: .5em;\nbackground: rgba(10,140,186,.75);\nbox-shadow: \n1px 1px 4px rgba(0,0,0,.4),\n2px 2px 8px rgba(0,0,0,.15);\n"]))),V=I.a.div(b||(b=Object(G.a)(["\ndisplay: flex;\ngap: .5em;\n"]))),W=I.a.div(u||(u=Object(G.a)(["\n    width: 5vmax;\n    height: 5vmax;\n    border-radius .5em;\n\n    background-position: center;\n    background-size: cover;\n"]))),F=function(e){var n=e.characters,t=e.checkCharacter,a=e.coords,c=e.display,r=Object(w.useState)(n),i=Object(E.a)(r,2),o=i[0],s=i[1];return Object(w.useEffect)((function(){s(n)}),[n]),Object(Y.jsx)(T,{id:"character-dropdown",style:{display:c,left:"".concat(a[0]+20,"px"),top:"".concat(a[1]+20,"px")},children:Object(Y.jsx)(V,{children:o.map((function(e){return Object(Y.jsx)(W,{style:{opacity:e.found?".5":"1",backgroundImage:"url(".concat(e.img,")")},onClick:function(){t(e.name)}},e.name)}))})})},H=I.a.div(p||(p=Object(G.a)(["\n    height: 100vh;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n"]))),L=I.a.img(l||(l=Object(G.a)(["\n    width: 100vw;\n"]))),P=I.a.button(j||(j=Object(G.a)(["\n    margin: 0 auto;\n    border: none;\n    outline: none;\n    padding: 1em 2em;\n    color: white;\n    font-size: 1em;\n    background: #BA2317;\n"]))),Q=function(e){return Object(Y.jsxs)(H,{style:{display:"start"===e.gameState?"flex":"none"},children:[Object(Y.jsx)(L,{src:D}),Object(Y.jsx)(P,{onClick:e.startGame,children:"start the game"})]})},U=t(33),Z=t(0),$=t.n(Z),_=t(3),ee=t(41),ne=t(25),te=Object(ee.a)({apiKey:"AIzaSyAX7VCOGf1ntoowI6VawbOJP4RuqOaB7LY",authDomain:"findr-956d6.firebaseapp.com",projectId:"findr-956d6",storageBucket:"findr-956d6.appspot.com",messagingSenderId:"40927690533",appId:"1:40927690533:web:6c923963825658bb5964cc"}),ae=Object(ne.d)(te),ce=t(29),re=I.a.div(m||(m=Object(G.a)(["\n    height: 100%;\n"]))),ie=I.a.div(h||(h=Object(G.a)(["\n    padding: 2.5vmax;\n    position: fixed;\n    bottom: 0;\n    left: 10%;\n    right: 10%;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1em;\n\n    background: #ba2317;\n    border-radius: .5em .5em 0 0;\n    box-shadow: 1px 1px 4px rgba(44, 81, 95, 0.75),\n                -1px -1px 4px rgba(44, 81, 95, .75);\n"]))),oe=I.a.div(x||(x=Object(G.a)(["\n   padding-bottom: 12vmax;\n   height: 100%;\n   display: flex;\n   flex-direction: column;\n   gap: 1em;\n"]))),se=I.a.div(f||(f=Object(G.a)(["\n    min-width: 600px;\n    padding: 2.5vmax;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1em;\n\n    font-size: 2.5vmax;\n    text-transform: uppercase;\n    color: white;\n    text-shadow: 1px 1px 2px rgba(0,0,0,.15);\n    background: #2cd7f1;\n    border-radius: .5em;\n    box-shadow: 1px 1px 4px rgba(44, 81, 95, 0.35),\n    -1px -1px 4px rgba(44, 81, 95, .35);\n"]))),de=function(e){var n=Object(w.useState)(!1),t=Object(E.a)(n,2),a=t[0],c=t[1],r=Object(w.useState)(""),i=Object(E.a)(r,2),o=i[0],s=i[1],d=Object(w.useState)([]),b=Object(E.a)(d,2),u=b[0],p=b[1],l=Object(ce.b)(ae,"players"),j=function(){var n=Object(_.a)($.a.mark((function n(){return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),s(""),n.next=4,Object(ce.a)(l,{name:o,score:e.score,h:e.h,m:e.m,s:e.s,ms:e.ms});case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(w.useEffect)((function(){var e=function(){var e=Object(_.a)($.a.mark((function e(){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.c)(l);case 2:n=e.sent,p(n.docs.map((function(e){return Object(U.a)(Object(U.a)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(w.useEffect)((function(){c(!1)}),[e.score]),Object(Y.jsxs)(re,{children:[Object(Y.jsxs)(ie,{children:[Object(Y.jsx)("h3",{children:"add your score to the annals of find-o-rama history"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("input",{id:"leaderboard-input",value:o,onChange:function(e){s(e.target.value)},style:{opacity:a?".5":"1",pointerEvents:a?"none":"all"}}),Object(Y.jsx)("button",{onClick:j,style:{opacity:a?".5":"1",pointerEvents:a?"none":"all"},children:"add your score"})]})]}),Object(Y.jsx)(oe,{id:"leaderboard-list",children:u.map((function(e){return Object(Y.jsxs)(se,{children:[Object(Y.jsx)("p",{children:e.name}),Object(Y.jsxs)("p",{children:[e.h,":",e.m,":",e.s,":",e.ms]})]},e.id)}))})]})},be=I.a.div(g||(g=Object(G.a)(["\n    width: 100vw;\n    height: 100%;\n    flex-direction: column;\n"]))),ue=I.a.div(O||(O=Object(G.a)(["\n    padding: 2.5vmax;\n    text-align: center;\n    color: white;\n    text-shadow: 1px 1px 2px rgba(0,0,0,.15);\n"]))),pe=I.a.div(v||(v=Object(G.a)(["\n    padding: 1em;\n    position: absolute;\n    right: .5em;\n    top: .5em;\n    width: 5em;\n    cursor: pointer;\n    font-family: Arial;\n    color: white;\n    background: #ba2317;\n    border-radius: .5em;\n    box-shadow: 1px 1px 4px rgba(44, 81, 95, 0.35),\n    -1px -1px 4px rgba(44, 81, 95, .35);\n"]))),le=function(e){var n=e.gameState,t=e.elapsed,a=e.resetGame,c=Object(w.useState)(t),r=Object(E.a)(c,2),i=r[0],o=r[1],s=i+"";s=s.slice(s.length-3,s.length);var d=parseInt(i/1e3%60);d<10&&(d="0"+d);var b=parseInt(i/6e4%60);b<10&&(b="0"+b);var u=parseInt(i/36e5%60);return u<10&&(u="0"+u),Object(w.useEffect)((function(){o(t)}),[t]),Object(Y.jsxs)(be,{id:"end-prompt",style:{display:"end"===n?"flex":"none"},children:[Object(Y.jsxs)(ue,{children:[Object(Y.jsxs)("h2",{children:["Whimmy wham wham wozzle! You finished in ",u,":",b,":",d,":",s,"!"]}),Object(Y.jsxs)("h3",{children:["(that's ",i," milliseconds!)"]}),Object(Y.jsx)(pe,{onClick:a,children:"try and beat your score!"})]}),Object(Y.jsx)(de,{score:i,h:u,m:b,s:d,ms:s})]})},je=I.a.div(y||(y=Object(G.a)(["\n    min-height: 100vh;\n    background: #0a8cba;\n"]))),me=function(e){var n=e.gameState,t=e.show,a=e.elapsed,c=e.startGame,r=e.resetGame,i=Object(w.useState)(a),o=Object(E.a)(i,2),s=o[0],d=o[1];return Object(w.useEffect)((function(){d(s)}),[n]),Object(Y.jsxs)(je,{id:"prompt-screen",style:{display:t},children:[Object(Y.jsx)(Q,{startGame:c,gameState:n}),Object(Y.jsx)(le,{elapsed:a,resetGame:r,gameState:n})]})},he=[{name:"Hypno Toad",rangeX:[227,275],rangeY:[387,420],found:!1,img:t.p+"static/media/hypnotoad.ab63a8a2.png"},{name:"That Guy",rangeX:[1304,1328],rangeY:[495,523],found:!1,img:t.p+"static/media/thatguy.87f57b57.png"},{name:"Conan O'Brien",rangeX:[829,858],rangeY:[422,460],found:!1,img:t.p+"static/media/conan.aecac918.png"},{name:"Slurms McKenzie",rangeX:[642,705],rangeY:[436,487],found:!1,img:t.p+"static/media/slurms.4b63ac12.png"},{name:"Judge Whitey",rangeX:[1096,1121],rangeY:[655,682],found:!1,img:t.p+"static/media/whitey.65b56ab4.png"}],xe=(t(51),function(){var e=he,n=Object(w.useState)("start"),t=Object(E.a)(n,2),a=t[0],c=t[1],r=Object(w.useState)([]),i=Object(E.a)(r,2),o=i[0],s=i[1],d=Object(w.useState)(0),b=Object(E.a)(d,2),u=b[0],p=b[1],l=Object(w.useState)(""),j=Object(E.a)(l,2),m=j[0],h=j[1],x=Object(w.useState)(""),f=Object(E.a)(x,2),g=f[0],O=f[1];function v(n){var t=e.filter((function(e){return e.name===n}))[0];if(t.found)return alert("you already found this one, dummy!"),void s([]);if(o[0]>=t.rangeX[0]&&o[0]<=t.rangeX[1]&&o[1]>=t.rangeY[0]&&o[1]<=t.rangeY[1]){var a=e.filter((function(e){return e.name!==n}));t.found=!0,a.push(t),e=a,s([]),p(u+1)}else s([])}return Object(w.useEffect)((function(){O(Date.now()),5===u&&(alert("you did it, good job"),c("end"))}),[u]),Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(J,{show:"play"===a?"block":"none",handleGameboardClick:function(e){var n=document.querySelector(".App").getBoundingClientRect(),t=e.clientX-n.left,a=e.clientY-n.top;s([t,a])},checkCharacter:v,selectionCoords:o,characters:e,foundCounter:u}),Object(Y.jsx)(F,{characters:e,checkCharacter:v,coords:o,display:0===o.length?"none":"block"}),Object(Y.jsx)(R,{show:"play"===a?"flex":"none",characters:e}),Object(Y.jsx)(me,{elapsed:g-m,startGame:function(){c("play"),h(Date.now())},resetGame:function(){e.forEach((function(e){e.found=!1})),p(0),h(""),O(""),c("start")},show:"play"===a?"none":"block",gameState:a})]})});C.a.render(Object(Y.jsx)(k.a.StrictMode,{children:Object(Y.jsx)(xe,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c77c6510.chunk.js.map