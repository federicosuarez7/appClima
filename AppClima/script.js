const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '755a554dd7b6750f129e4ad41fff03cc';
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click',()=>{
    const city = document.getElementById('cityInput').value;
    if(city){
        fetchClima(city);
    }else{
        alert('Ingrese una ciudad válida');
    }
})
function fetchClima(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => console.log(data));
}