import { getData } from './api.js';
import './photoLoader.js';
import { renderPhotos } from './renderPhotos.js';
import { errorLoadingNotice } from './notice.js';
import { setOnFilterClick, turnFilterOn, filterPhotos } from './filters.js';

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPhotos(filterPhotos());
  setOnFilterClick(renderPhotos);
};

getData(onGetDataSuccess, errorLoadingNotice);
