import { imgPreview, Scale } from './constants.js';

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');

let localScale;

const renderScale = () => {
  imgPreview.style = `transform: scale(${localScale / 100})`;
  scaleValue.value = `${localScale}%`;
};

const resetScaling = () => {
  localScale = Scale.MAX;
  renderScale();
};

imgUploadScale.addEventListener('click', ({ target }) => {
  if (target.closest('.scale > button')) {
    if (target === scaleSmaller) {
      localScale = (localScale - Scale.STEP) >= Scale.MIN ? localScale - Scale.STEP : localScale;
    } else {
      localScale = (localScale + Scale.STEP) <= Scale.MAX ? localScale + Scale.STEP : localScale;
    }
    renderScale();
  }
});

export { resetScaling };
