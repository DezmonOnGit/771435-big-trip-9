const makeFilter = (data) => {
  let createdFilterItems = ``;

  data.forEach(function (dataItem, index) {

    if (index !== 0) {
      createdFilterItems += `<div class="trip-filters__filter">
                              <input id="filter-${dataItem.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
                              <label class="trip-filters__filter-label" for="filter-${dataItem.toLowerCase()}">${dataItem}</label>
                            </div>`;
    } else {
      createdFilterItems += `<div class="trip-filters__filter">
                        <input id="filter-${dataItem.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                        <label class="trip-filters__filter-label" for="filter-${dataItem.toLowerCase()}">${dataItem}</label>
                      </div>`;
    }
  });

  return `<form class="trip-filters" action="#" method="get">
            ${createdFilterItems}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
};

export {makeFilter};
