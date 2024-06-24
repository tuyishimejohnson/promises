
const myform = document.getElementById("form")


myform.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const mybody = document.getElementById("bd").value
    
    
    const data = {
        name: name,
        body: mybody
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "Application/json",
        },

        body: JSON.stringify(data)

    })

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error " + error))

    
})



/* fetch('https://example.com/api/data', {
    method: 'POST', // Specify the method
    headers: {
      'Content-Type': 'application/json', // Set the content type to application/json
    },
    body: JSON.stringify({
      key1: 'value1',
      key2: 'value2',
    }), // Convert the data to a JSON string
  })
  .then(response => response.json()) // Parse the JSON response
  .then(data => console.log(data)) // Handle the parsed data
  .catch((error) => console.error('Error:', error));
 */
