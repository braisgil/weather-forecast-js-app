class Weather {
    constructor(city, countryCode) {
        this.appId = '6a086ed2661b58fdf1c52ee85c764c51';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeatherData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.appId}&units=metric`;

        const apiResponse = await fetch(url);
        const weatherData = await apiResponse.json();

        return weatherData;
    }

    updateLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}

export default Weather;