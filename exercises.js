/* Implement a function performFastAsync() that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first.  */


/* const performFastAsync = async (url, timer) => {
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

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 100) */



const makeRequest = () => {

    return new Promise((resolve, reject) => {
        
        const request = new XMLHttpRequest()

        request.open("GET", "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2")

        request.addEventListener("readystatechange", () => {

            if(request.readyState === 4 && request.status === 200) {
                const jsonObj = JSON.parse(request.responseText)
                resolve(jsonObj)
            } else if(request.readyState === 4) {
                reject("Some issues")
            }
        
    })


    request.send()

    })
    
}


makeRequest().then(data => console.log(data))


