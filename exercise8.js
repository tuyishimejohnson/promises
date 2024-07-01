/* 
Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.
*/

const myFetch = () => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.open("GET", "https://jsonplaceholder.typicode.com/posts")

        request.addEventListener("readystatechange", () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if(request.readyState === 4) {
                reject("Error requesting some data")
            }
    })

    request.send()

    })
    
}


myFetch().then(data => console.log(data))
.catch(error => console.error(error))