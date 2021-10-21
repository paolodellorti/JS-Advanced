(()=>{"use strict";var t,e,r,n,o,a,i,s,c,l,d,u,p,h,f={890:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([t.id,'body {\r\n    margin: 0;\r\n    height: 100vh;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-image: url("https://www.pixblick.de/images/product_images/original_images/fototapete_chicago%20(1).jpg");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n#container {\r\n    padding-bottom: 25px;\r\n    width: 50%;\r\n    height: 50%;\r\n    border: 5px solid;\r\n    border-color: black;\r\n    background-color: rgba(240, 240, 240, 0.8)\r\n}\r\n\r\n.errorInput {\r\n    background-color: tomato;\r\n}',""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=n.base?c[0]+n.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=o(h,n);n.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=n(t,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},m={};function y(t){var e=m[t];if(void 0!==e)return e.exports;var r=m[t]={id:t,exports:{}};return f[t](r,r.exports,y),r.exports}y.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return y.d(e,{a:e}),e},y.d=(t,e)=>{for(var r in e)y.o(e,r)&&!y.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},y.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=y(379),e=y.n(t),r=y(795),n=y.n(r),o=y(569),a=y.n(o),i=y(565),s=y.n(i),c=y(216),l=y.n(c),d=y(589),u=y.n(d),p=y(890),(h={}).styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=n(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,new class{constructor(){this.$city=document.querySelector("#city"),this.$aqi=document.querySelector("#aqi"),this.$positionButton=document.querySelector("#positionButton"),this.$searchButton=document.querySelector("#searchButton"),this.$searchInput=document.querySelector("#searchInput"),this.$container=document.querySelector("#container"),this.$form=document.forms[0],this.addEventListeners(),this.displayLastPositionFromLS()}addEventListeners(){this.$form.addEventListener("submit",(t=>{t.preventDefault();const e=this.$searchInput.value;e.trim().length?this.searchByInput(e):alert("Please, type a city!")})),this.$positionButton.addEventListener("click",(()=>this.getCoordinates()))}callLambdaFunction(t){fetch(`/.netlify/functions/lambda?${t}`).then((t=>t.json())).then((t=>console.log(t)))}getCoordinates(){navigator.geolocation?new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e))).then((t=>{const e=t.coords.latitude,r=t.coords.longitude,n=this.callLambdaFunction(`lat=${e}&lon=${r}`);this.updateDatas(n.data.city.name,n.data.aqi),this.checkCoordinatesFromLS(e,r)})).catch((t=>alert(t))):alert("Geolocation is not supported by your browser")}checkCoordinatesFromLS(t,e){if(localStorage.length){const r=JSON.parse(localStorage.getItem("lastCoords"));r.lat===t&&r.lon===e||this.setCoordinatesToLS(t,e)}else this.setCoordinatesToLS(t,e)}setCoordinatesToLS(t,e){const r={lat:t,lon:e};localStorage.setItem("lastCoords",JSON.stringify(r))}displayLastPositionFromLS(){if(localStorage.getItem("lastCoords")){const t=JSON.parse(localStorage.getItem("lastCoords"));this.searchByCoordinates(t.lat,t.lon)}}searchByInput(t){let e=this.callLambdaFunction(`city=${t}`);"Unknown station"===e.data?this.errorUnknownCity():this.updateDatas(e.data.city.name,e.data.aqi)}errorUnknownCity(){alert("Unknown city, please type another one!"),this.$searchInput.value=""}updateDatas(t,e){this.$city.innerHTML=t,this.$aqi.innerHTML=e,this.$searchInput.value="",this.changeColorByDanger(e)}changeColorByDanger(t){t>=0&&t<=50?this.selectBorderAndTextColor("#009966"):t>=51&&t<=100?this.selectBorderAndTextColor("#FFDE33"):t>=101&&t<=150?this.selectBorderAndTextColor("#FF9933"):t>=151&&t<=200?this.selectBorderAndTextColor("#CC0033"):t>=201&&t<=300?this.selectBorderAndTextColor("#660099"):t>300&&this.selectBorderAndTextColor("#7E0023")}selectBorderAndTextColor(t){this.$container.style.borderColor=t,this.$aqi.style.color=t}}})();