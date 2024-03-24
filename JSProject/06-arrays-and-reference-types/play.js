const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);

// Use array function splice to remove an element from the array
hobbies.splice(1, 0, 'Good food'); // Add an element at index 1
console.log(hobbies);

hobbies.splice(0, 1); // Remove an element at index 0
console.log(hobbies);

// show more example of Splice with negative index
hobbies.splice(-1, 1); // Remove the last element
console.log(hobbies);

// show more example of Splice with negative index
hobbies.splice(-1, 0, 'Good food'); // Add an element at the last index
console.log(hobbies);

// Use array function slice to copy an array
const copiedArray = hobbies.slice();
console.log(copiedArray);

// Use array function slice to copy an array with a range
const copiedArray2 = hobbies.slice(1); // Copy from index 1 to the end
console.log(copiedArray2);

const copiedArray3 = hobbies.slice(-2); // Copy from the last 2 elements to the end
console.log(copiedArray3);

// Use array function concat to merge arrays
const copiedArray4 = hobbies.concat(copiedArray3);
console.log(copiedArray4);

// Use array function indexOf to find the index of an element
const index = hobbies.indexOf('Good food');
console.log(index);

// Use array function lastIndexOf to find the last index of an element
const index2 = hobbies.lastIndexOf('Good food');

// Use array function includes to check if an element exists in the array
const hasElement = hobbies.includes('Good food');
console.log(hasElement);

// Use array function find to find an element in the array
const personData = [{ name: 'Max' }, { name: 'Manuel' }];

const manuel = personData.find((person, index, persons) => {
  return person.name === 'Manuel';
});

console.log(manuel);

// example of string interpolation
console.log(`The name is ${manuel.name}`);
