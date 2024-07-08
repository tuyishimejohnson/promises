/* Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds. */

const bg = document.getElementById("bg-color")

const colors = ["blue", "green", "gray"]

let index = 0

function changeBackground() {

    bg.style.backgroundColor = 
     // Start from the index 0

    index++ // Increment the index

    if(index >= colors.length) {

        index = 0 // Reset to index 0 if the length of the array is done
    }
}


const c = setInterval(changeBackground, 1000);
console.log(c)
