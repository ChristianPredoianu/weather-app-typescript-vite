import { getPositionData } from './ts/getPosition';
import { getWeatherData } from './ts/openWeather';
import { displayWeather, initAppUi } from './ts/ui';
import { animateApp } from './ts/gsap';
import { showUserPositionError, setInputError } from './ts/errors';

import { Position } from './types/position.interface';
import { WeatherData } from './types/weatherData.interface';

import './sass/main.scss';

export let isValidCity: boolean;

function getCurrentPositionData() {
  isValidCity = true;

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

function searchCity() {
  setInputError({ errorMsg: '', display: 'none' });
  getWeatherData(input.value)
    .then((data: WeatherData) => displayWeather(data))
    .then(() => {
      isValidCity = true;
      if (isValidCity) {
        animateApp();
        initAppUi();
        console.log(isValidCity);
      }
    })
    .catch((err) => {
      if (err) {
        setInputError({
          errorMsg: `The city ${input.value} does not exist. Try a different city`,
          display: 'block',
        });
        isValidCity = false;
        initAppUi();
      }
    });
  input.value = '';
}

const input = document.getElementById('city-search') as HTMLInputElement;
const searchIcon = document.getElementById('search-icon') as HTMLElement;

input.addEventListener('keypress', (e) => {
  if (input.value !== '' && e.key === 'Enter') {
    searchCity();
  }
});

searchIcon.addEventListener('click', (e) => {
  if (input.value !== '') {
    searchCity();
  }
});

getCurrentPositionData();
