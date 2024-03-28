import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState("")
  const [weatherInfo,setWeatherInfo] = useState(null)
  function getweather(){
    const apikey='c95d18b5ddbc2fc1e9aa606147c26a63';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let MT=Math.round(data.main.temp);
      let FL=Math.round(data.main.feels_like);

      const weather={
        location:`${data.name}, ${data.sys.country}`,
        temperature:`${MT}`,
        feelslike:`${FL}`,
        humidity:`${data.main.humidity}`,
        wind:`${data.wind.speed}`,
        condition:`${data.weather[0].description}`,
        icon:`${data.weather[0].icon}`,
      };
      
      setWeatherInfo(weather)
     
      })
  }
  return (
    <>
      <div>
        <h1>Weather Today</h1>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getweather}>Get Weather</button>
        {weatherInfo &&(
          <div className='weather-info'>
            <h1>{weatherInfo.temperature}°C</h1>
            <h2>{weatherInfo.location}</h2>
            <p>{weatherInfo.humidity}% Humidity</p>
            <p>{weatherInfo.wind} Km/h Wind Speed</p>
            <p>{weatherInfo.condition}</p>
           
            
          </div>
        )}
      </div>
    </>
  )
}

export default App
