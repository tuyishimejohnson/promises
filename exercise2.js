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