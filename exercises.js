/* 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second. */

function hello(callback) {
    callback()
}

function timeOut() {
    setTimeout(() => {
        console.log("Hello World")
    }, 2000);
}

hello(timeOut)

/* 2. Write a JavaScript program that converts a callback-based function to a Promise-based function. */

function callback(cb) {
    setTimeout(() => {
        const error = false;
        if (error) {
            cb("An error occurred", undefined);
        } else {
            cb(undefined, "Success");
        }
    }, 1000);
}

const promiseBased = () => {
    return new Promise((resolve, reject) => {
        callback((err, data) => {
            if (data) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

promiseBased().then(value => console.log(value))
              .catch(error => console.log("error " +  error));

/* 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data. */



const url = "https://jsonplaceholder.typicode.com/posts"
async function getResult() { 

    try {
        const result = await fetch(url)
        const mydata = await result.json()
        console.log(mydata)

    } catch (error) {
        console.log("Error is " + error)
    }
    
        
}

getResult()

// without async await 

function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error("Failed to fetch!")
            }

            return response.json()
        }).then(value => resolve(value))
        .catch(error => reject(error))
    })
}

getData("https://jsonplaceholder.typicode.com/posts").then(res => console.log(res))
          .catch(error => console.log(error))