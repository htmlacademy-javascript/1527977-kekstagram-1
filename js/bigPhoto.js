import {isEscapeKey} from './util.js';
import { COMMENTS_LIMIT } from './constants.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureСancel = bigPicture.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let renderedComments = 0;
let localComments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderComments = () => {
  renderedComments += COMMENTS_LIMIT;

  if (renderedComments >= localComments.length) {
    commentsLoader.classList.add('hidden');
    renderedComments = localComments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < renderedComments; i++) {
    const commentElement = createComment(localComments[i]);
    fragment.append(commentElement);
  }
  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentsCount.innerHTML = `${renderedComments} из <span class="comments-count">${localComments.length}</span> комментариев`;
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  renderedComments = 0;
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

bigPictureСancel.addEventListener('click', () => {
  closeModal();
});

const renderPhotoInfo = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__social .likes-count').textContent = likes;
  bigPicture.querySelector('.big-picture__social .social__caption').textContent = description;
};

const renderModal = ({ url, likes, comments, description }) => {
  openModal();
  commentsLoader.classList.add('hidden');
  renderPhotoInfo({ url, likes, description });
  localComments = comments;
  if(comments.length > 0) {
    renderComments();
  }
};

const onCommentsLoaderClick = () => renderComments();

commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { renderModal };
