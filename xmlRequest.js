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

async function fetchDog() {
    try {
        
        const response = await fetch(URL)
        const data = await response.json()
        data = dogImages(data.message)

    } catch (error) {
        console.log(`error: ${error}`)
    }
}


function dogImages(dataUrl) {
    const dogImage = document.getElementById("dogImages")
    dogImage.src = dataUrl
}

fetchDog()