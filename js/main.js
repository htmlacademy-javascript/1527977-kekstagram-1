// В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов.
// Каждый объект массива — описание фотографии, опубликованной пользователем.
// Структура каждого объекта должна быть следующей:
// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
// Количество комментариев к каждой фотографии вы определяете на своё усмотрение.
//       Все комментарии генерируются случайным образом.
//       Пример описания объекта с комментарием:
//       {
//         id: 135,
//         avatar: 'img/avatar-6.svg',
//         message: 'В целом всё неплохо. Но не всё.',
//         name: 'Артём',
//       }
//         У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
//         Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
//         Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
//         Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

const PHOTOS_COUNT = 25;

const PHOTOS_DESCRIPTIONS = ['Отель', 'Дорога', 'Море', 'Пляж', 'Суши', 'Спорткар', 'Клубника',
  'Сок', 'Самолёт', 'Шкаф', 'Песок', 'Авто', 'Салат','Кексоролл', 'Тапки', 'Небо', 'Хор',
  'Ретро-авто', 'Фонарики', 'Пальмы', 'Обед', 'Закат', 'Краб', 'Концерт', 'Сафари',
];

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 0,
  MAX: 5,
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

const COMMENTS_NAMES = ['Вася', 'Паша', 'Маша', 'Даша', 'Катя', 'Яна', 'Аркаша',] ;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentId = createRandomIdFromRangeGenerator(1, COMMENTS_ID_MAX);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, COMMENTS_AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(COMMENTS_NAMES),
});

const createPhotos = PHOTOS_DESCRIPTIONS.map((item, index) => {
  while(index < PHOTOS_COUNT) {
    return {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: item,
      likes: getRandomInteger(Likes.MIN, Likes.MAX),
      comments: Array.from({length: getRandomInteger(Comments.MIN, Comments.MAX)}, createComment),
    };
  }
});

console.log(createPhotos);
