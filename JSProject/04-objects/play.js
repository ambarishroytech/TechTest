const name1 = 'Roy';
const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name); // This will refer here to the object person
  },

  g1: () => {
    console.log('Hi, I am ' + name1); //this will refer to the global scope inside an arrow function
  }
};

person.greet();
person.g1();
