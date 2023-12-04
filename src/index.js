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

const bird1 = document.createElement("div");
bird1.classList.add("bird");
bird1.setAttribute("id", "bird1");

const bird2 = document.createElement("div");
bird2.classList.add("bird");
bird2.setAttribute("id", "bird2");

body.appendChild(bird1);
body.appendChild(bird2);
