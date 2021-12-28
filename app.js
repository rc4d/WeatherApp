

// function setup(){
//     let data = loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=271c2dc83b8244d537d039612565588e&units=metric',gotData);
    
//     console.log(data);
// }
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=271c2dc83b8244d537d039612565588e&units=metric').then(response =>response.json());
const weatherAPI = {
    
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
    key: "271c2dc83b8244d537d039612565588e&units=metric"
}

const searchInputBox = document.getElementById('input-box');
const click1 = document.getElementById("clickme").addEventListener('click', (event) => getWeatherReport(searchInputBox.value));
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
            // console.log(searchInputBox.value);
            getWeatherReport(searchInputBox.value);
    }
});

// function getWeatherReport(city){
//     fetch(`${weatherAPI.baseUrl}q=${city}&appid=${weatherAPI.key}`).then(weather => weather.json()).then(showWeatherReport);
// }
   async function getWeatherReport(city){
      let res =  await fetch(`${weatherAPI.baseUrl}q=${city}&appid=${weatherAPI.key}`);
      
      const jres = await res.json();
      showWeatherReport(jres);
    }

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById("city");
    let temp = document.getElementById("temp");
    let minmax = document.getElementById("min-max");
    let weathertype = document.getElementById("weather");
    let date = document.getElementById("date");
    let todayDate = new Date();

    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg; (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    weathertype.innerHTML = `${weather.weather[0].main}`;
    date.innerText = dataManage(todayDate);
    


}


function dataManage(dateArgs){

    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArgs.getFullYear();
    let month = months[dateArgs.getMonth()];
    let date = dateArgs.getDate();
    return `${date} ${month} ${year}`;

}












