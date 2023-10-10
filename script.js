let inputtext=document.getElementById("inputtext");
let btn=document.getElementById("btn");
let loc=document.getElementById("location");
let image=document.getElementById("image");
let temperature=document.getElementById("temperature");
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");


let apikey="8ca432e2233637bb29a4fd8fdef53f43";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkweather(city){
    let data =await fetch(apiUrl + city + `&appid=${apikey}`)
    let data1=await data.json();
    console.log(data1)
    loc.innerHTML=data1.name;
    temperature.innerHTML=data1.main.temp +"°C";
    box1.innerHTML="Humidity :"+ data1.main.humidity;
    box2.innerHTML=data1.weather[0].description;
    box3.innerHTML="Feels_Like :" + data1.main.feels_like +"°C";


    if(data1.weather[0].main=="Clear"){
        image.style.backgroundImage="url('clearsky.jpg')"
      }

      else if(data1.weather[0].main=="Clouds"){
        image.style.backgroundImage="url('cloud.jpg')"
      }

      else if(data1.weather[0].main=="Rain"){
        image.style.backgroundImage="url('rain.jpg')"
      }

      else if(data1.weather[0].main=="Drizzle"){
        image.style.backgroundImage="url('drizzle.jpg')"
      }

      else if(data1.weather[0].main=="Mist"){
        image.style.backgroundImage="url('mist.jpg')"
      }

    }

btn.addEventListener("click",function(){
    checkweather(inputtext.value)
    inputtext.value=""
    if(inputtext.value=""){
        alert("enter any location")
    }

})



