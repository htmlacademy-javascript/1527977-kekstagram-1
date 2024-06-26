const isEscapeKey = (evt) => evt.key === 'Escape';

const isElementInFocus = (element) => element === document.activeElement;

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const toggleClass = (element, targetClass) => {
  element.classList.toggle(`${targetClass}`);
};

export { isEscapeKey, isElementInFocus, debounce, toggleClass };
