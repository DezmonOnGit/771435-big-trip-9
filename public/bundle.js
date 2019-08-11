/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: filterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate", function() { return filterTemplate; });
const filterTemplate = `<form class="trip-filters" action="#" method="get">
                    <div class="trip-filters__filter">
                      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                    </div>

                    <div class="trip-filters__filter">
                      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                      <label class="trip-filters__filter-label" for="filter-future">Future</label>
                    </div>

                    <div class="trip-filters__filter">
                      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                      <label class="trip-filters__filter-label" for="filter-past">Past</label>
                    </div>

                    <button class="visually-hidden" type="submit">Accept filter</button>
                  </form>`;




/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: menuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuTemplate", function() { return menuTemplate; });
const menuTemplate = `<nav class="trip-controls__trip-tabs  trip-tabs">
                        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                        <a class="trip-tabs__btn" href="#">Stats</a>
                      </nav>`;




/***/ }),

/***/ "./src/components/trips.js":
/*!*********************************!*\
  !*** ./src/components/trips.js ***!
  \*********************************/
/*! exports provided: tripCardTemplate, tripCardDayTemplate, tripInfoTemplate, tripCardEditorTemplate, tripSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripCardTemplate", function() { return tripCardTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripCardDayTemplate", function() { return tripCardDayTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripInfoTemplate", function() { return tripInfoTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripCardEditorTemplate", function() { return tripCardEditorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripSortTemplate", function() { return tripSortTemplate; });
const tripCardTemplate = `<li class="trip-events__item">
                            <div class="event">
                              <div class="event__type">
                                <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
                              </div>
                              <h3 class="event__title">Taxi to airport</h3>

                              <div class="event__schedule">
                                <p class="event__time">
                                  <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
                                  &mdash;
                                  <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
                                </p>
                                <p class="event__duration">1H 30M</p>
                              </div>

                              <p class="event__price">
                                &euro;&nbsp;<span class="event__price-value">20</span>
                              </p>

                              <h4 class="visually-hidden">Offers:</h4>
                              <ul class="event__selected-offers">
                                <li class="event__offer">
                                  <span class="event__offer-title">Order Uber</span>
                                  &plus;
                                  &euro;&nbsp;<span class="event__offer-price">20</span>
                                 </li>
                              </ul>

                              <button class="event__rollup-btn" type="button">
                                <span class="visually-hidden">Open event</span>
                              </button>
                            </div>
                          </li>`;

const tripCardDayTemplate = `<li class="trip-days__item  day">
                              <div class="day__info">
                                <span class="day__counter">1</span>
                                <time class="day__date" datetime="2019-03-18">MAR 18</time>
                              </div>
                              <ul class="trip-events__list"></ul>
                            </li>`;

const tripInfoTemplate = `<div class="trip-info__main">
                            <h1 class="trip-info__title">Amsterdam &mdash; ... &mdash; Amsterdam</h1>
                            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
                          </div>`;

const tripCardEditorTemplate = `<form class="trip-events__item  event  event--edit" action="#" method="post">
                            <header class="event__header">
                              <div class="event__type-wrapper">
                                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                                  <span class="visually-hidden">Choose event type</span>
                                  <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                                </label>
                                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                                <div class="event__type-list">
                                  <fieldset class="event__type-group">
                                    <legend class="visually-hidden">Transfer</legend>

                                    <div class="event__type-item">
                                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                                      <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                                    </div>
                                  </fieldset>

                                  <fieldset class="event__type-group">
                                    <legend class="visually-hidden">Activity</legend>

                                    <div class="event__type-item">
                                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                                    </div>

                                    <div class="event__type-item">
                                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                                    </div>
                                  </fieldset>
                                </div>
                              </div>

                              <div class="event__field-group  event__field-group--destination">
                                <label class="event__label  event__type-output" for="event-destination-1">
                                  Sightseeing at
                                </label>
                                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
                                <datalist id="destination-list-1">
                                  <option value="Amsterdam"></option>
                                  <option value="Geneva"></option>
                                  <option value="Chamonix"></option>
                                  <option value="Saint Petersburg"></option>
                                </datalist>
                              </div>

                              <div class="event__field-group  event__field-group--time">
                                <label class="visually-hidden" for="event-start-time-1">
                                  From
                                </label>
                                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
                                &mdash;
                                <label class="visually-hidden" for="event-end-time-1">
                                  To
                                </label>
                                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
                              </div>

                              <div class="event__field-group  event__field-group--price">
                                <label class="event__label" for="event-price-1">
                                  <span class="visually-hidden">Price</span>
                                  &euro;
                                </label>
                                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
                              </div>

                              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                              <button class="event__reset-btn" type="reset">Cancel</button>
                            </header>
                          </form>`;

const tripSortTemplate = `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
                          <span class="trip-sort__item  trip-sort__item--day">Day</span>

                          <div class="trip-sort__item  trip-sort__item--event">
                            <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
                            <label class="trip-sort__btn" for="sort-event">Event</label>
                          </div>

                          <div class="trip-sort__item  trip-sort__item--time">
                            <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
                            <label class="trip-sort__btn" for="sort-time">
                              Time
                              <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                                <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                              </svg>
                            </label>
                          </div>

                          <div class="trip-sort__item  trip-sort__item--price">
                            <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
                            <label class="trip-sort__btn" for="sort-price">
                              Price
                              <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                                <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                              </svg>
                            </label>
                          </div>

                          <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
                        </form>`;





/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_trips_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/trips.js */ "./src/components/trips.js");
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter.js */ "./src/components/filter.js");




const renderTemplate = (wrapper, content, appendToBegin = false) => {

  switch(typeof content) {

    case 'string':

      if(appendToBegin) {
        wrapper.innerHTML = content + wrapper.innerHTML;
      } else {
        wrapper.innerHTML += content;
      }
      break;

    case 'object':

      if(appendToBegin) {
        wrapper.insertBefore(content, wrapper.firstChild);
      } else {
        wrapper.append(content);
      }
      break;
  }

};

const createElement = (tag, classes) => {
  let newElement = document.createElement(tag);

  for(let i = 0; i <= classes.length - 1; i++) {
    newElement.classList.add(classes[i]);   
  }

  return newElement;
};

const tripControls = document.querySelector(`.trip-controls`);
const tripInfoBox = document.querySelector(`.trip-info`);
const tripEvents = document.querySelector(`.trip-events`);

const tripDayBox = createElement(`ul`, [`trip-days`]);

renderTemplate(tripControls, _components_menu_js__WEBPACK_IMPORTED_MODULE_0__["menuTemplate"]);
renderTemplate(tripControls, _components_filter_js__WEBPACK_IMPORTED_MODULE_2__["filterTemplate"]);
renderTemplate(tripInfoBox, _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripInfoTemplate"], true);
renderTemplate(tripEvents, _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripSortTemplate"]);
renderTemplate(tripEvents, _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripCardEditorTemplate"]);
renderTemplate(tripEvents, tripDayBox);
renderTemplate(tripDayBox, _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripCardDayTemplate"]);

const tripDaysEventsList = document.querySelectorAll(`.day .trip-events__list`);

renderTemplate(tripDaysEventsList[0], _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripCardTemplate"]);
renderTemplate(tripDaysEventsList[0], _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripCardTemplate"]);
renderTemplate(tripDaysEventsList[0], _components_trips_js__WEBPACK_IMPORTED_MODULE_1__["tripCardTemplate"]);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map