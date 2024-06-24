const url = 'https://catfact.ninja/fact'



async function catFacts() {

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`Error: This is an error`)
    }
    
}


catFacts()