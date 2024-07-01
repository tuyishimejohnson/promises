
const urls = [
    "https://dummyjson.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
    "https://catfact.ninja/fact"
    
]

const getFastPosts = async () => {

    const fetchData = urls.map(url => fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("Fetch failed!")
        }

        return response.json()
    }))

    const data = await Promise.race(fetchData)
    return data
}

getFastPosts().then(result => console.log(result))
.catch(error => console.log(error))

