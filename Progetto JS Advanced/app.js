class App {
    constructor() {
        this.token = "c959a7c7725869fa29e518f16f2ce8bd1c5daafd"

        this.$city = document.querySelector("#city");
        this.$aqi = document.querySelector("#aqi");
        this.$positionButton = document.querySelector("#positionButton");
        this.$searchButton = document.querySelector("#searchButton");
        this.$searchInput = document.querySelector("#searchInput");
        this.$container = document.querySelector("#container");
        this.$form = document.forms[0];

        this.addEventListeners();
    };

    addEventListeners() {
        this.$form.addEventListener("submit", event => {
            const input = this.$searchInput.value;
            const isInputEmpty = !input.trim().length;
            
            event.preventDefault();
            if(isInputEmpty) {
                alert("Please, type a city!");
            } else {
                this.searchByInput(input);
            }
        });

        this.$positionButton.addEventListener("click", () => this.getAndStoreCoordinates());
    }

    getAndStoreCoordinates() {
        if(!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            const promise = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
            
            promise
                .then(position => this.searchByCoordinates(position.coords.latitude, position.coords.longitude))
                .catch(error => alert(error));
        }
    }

    searchByCoordinates(lat, lon) {
        fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${this.token}`)
            .then(response => response.json())
            .then(datas => this.updateDatas(datas.data.city.name, datas.data.aqi))
            .catch(error => alert(error));
    }

    searchByInput(input) {
        console.log(`https://api.waqi.info/feed/${input}/?token=${this.token}`);
        fetch(`https://api.waqi.info/feed/${input}/?token=${this.token}`)
            .then(response => response.json())
            .then(datas => {
                if (datas.data === "Unknown station") {
                    this.errorUnknownCity();
                } else {
                    this.updateDatas(datas.data.city.name, datas.data.aqi);
                }
            })
            .catch(error => alert(error));
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

    errorUnknownCity() {
        alert("Unknown city, please type another one!");
        this.$searchInput.value = "";
    }
}

new App();