// function to abort when the request takes more than 5ms

async function abortFetch(url, options = {}) {

    const {timeout = 0.005} = options

    const c = new AbortController()
    const signal = c.signal
    let data = setTimeout(() => c.abort(), timeout);;

    try {
        const result = await fetch(url, {...options, signal})  
        data = await result.json()

    } catch (error) {
            console.log("Fetch aborted")
        
    }

    return data
}


abortFetch("https://jsonplaceholder.typicode.com/users").then(res => console.log(res))
.catch(error => console.log("Error:", error))