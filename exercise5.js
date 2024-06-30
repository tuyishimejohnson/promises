/* 5. Use the `async/await` syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose `Country` is equal to `"UNITED STATES (USA)"` */

async function vehicleManufactures(url) {
    const res = await fetch(url)
    const data = await res.json()
    let dataRes = data.Results
    let newArr = []
    dataRes.forEach(ele => {
        if(ele.Country === "UNITED STATES (USA)") {
            console.log(ele)
        }
    });
    
}

vehicleManufactures("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2")