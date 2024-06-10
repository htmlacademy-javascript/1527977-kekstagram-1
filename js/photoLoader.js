import {isEscapeKey, isElementInFocus} from './util.js';
import { pristine } from './validation.js';
import { resetScaling } from './scale.js';
import { resetEffects } from './effects.js';

const uploadFile = document.querySelector('#upload-file');
const closeForm = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

resetScaling();

uploadFile.addEventListener('change', () => {
  resetScaling();
  resetEffects();
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
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
