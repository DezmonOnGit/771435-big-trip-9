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

export {tripCardTemplate, tripCardDayTemplate, tripInfoTemplate, tripCardEditorTemplate, tripSortTemplate};

