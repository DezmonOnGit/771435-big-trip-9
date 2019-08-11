import {menuTemplate as menu} from './components/menu.js';
import {
  tripCardTemplate as tripCard,
  tripCardDayTemplate as tripDay,
  tripInfoTemplate as tripInfo,
  tripCardEditorTemplate as tripEditor,
  tripSortTemplate as tripSort
} from './components/trips.js';
import {filterTemplate as filter} from './components/filter.js';

const renderTemplate = (wrapper, content, appendToBegin = false) => {

  switch (typeof content) {

    case `string`:

      if (appendToBegin) {
        wrapper.innerHTML = content + wrapper.innerHTML;
      } else {
        wrapper.innerHTML += content;
      }
      break;

    case `object`:

      if (appendToBegin) {
        wrapper.insertBefore(content, wrapper.firstChild);
      } else {
        wrapper.append(content);
      }
      break;
  }

};

const createElement = (tag, classes) => {
  let newElement = document.createElement(tag);

  for (let i = 0; i <= classes.length - 1; i++) {
    newElement.classList.add(classes[i]);
  }
  return newElement;
};

const tripControls = document.querySelector(`.trip-controls`);
const tripInfoBox = document.querySelector(`.trip-info`);
const tripEvents = document.querySelector(`.trip-events`);

const tripDayBox = createElement(`ul`, [`trip-days`]);

renderTemplate(tripControls, menu);
renderTemplate(tripControls, filter);
renderTemplate(tripInfoBox, tripInfo, true);
renderTemplate(tripEvents, tripSort);
renderTemplate(tripEvents, tripEditor);
renderTemplate(tripEvents, tripDayBox);
renderTemplate(tripDayBox, tripDay);

const tripDaysEventsList = document.querySelectorAll(`.day .trip-events__list`);

renderTemplate(tripDaysEventsList[0], tripCard);
renderTemplate(tripDaysEventsList[0], tripCard);
renderTemplate(tripDaysEventsList[0], tripCard);
