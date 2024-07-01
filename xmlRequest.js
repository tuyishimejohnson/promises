/* Requesting data from the server using XMLHttpRequest */


const getData = (callback) => {

    // statechange is when the request is going through different phases of request
   
    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")

    xhr.addEventListener("readystatechange", () => {
        /* console.log(xhr, xhr.readyState) */
    
        if(xhr.readyState === 4 && xhr.status === 200) {
            callback(undefined, xhr.responseText)
        } else if (xhr.readyState === 4) {
            callback("Request failed", undefined)
        }
    })
    
    
    
    xhr.send()
}


getData((error, data) => {
    console.log("CallBACKfired")
    data ? console.log(data) : console.log(error)
})

