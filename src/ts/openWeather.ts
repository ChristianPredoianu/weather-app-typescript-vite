import { Position } from '../types/position.interface';

export async function getWeatherData(position: Position) {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

  try {
    const response = await fetch(
      `${baseUrl}lat=${position.coords.latitude}&lon=${
        position.coords.longitude
      }&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric
      `
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
