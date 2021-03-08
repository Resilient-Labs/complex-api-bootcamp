/*
///////////API from sun sign to daily horoscope//////////////////
Potential APIS

https://tapasweni-pathak.github.io/Horoscope-API/#todo
http://horoscope-api.herokuapp.com/horoscope/today/<sunsign>

https://zenquotes.io/api/random
https://officeapi.dev/api/quotes/random

https://developers.giphy.com/docs/sdk#web   ??

https://openlibrary.org/dev/docs/api/search */

//Help from Jasmin + Dashlin//
document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {
  const url1 = `https://game-of-thrones-quotes.herokuapp.com/v1/random`
  fetch(url1)
    .then(res => res.json())
    .then(dataQuote => {
      console.log(dataQuote)
      document.querySelector(".quote").innerText = dataQuote.sentence
      document.querySelector(".quotePersonHouse").innerText = dataQuote.character.house.name
      document.querySelector(".quotePerson").innerText = dataQuote.character.name
      let generatedCharacter = dataQuote.character.name
      console.log(generatedCharacter)
      console.log('break')
      //
      const apiKey = `viv3bskU9GnBfF7zwfif73563Ih0RFm6` // DONT FORGET TO USE BACK TICKS OR IT WON"T WORK!//
      const url2 = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${generatedCharacter}&limit=5&offset=0&rating=G&lang=en`

      fetch(url2)
        .then(res => res.json()) //this is just the syntax//parse response as JSON//
        .then(dataGif => {
        console.log(dataGif)
        document.querySelector(".gif").src = dataGif.data[0].images.downsized_large.url
        })

        .catch(err =>{
          alert(`error ${err}`)
        })


    })
}
