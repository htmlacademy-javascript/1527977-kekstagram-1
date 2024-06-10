import { hashtag, MAX_HASHTAG_COUNT, MAX_DESCRIPTION_LENGTH } from './constants.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form , {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const isValidTag = (tag) => hashtag.test(tag);
const isValidCountTag = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateHashtags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return isValidCountTag(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtags,
  'должен начинаться с #, состоять из букв и/или чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д.. Максимальная длина одного хэш-тега 20 символов, включая решётку. Хэш-теги разделяются пробелами. Один и тот же хэш-тег не может быть использован дважды. Нельзя указать больше пяти хэш-тегов'
);

pristine.addValidator(
  form.querySelector('.text__description'),
  validateDescription,
  'не более 140 символов'
);

export { pristine };
