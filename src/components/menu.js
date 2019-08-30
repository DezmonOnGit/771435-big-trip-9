const makeMenu = (data) => {
  let createdBtns = ``;

  data.forEach(function (dataItem, index) {
    if (index !== 0) {
      createdBtns += `<a class="trip-tabs__btn" href="#">${dataItem}</a>`;
    } else {
      createdBtns += `<a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${dataItem}</a>`;
    }
  });

  return `<nav class="trip-controls__trip-tabs  trip-tabs">${createdBtns}</nav>`;
};

export {makeMenu};
