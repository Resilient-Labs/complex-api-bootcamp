// worked with mentor Mark to compelete this

 async function getQuote() {
  const url = `https://api.api-ninjas.com/v1/quotes?category=happiness`
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "X-Api-Key": "4DyiatN5FdQWd4J9mKeM5A==3pJioQCQdTYG0KiO",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    
    });

  const json = await response.json()
  console.log(json)
  const quote = json[0].quote
  const quoteArray = quote.split(' ')
  const encodedQuote = encodeURIComponent(quoteArray[0])
  const picUrl = `https://pixabay.com/api/?key=35149073-31a4c5a37402435bcc35b1566&q=${encodedQuote}&image_type=photo`
  const picResponse = await fetch(picUrl)
  const picJson = await picResponse.json()
  console.log(picJson)
  console.log(picUrl)

  /*for (let i = 0; i < picJson.hits.length ; i++){
    console.log(picJson.hits[i].largeImageURL)
   }*/

   document.querySelector('#pic').src = picJson.hits[0].largeImageURL
   document.querySelector('#forQuotes').innerText = json[0].quote
}

//getQuote()

document.querySelector('button').addEventListener('click', getQuote)

//worked with mentor mark
