let quote = document.getElementById('quote')
let author = document.getElementById('author')
let btn = document.getElementById('btn').addEventListener('click', laughAndLearn)
let joke = document.getElementById('joke')



function laughAndLearn() {
    const url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            quote.innerText = data.content
            author.innerText = data.author
        })
    const url2 = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
    fetch(url2)
        .then(res => res.json())
        .then(data2 => {
            joke.innerText = `${data2.joke}`
            debugger
            console.log(data2.joke)
        })
        .catch(err => {
            console.error(err)
        })

}

