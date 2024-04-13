function fetchData(){
    var loc=c_name.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(data=>data.json())
    .then(data=>displayData(data))
    .catch(()=>{
      city.innerHTML="City not found"
      date_i.innerHTML="--"
      h1_temp.innerHTML="--°C"
      h2_desc.innerHTML="--"
      h5_hum.innerHTML="--%"
      h5_wind.innerHTML="--Km/h"
      h5_temp.innerHTML="--°C"
      h5_vision.innerHTML="--Km"
      h5_pressure.innerHTML="--hpa"
      h6_sunrise.innerHTML="--:--"
      h6_sunset.innerHTML="--:--"
      })
    // .catch(()=>{document.querySelector("#major_div").innerHTML='<img class="" style="height:85vh; opacity:1" src="./image/404.png" alt="">'}); 
  }


  


  function displayData(data){

  var date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  var date = `${weekday[date.getDay()].slice(0, 3)}, ${month[date.getMonth()]}  ${date.getDate()}`;
  
      loc_date.innerHTML=
      `<h2 id="city" class="text-center">${data.name}</h2>
      <h6 id="date_i" class="text-center">${date}</h6>`


      var icon=data.weather[0].icon
      img_type.innerHTML=`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">`

  
      document.getElementById("major_div").style.display="flex"
  
      temp.innerHTML=
      `<h1>${Math.round(data.main.temp-273)}°C</h1>
      <h2>${data.weather[0].description}</h2>`
  
      hum.innerHTML=
      `<h1 class="text-center"><i class="fa-solid  fa-droplet"></i></h1>
      <h6 class="text-center">Humidity</h6>
      <h5 class="text-center">${data.main.humidity}%</h5>`
  
      wind.innerHTML=
      `<h1 id="wind" class="text-center"><i class="fa-solid fa-wind fa-beat-fade"></i></h1>
       <h6 class="text-center">Wind Speed</h6>
       <h5 class="text-center">${data.wind.speed}Km/h</h5>`
  
       feels.innerHTML=
      `<i class="fa-solid fa-lg fa-temperature-three-quarters container mt-3"></i>
       <p class="container">Feels Like</p>
       <h5 class="container">${Math.round(data.main.feels_like-273)}°C</h5>`
  
       visible.innerHTML=
      `<i class="fa-solid fa-eye container mt-2"></i>
       <p class="container">Visibility</p>
       <h5 class="container">${Math.round(data.visibility*0.000621371)}Km</h5>`
  
       pressure.innerHTML=
      `<img class="pressure_icon ms-2 mt-1" src="./image/pressure_icon.png" alt="">
       <p class="container">Pressure</p>
       <h5 class="container">${data.main.pressure}hPa</h5>`
  
  
       let timestamp_sunrise = data.sys.sunrise;
       let timestamp_sunset = data.sys.sunset;
  
       let timezone=data.timezone
  
      sunr.innerHTML=
      `<i class="fa-solid fa-sun container mt-2"></i>
       <p class="container">Sunrise</p>
       <h6 class="container">${timecalc(timestamp_sunrise,timezone)}</h6>`
  
      suns.innerHTML=
      `<i class="fa-solid fa-sun container mt-2"></i>
       <p class="container">Sunset</p>
       <h6 class="container">${timecalc(timestamp_sunset,timezone)}</h6>`
  
  }
  
  function timecalc(sun, zone) {
    let date = new Date(sun * 1000);
    date.setSeconds(date.getSeconds() + zone);
    const Hours = date.getUTCHours().toString().padStart(2, "0");
    const Minutes = date
      .getUTCMinutes()
      .toString()
      .padStart(2, "0");
    const Time = `${Hours}:${Minutes}`;
    return Time;
  }
  