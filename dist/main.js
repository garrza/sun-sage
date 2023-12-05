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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSx1Q0FBdUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWjs7QUFFN0MsUUFBUSx3Q0FBd0MsRUFBRSx3REFBWTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2hKMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xRDs7QUFFckQsc0VBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW4tc2FnZS8uL3NyYy9mdW5jdGlvbnMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3N1bi1zYWdlLy4vc3JjL2Z1bmN0aW9ucy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N1bi1zYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdW4tc2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXJyZW50IFdlYXRoZXIgQVBJIGNhbGxcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02MjliMjBlNTk5ZTE0YzA5OTE1MTcyNTU4MjMwMzExJnE9bW9udGVycmV5XCIsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIEZvcmVjYXN0IFdlYXRoZXIgQVBJIGNhbGxcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlcigpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTYyOWIyMGU1OTllMTRjMDk5MTUxNzI1NTgyMzAzMTEmcT1tb250ZXJyZXkmZGF5cz03XCIsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZvcmVjYXN0V2VhdGhlciB9O1xuIiwiaW1wb3J0IGFwaUZ1bmN0aW9ucyBmcm9tIFwiLi9hcGlGdW5jdGlvbnMuanNcIjtcblxuY29uc3QgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3RXZWF0aGVyIH0gPSBhcGlGdW5jdGlvbnM7XG5cbmNvbnN0IGNyZWF0ZUN1cnJlbnRXZWF0aGVyV2lkZ2V0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldEh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjdXJyZW50V2VhdGhlcldpZGdldC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13ZWF0aGVyLXdpZGdldFwiKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFxuICAgIFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9fbG9jYXRpb25cIlxuICApO1xuICBjdXJyZW50V2VhdGhlcldpZGdldERhdGUuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX2RhdGVcIik7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcbiAgICBcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX3RlbXBlcmF0dXJlXCJcbiAgKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcbiAgICBcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX2NvbmRpdGlvblwiXG4gICk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFxuICAgIFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9fY29uZGl0aW9uLWljb25cIlxuICApO1xuICBjdXJyZW50V2VhdGhlcldpZGdldFdpbmQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX3dpbmRcIik7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0SHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcbiAgICBcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX2h1bWlkaXR5XCJcbiAgKTtcblxuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXREYXRlKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRUZW1wZXJhdHVyZSk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRXaW5kKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRIdW1pZGl0eSk7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXIoKTtcblxuICBjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPVxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYztcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb24udGV4dENvbnRlbnQgPVxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjdXJyZW50V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24uc3JjID1cbiAgICBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRXaW5kLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGg7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0SHVtaWRpdHkudGV4dENvbnRlbnQgPVxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuXG4gIHJldHVybiBjdXJyZW50V2VhdGhlcldpZGdldDtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0V2VhdGhlcldpZGdldCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldFwiKTtcblxuICBjb25zdCBmb3JlY2FzdFdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3RXZWF0aGVyKCk7XG4gIGNvbnN0IGZvcmVjYXN0V2VhdGhlckRheXMgPSBmb3JlY2FzdFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuXG4gIGZvcmVjYXN0V2VhdGhlckRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3REYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXREYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19kYXlcIik7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX2RhdGVcIik7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldF9fbWluXCIpO1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldE1heC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX21heFwiKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX2NvbmRpdGlvblwiXG4gICAgKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19jb25kaXRpb24taWNvblwiXG4gICAgKTtcblxuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldERheS50ZXh0Q29udGVudCA9IGRheS5kYXRlO1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldERhdGUudGV4dENvbnRlbnQgPSBkYXkuZGF0ZTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNaW4udGV4dENvbnRlbnQgPSBkYXkuZGF5Lm1pbnRlbXBfYztcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXgudGV4dENvbnRlbnQgPSBkYXkuZGF5Lm1heHRlbXBfYztcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24uc3JjID0gZGF5LmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldERheSk7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF0ZSk7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluKTtcbiAgICBmb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXgpO1xuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbik7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uSWNvbik7XG5cbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXkpO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3RXZWF0aGVyV2lkZ2V0O1xufTtcblxuY29uc3QgY3JlYXRlVGltZVdpZGdldCA9ICgpID0+IHtcbiAgY29uc3QgdGltZVdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVXaWRnZXRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGltZVdpZGdldERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHRpbWVXaWRnZXQuY2xhc3NMaXN0LmFkZChcInRpbWUtd2lkZ2V0XCIpO1xuICB0aW1lV2lkZ2V0VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZS13aWRnZXRfX3RpbWVcIik7XG4gIHRpbWVXaWRnZXREYXRlLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXdpZGdldF9fZGF0ZVwiKTtcblxuICB0aW1lV2lkZ2V0LmFwcGVuZENoaWxkKHRpbWVXaWRnZXRUaW1lKTtcbiAgdGltZVdpZGdldC5hcHBlbmRDaGlsZCh0aW1lV2lkZ2V0RGF0ZSk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgdGltZVdpZGdldFRpbWUudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICB0aW1lV2lkZ2V0RGF0ZS50ZXh0Q29udGVudCA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdGltZVdpZGdldFRpbWUudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHRpbWVXaWRnZXREYXRlLnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgfSwgMTAwMCk7XG5cbiAgcmV0dXJuIHRpbWVXaWRnZXQ7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXQgPSBhd2FpdCBjcmVhdGVDdXJyZW50V2VhdGhlcldpZGdldCgpO1xuICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXQgPSBhd2FpdCBjcmVhdGVGb3JlY2FzdFdlYXRoZXJXaWRnZXQoKTtcbiAgY29uc3QgdGltZVdpZGdldCA9IGNyZWF0ZVRpbWVXaWRnZXQoKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0KTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJXaWRnZXQpO1xuICBib2R5LmFwcGVuZENoaWxkKHRpbWVXaWRnZXQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemUgZnJvbSBcIi4vZnVuY3Rpb25zL2RvbUZ1bmN0aW9ucy5qc1wiO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=