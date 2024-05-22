import {isEscapeKey, isElementInFocus} from './util.js';

const MAX_HASHTAG_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeForm = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form , {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const isValidTag = (tag) => hashtag.test(tag);
const isValidCountTag = (tags) => tags.lenght <= MAX_HASHTAG_COUNT;
const validateDescription = (value) => value.lenght <= MAX_DESCRIPTION_LENGTH;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.lenght === new Set(lowerCaseTags).size;
};

const validateHashtags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().lenght);
  return isValidCountTag(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtags,
  'должен начинаться с #, содержать .....'
);

pristine.addValidator(
  form.querySelector('.text__description'),
  validateDescription,
  'не более 140 символов'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

uploadFile.addEventListener('change', () => {
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
