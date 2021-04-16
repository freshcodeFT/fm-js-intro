"use strict";

const vocabulary = new Map();

vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');
vocabulary.set('table', 'стол');
vocabulary.set('screen', 'экран');
vocabulary.set('structure', 'структура');
vocabulary.set('algorithm', 'алгоритм');
vocabulary.set('count', 'считать');
vocabulary.set('set', 'установить');
vocabulary.set('kernel', 'ядро');
vocabulary.set('queue', 'очередь');

const inputStr = 'Cat counT Dog set queue Kernel algOrithm strUcTure of the TABLE';

const translate = (str) => {
  const lowerString = str.toLowerCase();
  const splitStrArray = lowerString.split(' ');
  const translatedStringArray = splitStrArray.map((word)=>{
    if(vocabulary.has(word)){
      return vocabulary.get(word);
    }
    return word;
  });
  const translatedString = translatedStringArray.join(' ');

  return translatedString;
}

console.log(translate(inputStr));