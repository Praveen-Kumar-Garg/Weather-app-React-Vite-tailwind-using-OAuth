import { WindIcon } from "lucide-react";

const WeatherDisplay = ({ data, unit }) => {
  if (!data) return <p>No data available</p>;

  const temperature =
    unit === "metric" ? data.main.temp : (data.main.temp * 9) / 5 + 32;
  const unitSymbol = unit === "metric" ? "C" : "F";

  return (
    <div className="flex justify-between">
      <div className=" flex flex-col items-start">
        <h2 className="text-4xl md:text-5xl font-extralight">{data.name}</h2>
        <p className="md:text-xl text-primary">{data.weather[0].description}</p>
        <p className="text-sm md:text-md flex gap-1 items-center md:gap-2 text-muted-foreground">
          <WindIcon className="w-4 md:w-5" />
          <span className={`md:block hidden`}>Wind Speeds:</span>{" "}
          {data.wind.speed} {unit === "metric" ? "m/s" : "mph"}
        </p>
      </div>
      <p className="text-4xl md:text-6xl font-semibold relative pr-6">
        {temperature.toFixed(1)}°{" "}
        <span className="text-3xl absolute top-0 right-0">{unitSymbol}</span>
      </p>
    </div>
  );
};

export default WeatherDisplay;
