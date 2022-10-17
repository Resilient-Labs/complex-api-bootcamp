document.querySelector('.button').addEventListener('click', getAQuote)


function getAQuote () {

fetch (`https://api.kanye.rest`)

  .then (res => res.json())
  
  .then (data => {
    document.querySelector('.quoteResult').innerText = data.quote
    getPic()
    
  })
    
  function getPic (pic) {
    fetch(`https://api.unsplash.com/search/photos/?query=kanyewest&client_id=kR04lnDXjJiMC590ufRTw1Nesijy1c4mcfC2BVWlEBw`)
    
    .then(res => res.json())
    
    .then(data => {
      
      let num = data.results.length
      let randomNum = Math.floor(Math.random() * num)
      let photo = data.results[randomNum].urls.regular
      
      document.querySelector('img').src = photo
    })
}
}