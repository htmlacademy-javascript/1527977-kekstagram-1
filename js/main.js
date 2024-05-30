import './photoLoader.js';
import './slider.js';
import { createPhotos } from './data.js';
import { renderPhotos } from './renderPhotos.js';
import { PHOTOS_COUNT } from './constants.js';

const photos = createPhotos(PHOTOS_COUNT);

renderPhotos(photos);
