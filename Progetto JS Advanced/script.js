let token = "c959a7c7725869fa29e518f16f2ce8bd1c5daafd"

let cityDisplay = document.querySelector("#city")
let pollutionDisplay = document.querySelector("#pollution")
let positionButton = document.querySelector("#positionButton")
let searchButton = document.querySelector("#searchButton")
let searchInput = document.querySelector("#searchInput")
let container = document.querySelector("#container")



searchButton.onclick = getDataBySearch
window.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        getDataBySearch()
    }
})

async function getDataBySearch() {
    if (searchInput.value) {
        try {
            let city = searchInput.value
            let dataRow = await fetch(`https://api.waqi.info/feed/${city}/?token=${token}`)
            let dataJson = await dataRow.json()
            if(dataJson.status == "error") {
                alert(dataJson.data)
                searchInput.value = ""
            } else {
                cityDisplay.innerHTML = dataJson.data.city.name
                pollutionDisplay.innerHTML = dataJson.data.aqi
                dangerColor(dataJson.data.aqi)
                searchInput.value = ""
            }
        } catch(err) {
            alert(err)
            searchInput.value = ""
        }
    }
}



positionButton.onclick = function() {
    if(!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            getCoordinates(position.coords.latitude, position.coords.longitude)
        }, err => alert(err)
        )
    }

}

async function getCoordinates(latitude, longitude) {
    try {
        let dataRow = await fetch(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${token}`)
        let dataJson = await dataRow.json()
        if(dataJson.status == "error") {
            alert(dataJson.data)
        } else {
            cityDisplay.innerHTML = dataJson.data.city.name
            pollutionDisplay.innerHTML = dataJson.data.aqi
            dangerColor(dataJson.data.aqi)
        }
    } catch(err) {
        alert(err)
    }
}

function dangerColor(aqi) {
    if (aqi >= 0 && aqi <= 50) {
        container.style.borderColor = "#009966"
        pollutionDisplay.style.color = "#009966"
    } else if (aqi >= 51 && aqi <= 100) {
        container.style.borderColor = "#FFDE33"
        pollutionDisplay.style.color = "#FFDE33"
    } else if (aqi >= 101 && aqi <= 150) {
        container.style.borderColor = "#FF9933"
        pollutionDisplay.style.color = "#FF9933"
    } else if (aqi >= 151 && aqi <= 200) {
        container.style.borderColor = "#CC0033"
        pollutionDisplay.style.color = "#CC0033"
    } else if (aqi >= 201 && aqi <= 300) {
        container.style.borderColor = "#660099"
        pollutionDisplay.style.color = "#660099"
    } else if (aqi > 300) {
        container.style.borderColor = "#7E0023"
        pollutionDisplay.style.color = "#7E0023"
    }
}

