const capitalize = (words) => {
  return words.map( word =>
    word.toUpperCase());
}

const useMap = (words) => {
  let stars = new Map;
  words.forEach(word =>
    stars.set(word, word.length));
  return stars;
}

const useEach = (words) => {
 return words.forEach(word =>
    console.log(word, word.length));
}

nouns = ["people", "places", "thingeeees"]

console.log(capitalize(nouns));
console.log(useMap(nouns));
console.log(useEach(nouns));