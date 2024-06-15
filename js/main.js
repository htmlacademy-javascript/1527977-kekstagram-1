import { getData } from './data.js';
import './photoLoader.js';
import { renderPhotos } from './renderPhotos.js';
import { errorLoadingNotice } from './notice.js';

getData(renderPhotos, errorLoadingNotice);
