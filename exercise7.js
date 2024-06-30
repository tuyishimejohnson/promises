const fetchArray = [
    "https://dummyjson.com/posts",
    "https://jsonplaceholder.typicode.com/posts"
    
]

const getFastPosts = async () => {
    try {
        const res = await Promise.race(fetchArray)
        const data = await Promise.race(res.map(re => re.json()))
        console.log(data.flat())
    } catch (error) {
        console.error("Promise failed")
    }
    
}

getFastPosts()

