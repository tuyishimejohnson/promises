const createAlarm = (personName, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(delay < 2000) {
                reject("Delay is not sufficient")
            } else {
                resolve(`Wake up ${personName}`)
            }

        }, delay);
    })
}


createAlarm("Johnson", 3000).then(result => console.log(result))
.catch(error => console.error("Error: " + error))