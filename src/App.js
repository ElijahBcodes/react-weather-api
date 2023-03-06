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
    <div className=" h-screen grid place-items-center bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
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
          {fetchWeather.main ? (
            <h1>{fetchWeather.main.temp.toFixed()}°F</h1>
          ) : null}
        </div>
        {fetchWeather.weather !== undefined && (
          <div>
            {fetchWeather.weather ? (
              <p>{fetchWeather.weather[0].main}</p>
            ) : null}

            <p>Feels Like</p>
            <div>
              {fetchWeather.weather ? (
                <p>{fetchWeather.main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <p>Wind</p>
            <div>
              {fetchWeather.wind ? (
                <p>{fetchWeather.wind.speed.toFixed()}MPH</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
