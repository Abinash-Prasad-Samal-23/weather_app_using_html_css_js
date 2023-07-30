const apiKey="1860f21a36db0c570698cffe802eb28c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
  const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
  var data=await response.json();
  console.log(data);
  if(data.name){
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main="Clouds")
    {
      weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main="Clear")
    {
      weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main="Rain")
    {
      weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main="Clear")
    {
      weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main="Drizzle")
    {
      weatherIcon.src="images/Drizzle.png";
    }
    else if(data.weather[0].main="Mist")
    {
      weatherIcon.src="images/mist.png";
    }
  }
  else{
    document.querySelector(".city").innerHTML="City Name";
    document.querySelector(".temp").innerHTML="--"+"°C";
    document.querySelector(".humidity").innerHTML="--"+"%";
    document.querySelector(".wind").innerHTML="--"+"km/h";
    weatherIcon.src="images/rain.png";
    alert("wrong city name.");
  }
}

searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
})