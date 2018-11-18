class Storage {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'London';
        this.defaultCountry = 'UK';
    }

    getStorageLocationData() {
        if (localStorage.getItem('city') === null || localStorage.getItem('countryCode') === null) {
            this.city = this.defaultCity;
            this.countryCode = this.defaultCountry;
        } else {
            this.city =  localStorage.getItem('city');
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setStorageLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}

export default Storage;