import { useState } from "react";

const App = () => {
  const [fetchWeather, setFetchWeather] = useState({});
  const [location, setLocation] = useState("");

  const requestFetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a8f11dfb3faef3021f175e8ee7ad7e41`
    )
      .then((response) => response.json())
      .then((payload) => setFetchWeather(payload))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-800 h-screen grid place-items-center">
      <div className="bg-white w-92 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={location}
            placeholder="Enter your location"
            className="text-xl border-b
        p-1 border-gray-200 font-semibold uppercase flex-1"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={requestFetchWeather}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/751/751381.png"
              alt="..."
              className="w-8"
            />
          </button>
        </div>
        <div>
          <p>Temp</p>
          {fetchWeather.main ? <h1>{fetchWeather.main.temp}°F</h1> : null}
        </div>
        <p>Weather</p>
        <div>
          {fetchWeather.weather ? <p>{fetchWeather.weather[0].main}</p> : null}
        </div>
        <p>Feels Like</p>
        <div>
          {fetchWeather.weather ? (
            <p>{fetchWeather.main.feels_like}°F</p>
          ) : null}
        </div>
        <p>Wind</p>
        <div>
          {fetchWeather.wind ? <p>{fetchWeather.wind.speed}MPH</p> : null}
        </div>
      </div>
    </div>
  );
};

export default App;
