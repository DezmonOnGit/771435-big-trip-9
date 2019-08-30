const makeTripCards = (tripsDay) => {
  return createTrips(tripsDay.date, tripsDay.dayTrips);
};

const makeTripOffers = (offers) => {

  const createOffer = (offer) => {
    return `<li class="event__offer">
              <span class="event__offer-title">${offer.name}</span>
              &plus;
              &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
            </li>`;
  };

  let createdOffers = ``;

  offers.forEach(function (offersItem) {
    createdOffers += createOffer(offersItem);
  });

  return `<ul class="event__selected-offers">${createdOffers}</ul>`;
};

const makeTripDays = (days) => {
  let createdDays = ``;

  days.forEach(function (daysItem, index) {
    createdDays += `<li class="trip-days__item  day">
                      <div class="day__info">
                        <span class="day__counter">${index + 1}</span>
                        <time class="day__date" datetime="${daysItem.date.day} ${daysItem.date.month} ${daysItem.date.year}">${daysItem.date.month} ${daysItem.date.day}</time>
                      </div>
                      <ul class="trip-events__list">
                      </ul>
                    </li>`;
  });

  return createdDays;
};

const checkTimeLength = (number) => {
  number = number.toString();

  if (number.length < 2) {
    number = `0` + number;
  }

  return number;
};

const calcTime = (time) => {
  const minutesFrom = time.hours.from * 60 + time.minutes.from;
  const minutesTo = time.hours.to * 60 + time.minutes.to;
  const deltaHours = Math.floor((minutesTo - minutesFrom) / 60);
  const deltaMinutes = (minutesTo - minutesFrom) % 60;

  return `${checkTimeLength(deltaHours)}H ${checkTimeLength(deltaMinutes)}M`;
};

const createTrips = (date, trips) => {
  let createdTrips = ``;

  trips.forEach(function (tripsItem) {
    createdTrips += `<li class="trip-events__item">
                      <div class="event">
                        <div class="event__type">
                          <img class="event__type-icon" width="42" height="42" src="${tripsItem.event.img}" alt="Event type icon">
                        </div>
                        <h3 class="event__title">${tripsItem.event.name} to ${tripsItem.city}</h3>
                        <div class="event__schedule">
                          <p class="event__time">
                            <time class="event__start-time" datetime="${date.day} ${date.month} ${date.year}">${checkTimeLength(tripsItem.time.hours.from)}:${checkTimeLength(tripsItem.time.minutes.from)}</time>
                            &mdash;
                            <time class="event__end-time" datetime="${date.day} ${date.month} ${date.year}">${checkTimeLength(tripsItem.time.hours.to)}:${checkTimeLength(tripsItem.time.minutes.to)}</time>
                          </p>
                          <p class="event__duration">${calcTime(tripsItem.time)}</p>
                        </div>

                        <p class="event__price">
                          &euro;&nbsp;<span class="event__price-value">${tripsItem.price}</span>
                        </p>

                        <h4 class="visually-hidden">Offers:</h4>
                        ${makeTripOffers(tripsItem.offers)}
                        <button class="event__rollup-btn" type="button">
                          <span class="visually-hidden">Open event</span>
                        </button>
                      </div>
                    </li>`;
  });

  return createdTrips;
};

const maketripInfo = (trips) => {
  const createTitle = () => {
    const cities = Array.from(calcCityQty(trips));
    let createdTitle = ``;

    if (cities.length > 3) {
      createdTitle = `<h1 class="trip-info__title">${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}</h1>`;
    } else if (cities.length === 3) {
      createdTitle = `<h1 class="trip-info__title">${cities[0]} &mdash; ${cities[1]} &mdash; ${cities[2]}</h1>`;
    } else if (cities.length === 2) {
      createdTitle = `<h1 class="trip-info__title">${cities[0]} &mdash; ${cities[1]}</h1>`;
    } else {
      createdTitle = `<h1 class="trip-info__title">${cities[0]} &mdash; ${cities[0]}</h1>`;
    }

    return createdTitle;
  };

  const calcCityQty = () => {
    let findedCities = new Set();

    trips.forEach(function (tripsItem) {
      tripsItem.dayTrips.forEach(function (dayTripsItem) {
        findedCities.add(dayTripsItem.city);
      });
    });

    return findedCities;
  };

  return `<div class="trip-info__main">
            ${createTitle(trips)}
            <p class="trip-info__dates">Mar ${trips[0].date.day}&nbsp;&mdash;&nbsp;${trips[trips.length - 1].date.day}</p>
          </div>`;
};

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

export {makeTripCards, makeTripDays, maketripInfo, tripCardEditorTemplate, tripSortTemplate};

