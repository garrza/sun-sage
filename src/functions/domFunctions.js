import apiFunctions from "./apiFunctions.js";

const { getCurrentWeather, getForecastWeather } = apiFunctions;

const createCurrentWeatherWidget = async () => {
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

  const currentWeatherData = await getCurrentWeather();

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

const createForecastWeatherWidget = async () => {
  const forecastWeatherWidget = document.createElement("div");
  forecastWeatherWidget.classList.add("forecast-weather-widget");

  const forecastWeatherData = await getForecastWeather();
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
  const timeWidgetTime = document.createElement("div");
  const timeWidgetDate = document.createElement("div");

  timeWidget.classList.add("time-widget");
  timeWidgetTime.classList.add("time-widget__time");
  timeWidgetDate.classList.add("time-widget__date");

  timeWidget.appendChild(timeWidgetTime);
  timeWidget.appendChild(timeWidgetDate);

  const date = new Date();

  timeWidgetTime.textContent = date.toLocaleTimeString();
  timeWidgetDate.textContent = date.toLocaleDateString();

  setInterval(() => {
    const date = new Date();

    timeWidgetTime.textContent = date.toLocaleTimeString();
    timeWidgetDate.textContent = date.toLocaleDateString();
  }, 1000);

  return timeWidget;
};

const initialize = async () => {
  const body = document.querySelector("body");

  const currentWeatherWidget = await createCurrentWeatherWidget();
  const forecastWeatherWidget = await createForecastWeatherWidget();
  const timeWidget = createTimeWidget();

  body.appendChild(currentWeatherWidget);
  body.appendChild(forecastWeatherWidget);
  body.appendChild(timeWidget);
};

export default initialize;
