const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');

// write above code in async/await
const fetchData2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

const timer = setTimeout(async () => {
  console.log('Timer is done!');
  const text = await fetchData2();
  console.log(text);
  const text2 = await fetchData2();
  console.log(text2);
}
, 2000);

console.log('Hello!');
console.log('Hi!');