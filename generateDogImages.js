
const URL = "https://dog.ceo/api/breeds/image/random"

function fetchData() {
    fetch(URL)

    .then(response => response.json())
    .then(data => displayImage(data.message))
    .catch(error => console.log(`Error: this is error ${error}`))
}



function displayImage(imageUrl) {
    const button = document.getElementById("button")
    const imag = document.getElementById("images")
    imag.src = imageUrl

    button.addEventListener("click", fetchData())
}

fetchData()