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