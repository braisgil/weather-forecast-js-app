class UI {
    constructor() {
        this.icon = document.getElementById('weatherIcon');
        this.location = document.getElementById('weatherLocation');
        this.description = document.getElementById('weatherDescription');
        this.string = document.getElementById('weatherString');
        this.humidity = document.getElementById('weatherHumidity');
        this.wind = document.getElementById('weatherWind');
    }

    render(weatherData) {
        this.icon.innerHTML = `<img src='http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png'/>`;
        this.location.textContent = weatherData.name + ' / ' + weatherData.sys.country;
        this.description.textContent = weatherData.weather[0].description;
        this.string.textContent = weatherData.main.temp + ' ºC';
        this.humidity.textContent = 'Humidity: ' + weatherData.main.humidity + ' %';
        this.wind.textContent = 'Wind: ' + weatherData.wind.speed + ' m/s';
    }
}

export default UI;