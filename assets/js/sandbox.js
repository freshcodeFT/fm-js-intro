function checkAnagram(word1, word2) {
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
}

function createMap(str) {
  const mapToStr = new Map();
  for (const letter of str) {
    if (mapToStr.has(letter)) {
      const letterCount = mapToStr.get(letter);
      mapToStr.set(letter, letterCount + 1);
      continue;
    }
    mapToStr.set(letter, 1);
  }
  return mapToStr;
}

function compare(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const mapToStr1 = createMap(word1);
  const mapToStr2 = createMap(word2);

  if (mapToStr1.size !== mapToStr2.size) {
    return false;
  }

  for (const key of mapToStr1.keys()) {
    if (mapToStr1.get(key) !== mapToStr2.get(key)) {
      return false;
    }
  }

  return true;
}

function countVowels(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((accumulator, currentValue) => {
      return VOWELS.includes(currentValue) ? accumulator + 1 : accumulator;
    }, 0);
}

function uniqueizeArray(arr) {
  if(!Array.isArray(arr)){
    throw new TypeError();
  }
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}