/* Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms */

const URL = "https://jsonplaceholder.typicode.com/posts"
const contr = new AbortController()

const signal = contr.signal

async function fetchAbort() {
    try {
        const result = await fetch(URL, {signal:AbortSignal.timeout(10)})
        const data = await result.json()

        console.log(data)

    } catch(error) {

        console.log(`Error: ${error.name}`)
    }

        /* try {
            const result = await fetch(URL, timeout)
            
            setTimeout(() => {
                if(result > )
            }, timeout);
            
            



        } catch(error) {

        } */
    
}


console.log(fetchAbort())