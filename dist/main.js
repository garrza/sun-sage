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

  currentWeatherWidget.classList.add("widget");
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

  return currentWeatherWidget;
};

const createForecastWeatherWidget = async () => {
  const forecastWeatherWidget = document.createElement("div");
  const forecastWeatherWidgetTitle = document.createElement("div");
  forecastWeatherWidget.classList.add("widget");

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

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} @garrza`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/garrza";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");
  githubIcon.classList.add("fa-spin-pulse");
  githubIcon.setAttribute("style", "color : #ebf2d4");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
};

const initialize = async () => {
  const body = document.querySelector("body");

  const currentWeatherWidget = await createCurrentWeatherWidget();
  const forecastWeatherWidget = await createForecastWeatherWidget();
  const weatherWidgetsContainer = document.createElement("div");
  const timeWidget = createTimeWidget();
  const footer = createFooter();

  weatherWidgetsContainer.classList.add("weather-widgets-container");
  weatherWidgetsContainer.appendChild(currentWeatherWidget);
  weatherWidgetsContainer.appendChild(forecastWeatherWidget);

  body.appendChild(timeWidget);
  body.appendChild(weatherWidgetsContainer);
  body.appendChild(footer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSx1Q0FBdUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWjs7QUFFN0MsUUFBUSx3Q0FBd0MsRUFBRSx3REFBWTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0NBQWtDO0FBQ3RGLG9EQUFvRCxrQ0FBa0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxrQkFBa0IsT0FBTyxrQkFBa0I7QUFDOUYsbURBQW1ELGtCQUFrQixPQUFPLGtCQUFrQjtBQUM5RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDBCQUEwQjs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDdkwxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFEOztBQUVyRCxzRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1bi1zYWdlLy4vc3JjL2Z1bmN0aW9ucy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2UvLi9zcmMvZnVuY3Rpb25zL2RvbUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zdW4tc2FnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdW4tc2FnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3VuLXNhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdW4tc2FnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N1bi1zYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEN1cnJlbnQgV2VhdGhlciBBUEkgY2FsbFxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTYyOWIyMGU1OTllMTRjMDk5MTUxNzI1NTgyMzAzMTEmcT1tb250ZXJyZXlcIixcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLy8gRm9yZWNhc3QgV2VhdGhlciBBUEkgY2FsbFxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjI5YjIwZTU5OWUxNGMwOTkxNTE3MjU1ODIzMDMxMSZxPW1vbnRlcnJleSZkYXlzPTdcIixcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3RXZWF0aGVyIH07XG4iLCJpbXBvcnQgYXBpRnVuY3Rpb25zIGZyb20gXCIuL2FwaUZ1bmN0aW9ucy5qc1wiO1xuXG5jb25zdCB7IGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGb3JlY2FzdFdlYXRoZXIgfSA9IGFwaUZ1bmN0aW9ucztcblxuY29uc3QgY3JlYXRlQ3VycmVudFdlYXRoZXJXaWRnZXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldFRlbXBlcmF0dXJlQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlcldpZGdldEh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjdXJyZW50V2VhdGhlcldpZGdldC5jbGFzc0xpc3QuYWRkKFwid2lkZ2V0XCIpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjdXJyZW50LXdlYXRoZXItd2lkZ2V0X19sb2NhdGlvblwiXG4gICk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGl0bGUuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX3RpdGxlXCIpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldERhdGUuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci13aWRnZXRfX2RhdGVcIik7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVDLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjdXJyZW50LXdlYXRoZXItd2lkZ2V0X190ZW1wZXJhdHVyZUNcIlxuICApO1xuICBjdXJyZW50V2VhdGhlcldpZGdldENvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFxuICAgIFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9fY29uZGl0aW9uXCJcbiAgKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjdXJyZW50LXdlYXRoZXItd2lkZ2V0X19jb25kaXRpb24taWNvblwiXG4gICk7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0V2luZC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9fd2luZFwiKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRIdW1pZGl0eS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiY3VycmVudC13ZWF0aGVyLXdpZGdldF9faHVtaWRpdHlcIlxuICApO1xuXG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGl0bGUpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXREYXRlKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRUZW1wZXJhdHVyZUMpO1xuICBjdXJyZW50V2VhdGhlcldpZGdldC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcldpZGdldFRlbXBlcmF0dXJlRik7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uKTtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uKTtcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcigpO1xuXG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgV2VhdGhlclwiO1xuICBjdXJyZW50V2VhdGhlcldpZGdldExvY2F0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0RGF0ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVDLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jfcKwQ2A7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0VGVtcGVyYXR1cmVGLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mfcKwRmA7XG4gIGN1cnJlbnRXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uLnRleHRDb250ZW50ID1cbiAgICBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY3VycmVudFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uLnNyYyA9XG4gICAgY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyV2lkZ2V0O1xufTtcblxuY29uc3QgY3JlYXRlRm9yZWNhc3RXZWF0aGVyV2lkZ2V0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcmVjYXN0V2VhdGhlcldpZGdldC5jbGFzc0xpc3QuYWRkKFwid2lkZ2V0XCIpO1xuXG4gIGZvcmVjYXN0V2VhdGhlcldpZGdldFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldF9fdGl0bGVcIik7XG4gIGZvcmVjYXN0V2VhdGhlcldpZGdldFRpdGxlLnRleHRDb250ZW50ID0gXCJGb3JlY2FzdCBXZWF0aGVyXCI7XG5cbiAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldFRpdGxlKTtcblxuICBjb25zdCBmb3JlY2FzdFdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3RXZWF0aGVyKCk7XG4gIGNvbnN0IGZvcmVjYXN0V2VhdGhlckRheXMgPSBmb3JlY2FzdFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuXG4gIGZvcmVjYXN0V2VhdGhlckRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3REYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXREYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19kYXlcIik7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX2RhdGVcIik7XG4gICAgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC13ZWF0aGVyLXdpZGdldF9fbWluXCIpO1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldE1heC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX21heFwiKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb24uY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZm9yZWNhc3Qtd2VhdGhlci13aWRnZXRfX2NvbmRpdGlvblwiXG4gICAgKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZvcmVjYXN0LXdlYXRoZXItd2lkZ2V0X19jb25kaXRpb24taWNvblwiXG4gICAgKTtcblxuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldERhdGUudGV4dENvbnRlbnQgPSBkYXkuZGF0ZTtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNaW4udGV4dENvbnRlbnQgPSBgTWluOiAke2RheS5kYXkubWludGVtcF9jfcKwQyAvICR7ZGF5LmRheS5taW50ZW1wX2Z9wrBGYDtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXgudGV4dENvbnRlbnQgPSBgTWF4OiAke2RheS5kYXkubWF4dGVtcF9jfcKwQyAvICR7ZGF5LmRheS5tYXh0ZW1wX2Z9wrBGYDtcbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXRDb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbkljb24uc3JjID0gZGF5LmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldERheSk7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0RGF0ZSk7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0TWluKTtcbiAgICBmb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJXaWRnZXRNYXgpO1xuICAgIGZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0V2VhdGhlcldpZGdldENvbmRpdGlvbik7XG4gICAgZm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0Q29uZGl0aW9uSWNvbik7XG5cbiAgICBmb3JlY2FzdFdlYXRoZXJXaWRnZXQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXkpO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3RXZWF0aGVyV2lkZ2V0O1xufTtcblxuY29uc3QgY3JlYXRlVGltZVdpZGdldCA9ICgpID0+IHtcbiAgY29uc3QgdGltZVdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVXaWRnZXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVXaWRnZXRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGltZVdpZGdldERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHRpbWVXaWRnZXQuY2xhc3NMaXN0LmFkZChcInRpbWUtd2lkZ2V0XCIpO1xuICB0aW1lV2lkZ2V0VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZS13aWRnZXRfX3RpbWVcIik7XG4gIHRpbWVXaWRnZXREYXRlLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXdpZGdldF9fZGF0ZVwiKTtcblxuICB0aW1lV2lkZ2V0LmFwcGVuZENoaWxkKHRpbWVXaWRnZXRUaXRsZSk7XG4gIHRpbWVXaWRnZXQuYXBwZW5kQ2hpbGQodGltZVdpZGdldFRpbWUpO1xuICB0aW1lV2lkZ2V0LmFwcGVuZENoaWxkKHRpbWVXaWRnZXREYXRlKTtcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICB0aW1lV2lkZ2V0VGltZS50ZXh0Q29udGVudCA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gIHRpbWVXaWRnZXREYXRlLnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB0aW1lV2lkZ2V0VGltZS50ZXh0Q29udGVudCA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgdGltZVdpZGdldERhdGUudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICB9LCAxMDAwKTtcblxuICB0aW1lV2lkZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIk1vbnRlcnJleSwgTWV4aWNvXCI7XG5cbiAgcmV0dXJuIHRpbWVXaWRnZXQ7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBAZ2FycnphYDtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2dhcnJ6YVwiO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhLXNwaW4tcHVsc2VcIik7XG4gIGdpdGh1Ykljb24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvciA6ICNlYmYyZDRcIik7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyV2lkZ2V0ID0gYXdhaXQgY3JlYXRlQ3VycmVudFdlYXRoZXJXaWRnZXQoKTtcbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyV2lkZ2V0ID0gYXdhaXQgY3JlYXRlRm9yZWNhc3RXZWF0aGVyV2lkZ2V0KCk7XG4gIGNvbnN0IHdlYXRoZXJXaWRnZXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGltZVdpZGdldCA9IGNyZWF0ZVRpbWVXaWRnZXQoKTtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cbiAgd2VhdGhlcldpZGdldHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItd2lkZ2V0cy1jb250YWluZXJcIik7XG4gIHdlYXRoZXJXaWRnZXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyV2lkZ2V0KTtcbiAgd2VhdGhlcldpZGdldHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RXZWF0aGVyV2lkZ2V0KTtcblxuICBib2R5LmFwcGVuZENoaWxkKHRpbWVXaWRnZXQpO1xuICBib2R5LmFwcGVuZENoaWxkKHdlYXRoZXJXaWRnZXRzQ29udGFpbmVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemUgZnJvbSBcIi4vZnVuY3Rpb25zL2RvbUZ1bmN0aW9ucy5qc1wiO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=