/* 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second. */

/* function hello(callback) {
    callback()
}

function timeOut() {
    setTimeout(() => {
        console.log("Hello World")
    }, 2000);
}

hello(timeOut)
 */
/* 2. Write a JavaScript program that converts a callback-based function to a Promise-based function. */

/* function callback(cb) {
    setTimeout(() => {
        const error = false
        if(error) {
            cb(undefined, "Error occured")
        }
        else {
            cb("Successful", undefined)
        }
    }, 1000);
    
}


const promiseBased = () => {
    return new Promise((resolve, reject) => {
        callback((err, data) => {
            if(data) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

promiseBased().then(value => console.log(value))
              .catch(error => console.log("error " +  error))
 */


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