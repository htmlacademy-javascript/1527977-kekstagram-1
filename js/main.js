import { createPhotos } from './data.js';
import { renderPhotos } from './renderPhotos.js';

const PHOTOS_COUNT = 25;

const photos = createPhotos(PHOTOS_COUNT);

renderPhotos(photos);
