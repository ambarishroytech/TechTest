const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);


const toArray0 = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
// rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
