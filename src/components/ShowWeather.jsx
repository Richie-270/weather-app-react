import React from 'react'
import { PiWind } from "react-icons/pi";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import { FiCloudRain } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";

export default function ShowWeather({ data, forecast, formattedTime}) {
  return (
    <div className="flex justify-center w-full mt-10 px-4">
      <div className="shadow-2xl max-w-[1200px] w-full p-4 sm:p-6 md:p-7 border border-black/20 rounded-xl">

        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-6 lg:ml-10 xl:ml-10">

          <div className="w-full md:w-auto text-center space-y-2">

            <h1 className="text-2xl sm:text-3xl font-bold text-sky-800">
              {data.name}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-sky-800 capitalize">
              {data.weather && data.weather[0]
                ? data.weather[0].description
                : "No description"}
            </p>

            <p className="text-lg sm:text-xl font-light mt-3">
              {data.main && typeof data.main.temp !== "undefined"
                ? Math.round(data.main.temp)
                : "--"}
              °C
            </p>

            {data.weather && data.weather[0] && (
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="mx-auto w-[140px] sm:w-[170px] md:w-[190px]"
              />
            )}

            <p className="text-base sm:text-lg font-bold">
              {formattedTime}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:w-[550px] md:w-[600px] lg:w-[750px] xl:w-[800px] place-items-center w-full border border-black/20 rounded-lg p-4">

            <div className="flex justify-center items-center flex-col gap-1">
              <IoWaterOutline className="h-10 w-10 sm:h-12 sm:w-12" />
              <p className="text-sky-800 font-bold">
                {data.main && typeof data.main.humidity !== "undefined"
                  ? data.main.humidity
                  : "--"}%
              </p>
              <p className="text-center text-base sm:text-lg font-bold text-sky-800">Humidity</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-1">
              <PiWind className="h-10 w-10 sm:h-12 sm:w-12" />
              <p className="text-sky-800 font-bold">
                {data.wind && typeof data.wind.speed !== "undefined"
                  ? Math.round(data.wind.speed * 3.6)
                  : "--"}
              </p>
              <p className="text-center text-base sm:text-lg font-bold text-sky-800">Km/h Wind</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-1">
              <PiPersonArmsSpreadLight className="h-10 w-10 sm:h-12 sm:w-12" />
              <p className="text-sky-800 font-bold">
                {data.main && typeof data.main.feels_like !== "undefined"
                  ? Math.round(data.main.feels_like)
                  : "--"}°
              </p>
              <p className="text-center text-base sm:text-lg font-bold text-sky-800">Thermal Sensation</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-1">
              <FiCloudRain className="h-10 w-10 sm:h-12 sm:w-12" />
              {forecast &&
              Array.isArray(forecast.list) &&
              forecast.list[0] &&
              typeof forecast.list[0].pop !== "undefined" ? (
                <p className="text-sky-800 font-bold">
                  {Math.round(forecast.list[0].pop * 100)}%
                </p>
              ) : (
                <p className="text-sky-800 font-bold">--%</p>
              )}
              <p className="text-center text-base sm:text-lg font-bold text-sky-800">Rain</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}