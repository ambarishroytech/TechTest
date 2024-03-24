const fetch = require('node-fetch');

// generate a new javascript function which will call a publicly available simple json based rest api and print the output using promises
const getPublicData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
};


// re-generate this function using async-await
const getPublicDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

getPublicData();

//getPublicDataAsync();