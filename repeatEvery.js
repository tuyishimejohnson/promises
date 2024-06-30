/* Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments. This function should execute the given function repeatedly at the specified time interval until manually stopped. */


let count = 1
const set = setInterval(() => {
  console.log("Hello world")
  count++

  
}, 1000)
if(count > 3) {
  clearInterval(set)}


/* function repeatEvery() {
  
  
}
 */


  



