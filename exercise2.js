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




const promiseA = new Promise((resolve, reject) => {
setTimeout(() => reject("Promise A failed"), 2000);
});

const promiseB = new Promise((resolve, reject) => {
setTimeout(() => reject("Promise B failed"), 1500);
});

const promiseC = new Promise((resolve, reject) => {
setTimeout(() => reject("Promise C succeeded"), 1000);
});

Promise.any([promiseA, promiseB, promiseC])
.then((result) => console.log(result))
.catch((error) => {
    if (error instanceof AggregateError) {
    console.error("All promises failed:", error.errors);
    } else {
    console.error("One promise failed:", error.message);
    }
});


fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(myObj)
})