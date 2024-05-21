async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '90d3687f969777da9b7c5ae9216088ba';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        document.getElementById('weather-city').innerText = data.name;
        document.getElementById('weather-desc').innerText = data.weather[0].description;
        document.getElementById('weather-temp').innerText = `${data.main.temp}°C`;
    } catch (error) {
        alert('Error fetching weather data');
    }
}
