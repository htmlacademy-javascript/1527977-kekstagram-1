import {renderCards} from './createPictures.js';
import {createPhotos} from './data.js';

const PHOTOS_COUNT = 25;

const photos = createPhotos(PHOTOS_COUNT);

renderCards(photos);
