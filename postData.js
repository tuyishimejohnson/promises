const URL = 'https://jsonplaceholder.typicode.com/posts'

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const body = document.getElementById("body").value


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
        const title = document.getElementById("title")
        const par = document.getElementById("par")

        title.innerHTML = data.title
        par.innerHTML = data.body
    }
    
})


postData()








