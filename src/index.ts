import './sass/main.scss';
import { getPositionData } from './ts/getPosition';
import { getWeatherData } from './ts/openWeather';
import { displayWeather } from './ts/ui';
import { Position } from './types/position.interface';
import { WeatherData } from './types/weatherData.interface';
import './ts/openWeather';

function getCurrentPositionData() {
  getPositionData().then((position: Position) =>
    getWeatherData(position).then((data: WeatherData) => displayWeather(data))
  );
}

getCurrentPositionData();
