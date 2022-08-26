import { WeatherData } from '../types/weatherData.interface';
import { isValidCity } from '..';

export function initAppUi() {
  const mainWeatherDiv = document.getElementById(
    'main-weather'
  ) as HTMLDivElement;
  const weatherIcon = document.getElementById(
    'weather-icon'
  ) as HTMLImageElement;
  const additionalWeatherDiv = document.getElementById(
    'additional-weather-info'
  ) as HTMLDivElement;
  const infoCardsDiv = document.getElementById('info-cards') as HTMLDivElement;

  if (isValidCity) {
    mainWeatherDiv.style.display = 'flex';
    weatherIcon.style.display = 'block';
    additionalWeatherDiv.style.display = 'block';
    infoCardsDiv.style.display = 'flex';
  } else {
    mainWeatherDiv.style.display = 'none';
    weatherIcon.style.display = 'none';
    additionalWeatherDiv.style.display = 'none';
    infoCardsDiv.style.display = 'none';
  }
}

export function displayWeather(data: WeatherData) {
  displayLocationAndDate(data);
  displayMainWeather(data);
  displayAdditionalInfo(data);
  displayInfoCards(data);
}

function capitalizeFirstLetter(str: string) {
  const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalizedString;
}

function roundNumber(num: number) {
  const roundedNumber = Math.round(num);

  return roundedNumber;
}

function formatTimeStamp(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const time = `${padTo2Digits(hours)} : ${padTo2Digits(minutes)}`;

  return time;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function displayLocationAndDate(data: WeatherData) {
  const locationHeading = document.getElementById(
    'location'
  ) as HTMLHeadingElement;
  const countrySpan = document.createElement('span') as HTMLSpanElement;

  locationHeading.textContent = data.name;
  countrySpan.innerText = `, ${data.sys.country}`;
  locationHeading.appendChild(countrySpan);
}

function displayMainWeather(data: WeatherData) {
  const weatherIcon = document.getElementById(
    'weather-icon'
  ) as HTMLImageElement;
  const degreesHeading = document.getElementById('degrees') as HTMLHeadElement;
  const weatherDescriptionParagraph = document.getElementById(
    'weather-description'
  ) as HTMLParagraphElement;

  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  degreesHeading.innerText = `${roundNumber(data.main.temp).toString()} °`;
  weatherDescriptionParagraph.innerText = capitalizeFirstLetter(
    data.weather[0].description
  );
}

function displayAdditionalInfo(data: WeatherData) {
  const highParagraph = document.getElementById('high') as HTMLParagraphElement,
    feelsLikeParagraph = document.getElementById(
      'feels-like'
    ) as HTMLParagraphElement,
    sunriseParagraph = document.getElementById(
      'sunrise'
    ) as HTMLParagraphElement,
    lowParagraph = document.getElementById('low') as HTMLParagraphElement,
    humidityParagraph = document.getElementById(
      'humidity'
    ) as HTMLParagraphElement,
    sunsetParagraph = document.getElementById('sunset') as HTMLParagraphElement;

  highParagraph.innerText = `${roundNumber(data.main.temp_max).toString()} °`;
  feelsLikeParagraph.innerText = `${roundNumber(
    data.main.feels_like
  ).toString()} °`;
  sunriseParagraph.innerText = formatTimeStamp(data.sys.sunrise).toString();
  lowParagraph.innerText = `${roundNumber(data.main.temp_min).toString()} °`;
  humidityParagraph.innerText = `${data.main.humidity.toString()} %`;
  sunsetParagraph.innerText = formatTimeStamp(data.sys.sunset).toString();
}

function displayInfoCards(data: WeatherData) {
  const pressure = document.getElementById('pressure') as HTMLParagraphElement;
  const pressureGrndLevel = document.getElementById(
    'ground-level'
  ) as HTMLParagraphElement;
  const pressureSeaLevel = document.getElementById(
    'sea-level'
  ) as HTMLParagraphElement;

  pressure.innerText = `${data.main.pressure.toString()} hPa`;
  data.main.grnd_level
    ? (pressureGrndLevel.innerText = `${data.main.grnd_level.toString()} hPa`)
    : (pressureGrndLevel.innerText = 'No data');

  data.main.sea_level
    ? (pressureSeaLevel.innerText = `${data.main.sea_level.toString()} hPa`)
    : (pressureSeaLevel.innerText = 'No data');
}
