const API_KEY = "e34badeed65939eb23dfbe513e8e8d3a";
const API_KEY_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=`;

const dataText = document.querySelector('.data-name');
const dataTemp = document.querySelector('.data-temp');
const dataType = document.querySelector('.data-type');
const search = document.querySelector('.search');
const display = document.querySelector('.display-data');

async function Weather(city) {
    try {
        const response = await fetch(API_KEY_URL + API_KEY + `&q=${city}`);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        // Update the DOM with fetched data
        dataText.innerHTML = data.name;
        dataTemp.innerHTML = Math.round(data.main.temp) + "°C";
        dataType.innerHTML = data.weather[0].main;
    } catch (error) {
        dataText.innerHTML = "City not found";
        dataTemp.innerHTML = "Temp not found";
        dataType.innerHTML = "Type not found";
    }
}

// Run function when the button is clicked
display.addEventListener('click', () => {
    const city = search.value.trim();
    if (city) {
        Weather(city);
    } else {
        dataText.innerHTML = "Enter a city";
    }
});
