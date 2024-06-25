import { EFFECTS } from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview > img');
const form = document.querySelector('.img-upload__form');

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const resetImage = () => {
  imgPreview.style.filter = 'none';
  imgPreview.className = '';
};

const updateSlider = () => {
  if (isDefault()) {
    sliderElement.classList.add('hidden');
    sliderContainer.classList.add('hidden');
    resetImage();
  } else {
    sliderElement.classList.remove('hidden');
    sliderContainer.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: chosenEffect.min,
        max: chosenEffect.max,
      },
      step: chosenEffect.step,
      start: chosenEffect.max,
    });
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  resetImage();
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

updateSlider();

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
