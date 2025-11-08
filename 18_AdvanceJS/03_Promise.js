// API is an Talking Language between two systems like frontend-frontend, 
// frontend-backend, backend-backend, java-javascript etc

// Source: JSON Formatter https://jsonformatter.org/ use this to visualize data.

// https://chatgpt.com/s/t_690e3a5f348c81918257db3e71c88b93 V8 Engine.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Before ES6, people use promise libraries like Q or BlueBird.

// The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses. 
// Fetch is the modern replacement for XMLHttpRequest.
// The fetch() function returns a Promise 
// which is fulfilled with a Response object representing the server's response.

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// Promise.all()
// https://chatgpt.com/s/t_690f024e617081918446006d80c5b229
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error!");
const p3 = Promise.resolve("Done");

Promise.all([p1, p2, p3])
    .then(values => console.log(values))
    .catch(error => console.log("Rejected:", error));