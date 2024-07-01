const fetchUserTodos = () => {
    const urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/todos"]


    const fetchData = urls.map(url => fetch(url))
    console.log(fetchData)
}



fetchUserTodos().then(result => console.log(result))
.catch(error => console.log(error))