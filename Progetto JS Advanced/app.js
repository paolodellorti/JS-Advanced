class App {
    constructor() {
        this.token = "c959a7c7725869fa29e518f16f2ce8bd1c5daafd"

        this.$city = document.querySelector("#city");
        this.$aqi = document.querySelector("#aqi");
        this.$positionButton = document.querySelector("#positionButton");
        this.$searchButton = document.querySelector("#searchButton");
        this.$searchInput = document.querySelector("#searchInput");
        this.$container = document.querySelector("#container");

        this.addEventListeners();
    };

    addEventListeners() {
        window.addEventListener("keydown", event => {
            if (event.keyCode == 13) {
                this.searchByInput(this.$searchInput.value);
            }
        });

        this.$searchButton.addEventListener("click", () => this.searchByInput(this.$searchInput.value));

        this.$positionButton.addEventListener("click", () => this.getAndStoreCoordinates());
    }

    getAndStoreCoordinates() {
        if(!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            const promise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            promise
                .then(position => this.searchByCoordinates(position.coords.latitude, position.coords.longitude))
                .catch(error => alert(error));
        }
    }

    searchByCoordinates(lat, lon) {
        fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${this.token}`)
            .then(response => response.json())
            .then(data => {
                this.updateDatas(data.data.city.name, data.data.aqi);
            })
            .catch(error => console.error(error));
    }

    searchByInput(input) {
        if (input) {
            fetch(`https://api.waqi.info/feed/${input}/?token=${this.token}`)
                .then(response => response.json())
                .then(data => {
                    this.updateDatas(data.data.city.name, data.data.aqi);
                })
                .catch(error => alert(error));
        }
    }

    updateDatas(city, aqi) {
        this.$city.innerHTML = city;
        this.$aqi.innerHTML = aqi;
        this.$searchInput.value = "";
        this.changeColorByDanger(aqi);
    }

    changeColorByDanger(aqi) {
        if (aqi >= 0 && aqi <= 50) {
            this.$container.style.borderColor = "#009966"
            this.$aqi.style.color = "#009966"
        } else if (aqi >= 51 && aqi <= 100) {
            this.$container.style.borderColor = "#FFDE33"
            this.$aqi.style.color = "#FFDE33"
        } else if (aqi >= 101 && aqi <= 150) {
            this.$container.style.borderColor = "#FF9933"
            this.$aqi.style.color = "#FF9933"
        } else if (aqi >= 151 && aqi <= 200) {
            this.$container.style.borderColor = "#CC0033"
            this.$aqi.style.color = "#CC0033"
        } else if (aqi >= 201 && aqi <= 300) {
            this.$container.style.borderColor = "#660099"
            this.$aqi.style.color = "#660099"
        } else if (aqi > 300) {
            this.$container.style.borderColor = "#7E0023"
            this.$aqi.style.color = "#7E0023"
        }
    }
}

new App();