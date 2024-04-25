import { renderModal } from './renderModal.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const localPhotos = [];

const renderPhotos = (data) => {
  localPhotos.length = 0;
  localPhotos.push(...data.slice());
  const pictureFragment = document.createDocumentFragment();
  data.forEach(({ id, url, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.dataset.id = id;

    pictureFragment.appendChild(picture);
  });
  picturesContainer.appendChild(pictureFragment);
};

picturesContainer.addEventListener('click', ({ target }) => {
  if(target.closest('.picture')) {
    const id = Number(target.closest('.picture').dataset.id);
    const photo = localPhotos.find((item) => item.id === id);
    renderModal(photo);
  }
});

export { renderPhotos };
