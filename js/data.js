import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

let uniqueId;
let uniquePhotoId;

const PHOTOS_DESCRIPTIONS = ['Отель', 'Дорога', 'Море', 'Пляж', 'Суши', 'Спорткар', 'Клубника',
  'Сок', 'Самолёт', 'Шкаф', 'Песок', 'Авто', 'Салат', 'Кексоролл', 'Тапки', 'Небо', 'Хор',
  'Ретро-авто', 'Фонарики', 'Пальмы', 'Обед', 'Закат', 'Краб', 'Концерт', 'Сафари',
];

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 5,
  MAX: 17,
};

const COMMENTS_ID_MAX = 500;

const COMMENTS_AVATAR_MAX = 6;

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_NAMES = ['Вася', 'Паша', 'Маша', 'Даша', 'Катя', 'Яна', 'Аркаша',];

const generateCommentId = createRandomIdFromRangeGenerator(1, COMMENTS_ID_MAX);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, COMMENTS_AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(COMMENTS_NAMES),
});

const createPhoto = () => ({
  id: uniqueId(),
  url: `photos/${uniquePhotoId()}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({ length: getRandomInteger(Comments.MIN, Comments.MAX) }, createComment),
});

const createPhotos = (n) => {
  uniquePhotoId = createRandomIdFromRangeGenerator(1, n);
  uniqueId = createRandomIdFromRangeGenerator(1, n);
  return Array.from({ length: n }, createPhoto);
};

export {createPhotos};
