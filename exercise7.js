const fetchArray = [
    "https://dummyjson.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
    "https://this-may-not-exist.com/posts"
    
]

const getFastPosts = async () => {
    try {
        const res = await Promise.race(fetchArray.map(url => fetch(url)))
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.error("Promise failed")
    }
    
}

getFastPosts()

/* getFastPosts().then(value => console.log(value))
.catch(error => console.error(error)) */


/* let a = 1
console.log(a)
setTimeout(() => {
  console.log('Timeout: ', a)
  a =2
}, 0)

setImmediate(() => {
  console.log('immediate:', a)
})

let p = new Promise((resolve, reject)=> {
   console.log('Am within a promise')
  resolve()
  a = 3
})

p.then(()=> console.log('am in promise:', a))

console.log('Am out in free space', a) */