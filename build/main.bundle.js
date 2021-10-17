new class{constructor(){this.token="c959a7c7725869fa29e518f16f2ce8bd1c5daafd",this.$city=document.querySelector("#city"),this.$aqi=document.querySelector("#aqi"),this.$positionButton=document.querySelector("#positionButton"),this.$searchButton=document.querySelector("#searchButton"),this.$searchInput=document.querySelector("#searchInput"),this.$container=document.querySelector("#container"),this.$form=document.forms[0],this.addEventListeners(),this.displayLastPositionFromLS()}addEventListeners(){this.$form.addEventListener("submit",(t=>{t.preventDefault();const e=this.$searchInput.value;e.trim().length?this.searchByInput(e):alert("Please, type a city!")})),this.$positionButton.addEventListener("click",(()=>this.getCoordinates()))}getCoordinates(){navigator.geolocation?new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e))).then((t=>{this.searchByCoordinates(t.coords.latitude,t.coords.longitude),this.checkCoordinatesFromLS(t.coords.latitude,t.coords.longitude)})).catch((t=>alert(t))):alert("Geolocation is not supported by your browser")}searchByCoordinates(t,e){fetch(`https://api.waqi.info/feed/geo:${t};${e}/?token=${this.token}`).then((t=>t.json())).then((t=>this.updateDatas(t.data.city.name,t.data.aqi))).catch((t=>alert(t)))}checkCoordinatesFromLS(t,e){if(localStorage.length){const o=JSON.parse(localStorage.getItem("lastCoords"));o.lat===t&&o.lon===e||this.setCoordinatesToLS(t,e)}else this.setCoordinatesToLS(t,e)}setCoordinatesToLS(t,e){const o={lat:t,lon:e};localStorage.setItem("lastCoords",JSON.stringify(o))}displayLastPositionFromLS(){if(localStorage.getItem("lastCoords")){const t=JSON.parse(localStorage.getItem("lastCoords"));this.searchByCoordinates(t.lat,t.lon)}}searchByInput(t){fetch(`https://api.waqi.info/feed/${t}/?token=${this.token}`).then((t=>t.json())).then((t=>{console.log(t),"Unknown station"===t.data?this.errorUnknownCity():this.updateDatas(t.data.city.name,t.data.aqi)})).catch((t=>alert(t)))}errorUnknownCity(){alert("Unknown city, please type another one!"),this.$searchInput.value=""}updateDatas(t,e){this.$city.innerHTML=t,this.$aqi.innerHTML=e,this.$searchInput.value="",this.changeColorByDanger(e)}changeColorByDanger(t){t>=0&&t<=50?this.selectBorderAndTextColor("#009966"):t>=51&&t<=100?this.selectBorderAndTextColor("#FFDE33"):t>=101&&t<=150?this.selectBorderAndTextColor("#FF9933"):t>=151&&t<=200?this.selectBorderAndTextColor("#CC0033"):t>=201&&t<=300?this.selectBorderAndTextColor("#660099"):t>300&&this.selectBorderAndTextColor("#7E0023")}selectBorderAndTextColor(t){this.$container.style.borderColor=t,this.$aqi.style.color=t}},console.log("ciaooooo");