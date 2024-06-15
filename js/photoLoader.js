import {isEscapeKey, isElementInFocus} from './util.js';
import { pristine } from './validation.js';
import { resetScaling } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './data.js';
import { showSuccessNotice, showErrorNotice } from './notice.js';

const uploadFile = document.querySelector('#upload-file');
const closeForm = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const buttonPublish = document.querySelector('.img-upload__submit');

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadFile.value = '';
  textHashtags.value = '';
  textDescription.value = '';
};

const success = () => {
  closeModal();
  showSuccessNotice();
};

const error = () => {
  showErrorNotice();
};

const blockButtonPublish = () => {
  buttonPublish.disabled = true;
};

const unblockButtonPublish = () => {
  buttonPublish.disabled = false;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(pristine.validate()){
    blockButtonPublish();
    sendData(success, error, new FormData(form));
    unblockButtonPublish();
  }
});

resetScaling();

uploadFile.addEventListener('change', () => {
  resetScaling();
  resetEffects();
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) & !isElementInFocus(textHashtags) & !isElementInFocus(textDescription)) {
    evt.preventDefault();
    closeModal();
  }
}

closeForm.addEventListener('click', () => {
  closeModal();
});
