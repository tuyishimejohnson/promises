/* const URL = 'https://reqres.in/api/users' */

const myform = document.getElementById("form")


myform.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const mybody = document.getElementById("bd").value
    
    



    /* fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            
        })
    })

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(`Error: This is an error! ${error}`)) */
    
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
