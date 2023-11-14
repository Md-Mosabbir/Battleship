(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Exo+2:wght@600&family=Roboto:wght@300&family=Rubik+Iso&display=swap);"]),i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: none;\n  list-style: none;\n}\n\n:root {\n  --cell-size: 46px;\n  --layout-number: calc(var(--cell-size) - 40px);\n  --number-and-grid-width: 20px;\n\n  /* *-------Colours------*  */\n  --neutral-white: #fff;\n  --neutral-black: #000;\n\n  --grid-bg-color: hsl(194, 100%, 50%);\n  --nav-bg-color: #312e2b;\n  --nav-content-color: rgba(0, 0, 0, 0.514);\n  --name-bg-color: rgb(68, 68, 68);\n\n  /* *-------Font-------*  */\n  --primary-font-family: 'Exo 2', sans-serif;\n  --labels-font-family: 'Black Ops One', cursive;\n  --title-font-family: 'Rubik Iso', cursive;\n  --name-font-family: 'Roboto', sans-serif;\n\n  /* *-------Font Size-------*  */\n\n  --label-font-size: 1.05rem;\n  --name-font-size: 1rem;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  gap: 3rem;\n  place-items: center;\n  height: 100vh;\n}\n\n/* ----------------------------------------------------------------------------------------- */\n/* ! -----------------------The letters of the board -----------------------------------------*/\n/* ----------------------------------------------------------------------------------------- */\n\n.all-letters {\n  display: grid;\n  grid-template-columns: repeat(10, var(--cell-size));\n  gap: 2px;\n  padding-left: var(--number-and-grid-width);\n  font-weight: 900;\n}\n\n.letter {\n  width: var(--cell-size);\n  font-family: var(--labels-font-family);\n  font-size: var(--label-font-size);\n  display: flex;\n  justify-content: center;\n  height: 25px;\n}\n\n/* ----------------------------------------------------------------------------------------- */\n/* ----------------------------------------------------------------------------------------- */\n\n/* ----------------------------------------------------------------------------------------- */\n/* !-----------------------The numbers of the board -----------------------------------------*/\n/* ----------------------------------------------------------------------------------------- */\n\n.number-and-grid {\n  display: grid;\n  grid-template-columns: var(--number-and-grid-width) 1fr;\n}\n.all-numbers {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n\n  font-weight: 900;\n}\n.number {\n  font-family: var(--labels-font-family);\n  font-size: var(--label-font-size);\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n/* ----------------------------------------------------------------------------------------- */\n/* ----------------------------------------------------------------------------------------- */\n\n/* ----------------------------------------------------------------------------------------- */\n/* !-----------------------The GRID of the board -----------------------------------------*/\n/* ----------------------------------------------------------------------------------------- */\n\n.grid {\n  display: grid;\n  grid-template: repeat(10, var(--cell-size)) / repeat(10, var(--cell-size));\n\n  gap: 2px;\n}\n\n.cell {\n  width: 100%;\n  aspect-ratio: 1/1;\n  background-color: hsl(194, 100%, 50%);\n}\n\n/* ----------------------------------------------------------------------------------------- */\n/* ----------------------------------------------------------------------------------------- */\n\n/* ----------------------------------------------------------------------------------------- */\n/* !-----------------------NAV BAR ------------------------------------------------------------*/\n/* ----------------------------------------------------------------------------------------- */\n\nnav {\n  display: grid;\n  grid-template-rows: 10% auto 1fr;\n  border: 1px solid var(--neutral-black);\n  background-color: var(--nav-bg-color);\n\n  min-width: calc(20rem + 2vw);\n  max-width: 32rem;\n  padding: 2rem;\n  border-radius: 0.75rem;\n}\nmain {\n  width: fit-content;\n  padding-top: 2.1rem;\n}\nnav h1 {\n  font-family: var(--title-font-family);\n  color: var(--neutral-white);\n  font-size: 2rem;\n}\n\nnav button,\nnav input {\n  font-family: 'Exo 2', sans-serif;\n  font-size: 1rem;\n  width: 100%;\n  padding: 1.2em 1em;\n  margin-block: 0.5em;\n  border-radius: 0.75rem;\n  text-align: left;\n\n  border: 1px solid var(--nav-content-color);\n  background-color: hsla(0, 0%, 0%, 0.72);\n  color: var(--neutral-white);\n  box-shadow: inset 0 -0.1rem 0 0 var(--nav-content-color);\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n}\n\nnav input::placeholder {\n  color: #ffffff59;\n}\n\nnav button:hover {\n  background-color: #000;\n  scale: 1.001;\n}\n\n#start {\n  background-color: #008000;\n  padding: 1.5em 2em;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n#start:active {\n  background-color: greenyellow;\n  color: #000;\n}\nnav button:active {\n  background-color: greenyellow;\n  color: #000;\n}\n.game-on {\n  width: 100%;\n}\n\n/* ----------------------------------------------------------------------------------------- */\n/* ----------------------------------------------------------------------------------------- */\n\n/* ----------------------------------------------------------------------------------------- */\n/* !-----------------------IN GAME -  GRIDS ------------------------------------------------------------*/\n/* ----------------------------------------------------------------------------------------- */\n\n.span-width {\n  grid-column: 1 / span 2;\n}\n\n.both-divs {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 3rem;\n}\n.board-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n/* !-----------------------NAMES ------------------------------------------------------------*/\n\n.name-container {\n  display: flex;\n  justify-content: space-around;\n  gap: 2rem;\n  margin: 2rem;\n}\n\n.name-container > div {\n  background-color: var(--name-bg-color);\n  font-family: var(--name-font-family);\n  font-size: var(--name-font-family);\n  padding: 0.35em 0.62em;\n  border: 1px solid rgba(0, 0, 0, 0.349);\n  color: #fff;\n  border-radius: 1rem;\n}\n\n/* ----------------------------------------------------------------------------------------- */\n/* ----------------------------------------------------------------------------------------- */\n\n/* ----------------------------------------------------------------------------------------- */\n/* !----------------------- Gameover ------------------------------------------------------------*/\n/* ----------------------------------------------------------------------------------------- */\n#gameover-container {\n  background-color: var(--nav-bg-color);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#gameover {\n  min-width: 50%;\n  min-height: 20rem;\n  background-color: #008000;\n  border-radius: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n#gameover h1 {\n  font-family: var(--labels-font-family);\n  font-size: 2.5rem;\n}\n\n#gameover p {\n  font-size: 1.5rem;\n  color: var(--neutral-white);\n  background-color: var(--neutral-black);\n  width: 100%;\n  text-align: center;\n}\n/* ----------------------------------------------------------------------------------------- */\n/* ----------------------------------------------------------------------------------------- */\n\nfooter {\n  font-family: var(--name-font-family);\n  background-color: #333;\n  width: 100%;\n  height: 70%;\n  padding: 2rem;\n  color: #fff;\n}\n\n.bottom {\n  align-self: end;\n}\n\nfooter p {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\nfooter ul {\n  list-style: none;\n  padding: 0;\n}\n\nfooter li {\n  font-size: 1rem;\n  margin: 5px 0;\n}\n\n/* Link Styles */\nfooter a {\n  color: var(--grid-bg-color);\n  text-decoration: none;\n  transition: color 0.3s;\n  font-size: 0.8rem;\n}\n\nfooter a:hover {\n  color: #007bff;\n  cursor: pointer;\n}\n\n@media (max-width: 1200px) {\n  nav {\n    min-width: 40rem;\n    margin-bottom: 25rem;\n    margin-inline: 2rem;\n  }\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 850px) {\n  :root {\n    --label-font-size: 0.8rem;\n    --name-font-family: 0.8rem;\n  }\n  nav {\n    min-width: 95%;\n  }\n}\n\n@media (max-width: 550px) {\n  :root {\n    --cell-size: 42px;\n    --number-and-grid-width: 15px;\n    --label-font-size: 0.7rem;\n    --name-font-family: 1rem;\n  }\n  .letter {\n    place-items: center;\n  }\n  .number {\n    justify-content: flex-end;\n  }\n  .number-and-grid {\n    gap: 0.5rem;\n  }\n  #gameover h1 {\n    font-size: 2rem;\n  }\n  #gameover p {\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 490px) {\n  :root {\n    --cell-size: 35px;\n    --name-font-family: 0.4em;\n  }\n}\n\n@media (max-width: 400px) {\n  :root {\n    --cell-size: 25px;\n  }\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(n,e,t=0,o=!1){return{name:n,hit:function(){return++t},isSunk:function(){return e===t&&(o=!0),o},lengthShips:e,orientation:"vertical",coordinates:[],boundary:[]}},g=function(){function n(n,e){const t=[...n],o=t[e];return"vertical"===o.orientation?o.orientation="horizontal":"horizontal"===o.orientation&&(o.orientation="vertical"),t}function e(n,e){const t=n[e];for(let o=0;o<n.length;o++)if(o!==e){const e=n[o];for(let n=0;n<e.boundary.length;n++){const o=e.boundary[n];if(t.coordinates.some((n=>n.toString()===o.toString())))return!0}}return!1}function t(n,e){return[...n][e].coordinates.some((n=>{const e=n[0],t=n[1];return e<0||e>9||t<0||t>9}))}function o(n,o,r,a){const i=function(n,e,t,o){const r=[...n],a=r[e],i={...a,coordinates:[],boundary:[]};if("vertical"===a.orientation)for(let n=0;n<a.lengthShips;n++)i.coordinates.push([t,o+n]);else if("horizontal"===a.orientation)for(let n=0;n<a.lengthShips;n++)i.coordinates.push([t+n,o]);return r[e]=i,r}(n,o,r,a);if(!1===e(i,o)&&!1===t(i,o)){const n=function(n,e){const t=[...n],o=t[e];if(o.boundary=[],"vertical"===o.orientation){const n=[o.coordinates[0][0],o.coordinates[0][1]-1],e=[o.coordinates[o.lengthShips-1][0],o.coordinates[o.lengthShips-1][1]+1],t=[n[0]-1,n[1]],r=[n[0]+1,n[1]],a=[e[0]-1,e[1]],i=[e[0]+1,e[1]];o.boundary.push(n,t,r,e,a,i),o.coordinates.map((n=>o.boundary.push(n,[n[0]+1,n[1]],[n[0]-1,n[1]])))}else if("horizontal"===o.orientation){const n=[o.coordinates[0][0]-1,o.coordinates[0][1]],e=[o.coordinates[o.lengthShips-1][0]+1,o.coordinates[o.lengthShips-1][1]],t=[n[0],n[1]-1],r=[n[0],n[1]+1],a=[e[0],e[1]-1],i=[e[0],e[1]+1];o.boundary.push(n,t,r,e,a,i),o.coordinates.map((n=>o.boundary.push(n,[n[0],n[1]+1],[n[0],n[1]-1])))}return t}(i,o);return n}return n}function r(n){const e=n.map((n=>({...n,boundary:[],coordinates:[]}))),t=["vertical","horizontal"];for(let n=0;n<e.length;n++){const o=Math.floor(2*Math.random());e[n].orientation=t[o]}return e}function a(n,e){const t=[...n],o=t[e];let r,a,i;do{"vertical"===o.orientation?(r=Math.floor(10*Math.random()),a=Math.floor(Math.random()*(10-o.lengthShips))):"horizontal"===o.orientation&&(r=Math.floor(Math.random()*(10-o.lengthShips)),a=Math.floor(10*Math.random())),i=t.some((n=>n.boundary.some((n=>n[0]===r&&n[1]===a))))}while(i);return[r,a]}return{createShips:function(){const n=[];return n.push(h("Aircraft-Carrier",5)),n.push(h("Battleship",4)),n.push(h("Submarine-1",3)),n.push(h("Submarine-2",3)),n.push(h("Destroyer",2)),n},matchCoords:function(n,e,t){return[...n].some((n=>n.coordinates.some((n=>n[0]===e&&n[1]===t))))},assignOrientation:function(e,t){const r=n([...e],t),a=r[t].coordinates[0],i=o(r,t,a[0],a[1]);return r[t].coordinates===i[t].coordinates?n(r,t):i},assignCoordinates:o,assignRandomCoordinates:function(n){let i=!1;for(;!i;){let s=r([...n]);for(let r=0;r<n.length;r++){const[n,c]=a(s,r);if(s=o(s,r,n,c),e(s,r)||t(s,r)){i=!1;break}i=!0}if(i){const e=s.some((n=>0===n.coordinates.length));if(e){i=!1;continue}n=s}}return n},recieveAttack:function(n,e,t,o){const r=[...n],a=r.find((n=>n.coordinates.some((n=>n[0]===e&&n[1]===t))));if(a){a.hit();const n=function(n){const e=n.filter((n=>!n.isSunk()));return e}(r);return n}return o.push([e,t]),r},trackShips:function(n){return 0===[...n].length},getShips:function(n){return[...n].length}}},y=function(n){const e=document.getElementById(n),t=document.createElement("div");t.classList.add("all-letters"),"ABCDEFGHIJ".split("").forEach((n=>{const e=document.createElement("div");e.classList.add("letter"),e.textContent=n,t.appendChild(e)})),e.appendChild(t);const o=document.createElement("div");o.classList.add("number-and-grid");const r=document.createElement("div");r.classList.add("all-numbers");for(let n=9;n>-1;n--){const e=document.createElement("div");e.classList.add("number"),e.textContent=n,r.appendChild(e)}o.appendChild(r);const a=document.createElement("div");a.classList.add("grid"),a.id=`${n}-grid`,a.style.position="relative";for(let e=9;e>-1;e--)for(let t=0;t<10;t++){const o=document.createElement("div");o.className=`${n}-cell`,o.classList.add("cell"),o.setAttribute("data-x",t),o.setAttribute("data-y",e),a.appendChild(o)}o.appendChild(a),e.appendChild(o)},v=t.p+"a7403d26c23196b2cc31.png",b=t.p+"94f36624938775384ad9.png",x=t.p+"a16a9d4177eb60b84fc6.png",w=t.p+"a16a9d4177eb60b84fc6.png",E=t.p+"bcf96687d09723703a6c.png",C=t.p+"39e0b673c14d3f224360.png",S=t.p+"21977729ee903555a4ab.png",k=t.p+"0bb6ecb3b2be1a80b54d.png",z=t.p+"0bb6ecb3b2be1a80b54d.png",B=t.p+"a4e04bc135075970a031.png",L=function(n,e,t=0){const o=[[v,b,x,w,E],[C,S,k,z,B]],r=document.getElementById(e);r.querySelectorAll(".ship").forEach((n=>{n.remove()})),n.forEach(((n,e)=>{const a=document.createElement("div");a.id=`${n.name}`,a.style.border="2px solid rgba(0, 0, 0, 0.41)",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center";const i=document.createElement("img");i.style.transform="scaleX(-1) ",i.src=`${o[t][e]}`,i.style.pointerEvents="none",a.appendChild(i),a.setAttribute("data-ship-index",e),a.setAttribute("draggable","true"),a.classList.add("ship"),a.style.position="absolute";const s=getComputedStyle(document.documentElement).getPropertyValue("--cell-size"),c=parseInt(s,10);a.style.left=n.coordinates[0][0]*(c+2)+"px",a.style.bottom=n.coordinates[0][1]*(c+2)+"px","vertical"===n.orientation?(i.style.width=n.lengthShips*(c-10)+"px",i.style.height=`${c}`,i.style.transform="rotate(90deg) scaleY(-1)",a.style.width=`${s}`,a.style.height=n.lengthShips*(c+2)-2+"px"):(a.style.height=`${s}`,a.style.width=n.lengthShips*(c+2)-2+"px",i.style.width=n.lengthShips*(c-10)+"px",i.style.height=`${c}`),r.appendChild(a)}))},M=function(n,e,t,o){let r=t;const a=[],i=[];function s(n,t){const o=e.recieveAttack(r,n,t,a);r=o}return{name:n,attack:s,gameOver:function(){return e.trackShips(r)},autoMoves:function(){const[n,e]=function(){let n,e,t;do{n=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),t=!i.some((t=>t[0]===n&&t[1]===e))}while(!t);return i.push([n,e]),[n,e]}();return s(n,e)},getMissed:function(){return a},matchCoords:function(n,o){return e.matchCoords(t,n,o)},state:o,checkAttacks:function(){const n=[...i].filter((n=>{const[e,t]=n;return r.some((n=>n.coordinates.some((n=>n[0]===e&&n[1]===t))))}));return n}}},I=function(n,e){function t(n){const e=document.createElement("div");e.id="gameover-container";const t=document.createElement("div");t.id="gameover";const o=document.createElement("h1");o.textContent="Gameover";const r=document.createElement("p");r.textContent=`${n.name} is the Winner!`,t.appendChild(o),t.appendChild(r),e.appendChild(t),document.body.appendChild(e)}!0===n.gameOver()?t(n):!0===e.gameOver()&&t(e)},A=function(n,e,t,o,r,a,i){const s=M(n,i,a,!0),c=M(r,t,e,!1);!function(){const n=document.querySelector(".board-container"),e=document.createElement("div");e.classList.add("name-container");const t=document.createElement("div"),o=document.createElement("h2");o.textContent=`${s.name}`,o.classList.add("player-one-name");const r=document.createElement("div"),a=document.createElement("h2");a.textContent=`${c.name}`,a.classList.add("player-two-name"),t.appendChild(o),r.appendChild(a),e.appendChild(t),e.appendChild(r),n.appendChild(e)}(),y("playerBoard"),y("enemyBoard");const l=()=>{window.innerWidth<=1150||window.innerWidth<=750||window.innerWidth,L(e,"playerBoard-grid",o)};window.addEventListener("resize",l),l();const d=document.querySelectorAll(".enemyBoard-cell"),u=document.querySelectorAll(".playerBoard-cell");d.forEach((n=>{n.addEventListener("click",(n=>{const e=parseInt(n.target.dataset.x,10),t=parseInt(n.target.dataset.y,10);!function(n,e,t,o,r){!0===e.state&&(e.attack(t,o),function(n,e,t){const o=n.target;!0===s.matchCoords(e,t)?o.style.backgroundColor="red":o.style.backgroundColor="green"}(n,t,o),I(s,c),d.forEach((n=>{n.style.pointerEvents="none"})),setTimeout((()=>{r.autoMoves(),function(){const n=c.checkAttacks(),e=c.getMissed();u.forEach((t=>{const o=parseInt(t.dataset.x,10),r=parseInt(t.dataset.y,10);n.some((([n,e])=>n===o&&e===r))&&(t.style.backgroundColor="red"),e.some((([n,e])=>n===o&&e===r))&&(t.style.backgroundColor="green")}))}(),I(s,c),d.forEach((n=>{n.style.pointerEvents="auto"}))}),700))}(n,s,e,t,c)}),{once:!0})}))},T=g(),R=g(),O=T.createShips(),P=R.createShips();!function(n,e,t,o){let r=0;y("playerBoard");const a=()=>{window.innerWidth<=1150||window.innerWidth<=750||window.innerWidth,L(n,"playerBoard-grid",r)};window.addEventListener("resize",a),a();const i=document.getElementById("playerBoard-grid"),s=document.querySelector(".buttons"),c=document.createElement("button");c.id="randomizer",c.textContent="Randomise";const l=document.createElement("button");l.id="appearance",l.textContent="Appearance";const d=document.createElement("button");d.id="start",d.textContent="Start";const u=document.getElementById("Player1"),p=document.getElementById("Player2"),m=document.createElement("input");m.id="Player-One",m.placeholder="Player-One";const f=document.createElement("input");f.id="Player-Two",f.placeholder="Player-Two",c.addEventListener("click",(()=>{const t=e.assignRandomCoordinates(n);L(t,"playerBoard-grid",r),n=t})),l.addEventListener("click",(()=>{1===r?(r=0,L(n,"playerBoard-grid",r)):0===r&&(r=1,L(n,"playerBoard-grid",r))})),d.addEventListener("click",(()=>{const a=document.getElementById("Player-One"),i=document.getElementById("Player-Two");if(""!==a.value&&""!==i.value){const s=a.value,c=i.value,l=document.getElementById("playerBoard"),d=document.getElementById("enemyBoard"),u=document.querySelector("nav"),p=document.querySelector("main");l.textContent="",d.textContent="",p.classList.add("game-on"),p.classList.add("span-width"),u.remove(),A(s,n,e,r,c,t,o)}})),u.appendChild(m),p.appendChild(f),s.appendChild(d),s.appendChild(l),s.appendChild(c),i.addEventListener("click",(t=>{if(t.target.classList.contains("ship")){const o=t.target.getAttribute("data-ship-index"),a=e.assignOrientation(n,o);L(a,"playerBoard-grid",r),n=a}}));let h=0;i.addEventListener("touchstart",(t=>{const o=(new Date).getTime();o-h<300&&function(t){if(t.target.classList.contains("ship")){const o=t.target.getAttribute("data-ship-index"),a=e.assignOrientation(n,o);L(a,"playerBoard-grid",r),n=a}}(t),h=o}));let g=null;i.addEventListener("dragover",(n=>{n.preventDefault()})),i.addEventListener("dragstart",(n=>{n.target.classList.contains("ship")&&(g=n.target)})),i.addEventListener("drop",(t=>{if(g){const o=getComputedStyle(document.documentElement).getPropertyValue("--cell-size"),a=parseInt(o,10),s=g.getAttribute("data-ship-index"),c=t.clientX-i.getBoundingClientRect().left,l=t.clientY-i.getBoundingClientRect().top,d=a,u=a,p=Math.floor((c+1)/d),m=Math.floor((i.clientHeight-l+1)/u),f=e.assignCoordinates(n,s,p,m);L(f,"playerBoard-grid",r),n=f,g=null}})),i.addEventListener("touchstart",(n=>{n.preventDefault(),n.target.classList.contains("ship")&&(g=n.target)})),i.addEventListener("touchmove",(n=>{n.preventDefault()})),i.addEventListener("touchend",(t=>{if(g){const o=getComputedStyle(document.documentElement).getPropertyValue("--cell-size"),a=parseInt(o,10),s=g.getAttribute("data-ship-index"),c=t.changedTouches[0],l=c.clientX-i.getBoundingClientRect().left,d=c.clientY-i.getBoundingClientRect().top,u=a,p=a,m=Math.floor((l+1)/u),f=Math.floor((i.clientHeight-d+1)/p),h=e.assignCoordinates(n,s,m,f);L(h,"playerBoard-grid",r),n=h,g=null}}))}(T.assignRandomCoordinates(O),T,R.assignRandomCoordinates(P),R)})()})();