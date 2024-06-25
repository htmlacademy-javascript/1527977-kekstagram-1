import { PHOTOS_COUNT, Filter } from './constants.js';
import { debounce, toggleClass } from './util.js';

const filtersElement = document.querySelector('.img-filters');
const activeClass = 'img-filters__button--active';

let currentFilter = '';
let photos = [];

const randomSort = () => Math.random() - 0.5;

const discussedSort = (photoA, photoB) =>
  photoB.comments.length - photoA.comments.length;

const filterPhotos = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...photos].sort(randomSort).slice(0, PHOTOS_COUNT);
    case Filter.DISCUSSED:
      return [...photos].sort(discussedSort);
    default:
      return [...photos];
  }
};

const turnFilterOn = (loadedPhotos) => {
  toggleClass(filtersElement, 'img-filters--inactive');
  photos = [...loadedPhotos];
  currentFilter = Filter.DEFAULT;
};

const setOnFilterClick = (cb) => {
  const debouncedCallback = debounce(cb);

  filtersElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }
    const activeFilter = filtersElement.querySelector(`.${activeClass}`);
    toggleClass(activeFilter, `${activeClass}`);
    toggleClass(clickedButton, `${activeClass}`);
    currentFilter = clickedButton.id;
    debouncedCallback(filterPhotos());
  });
};

export { setOnFilterClick, turnFilterOn, filterPhotos };
