/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VuLXNhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjI5YjIwZTU5OWUxNGMwOTkxNTE3MjU1ODIzMDMxMSZxPW1vbnRlcnJleSZkYXlzPTNcIixcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuY29uc29sZS5sb2coZ2V0Rm9yZWNhc3RXZWF0aGVyKCkpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGJpcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJpcmQxLmNsYXNzTGlzdC5hZGQoXCJiaXJkXCIpO1xuYmlyZDEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiaXJkMVwiKTtcblxuY29uc3QgYmlyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmlyZDIuY2xhc3NMaXN0LmFkZChcImJpcmRcIik7XG5iaXJkMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJpcmQyXCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGJpcmQxKTtcbmJvZHkuYXBwZW5kQ2hpbGQoYmlyZDIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9