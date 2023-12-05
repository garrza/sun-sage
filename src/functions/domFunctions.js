import {
  getCurrentWeather,
  getForecastWeather,
  getLocalTime,
} from "./apiFunctions.js";

const createCurrentWeatherWidget = () => {
  const currentWeatherWidget = document.createElement("div");
  const currentWeatherWidgetLocation = document.createElement("div");
  const currentWeatherWidgetDate = document.createElement("div");
  const currentWeatherWidgetTemperature = document.createElement("div");
  const currentWeatherWidgetCondition = document.createElement("div");
  const currentWeatherWidgetConditionIcon = document.createElement("img");
  const currentWeatherWidgetWind = document.createElement("div");
  const currentWeatherWidgetHumidity = document.createElement("div");

  currentWeatherWidget.classList.add("current-weather-widget");
  currentWeatherWidgetLocation.classList.add(
    "current-weather-widget__location"
  );
  currentWeatherWidgetDate.classList.add("current-weather-widget__date");
  currentWeatherWidgetTemperature.classList.add(
    "current-weather-widget__temperature"
  );
  currentWeatherWidgetCondition.classList.add(
    "current-weather-widget__condition"
  );
  currentWeatherWidgetConditionIcon.classList.add(
    "current-weather-widget__condition-icon"
  );
  currentWeatherWidgetWind.classList.add("current-weather-widget__wind");
  currentWeatherWidgetHumidity.classList.add(
    "current-weather-widget__humidity"
  );

  currentWeatherWidget.appendChild(currentWeatherWidgetLocation);
  currentWeatherWidget.appendChild(currentWeatherWidgetDate);
  currentWeatherWidget.appendChild(currentWeatherWidgetTemperature);
  currentWeatherWidget.appendChild(currentWeatherWidgetCondition);
  currentWeatherWidget.appendChild(currentWeatherWidgetConditionIcon);
  currentWeatherWidget.appendChild(currentWeatherWidgetWind);
  currentWeatherWidget.appendChild(currentWeatherWidgetHumidity);

  const currentWeatherData = getCurrentWeather();

  currentWeatherWidgetLocation.textContent = currentWeatherData.location.name;
  currentWeatherWidgetDate.textContent = currentWeatherData.location.localtime;
  currentWeatherWidgetTemperature.textContent =
    currentWeatherData.current.temp_c;
  currentWeatherWidgetCondition.textContent =
    currentWeatherData.current.condition.text;
  currentWeatherWidgetConditionIcon.src =
    currentWeatherData.current.condition.icon;
  currentWeatherWidgetWind.textContent = currentWeatherData.current.wind_kph;
  currentWeatherWidgetHumidity.textContent =
    currentWeatherData.current.humidity;

  return currentWeatherWidget;
};

const createForecastWeatherWidget = () => {
  const forecastWeatherWidget = document.createElement("div");
  forecastWeatherWidget.classList.add("forecast-weather-widget");

  const forecastWeatherData = getForecastWeather();
  const forecastWeatherDays = forecastWeatherData.forecast.forecastday;

  forecastWeatherDays.forEach((day) => {
    const forecastDay = document.createElement("div");
    const forecastWeatherWidgetDay = document.createElement("div");
    const forecastWeatherWidgetDate = document.createElement("div");
    const forecastWeatherWidgetMin = document.createElement("div");
    const forecastWeatherWidgetMax = document.createElement("div");
    const forecastWeatherWidgetCondition = document.createElement("div");
    const forecastWeatherWidgetConditionIcon = document.createElement("img");

    forecastWeatherWidgetDay.classList.add("forecast-weather-widget__day");
    forecastWeatherWidgetDate.classList.add("forecast-weather-widget__date");
    forecastWeatherWidgetMin.classList.add("forecast-weather-widget__min");
    forecastWeatherWidgetMax.classList.add("forecast-weather-widget__max");
    forecastWeatherWidgetCondition.classList.add(
      "forecast-weather-widget__condition"
    );
    forecastWeatherWidgetConditionIcon.classList.add(
      "forecast-weather-widget__condition-icon"
    );

    forecastWeatherWidgetDay.textContent = day.date;
    forecastWeatherWidgetDate.textContent = day.date;
    forecastWeatherWidgetMin.textContent = day.day.mintemp_c;
    forecastWeatherWidgetMax.textContent = day.day.maxtemp_c;
    forecastWeatherWidgetCondition.textContent = day.day.condition.text;
    forecastWeatherWidgetConditionIcon.src = day.day.condition.icon;

    forecastDay.appendChild(forecastWeatherWidgetDay);
    forecastDay.appendChild(forecastWeatherWidgetDate);
    forecastDay.appendChild(forecastWeatherWidgetMin);
    forecastDay.appendChild(forecastWeatherWidgetMax);
    forecastDay.appendChild(forecastWeatherWidgetCondition);
    forecastDay.appendChild(forecastWeatherWidgetConditionIcon);

    forecastWeatherWidget.appendChild(forecastDay);
  });

  return forecastWeatherWidget;
};

const createTimeWidget = () => {
  const timeWidget = document.createElement("div");
  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time-div");

  timeDiv.textContent = getLocalTime();
  timeWidget.appendChild(timeDiv);

  return timeWidget;
};

const initialize = () => {
  const body = document.querySelector("body");

  const currentWeatherWidget = createCurrentWeatherWidget();
  const forecastWeatherWidget = createForecastWeatherWidget();
  const timeWidget = createTimeWidget();

  body.appendChild(currentWeatherWidget);
  body.appendChild(forecastWeatherWidget);
  body.appendChild(timeWidget);
};
