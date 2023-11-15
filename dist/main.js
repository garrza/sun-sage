/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Verify connection to Weather API

async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=629b20e599e14c09915172558230311&q=monterrey",
    { mode: "cors" }
  );
  const data = await response.json();

  return data;
}

console.log(getWeather());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW4tc2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWZXJpZnkgY29ubmVjdGlvbiB0byBXZWF0aGVyIEFQSVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02MjliMjBlNTk5ZTE0YzA5OTE1MTcyNTU4MjMwMzExJnE9bW9udGVycmV5XCIsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmNvbnNvbGUubG9nKGdldFdlYXRoZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=