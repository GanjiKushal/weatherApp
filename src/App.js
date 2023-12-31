import cityBg from "./assets/city.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./compoenets/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import axios from "axios";

function App() {
  const [city, setCity] = useState("Pune");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("imperial");
  const [bg, setBg] = useState(cityBg);

  /*This is for User Location */
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCity(location.data.city);
    console.log(location.data.city);
  };

  /*This is for Input Location */
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      console.log(data);
      console.log(data.temp);
      const threshold = units === "metric" ? 22 : 60;
      if (data?.temp <= threshold) setBg(coldBg);
      else setBg(cityBg);
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>

            {/*Input Location */}
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather?.name},${weather?.country}`}</h3>
                <img src={weather?.iconURL} alt="weatherIcon" />
                <h3>{weather?.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather?.temp.toFixed()}°${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            {/* bottom description */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
