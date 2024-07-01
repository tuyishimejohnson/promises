

const fetchWithRetry = (url, retries) => {

    return fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("Error")
        }

        return response.json()
    }).catch(error => {
        if(retries <= 1) {
            throw error
        }

        return fetchWithRetry(url, retries - 1) 
    })
}

fetchWithRetry('https://catfact.ninja/fact', 3).then(res => console.log(res))
.catch(error => console.log("Error" + error))
