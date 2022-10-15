// One api displays total deaths, active cases, reccovered cases total cases 
// The other api takes country from first api and displays total vacinated in the USA - takes ${country} and uses the name of it it in the title and paragraph (USA)


fetch('https://corona.lmao.ninja/v2/countries/USA')
.then(res => res.json())
.then(data=> {
//   console.log(data)

  let country = data.country
//   console.log(country)

  document.getElementById('active').innerText = data.active.toLocaleString()
  document.getElementById('cases').innerText = data.cases.toLocaleString()
  document.getElementById('death').innerText = data.deaths.toLocaleString()
  document.getElementById('recovered').innerText = data.recovered.toLocaleString()
  document.getElementById('flag').src = data.countryInfo.flag

    let url2 = `https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1=${country}`

    fetch(url2)
    .then(res => res.json())
    .then(datad=> {
      console.log(datad)
      for(let i = 0; i < datad.length; i++){
        
        document.querySelector('#vaccines').innerText = Object.values(datad[207].timeline).slice(-1).toLocaleString()
        // vaccine info from the USA - Mentor helped with 'Object.values' to convert the object into a list of values 
        document.getElementById('country').innerText = `the ${country}`

        document.querySelector('h3').innerText = `While the ${country} has continued to take the necessary steps to prevent the spread of COVID-19 it is recommended to continue practicing social distancing and wearing a mask especially if immunocompromised.`
      }
    })
})