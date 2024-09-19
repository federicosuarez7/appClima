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
    .then(data => mostrarDatosClima(data));
}
function mostrarDatosClima(data){
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';
    //obtenemos el nombre de la ciudad 
    const cityName = data.name;
    // Obtenemos el nombre del pais
    const countryName = data.sys.country;
    // Obtenemos la temperatura
    const temp = data.main.temp;
    // Obtenemos la humedad
    const humidity = data.main.humidity;
    // Obtenemos la descripcion
    const description = data.weather[0].description;
    // Obtenemos el icono del clima
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName},${countryName}`;
    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffKelvin)}°C`;
    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `La humedad es del ${humidity}%`;
    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `La descripción meteorológica es: ${description}`;
    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);
}