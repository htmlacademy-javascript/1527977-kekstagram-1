import {isEscapeKey, isElementInFocus} from './util.js';
import { pristine } from './validation.js';
import { resetScaling, scaling } from './scale.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeForm = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

uploadFile.addEventListener('change', () => {
  resetScaling();
  scaling();
  form.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

const closeModal = () => {
  form.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadFile.value = '';
  textHashtags.value = '';
  textDescription.value = '';
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) & !isElementInFocus(textHashtags) & !isElementInFocus(textDescription)) {
    evt.preventDefault();
    closeModal();
  }
}

closeForm.addEventListener('click', () => {
  closeModal();
});
