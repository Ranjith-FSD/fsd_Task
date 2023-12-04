let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].population);
    }
}

xhr.send();