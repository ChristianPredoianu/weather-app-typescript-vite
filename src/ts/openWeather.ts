import { Position } from '../types/position.interface';

export async function getWeatherData(position: string): Promise<any>;
export async function getWeatherData(position: Position): Promise<any>;

export async function getWeatherData(position: any) {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  let locationUrl;

  typeof position === 'string'
    ? (locationUrl = `${baseUrl}q=${position}&appid=${apiKey}&units=metric`)
    : (locationUrl = `${baseUrl}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric
  `);

  try {
    const response = await fetch(locationUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
