import "./styles/style.css";

class App {
    constructor() {
        this.$city = document.querySelector("#city");
        this.$aqi = document.querySelector("#aqi");
        this.$positionButton = document.querySelector("#positionButton");
        this.$searchButton = document.querySelector("#searchButton");
        this.$searchInput = document.querySelector("#searchInput");
        this.$container = document.querySelector("#container");
        this.$form = document.forms[0];

        this.addEventListeners();
        this.displayLastPositionFromLS();
    };

    addEventListeners() {
        this.$form.addEventListener("submit", event => {
            event.preventDefault();

            const input = this.$searchInput.value;
            const isInputEmpty = !input.trim().length;

            if(isInputEmpty) {
                alert("Please, type a city!");
            } else {
                this.searchByInput(input);
            }
        });

        this.$positionButton.addEventListener("click", () => this.getCoordinates());
    }

    callLambdaFunction(query) {
        fetch(`/.netlify/functions/lambda?${query}`)
            .then(response => response.json())
            .then(datas => console.log(datas));
    }

    getCoordinates() {
        const hasNotGeolocation = !navigator.geolocation;
        if(hasNotGeolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            const promise = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
            
            promise
                .then(position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const fetchDatas = this.callLambdaFunction(`lat=${lat}&lon=${lon}`);
                    this.updateDatas(fetchDatas.data.city.name, fetchDatas.data.aqi)
                    this.checkCoordinatesFromLS(lat, lon);
                })
                .catch(error => alert(error));
        }
    }

    checkCoordinatesFromLS(lat, lon) {
        const hasRecord = localStorage.length
        if (hasRecord) {
            const coords = JSON.parse(localStorage.getItem("lastCoords"));
            if (coords.lat !== lat || coords.lon !== lon) {
                this.setCoordinatesToLS(lat, lon);
            }
        } else {
            this.setCoordinatesToLS(lat, lon);
        }
    }

    setCoordinatesToLS(lat, lon) {
        const coords = {"lat": lat, "lon": lon};
        localStorage.setItem("lastCoords", JSON.stringify(coords));
    }

    displayLastPositionFromLS() {
        if (localStorage.getItem("lastCoords")) {
            const coords = JSON.parse(localStorage.getItem("lastCoords"));
            this.searchByCoordinates(coords.lat, coords.lon);
        }
    }

    searchByInput(input) {
        let fetchDatas = this.callLambdaFunction(`city=${input}`);
        if (fetchDatas.data === "Unknown station") {
            this.errorUnknownCity();
        } else {
            this.updateDatas(fetchDatas.data.city.name, fetchDatas.data.aqi);
        }
}

    errorUnknownCity() {
        alert("Unknown city, please type another one!");
        this.$searchInput.value = "";
    }

    updateDatas(city, aqi) {
        this.$city.innerHTML = city;
        this.$aqi.innerHTML = aqi;
        this.$searchInput.value = "";
        this.changeColorByDanger(aqi);
    }

    changeColorByDanger(aqi) {
        if (aqi >= 0 && aqi <= 50) {
            this.selectBorderAndTextColor("#009966");
        } else if (aqi >= 51 && aqi <= 100) {
            this.selectBorderAndTextColor("#FFDE33");
        } else if (aqi >= 101 && aqi <= 150) {
            this.selectBorderAndTextColor("#FF9933");
        } else if (aqi >= 151 && aqi <= 200) {
            this.selectBorderAndTextColor("#CC0033");
        } else if (aqi >= 201 && aqi <= 300) {
            this.selectBorderAndTextColor("#660099");
        } else if (aqi > 300) {
            this.selectBorderAndTextColor("#7E0023");

        }
    }

    selectBorderAndTextColor(color) {
        this.$container.style.borderColor = color;
        this.$aqi.style.color = color;
    }


}

new App();