const apiKey = "ac6a20030df5a0140ee4e36c6d4b43b3";
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchInput = document.getElementById('input');
const searchBtn = document.getElementById('btn');
const weatherIcon = document.getElementById('weather-icon');

async function getWeather(city) {
    const res = await fetch(url + city + `&appid=${apiKey}`);

    if (res.status == 404) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('weather').style.display = 'none';
    } else {
        const data = await res.json();

        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.getElementById('humidity').innerHTML = data.main.humidity + '%';
        document.getElementById('wind').innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';
        }

        document.getElementById('weather').style.display = 'block';
        document.getElementById('error').style.display = 'none';

    }
}

getWeather('tel aviv');

searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})
