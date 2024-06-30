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
