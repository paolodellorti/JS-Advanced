(()=>{"use strict";var t,e,r,o,n,a,s,i,c,l,d,u,h,p,f={890:(t,e,r)=>{r.d(e,{Z:()=>i});var o=r(81),n=r.n(o),a=r(645),s=r.n(a)()(n());s.push([t.id,'body {\r\n    margin: 0;\r\n    height: 100vh;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-image: url("https://www.pixblick.de/images/product_images/original_images/fototapete_chicago%20(1).jpg");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n#container {\r\n    padding-bottom: 25px;\r\n    width: 50%;\r\n    height: 50%;\r\n    border: 5px solid;\r\n    border-color: black;\r\n    background-color: rgba(240, 240, 240, 0.8)\r\n}\r\n\r\n.errorInput {\r\n    background-color: tomato;\r\n}',""]);const i=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,o,n,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===t){r=o;break}return r}function o(t,o){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=n(p,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var a=o(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=r(a[s]);e[i].references--}for(var c=o(t,n),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,r){var o=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},m={};function g(t){var e=m[t];if(void 0!==e)return e.exports;var r=m[t]={id:t,exports:{}};return f[t](r,r.exports,g),r.exports}g.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return g.d(e,{a:e}),e},g.d=(t,e)=>{for(var r in e)g.o(e,r)&&!g.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},g.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=g(379),e=g.n(t),r=g(795),o=g.n(r),n=g(569),a=g.n(n),s=g(565),i=g.n(s),c=g(216),l=g.n(c),d=g(589),u=g.n(d),h=g(890),(p={}).styleTagTransform=u(),p.setAttributes=i(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals,new class{constructor(){this.token="c959a7c7725869fa29e518f16f2ce8bd1c5daafd",this.$city=document.querySelector("#city"),this.$aqi=document.querySelector("#aqi"),this.$positionButton=document.querySelector("#positionButton"),this.$searchButton=document.querySelector("#searchButton"),this.$searchInput=document.querySelector("#searchInput"),this.$container=document.querySelector("#container"),this.$form=document.forms[0],this.addEventListeners(),this.displayLastPositionFromLS()}addEventListeners(){this.$form.addEventListener("submit",(t=>{t.preventDefault();const e=this.$searchInput.value;e.trim().length?this.searchByInput(e):alert("Please, type a city!")})),this.$positionButton.addEventListener("click",(()=>this.getCoordinates()))}getCoordinates(){navigator.geolocation?new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e))).then((t=>{this.searchByCoordinates(t.coords.latitude,t.coords.longitude),this.checkCoordinatesFromLS(t.coords.latitude,t.coords.longitude)})).catch((t=>alert(t))):alert("Geolocation is not supported by your browser")}searchByCoordinates(t,e){fetch(`https://api.waqi.info/feed/geo:${t};${e}/?token=${this.token}`).then((t=>t.json())).then((t=>this.updateDatas(t.data.city.name,t.data.aqi))).catch((t=>alert(t)))}checkCoordinatesFromLS(t,e){if(localStorage.length){const r=JSON.parse(localStorage.getItem("lastCoords"));r.lat===t&&r.lon===e||this.setCoordinatesToLS(t,e)}else this.setCoordinatesToLS(t,e)}setCoordinatesToLS(t,e){const r={lat:t,lon:e};localStorage.setItem("lastCoords",JSON.stringify(r))}displayLastPositionFromLS(){if(localStorage.getItem("lastCoords")){const t=JSON.parse(localStorage.getItem("lastCoords"));this.searchByCoordinates(t.lat,t.lon)}}searchByInput(t){fetch(`https://api.waqi.info/feed/${t}/?token=${this.token}`).then((t=>t.json())).then((t=>{console.log(t),"Unknown station"===t.data?this.errorUnknownCity():this.updateDatas(t.data.city.name,t.data.aqi)})).catch((t=>alert(t)))}errorUnknownCity(){alert("Unknown city, please type another one!"),this.$searchInput.value=""}updateDatas(t,e){this.$city.innerHTML=t,this.$aqi.innerHTML=e,this.$searchInput.value="",this.changeColorByDanger(e)}changeColorByDanger(t){t>=0&&t<=50?this.selectBorderAndTextColor("#009966"):t>=51&&t<=100?this.selectBorderAndTextColor("#FFDE33"):t>=101&&t<=150?this.selectBorderAndTextColor("#FF9933"):t>=151&&t<=200?this.selectBorderAndTextColor("#CC0033"):t>=201&&t<=300?this.selectBorderAndTextColor("#660099"):t>300&&this.selectBorderAndTextColor("#7E0023")}selectBorderAndTextColor(t){this.$container.style.borderColor=t,this.$aqi.style.color=t}}})();