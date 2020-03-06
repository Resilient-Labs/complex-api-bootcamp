
const btn = document.querySelector("#searchButton")
const result = document.querySelector('#result')
const resultTwo = document.querySelector('#resultTwo')
const resultThree = document.querySelector('#resultThree')
const resultFour = document.querySelector('#resultFour')
const resultFive = document.querySelector('#resultFive')
const resultSix = document.querySelector('#resultSix')
const resultSeven = document.querySelector('#resultSeven')
let apiKey = "T5cKBLChLGwC1RQxFHgMItSXc40id6td"

btn.addEventListener('click', ()=>{
  const cityLookUp = document.querySelector("#cityName").value
  const stateLookUp = document.querySelector("#stateName").value
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityLookUp}&by_state=${stateLookUp}`)
    // .then handels the resolution of the promise
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        // if(response[1].city === cityLookUp){
          let newsOne = document.createTextNode(response[1].name + " " + response[1].website_url)
          let newsTwo = document.createTextNode(response[2].name + " " + response[2].website_url)
          let newsThree = document.createTextNode(response[3].name + " " + response[3].website_url)
          let newsFour = document.createTextNode(response[4].name + " " + response[4].website_url)
          let newsFive = document.createTextNode(response[5].name + " " + response[5].website_url)
          let newsSix = document.createTextNode(response[6].name + " " + response[6].website_url)
          let newsSeven = document.createTextNode(response[7].name + " " + response[7].website_url)
          result.appendChild(newsOne)
          resultTwo.appendChild(newsTwo)
          resultThree.appendChild(newsThree)
          resultFour.appendChild(newsFour)
          resultFive.appendChild(newsFive)
          resultSix.appendChild(newsSix)
          resultSeven.appendChild(newsSeven)
          let cityForGif = response[1].city
          // fetch of GIF according to city,state
        fetch(`http://api.giphy.com/v1/gifs/search?q=${cityForGif}&api_key=${apiKey}&limit=5`)
            .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
            .then(response => {
             // gif for the city
             document.querySelector('img').src = response.data[1].images.original.url
             // top seven breweries of the city
            })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
    })
});
