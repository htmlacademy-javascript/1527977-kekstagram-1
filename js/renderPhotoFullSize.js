import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureСancel = bigPicture.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');

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

const renderComments = (comments) => {
  commentList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentList.append(fragment);
};

const closePhotoFullSize = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoFullSize();
  }
}

bigPictureСancel.addEventListener('click', () => {
  closePhotoFullSize();
});

const renderPhotoInfo = ({ url, likes, comments, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__social .likes-count').textContent = likes;
  bigPicture.querySelector('.big-picture__social .comments-count').textContent = comments;
  bigPicture.querySelector('.big-picture__social .social__caption').textContent = description;
};

const renderPhotoFullSize = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPhotoInfo(data);
  renderComments(data.comments);
};

export { renderPhotoFullSize };