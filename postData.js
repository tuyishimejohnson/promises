const URL = 'https://jsonplaceholder.typicode.com/posts'

const form = document.getElementById("form")
const name = document.getElementById("name")
const body = document.getElementById("body")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    name.value
    body.value

    function postData() {


        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                title: name,
                body: body,

            }),
            headers: {
                "Content-type": "Application/json"
            }
        })
    
    
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(`Error: There is an error in fetching data`))
    }
    
})








