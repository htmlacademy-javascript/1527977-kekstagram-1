const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toUpperCase();
  let reverseString = '';
  for(let i = 1; i <= string.length; i++) {
    reverseString += string.at(-i);
  }
  return string === reverseString;
};

isPalindrome('Лёша на полке клопа нашёл ');

const getExtractNumber = (string) => {
  string = String(string).replaceAll(' ', '');
  let number = '';
  for(let i = 0; i < string.length; i++) {
    if(!isNaN(string[i])) {
      number += string[i];
    }
  }
  return parseInt(number, 10);
};

getExtractNumber(1.5);

const getComplementString = (string, minLength, addCharacters) => {
  if(string.length < minLength) {
    if(addCharacters.length < (minLength - string.length)){
      if((minLength - string.length) % addCharacters.length === 0) {
        addCharacters += addCharacters;
      }
      addCharacters = addCharacters.slice(0, (minLength - string.length - addCharacters.length)) + addCharacters;
    }
    string = addCharacters.slice(0, (minLength - string.length)) + string;
  }
  return string;
};

getComplementString('1', 2, '0');

const isStringLengthOk = (string, maxLength) => {
  const result = (string.length <= maxLength);
  return result;
};

isStringLengthOk('проверяемая строка', 10);
