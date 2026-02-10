import { useState } from "react";
import useWeatherStore from "../store/useWeatherStore";
import { CiSearch } from "react-icons/ci";

function InputWeather() {
  const [input, setInput] = useState("");
  const [error, setError ] = useState(null)
  const setCity = useWeatherStore((state) => state.setCity);

  const handleISumbit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      setError("Please enter a city name");
      return;
    }
    setCity(trimmedInput);
    setInput("");
    setError(null)
  };

  

  return (
  <div className="w-full flex justify-center px-4 mt-6">
      <form
        onSubmit={handleISumbit}
        className="flex items-center gap-2 w-full max-w-3xl"
      >
        <input
          className="flex-1 bg-sky-100/10 border border-sky-700/55 p-3
          rounded-3xl text-center text-lg
          hover:bg-gray-100/40 transition-transform duration-300 hover:scale-[1.02]"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city name"
          value={input}
        />

        <button
          className="bg-sky-400/80 text-white rounded-3xl p-4
          hover:bg-sky-500/60 transition-transform duration-300 hover:scale-[1.02]"
          type="submit"
        >
          <CiSearch />
        </button>
      </form>

      {error && (
        <p className="absolute top-20 text-red-500 font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputWeather;
