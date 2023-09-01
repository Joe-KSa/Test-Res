let text = "I like the DOGS, You have a new PET, or do you want a CAT, CAT is very nicest"

// let result = text.replace(/DOGS|PET|CAT/gi, (word) => { return word.toLowerCase()})

let result = text.split(/[,.]/)
console.log(result)

result.forEach((word, i) => console.log(`Para el indice ${i}, El valor asignado es: ${word}`))

const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);
set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);

console.log(set)

let sampleData = [...Array(4).keys()]

console.log(Math.floor(Math.random() * (sampleData.length + 1)))

