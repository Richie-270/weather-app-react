import { useEffect, useState } from "react";
import useWeatherStore from "../store/useWeatherStore";
import { PiCityLight } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { PiWind } from "react-icons/pi";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import { FiCloudRain } from "react-icons/fi";
import ShowWeather from "./ShowWeather";

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const city = useWeatherStore((state) => state.city);

  useEffect(() => {
    if (!city) return;

    const getWeather = async () => {
      setLoading(true);
      try {
        // Fetch current weather
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`,
        );
        const result = await res.json();
        setData(result);

        // Fetch forecast
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`,
        );
        const forecastData = await forecastRes.json();
        setForecast(forecastData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [city, API_KEY]);

  if (!city) {
    return (
      <p className="text-center mt-32 text-sky-800 text-2xl">type a city</p>
    );
  }

  if (loading) {
    return (
      <p className="text-center mt-32 text-sky-800 text-xl">Loading weather</p>
    );
  }

  // Show error
  if (data.cod !== 200) {
    return (
      <div className="flex flex-col justify-center items-center mt-32">
        <div className="text-8xl">
          <PiCityLight />
        </div>
        <p className="text-center text-3xl">{data.message}</p>
      </div>
    );
  }

  // Calculate local time in the city
  const timestampUTC = data.dt;
  const timezoneOffset = data.timezone;
  const localTimes = new Date((timestampUTC + timezoneOffset) * 1000);
  const formattedTime = localTimes.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ShowWeather data={data} forecast={forecast} formattedTime={formattedTime} />
  );
}

export default Weather;
