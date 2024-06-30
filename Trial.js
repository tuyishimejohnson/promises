

const url1 = "https://restcountries.com/v3.1/name/deutschland"
const url2 = "https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true"

/* async function displayWeather1(url1) {

    try {
        const res = await fetch(url1)
        const data = await res.json()
        


        data.forEach(ele => {
            console.log(ele.name.common)
        });
        
    } catch (error) {
        console.log(`Error: ${error}`)
    }
    
}


displayWeather1(url1) */

/* async function displayWeather2() {
    const res1 = await fetch(url2)
    const data = await res1.json()
    console.log(data)
}
 */

/* displayWeather2(url2) */



/* function wait(ms) {
    return new Promise((resolve, reject) => {
        console.log(this)
        setTimeout(() => {
            console.log("Hello world")
        }, ms);
        
    })
}



wait(1000).then(value => console.log(value))
.catch(err => console.error(err))
 */

function callback(num1, num2, cb) {
    let myName = num1 + num2 
    cb(myName)
    
}


function anotherCb(g) {
    console.log(g)
}


callback(2,3, anotherCb)



// Create a callback function that is asycnhronous


function requestData(res, callback) {

    setTimeout(() => {

        let x = res + "Displayed the results"
        callback(x)
    }, 100);
    
}


function bx(result) {
    console.log(result)
}


requestData("This function is used ", bx)


// Handling errors in callbacks

function m(res, callback) {
    let re = res + "handle errors in callbacks"

    callback(re)
}


/* function x(error, r) {
    if(error) {
        throw error
    } else {
        console.log(r)
    }

    
}


m("This is how to ", x) */

// Create new promise

const p = new Promise((resolve, reject) => {
    if(true) {
        resolve("True")
    } else {
        reject("False")
    }
})

p.then(value => console.log(value))
.catch(error => console.log(`error: ${error}`))
.finally(() => console.log("Completed finally"))





  function newPromise(time, state, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state === "fulfill") {
                resolve("It's fullfilled" + value)
            } else {
                reject("It's rejected" + value)
            }
        }, time);
    })
  }


const p1 = newPromise(200, "fulfill", "Fullfilled 1")
const p2 = newPromise(1000, "fulfill", "Fullfilled 2")
const p3 = newPromise(50, "fulfill", "Fullfilled 3")



Promise.race([p1, p2, p3]).then(value => console.log(value))
.catch(error => console.log(error))
 

