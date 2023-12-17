const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');



xhr.onload = function () {
    const countries = JSON.parse(xhr.response);

    let population = countries.reduce((previousValue, country) => {
        return previousValue + country.population;
    }, 0)
    console.log(population);
}

xhr.send();