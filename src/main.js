import Weather from './js/weather';
import UI from './js/ui';
import Storage from './js/storage';
const storage = new Storage();
const { city, countryCode } = storage.getStorageLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeatherData() {
    const data = await weather.getWeatherData();
    ui.render(data);
}

function submitFormData(event) {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.updateLocation(city, countryCode);
    storage.setStorageLocationData(city, countryCode);
    fetchWeatherData()
    event.preventDefault();

}

const weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', submitFormData);

document.addEventListener('DOMContentLoaded', fetchWeatherData);
