

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



/* 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

/* const urls = ["https://jsonplaceholder.typicode.com/posts", "https://catfact.ninja/fact"] */





/* 5. Use the `async/await` syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose `Country` is equal to `"UNITED STATES (USA)"` */

async function vehicleManufactures(url) {
    const res = await fetch(url)
    const data = await res.json()
    let dataRes = data.Results
    let newArr = []
    dataRes.forEach(ele => {
        if(ele.Country === "UNITED STATES (USA)") {
            console.log(ele)
        }
    });
    
}

vehicleManufactures("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2")


/* Implement a function performFastAsync() that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first.  */


const performFastAsync = async (url, timer) => {
    const controller = new AbortController()
    const signal = controller.signal
    
    
    let p = () => new Promise((resolve) => {
        const timeOut = setTimeout(() => {
            resolve([])
            controller.abort()
            
        }, timer);

        if(signal.aborted){
            clearTimeout(timeOut)
        }
    })

    const pr = await Promise.race([fetch(url, { signal }).then(data => console.log(data)), p()])
    
}

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 100)



