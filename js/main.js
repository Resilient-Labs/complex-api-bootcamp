const button = document.querySelector('button')
let dogBreeds = document.getElementById('input')


document.querySelector('button').addEventListener('click',()=> {
fetch(`https://random-word-api.herokuapp.com/all`)
.then(res => res.json())
.then(response => {
console.log(response)


let wordGenerator = Math.floor(Math.random()*response.length)

let words = response[wordGenerator]

document.querySelector('p').innerHTML = words

console.log(words)
fetch(`https://api.giphy.com/v1/gifs/search?api_key=UZRIDxoDpCAaFxjlarGW5eem9VM2lKWg&q=${words}&limit=25&offset=0&rating=G&lang=en
`)
.then(res => res.json())
.then(response => {
 console.log(response)
let gif = response.data[0]
let big = gif.images.downsized_large.url
document.getElementById('image').src = big


})

})

})
