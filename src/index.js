import "./styles/style.css";
import { Loader } from '@googlemaps/js-api-loader';

class App {
    constructor() {
        this.$city = document.querySelector("#city");
        this.$aqi = document.querySelector("#aqi");
        this.$aqiDescription = document.querySelector("#aqiDescription");
        this.$aqiTitleDescription = document.querySelector("#aqiTitleDescription");
        this.$lastUpdate = document.querySelector("#lastUpdate");
        this.$homeButton = document.querySelector("#homeButton");
        this.$searchButton = document.querySelector("#searchButton");
        this.$searchInput = document.querySelector("#searchInput");
        this.$positionButton = document.querySelector("#positionButton");
        this.$saveButton = document.querySelector("#saveButton");
        this.$savedPosition = document.querySelector("#savedPosition");
        this.$deleteButton = document.querySelector("#deleteButton");
        this.$uploadButton = document.querySelector("#uploadButton");
        this.$map = document.querySelector("#map");
        this.$form = document.forms[0];

        this.currentDatas;

        this.addEventListeners();
        this.loadLocalStorage();

    };

    addEventListeners() {
        this.$homeButton.addEventListener("click", () => this.backToHome());
        this.$form.addEventListener("submit", event => this.submitForm(event));    
        this.$positionButton.addEventListener("click", () => this.searchByCoordinates());
        this.$saveButton.addEventListener("click", () => this.savePosition(this.currentDatas));
        this.$uploadButton.addEventListener("click", () => this.uploadPosition());
        this.$deleteButton.addEventListener("click", () => this.deletePosition());
    }

    createMap(datas) {
        const position = {
            lat: datas.data.city.geo[0],
            lng: datas.data.city.geo[1]
        };
        
        const loader = new Loader({
            apiKey: "AIzaSyBGIB2DTt9s_HsZmOfxDimB9FkA_f_b5ws",
            version: "weekly",
            libraries: ["places"]
          });
          
        const mapOptions = {
            center: position,
            zoom: 15,
        };
        
        loader
            .load()
            .then((google) => {
                new google.maps.Map(this.$map, mapOptions);
            })
            .catch(e => {
                alert(e)
            });
    }

    loadLocalStorage() {
        if (localStorage.getItem("savedPosition")) {
            const lsPosition = JSON.parse(localStorage.getItem("savedPosition"));
            this.$savedPosition.innerHTML = "\uD83D\uDCBE" + " " + lsPosition.name;
            this.$deleteButton.style.display = "block";
        }
    }

    submitForm(event) {
        event.preventDefault();

        const input = this.$searchInput.value;
        const isInputEmpty = !input.trim().length;

        if(isInputEmpty) {
            this.displayMessageButton(this.$searchButton, "First type a city!", "#ee6352");
        } else {
            this.callLambdaFunction(`city=${input}`);
            this.$searchButton.value = "Searching..."
        }
    }

    backToHome() {
        this.currentDatas = "";
        this.$city.innerHTML = "-";
        this.$aqi.innerHTML = "-";
        this.$aqiTitleDescription.innerHTML = "";
        this.$aqiDescription.innerHTML = "";
        this.$lastUpdate.innerHTML = "";
        this.$searchInput.value = "";
        this.$city.style.color = "#fff"
        this.$aqi.style.color = "#fff";
        this.$aqiTitleDescription.style.color = "#fff";
        this.$aqiDescription.style.color = "#fff";
        this.$map.innerHTML = `
            <div id="homePage">
                <h1>Air Quality Index Tracker</h1>
                With this application you can check the <a href="https://aqicn.org/faq/" target="_blank">AQI</a> of the place you prefer:
                <br><br>
                <ul>
                    <li>You can search for a specific city by typing it in the input text.</li>
                    <br>
                    <li>You can look for your nearest station, with the specific button and allowing geolocation on your browser.</li>
                    <br>
                    <li>You can save the current position. If you do that, datas will be saved just on your browser, and they will be available also refreshing the page. Delete them by clicking on &#9249; button.</li>
                    <br>
                    <li>You can upload a saved position.</li>
                </ul>
                <br>
                This is a project for the <a href="https://www.start2impact.it/">start2impact</a> Web Development course.
                <br><br>
                Made by <a href="https://github.com/paolodellorti/JS-Advanced">Paolo Dell'Orti</a>. 
            </div>
        `
    }

    callLambdaFunction(query) {
        fetch(`/.netlify/functions/lambda?${query}`)
            .then(response => response.json())
            .then(datas => {
                this.updateDatas(datas);
                this.$searchButton.value = "Search"
            })
            .catch(err => {
                if (err.name === "TypeError") {
                    this.displayMessageButton(this.$searchButton, "Not found, try another one!", "#ee6352");
                } else {
                    alert(err)
                }
            })
            .finally(this.$searchInput.value = "");
    }

    displayMessageButton (button, newValue, color) {
        let oldValue = button.value;
        button.style.color = color;
        button.value = newValue;
        setTimeout(() => {
            button.style.color = "#fff";
            button.value = oldValue;
        }, 1500)
    }

    searchByCoordinates() {
        if(!navigator.geolocation) {
            this.$positionButton.value = "Geolocation not available!"
            this.$positionButton.style.color = "#ee6352";
        } else {
            const promise = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
            
            promise
                .then(position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    this.callLambdaFunction(`lat=${lat}&lon=${lon}`);
            })
                .then(this.displayMessageButton(this.$positionButton, "Done!", "#59cd90"))
                .catch(error => {
                    if (error.code == error.PERMISSION_DENIED) {
                        this.displayMessageButton(this.$positionButton, "Allow geolocation to use it!", "#ee6352")
                    } else {
                        alert(error)
                    }
            });
        }
    }

    savePosition(datas) {
        if (!this.currentDatas) {
            this.displayMessageButton(this.$saveButton, "First choose a position!", "#ee6352")
        } else {
            this.$deleteButton.style.display = "block";
            const positionInfo = {
                name: datas.data.city.name,
                idx: datas.data.idx
            }
            localStorage.setItem("savedPosition", JSON.stringify(positionInfo));
            this.$savedPosition.innerHTML = "\uD83D\uDCBE" + " " + positionInfo.name;
            this.displayMessageButton(this.$saveButton, "Saved successfully!", "#59cd90");
        }
    }

    uploadPosition() {
        if (!localStorage.getItem("savedPosition")) {
            this.displayMessageButton(this.$uploadButton, "First save a position!", "#ee6352");
        } else {
            const lsPosition = JSON.parse(localStorage.getItem("savedPosition"));
            const idx = `@${lsPosition.idx}`;
            this.callLambdaFunction(`city=${idx}`);
            this.displayMessageButton(this.$uploadButton, "Uploaded successfully!", "#59cd90");
        }
    }

    deletePosition() {
        this.$deleteButton.style.display = "none";
        this.$savedPosition.innerHTML = "\uD83D\uDCBE";
        localStorage.removeItem("savedPosition");
    }

    updateDatas(datas) {
        this.$city.innerHTML = datas.data.city.name;
        this.$aqi.innerHTML = datas.data.aqi;
        this.$searchInput.value = "";
        this.$lastUpdate.innerHTML = `Last update: ${datas.data.time.s}`
        this.currentDatas = datas;
        this.modifyByDanger(datas.data.aqi);
        this.createMap(datas);
    }

    modifyByDanger(aqi) {
        if (aqi >= 0 && aqi <= 50) {
            this.selectTextColor("#009966");
            this.$aqiTitleDescription.innerHTML = "Good";
            this.$aqiDescription.innerHTML = `Air quality is considered satisfactory, 
                                            and air pollution poses little or no risk.`;
        } else if (aqi >= 51 && aqi <= 100) {
            this.selectTextColor("#FFDE33");
            this.$aqiTitleDescription.innerHTML = "Moderate";
            this.$aqiDescription.innerHTML = `Air quality is acceptable; however, for some pollutants 
                                            there may be a moderate health concern for a very small 
                                            number of people who are unusually sensitive to air pollution.`;
        } else if (aqi >= 101 && aqi <= 150) {
            this.selectTextColor("#FF9933");
            this.$aqiTitleDescription.innerHTML = "Unhealthy for Sensitive Groups";
            this.$aqiDescription.innerHTML = `Members of sensitive groups may experience health effects. 
                                            The general public is not likely to be affected.`;
        } else if (aqi >= 151 && aqi <= 200) {
            this.selectTextColor("#CC0033");
            this.$aqiTitleDescription.innerHTML = "Unhealthy";
            this.$aqiDescription.innerHTML = `Everyone may begin to experience health effects; 
                                            members of sensitive groups may experience more serious health effects`;
        } else if (aqi >= 201 && aqi <= 300) {
            this.selectTextColor("#660099");
            this.$aqiTitleDescription.innerHTML = "Very Unhealthy";
            this.$aqiDescription.innerHTML = `Health warnings of emergency conditions. 
                                            The entire population is more likely to be affected.`;
        } else if (aqi > 300) {
            this.selectTextColor("#7E0023");
            this.$aqiTitleDescription.innerHTML = "Hazardous";
            this.$aqiDescription.innerHTML = `Health alert: everyone may experience more serious health effects.`;
        }
    }

    selectTextColor(color) {
        this.$aqi.style.color = color;
        this.$city.style.color = color;
        this.$aqiDescription.style.color = color;
        this.$aqiTitleDescription.style.color = color;
    }


}

new App();