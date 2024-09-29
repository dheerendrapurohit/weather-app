document.addEventListener("DOMContentLoaded", ()=>{
    let cityInfo=document.getElementById("city_info")
    let searchBtn=document.getElementById("search_btn")
    let CityName=document.getElementById("Cityname")
    let Temparatue=document.getElementById("Temprature")
    let WeatherDescription=document.getElementById("weather_description")

    searchBtn.addEventListener("click", ()=>{
        let city=city_info.value;
        if(city){
            getWeatherInfo(city)
        }else{
            alert("Please enter city name")
        }
    })

    async function getWeatherInfo(city){
        let apiKey="f11292f21d8f3c036fc075c678d5ba7b";
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            let response=await fetch(apiUrl)
            console.log(response);
            let data=await response.json()
            console.log(data);
            if(data.cod===200){
                CityName.innerHTML=`weather in ${data.name} , ${data.sys.country}`
                Temparatue.innerHTML=`Temprature in ${data.name} : ${data.main.temp} `
                WeatherDescription.innerHTML=`Weather description for ${data.name} : ${data.weather[0].description}`
            }else{
                alert("city not exists")
                window.location.reload()
            }
        }
         catch (error) {
            alert("some error occurred into api",error)
            console.log("some error occurred into api",error);
        }

    }
})