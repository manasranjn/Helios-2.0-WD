const input = document.getElementById('input')
const searchBtn = document.getElementById('searchBtn')
const icon = document.getElementById('icon')

const error = document.querySelector('.error')
const weather = document.querySelector(".weather-data")


async function getWeatherData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=`)

    if (res.status === 404) {
        error.style.display = "block"
        weather.style.display = 'none'
    }
    else {
        weather.style.display = 'block'
        error.style.display = "none"

        const data = await res.json()
        // console.log(data);

        document.getElementById('temp').textContent = Math.round(data.main.temp)
        document.getElementById('city').textContent = data.name
        document.getElementById('humidity').textContent = data.main.humidity + " %"
        document.getElementById('speed').textContent = data.wind.speed + " KM/H"

        if (data.weather[0].main === 'Clouds') {
            icon.innerHTML = '<i class="fa-solid fa-cloud"></i>'
        } else if (data.weather[0].main === 'Rain') {
            icon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'
        } else if (data.weather[0].main === 'Clear') {
            icon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
        } else if (data.weather[0].main === 'Drizzle') {
            icon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>'
        } else if (data.weather[0].main === 'Mist') {
            icon.innerHTML = '<i class="fa-solid fa-cloud-showers-water"></i>'
        }

    }
}
searchBtn.onclick = () => {
    getWeatherData(input.value)
}