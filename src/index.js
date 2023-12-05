async function getForecastWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=629b20e599e14c09915172558230311&q=monterrey&days=3",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}

console.log(getForecastWeather());

const body = document.querySelector("body");

const testDiv = document.createElement("div");
testDiv.classList.add("testDiv");
testDiv.textContent = "Hello World";

body.appendChild(testDiv);
