import { WeatherData } from '../types/weatherData.interface';

export function displayWeather(data: WeatherData) {
  displayLocationAndDate(data);
  displayMainWeather(data);
  displayAdditionalInfo(data);
  console.log(data);
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
  const date = new Date(timeStamp);
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return time;
}

function displayLocationAndDate(data: WeatherData) {
  const locationHeading = document.getElementById(
    'location'
  ) as HTMLHeadingElement;
  locationHeading.textContent = data.name;

  const countrySpan = document.createElement('span') as HTMLSpanElement;
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

  highParagraph.innerText = `${roundNumber(data.main.temp_max).toString()} `;
  const degreesParagraph = document.querySelectorAll(
    '.aditional-info__degrees'
  );
  console.log(degreesParagraph);

  const degreesSpan = document.createElement('span') as HTMLSpanElement;
  degreesSpan.classList.add('additional-info__degrees-span');
  degreesSpan.innerText = '°';
  highParagraph.appendChild(degreesSpan);
  feelsLikeParagraph.innerText = `${roundNumber(
    data.main.feels_like
  ).toString()}`;
  sunriseParagraph.innerText = formatTimeStamp(data.sys.sunrise).toString();
  lowParagraph.innerText = `${roundNumber(data.main.temp_min).toString()} °`;
  humidityParagraph.innerText = `${data.main.humidity.toString()} %`;
  sunsetParagraph.innerText = formatTimeStamp(data.sys.sunset).toString();
}
