export const COMMENTS_LIMIT = 5;
export const PHOTOS_COUNT = 10;
export const MAX_HASHTAG_COUNT = 5;
export const MAX_DESCRIPTION_LENGTH = 140;
export const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
export const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

export const Route = {
  GET_DATA: '/data',
};

export const Method = {
  POST: 'POST',
};

export const ErrorText = {
  GET_DATA: 'Не удалось загрузить фотографии. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

export const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

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
