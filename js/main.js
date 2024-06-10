import { getData, sendData } from './data.js';
import './photoLoader.js';
import { renderPhotos } from './renderPhotos.js';
import { PHOTOS_COUNT } from './constants.js';

const onSendDataSuccess = () => {
  closeModal();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPhotos);

