const fetchUserTodos = async () => {
    const urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/todos"]


    const fetchData = urls.map(url => fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("Failed to fetch")
        }

        return response.json()
    }))

    const res = await Promise.all(fetchData)
    return res
}



fetchUserTodos().then(result => console.log(result))
.catch(error => console.log(error))