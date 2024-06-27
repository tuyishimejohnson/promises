/* 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second. */

/* function hello(callback) {
    callback()
}

function timeOut() {
    setTimeout(() => {
        console.log("Hello World")
    }, 2000);
}

hello(timeOut) */

/* 2. Write a JavaScript program that converts a callback-based function to a Promise-based function. */

/* function callback(cb) {
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
              .catch(error => console.log("error " +  error)); */

/* 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data. */



/* const url = "https://jsonplaceholder.typicode.com/posts"
async function getResult() { 

    try {
        const result = await fetch(url)
        const mydata = await result.json()
        console.log(mydata)

    } catch (error) {
        console.log("Error is " + error)
    }
    
        
}

getResult() */

// without async await 

/* function getData(url) {
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
          .catch(error => console.log(error)) */



/* 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises. */

/* const urls = ["https://jsonplaceholder.typicode.com/posts", "https://catfact.ninja/fact"] */

/* function getUrl1(url) {
    fetch(url)
    .then(value => value.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


getUrl1("https://jsonplaceholder.typicode.com/posts")



function getUrl2(url1) {

    fetch(url1)
        .then(val => val.json())
        .then(data => console.log(data))
        .catch(error => console.log("error:" + error))
}

getUrl2("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2")



Promise.all([getUrl1(), getUrl2()]).then(value => console.log(value))
.catch(error => console.log(error)) */



/* function gettheData(urls) {
let promise = urls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(value => {
                if(!value.ok) {
                    throw new Error("Fetch failed!")
                }
                return value.json()
            }).then(res => resolve(res))
            .then(error => reject("Error" + error))
        })
    })

    return Promise.all(promise)
}

gettheData([
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ])

gettheData().then(result => console.log(result))
.catch(error => console.log(error)) */
/* 5. Use the `async/await` syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose `Country` is equal to `"UNITED STATES (USA)"` */

async function vehicleManufactures(url) {
    const res = await fetch(url)
    const data = await res.json()
    let dataRes = data.Results
    
    dataRes.forEach(ele => {
        if(ele.Country === "UNITED STATES (USA)") {
            console.log(ele)
        }
    });
    
}

vehicleManufactures("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2")


/* Implement a function performFastAsync() that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first.  */


/* const performFastAsync = async (url) => {
    const fetcdata = await fetch(url, timer)

    fetcdata.then(value )

    const data = await fetcdata.json()
    console.log(data)
}



performFastAsync("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2", 1000) */


