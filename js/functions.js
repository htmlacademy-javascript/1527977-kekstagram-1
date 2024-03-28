const isPalindrome = (string) => {
  // string = string.replaceAll(' ', '').toUpperCase();
  // let reverseString = '';
  // for(let i = 1; i <= string.length; i++) {
  //   reverseString += string.at(-i);
  // }
  const prepareString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = prepareString.split('').reverse().join('');
  return prepareString === reverseString;
};

isPalindrome('Лёша на полке клопа нашёл ');
// console.log(isPalindrome('Лёша на полке клопа нашёл '));

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
// console.log(getExtractNumber('2023 год'));            // 2023
// console.log(getExtractNumber('ECMAScript 2022'));     // 2022
// console.log(getExtractNumber('1 кефир, 0.5 батона')); // 105
// console.log(getExtractNumber('агент 007'));           // 7
// console.log(getExtractNumber('а я томат'));           // NaN

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
// Добавочный символ использован один раз
// console.log(getComplementString('1', 2, '0'));      // '01'

// // Добавочный символ использован три раза
// console.log(getComplementString('1', 4, '0'));      // '0001'

// // Добавочные символы обрезаны с конца
// console.log(getComplementString('q', 4, 'werty'));  // 'werq'

// // Добавочные символы использованы полтора раза
// console.log(getComplementString('q', 4, 'we'));     // 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// console.log(getComplementString('qwerty', 4, '0')); // 'qwerty'

const isStringLengthOk = (string, maxLength) => string.length <= maxLength;

isStringLengthOk('проверяемая строка', 10);
