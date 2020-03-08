// let userQuestion= prompt("what is your favorite Genre of music?")
let button= document.querySelector('button').addEventListener('click',()=>{
// function getQuote(){
fetch(`http://quotes.stormconsultancy.co.uk/random.json?`)
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response.quote)
      document.querySelector('p').textContent=response.quote
      getGif(response.quote)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
function getGif(){
fetch("https://api.giphy.com/v1/gifs/random?api_key=d25ica6Wn269yDBP59OVKa5c9HIYFjuH&tag=&rating=G")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector('img').src=response.data.images.downsized_large.url
      console.log(response.data.images.downsized_large.url)
    })
}
