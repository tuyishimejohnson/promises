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
