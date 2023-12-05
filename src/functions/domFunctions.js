import apiFunctions from "./apiFunctions.js";

const { getCurrentWeather, getForecastWeather } = apiFunctions;

const createCurrentWeatherWidget = async () => {
  const currentWeatherWidget = document.createElement("div");
  const currentWeatherWidgetTitle = document.createElement("div");
  const currentWeatherWidgetLocation = document.createElement("div");
  const currentWeatherWidgetDate = document.createElement("div");
  const currentWeatherWidgetTemperatureC = document.createElement("div");
  const currentWeatherWidgetTemperatureF = document.createElement("div");
  const currentWeatherWidgetCondition = document.createElement("div");
  const currentWeatherWidgetConditionIcon = document.createElement("img");
  const currentWeatherWidgetWind = document.createElement("div");
  const currentWeatherWidgetHumidity = document.createElement("div");

  currentWeatherWidget.classList.add("current-weather-widget");
  currentWeatherWidgetLocation.classList.add(
    "current-weather-widget__location"
  );
  currentWeatherWidgetTitle.classList.add("current-weather-widget__title");
  currentWeatherWidgetDate.classList.add("current-weather-widget__date");
  currentWeatherWidgetTemperatureC.classList.add(
    "current-weather-widget__temperatureC"
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

  currentWeatherWidget.appendChild(currentWeatherWidgetTitle);
  currentWeatherWidget.appendChild(currentWeatherWidgetLocation);
  currentWeatherWidget.appendChild(currentWeatherWidgetDate);
  currentWeatherWidget.appendChild(currentWeatherWidgetTemperatureC);
  currentWeatherWidget.appendChild(currentWeatherWidgetTemperatureF);
  currentWeatherWidget.appendChild(currentWeatherWidgetCondition);
  currentWeatherWidget.appendChild(currentWeatherWidgetConditionIcon);
  currentWeatherWidget.appendChild(currentWeatherWidgetWind);
  currentWeatherWidget.appendChild(currentWeatherWidgetHumidity);

  const currentWeatherData = await getCurrentWeather();

  currentWeatherWidgetTitle.textContent = "Current Weather";
  currentWeatherWidgetLocation.textContent = currentWeatherData.location.name;
  currentWeatherWidgetDate.textContent = currentWeatherData.location.localtime;
  currentWeatherWidgetTemperatureC.textContent = `${currentWeatherData.current.temp_c}°C`;
  currentWeatherWidgetTemperatureF.textContent = `${currentWeatherData.current.temp_f}°F`;
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
  const forecastWeatherWidgetTitle = document.createElement("div");
  forecastWeatherWidget.classList.add("forecast-weather-widget");

  forecastWeatherWidgetTitle.classList.add("forecast-weather-widget__title");
  forecastWeatherWidgetTitle.textContent = "Forecast Weather";

  forecastWeatherWidget.appendChild(forecastWeatherWidgetTitle);

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

    forecastWeatherWidgetDate.textContent = day.date;
    forecastWeatherWidgetMin.textContent = `Min: ${day.day.mintemp_c}°C / ${day.day.mintemp_f}°F`;
    forecastWeatherWidgetMax.textContent = `Max: ${day.day.maxtemp_c}°C / ${day.day.maxtemp_f}°F`;
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
  const timeWidgetTitle = document.createElement("div");
  const timeWidgetTime = document.createElement("div");
  const timeWidgetDate = document.createElement("div");

  timeWidget.classList.add("time-widget");
  timeWidgetTime.classList.add("time-widget__time");
  timeWidgetDate.classList.add("time-widget__date");

  timeWidget.appendChild(timeWidgetTitle);
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

  timeWidgetTitle.textContent = "Monterrey, Mexico";

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
