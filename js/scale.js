const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview > img');

const resetScaling = () => {
  imgPreview.style = 'transform: scale(1.00)';
  scaleValue.value = '100%';
};

const scaling = () => {
  imgUploadScale.addEventListener('click', ({ target }) => {
    if(target.closest('.scale > button')) {
      let currentScale = parseInt(scaleValue.value, 10) + Scale.STEP;
      if (target === scaleSmaller) {
        currentScale = parseInt(scaleValue.value, 10) - Scale.STEP;
      } else if (currentScale >= Scale.MAX) {
        currentScale = Scale.MAX;
      } else if (currentScale <= Scale.MIN) {
        currentScale = Scale.MIN;
      }
      scaleValue.value = `${currentScale}%`;
      currentScale = currentScale / 100;
      imgPreview.style.transform = `scale(${currentScale})`;
    }
  });
};

export { resetScaling, scaling };
