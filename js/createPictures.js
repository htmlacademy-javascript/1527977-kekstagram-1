// Отобразить фотографии других пользователей.
// Заведите модуль, который будет отвечать за отрисовку миниатюр.
// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы,
// соответствующие фотографиям, и заполните их данными:
// Адрес изображения url подставьте как атрибут src изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures.
// Для вставки элементов используйте DocumentFragment.
// Подключите модуль в проект.

import {createPhotos} from './data.js';
const PHOTOS_COUNT = 25;

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const showPictures = createPhotos(PHOTOS_COUNT);

const pictureFragment = document.createDocumentFragment();

showPictures.forEach(({url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(picture);
});

picturesContainer.appendChild(pictureFragment);
