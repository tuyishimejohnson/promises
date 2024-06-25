// 1. Write a function that uses `setTimeout` to log "Hello, World!" to the console after 2 seconds.

setTimeout(() => {
    console.log("Hello world")
}, 2000);


// 2. Create a function that takes a callback and executes it after 3 seconds using `setTimeout`.

function myCallback(callback) {
    console.log("Hello")
    callback()
}



function thisCallback() {
    setTimeout(() => {
        console.log("hello world")
    }, 3000);
}

myCallback(thisCallback)


// 3. Using `setInterval`, write a function that logs "Tick" to the console every second.

let count = 0
const timeInterval = setInterval(() => {
    console.log("Tick")

    count += 1

    if(count == 10) {
        clearInterval(timeInterval)
    }
}, 1000);

// 4. Write a Promise that resolves with "Success!" after 1 second. Log the result to the console.

const promise = new Promise((resolve) => {
    resolve(setTimeout(() => {
        console.log("Success")
    }, 1000))
})

// 5. Create a Promise that rejects with "Error!" after 2 seconds. Handle the error using `.catch()`.

const anotherPromise = new Promise((reject) => {
    reject(setTimeout(() => {
        console.log("Rejected")
    }, 2000))
})

anotherPromise.catch(error => console.log(error))

// 6. Using the Fetch API, write a function to fetch data from an API endpoint and log the response to the console.

const url = "https://catfact.ninja/fact"

fetch(url)

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error: " + error))

// 7. Write an asynchronous function using `async`/`await` to fetch and log data from an API.

const url1 = "https://catfact.ninja/fact"

const fetchApi = async () => {
    try {
        const result = await fetch(url1)
        const data = await result.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

fetchApi()

// 8. Create a simple callback function that multiplies two numbers and then calls a callback with the result.

function multiplyNumbers(n1, n2, callback) {
    let result = n1 * n2
    callback(result)
    
}
 
function anotherFunction(result) {
    console.log(result)
}

multiplyNumbers(5, 6, anotherFunction)

// 9. Write a function that makes an asynchronous request using `XMLHttpRequest` and logs the response.


const xhr = new XMLHttpRequest()

xhr.open("GET", "https://catfact.ninja/fact")



xhr.onload = function () {
    if(xhr.status !== 200) {
        console.log(`Error fetching`)
    }
    console.log(xhr.responseText)
    
}

xhr.send()


//  Create a Promise that resolves with "Data fetched" after 1 second and log the message when it resolves.


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched")
    }, 1000);
}).then(value => console.log(value))

