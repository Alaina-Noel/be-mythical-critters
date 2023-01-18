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

const useFind = (words) => {
  return words.find(word => word.length === 6);
}

const useAny = (words) => {
  return words.some(word => word.length === 6);
}

const useFilter = (words) => {
  return words.filter(word => word.length > 6);
}

const useEvery = (words) => {
  return words.every(word => word.length >= 6);
}

nouns = ["people", "places", "thingeeees"]

console.log(capitalize(nouns));
console.log(useMap(nouns));
console.log(useEach(nouns));
console.log(useFind(nouns));
console.log(useAny(nouns));
console.log(useFilter(nouns));
console.log(useEvery(nouns));