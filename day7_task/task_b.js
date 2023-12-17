const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');



xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    console.log(countries.filter(country => {
        if (country.population < 200000) {
            return true;
        }
    }).map(country => country.population));
}

xhr.send();