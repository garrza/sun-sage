// Current Weather API call
async function getCurrentWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=629b20e599e14c09915172558230311&q=monterrey",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}

// Forecast Weather API call
async function getForecastWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=629b20e599e14c09915172558230311&q=monterrey&days=7",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}

function getLocalTime(data) {
  let date = new Date();
  let time = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = time + localOffset;
  let localTime = utc + 1000 * data;
  let localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
}

export default { getCurrentWeather, getForecastWeather, getLocalTime };
