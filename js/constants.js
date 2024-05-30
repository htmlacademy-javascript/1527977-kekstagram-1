export const body = document.querySelector('body');
export const form = document.querySelector('.img-upload__overlay');
export const imgPreview = document.querySelector('.img-upload__preview > img');

export const COMMENTS_LIMIT = 5;
export const PHOTOS_COUNT = 25;
export const MAX_HASHTAG_COUNT = 5;
export const MAX_DESCRIPTION_LENGTH = 140;

export const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

export const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
