import './sass/main.scss';
import { getPositionData } from './ts/getPosition';
import { getWeatherData } from './ts/openWeather';
import { displayWeather } from './ts/ui';
import { animateApp } from './ts/gsap';
import { showUserPositionError } from './ts/errors';

import { Position } from './types/position.interface';
import { WeatherData } from './types/weatherData.interface';
import './ts/openWeather';

function getCurrentPositionData() {
  getPositionData()
    .then((position: Position) => {
      initAppUi();
      animateApp();
      getWeatherData(position).then((data: WeatherData) =>
        displayWeather(data)
      );
    })
    .catch((err) => {
      if (err) showUserPositionError(err.message);
    });
}

function initAppUi() {
  const weatherIcon = document.getElementById(
    'weather-icon'
  ) as HTMLImageElement;
  weatherIcon.style.display = 'block';
  const additionalWeatherDiv = document.getElementById(
    'additional-weather-info'
  ) as HTMLDivElement;
  additionalWeatherDiv.style.display = 'block';
  const infoCardsDiv = document.getElementById('info-cards') as HTMLDivElement;
  infoCardsDiv.style.display = 'flex';
}

const searchIcon = document.getElementById('search-icon') as HTMLElement;
const input = document.getElementById('city-search') as HTMLInputElement;

input.addEventListener('keypress', (e) => {
  if (input.value !== '' && e.key === 'Enter') {
    getWeatherData(input.value).then((data: WeatherData) =>
      displayWeather(data)
    );
    animateApp();
  }
});

searchIcon.addEventListener('click', (e) => {
  if (input.value !== '') {
  } else {
  }
});

getCurrentPositionData();
