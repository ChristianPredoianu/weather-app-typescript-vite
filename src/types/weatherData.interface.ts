export interface WeatherData {
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    grnd_level: number;
    sea_level: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
}
