const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.onload = function () {
    if (xhr.status === 200) {

        let countries = JSON.parse(xhr.responseText);

        // a. Get all the countries from Asia continent /region using Filter function
        let asiaCountries = countries.filter(country => country.region === 'Asia');
        console.log('Countries in Asia:', asiaCountries);

        // b. Get all the countries with a population of less than 2 lakhs using Filter function
        let countriesWithPopulationLessThan2Lakhs = countries.filter(country => {
            const population = country.population?.value || 0;
            return population < 200000;
        });
        console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

        // c. Print the following details name, capital, flag, using forEach function
        countries.forEach(country => {
            const { name, capital, flags } = country;
            console.log(`Name: ${name.common}, Capital: ${capital[0]}, Flag: ${flags[0]}`);
        });

        // d. Print the total population of countries using reduce function
        let totalPopulation = countries.reduce((acc, country) => {
            const population = country.population?.value || 0;
            return acc + population;
        }, 0);
        console.log('Total population of countries:', totalPopulation);

        // e. Print the country that uses US dollars as currency.
        let countryUsingUSD = countries.find(country => country.currencies?.USD);
        console.log('Country that uses US dollars:', countryUsingUSD);
    } else {
        console.error('Error fetching data. Status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Network error occurred');
};

xhr.send();
