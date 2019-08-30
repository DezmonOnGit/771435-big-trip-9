import {makeMenu as getMenu} from './components/menu.js';
import {
  makeTripCards as getTripCards,
  makeTripDays as getTripDays,
  maketripInfo as getTripInfo,
  tripSortTemplate as tripSort
} from './components/trips.js';
import {makeTripEditTemplate as getTripEditor} from './components/trip-edit.js';
import {makeFilter as getFilter} from './components/filter.js';

const calcCost = (trips) => {

  const cost = document.querySelector(`.trip-info__cost-value`);
  let costValue = 0;

  trips.forEach(function (tripsItem) {
    tripsItem.dayTrips.forEach(function (dayTripsItem) {
      costValue += dayTripsItem.price;
      dayTripsItem.offers.forEach(function (offersItem) {
        costValue += offersItem.price;
      });
    });
  });

  cost.innerHTML = costValue;
};

const generateDescription = (description) => {

  const sentenceCount = getRandom(3, 1);
  let curDescription = ``;

  for (let i = 0; i <= sentenceCount; i++) {
    curDescription += description[getRandom(description.length, 0)];
  }

  return curDescription;
};

const generateOffers = (offers) => {
  const offersCount = getRandom(3, 0);
  let currentOffers = new Set();

  for (let i = 0; i < offersCount; i++) {
    currentOffers.add(offers[getRandom(offers.length, 0)]);
  }

  return Array.from(currentOffers);
};

const generateTrips = () => {
  return [
    {
      date: {
        day: `18`,
        month: `MAR`,
        year: `2019`,
      },
      dayTrips: [
        {
          event: eventType[Object.keys(eventType)[getRandom(Object.keys(eventType).length, 0)]],
          city: cities[getRandom(cities.length, 0)],
          photos: eventPhotoUrl,
          description: generateDescription(description),
          offers: generateOffers(offers),
          price: getRandom(90, 10),
          time: {
            hours: {
              from: getRandom(9, 5),
              to: getRandom(16, 10),
            },
            minutes: {
              from: getRandom(59, 0),
              to: getRandom(59, 0),
            },
          },
        },
        {
          event: eventType[Object.keys(eventType)[getRandom(Object.keys(eventType).length, 0)]],
          city: cities[getRandom(cities.length, 0)],
          photos: eventPhotoUrl,
          description: generateDescription(description),
          offers: generateOffers(offers),
          price: getRandom(90, 10),
          time: {
            hours: {
              from: getRandom(9, 5),
              to: getRandom(16, 10),
            },
            minutes: {
              from: getRandom(59, 0),
              to: getRandom(59, 0),
            },
          },
        },
        {
          event: eventType[Object.keys(eventType)[getRandom(Object.keys(eventType).length, 0)]],
          city: cities[getRandom(cities.length, 0)],
          photos: eventPhotoUrl,
          description: generateDescription(description),
          offers: generateOffers(offers),
          price: getRandom(90, 10),
          time: {
            hours: {
              from: getRandom(9, 5),
              to: getRandom(16, 10),
            },
            minutes: {
              from: getRandom(59, 0),
              to: getRandom(59, 0),
            },
          },
        },
      ],
    },
    {
      date: {
        day: `19`,
        month: `MAR`,
        year: `2019`,
      },
      dayTrips: [
        {
          event: eventType[Object.keys(eventType)[getRandom(Object.keys(eventType).length, 0)]],
          city: cities[getRandom(cities.length, 0)],
          photos: eventPhotoUrl,
          description: generateDescription(description),
          offers: generateOffers(offers),
          price: getRandom(90, 10),
          time: {
            hours: {
              from: getRandom(9, 5),
              to: getRandom(16, 10),
            },
            minutes: {
              from: getRandom(59, 0),
              to: getRandom(59, 0),
            },
          },
        },
      ],
    },
  ];
};

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

    default:
      content = ``;
      wrapper.append(content);
      break;
  }

};

const createElement = (tag, classes) => {
  let newElement = document.createElement(tag);

  for (let classesItem of classes) {
    newElement.classList.add(classesItem);
  }
  return newElement;
};

const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const menu = [`Table`, `Stats`];
const filter = [`Everything`, `Future`, `Past`];

const eventType = {
  taxi: {
    name: `taxi`,
    img: `img/icons/taxi.png`
  },

  bus: {
    name: `bus`,
    img: `img/icons/bus.png`
  },

  train: {
    name: `train`,
    img: `img/icons/train.png`
  },

  ship: {
    name: `ship`,
    img: `img/icons/ship.png`
  },

  transport: {
    name: `transport`,
    img: `img/icons/transport.png`
  },

  drive: {
    name: `drive`,
    img: `img/icons/drive.png`
  },

  flight: {
    name: `flight`,
    img: `img/icons/flight.png`
  },

  checkIn: {
    name: `checkIn`,
    img: `img/icons/check-in.png`
  },

  restaurant: {
    name: `restaurant`,
    img: `img/icons/restaurant.png`
  },

  sightseeing: {
    name: `sightseeing`,
    img: `img/icons/sightseeing.png`
  },

  trip: {
    name: `trip`,
    img: `img/icons/trip.png`
  },
};

const cities = [
  `Amsterdam`,
  `Geneva`,
  `Chamonix`,
  `Saint Petersburg`,
];

const eventPhotoUrl = [
  `http://picsum.photos/300/150?r=${Math.random()}`,
  `http://picsum.photos/300/150?r=${Math.random()}`,
  `http://picsum.photos/300/150?r=${Math.random()}`,
  `http://picsum.photos/300/150?r=${Math.random()}`,
  `http://picsum.photos/300/150?r=${Math.random()}`,
];

const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const offers = [
  {
    name: `Add luggage`,
    price: 10,
    used: true,
  },
  {
    name: `Switch to comfort class`,
    price: 150,
    used: true,
  },
  {
    name: `Add meal`,
    price: 2,
    used: true,
  },
  {
    name: `Choose seats`,
    price: 9,
    used: true,
  },
];

const trips = generateTrips();

const tripControls = document.querySelector(`.trip-controls`);
const tripInfoBox = document.querySelector(`.trip-info`);
const tripEvents = document.querySelector(`.trip-events`);

const tripDayBox = createElement(`ul`, [`trip-days`]);

renderTemplate(tripControls, getMenu(menu));
renderTemplate(tripControls, getFilter(filter));
renderTemplate(tripInfoBox, getTripInfo(trips), true);
renderTemplate(tripEvents, tripSort);
renderTemplate(tripEvents, tripDayBox);
renderTemplate(tripDayBox, getTripDays(trips));

const tripDays = document.querySelectorAll(`.trip-events__list`);

renderTemplate(tripDays[0], getTripEditor(trips[0].dayTrips[0]));
tripDays.forEach(function (daysItem, index) {
  renderTemplate(tripDays[index], getTripCards(trips[index]));
});

calcCost(trips);
