/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/apiFunctions.js":
/*!***************************************!*\
  !*** ./src/functions/apiFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getCurrentWeather, getForecastWeather });


/***/ }),

/***/ "./src/functions/domFunctions.js":
/*!***************************************!*\
  !*** ./src/functions/domFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions.js */ "./src/functions/apiFunctions.js");


const { getCurrentWeather, getForecastWeather } = _apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__["default"];

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_domFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/domFunctions.js */ "./src/functions/domFunctions.js");


(0,_functions_domFunctions_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSx1Q0FBdUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWjs7QUFFN0MsUUFBUSx3Q0FBd0MsRUFBRSx3REFBWTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtDQUFrQztBQUN0RixvREFBb0Qsa0NBQWtDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsa0JBQWtCLE9BQU8sa0JBQWtCO0FBQzlGLG1EQUFtRCxrQkFBa0IsT0FBTyxrQkFBa0I7QUFDOUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQy9KMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xRDs7QUFFckQsc0VBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW4tc2FnZS8uL3NyYy9mdW5jdGlvbnMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3N1bi1zYWdlLy4vc3JjL2Z1bmN0aW9ucy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N1bi1zYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdW4tc2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXJyZW50IFdlYXRoZXIgQVBJIGNhbGxcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02MjliMjBlNTk5ZTE0YzA5OTE1MTcyNTU4MjMwMzExJnE9bW9udGVycmV5XCIsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIEZvcmVjYXN0IFdlYXRoZXIgQVBJIGNhbGxcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlcigpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTYyOWIyMGU1OTllMTRjMDk5MTUxNzI1NTgyMzAzMTEmcT1tb250ZXJyZXkmZGF5cz03XCIsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZvcmVjYXN0V2VhdGhlciB9O1xuIiwiaW1wb3J0IGFwaUZ1bmN0aW9ucyBmcm9tIFwiLi9hcGlGdW5jdGlvbnMuanNcIjtcblxuY29uc3QgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3RXZWF0aGVyIH0gPSBhcGlGdW5jdGlvbnM7XG5cbmNvbnN0IGNyZWF0ZUN1cnJlbnRXZWF0aGVyV2lkZ2V0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRUZW1wZXJhdHVyZUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldFRlbXBlcmF0dXJlRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci13aWRnZXRcIik7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0TG9jYXRpb24uY2xhc3NMaXN0LmFkZChcbiAgICBcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX2xvY2F0aW9uXCJcbiAgKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9fdGl0bGVcIik7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0RGF0ZS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9fZGF0ZVwiKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRUZW1wZXJhdHVyZUMuY2xhc3NMaXN0LmFkZChcbiAgICBcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX3RlbXBlcmF0dXJlQ1wiXG4gICk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjdXJyZW50LXdlYXRoZXItd2lkZ2V0X19jb25kaXRpb25cIlxuICApO1xuICBjdXJyZW50V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24uY2xhc3NMaXN0LmFkZChcbiAgICBcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX2NvbmRpdGlvbi1pY29uXCJcbiAgKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRXaW5kLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXdlYXRoZXItd2lkZ2V0X193aW5kXCIpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldEh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjdXJyZW50LXdlYXRoZXItd2lkZ2V0X19odW1pZGl0eVwiXG4gICk7XG5cbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRUaXRsZSk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0TG9jYXRpb24pO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldERhdGUpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldFRlbXBlcmF0dXJlQyk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVGKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb24pO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24pO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldFdpbmQpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldEh1bWlkaXR5KTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcigpO1xuXG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgV2VhdGhlclwiO1xuICBjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVDLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jfcKwQ2A7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVGLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mfcKwRmA7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uLnRleHRDb250ZW50ID1cbiAgICBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uLnNyYyA9XG4gICAgY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0V2luZC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoO1xuICBjdXJyZW50V2VhdGhlcldpZGdldEh1bWlkaXR5LnRleHRDb250ZW50ID1cbiAgICBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eTtcblxuICByZXR1cm4gY3VycmVudFdlYXRoZXJXaWRnZXQ7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JlY2FzdFdlYXRoZXJXaWRnZXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldFwiKTtcblxuICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX3RpdGxlXCIpO1xuICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRUaXRsZS50ZXh0Q29udGVudCA9IFwiRm9yZWNhc3QgV2VhdGhlclwiO1xuXG4gIGZvcmVjYXN0V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJXaWRnZXRUaXRsZSk7XG5cbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyRGF0YSA9IGF3YWl0IGdldEZvcmVjYXN0V2VhdGhlcigpO1xuICBjb25zdCBmb3JlY2FzdFdlYXRoZXJEYXlzID0gZm9yZWNhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICBmb3JlY2FzdFdlYXRoZXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldF9fZGF5XCIpO1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldERhdGUuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19kYXRlXCIpO1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldE1pbi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX21pblwiKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXguY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19tYXhcIik7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19jb25kaXRpb25cIlxuICAgICk7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldF9fY29uZGl0aW9uLWljb25cIlxuICAgICk7XG5cbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXREYXRlLnRleHRDb250ZW50ID0gZGF5LmRhdGU7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluLnRleHRDb250ZW50ID0gYE1pbjogJHtkYXkuZGF5Lm1pbnRlbXBfY33CsEMgLyAke2RheS5kYXkubWludGVtcF9mfcKwRmA7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWF4LnRleHRDb250ZW50ID0gYE1heDogJHtkYXkuZGF5Lm1heHRlbXBfY33CsEMgLyAke2RheS5kYXkubWF4dGVtcF9mfcKwRmA7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF5LmRheS5jb25kaXRpb24udGV4dDtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uLnNyYyA9IGRheS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBmb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJXaWRnZXREYXkpO1xuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldERhdGUpO1xuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldE1pbik7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWF4KTtcbiAgICBmb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb24pO1xuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24pO1xuXG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0V2VhdGhlcldpZGdldDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRpbWVXaWRnZXQgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aW1lV2lkZ2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aW1lV2lkZ2V0VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVXaWRnZXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB0aW1lV2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXdpZGdldFwiKTtcbiAgdGltZVdpZGdldFRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWUtd2lkZ2V0X190aW1lXCIpO1xuICB0aW1lV2lkZ2V0RGF0ZS5jbGFzc0xpc3QuYWRkKFwidGltZS13aWRnZXRfX2RhdGVcIik7XG5cbiAgdGltZVdpZGdldC5hcHBlbmRDaGlsZCh0aW1lV2lkZ2V0VGl0bGUpO1xuICB0aW1lV2lkZ2V0LmFwcGVuZENoaWxkKHRpbWVXaWRnZXRUaW1lKTtcbiAgdGltZVdpZGdldC5hcHBlbmRDaGlsZCh0aW1lV2lkZ2V0RGF0ZSk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgdGltZVdpZGdldFRpbWUudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICB0aW1lV2lkZ2V0RGF0ZS50ZXh0Q29udGVudCA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdGltZVdpZGdldFRpbWUudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHRpbWVXaWRnZXREYXRlLnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgfSwgMTAwMCk7XG5cbiAgdGltZVdpZGdldFRpdGxlLnRleHRDb250ZW50ID0gXCJNb250ZXJyZXksIE1leGljb1wiO1xuXG4gIHJldHVybiB0aW1lV2lkZ2V0O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0ID0gYXdhaXQgY3JlYXRlQ3VycmVudFdlYXRoZXJXaWRnZXQoKTtcbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0ID0gYXdhaXQgY3JlYXRlRm9yZWNhc3RXZWF0aGVyV2lkZ2V0KCk7XG4gIGNvbnN0IHRpbWVXaWRnZXQgPSBjcmVhdGVUaW1lV2lkZ2V0KCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0KTtcbiAgYm9keS5hcHBlbmRDaGlsZCh0aW1lV2lkZ2V0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplIGZyb20gXCIuL2Z1bmN0aW9ucy9kb21GdW5jdGlvbnMuanNcIjtcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9