import { PHOTOS_COUNT, Filter } from './constants.js';
import { debounce } from './util.js';

const filtersElement = document.querySelector('.img-filters');

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
  filtersElement.classList.remove('img-filters--inactive');
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

    filtersElement
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    debouncedCallback(filterPhotos());
  });
};

export { setOnFilterClick, turnFilterOn, filterPhotos };
