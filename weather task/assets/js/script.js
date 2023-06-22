"use strict";

let form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let input = document.querySelector('input');
    let img = document.querySelector('img');
    let api_key = 'd30bd69c999ceacb68722a7cd675c26d';

    try {
        let response = await fetch(`https://source.unsplash.com/random/900×700/?${input.value}`)
        img.src = response.url;
        console.log(response);
    } catch (err) {

    }
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}`)
        let result = response.json();
        console.log(result);
    } catch (err) {

    }

})
