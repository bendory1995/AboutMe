
'use strict';

const API_KEY = 'd2f10ea773ba94e3852b6e5e29c7691f';

const request = async url => {
    const reponse = await fetch(url);
    return response.ok ? response.json() : Promise.reject({error: 500});
};

const getWeatherInfo = async ( element, form ) => {
    try {
        const q = form.querySelector('#q').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`;
        const response = await request(url);
        element.innerText = JSON.stringify(response);

    } catch(err) {
        console.log(err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        getWeatherInfo(document.querySelector('#results'), form);
    }, false);
});