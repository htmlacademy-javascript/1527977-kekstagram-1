import { renderPhotoFullSize } from './renderPhotoFullSize.js';
import {isEnterKey} from './util.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (data) => {
  const pictureFragment = document.createDocumentFragment();
  data.forEach(({ url, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.appendChild(picture);

    picture.addEventListener('click', () => {
      renderPhotoFullSize(data);
    });

    picture.addEventListener('keydown', (evt) => {
      if(isEnterKey(evt)) {
        renderPhotoFullSize();
      }
    });
  });
  picturesContainer.appendChild(pictureFragment);
};

export { renderPhotos };
