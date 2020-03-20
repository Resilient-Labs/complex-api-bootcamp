document.getElementById('quote').textContent
const quoteGenerator=document.getElementById('button').addEventListener('click', () => {
  let generatedQuote;
fetch(`https://api.tronalddump.io/random/quote`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
  generatedQuote=response.value
      document.getElementById('quote').innerHTML=generatedQuote
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=C2oSbcMrVrRoggGJSwOTI8aVqrZr7ezL&q=${generatedQuote}&limit=25&offset=0&rating=G&lang=en`)
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(response => {
          
            document.querySelector('iframe').src=response.data[0].images.downsized_large.url


      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

    })
  })
