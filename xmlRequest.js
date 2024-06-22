/* Requesting data from the server using XMLHttpRequest */

const request = new XMLHttpRequest();

request.open("GET", "https://api.nationalize.io?name=nathaniel")
//  /* open method takes two parameters, first: the string specifying what the type of request is and the second: the url link inside quotations*/

 // statechange is when the request is going through different phases of request


/* request.send()

request.onload = function() {
    if(request.status !== 200) {
        alert(`Error: ${request.status}`)
        return 
    }   
    alert(`Response: ${request.response}`)
}
 */




const URL = "https://dog.ceo/api/breeds/image/random"

/* async function fetchDog() {
    try {
        const res = await fetch(URL)
        const data = await res.json()    
        console.log(data)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
 */

