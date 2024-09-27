const apiKey = "6b0775b194914243db0e5783b510a287";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDisplay = document.getElementById("weather");

let weatherCheck = async (city) => {
    var response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data  = await response.json();

    if(response.status == 404){
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    } else{

        console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    }


    
}

searchBtn.addEventListener("click", ()=>{
    weatherCheck(searchBox.value);
    weatherDisplay.style.display = "block";
});
