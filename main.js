//take events and show breweries
// https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=f3LkgBTyTF2JilNqes9cZKOrclfqCaOd
// https://api.openbrewerydb.org/v1/breweries?by_postal=44107&per_page=3



document.querySelector("button").addEventListener("click",food)


function food(){
  let eventUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=f3LkgBTyTF2JilNqes9cZKOrclfqCaOd
  `
  fetch(eventUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        for( let i = 0; i <= 19; i++){
          // console.log(data._embedded)
          let cityOne = data._embedded.events[i]._embedded.venues[0].city.name
          console.log(cityOne)
          let zip = data._embedded.events[i]._embedded.venues[0].postalCode
          console.log(zip)
          // console.log(data._embedded.events[0].images[0].url)
          document.querySelector("img").src = data._embedded.events[0].images[0].url
          let urlTwo = `https://api.openbrewerydb.org/v1/breweries?by_postal=${zip}&per_page=3`

          fetch(urlTwo)
            .then(res => res.json()) // parse response as JSON
            .then(beer => {
              // console.log(beer[0])
              let address = beer[0].address_1
              console.log(address)
              let cityTwo = beer[0].city
              console.log(cityTwo)
              let name = beer[0].name
              console.log(name)
              let phone = beer[0].phone
              console.log(phone)
              let state = beer[0].state
              console.log(state)
             
              let li = document.createElement("li")
              let ul = document.querySelector("ul")
              li.innerText = `Event in ${cityOne} has a brewery named ${name} located at ${address},${cityTwo},${state}-${phone}`
              ul.appendChild(li)
            })
          }
      

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}