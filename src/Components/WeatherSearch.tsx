// src/components/WeatherSearch.js
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { fetchWeatherData } from "../weatherAPI";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RotateCcw, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [unit, setUnit] = useState("metric");

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setRecentSearches((prev) => [...new Set([city, ...prev])].slice(0, 5));
      setCity("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className=" flex flex-col gap-4 mt-10">
      <div className="flex flex-row justify-between">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full"
        />

        <Button onClick={handleSearch}>
          <Search />
        </Button>
        <Button
          onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
        >
          <span className="hidden md:block">Switch to</span>
          <span className="md:hidden">
            <RotateCcw />
          </span>{" "}
          {unit === "metric" ? "°F" : "°C"}
        </Button>
      </div>
      <WeatherDisplay data={weatherData} unit={unit} />
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-sm">Recent Searches</h3>
        <div className="flex gap-2">
          {recentSearches.map((search, index) => (
            <Badge className="py-1 px-4" key={index}>
              {search}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherSearch;
