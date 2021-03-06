document.querySelector('button').addEventListener('click', findBae)

function findBae() {
  let cityZip = encodeURIComponent(document.getElementById('zip').value)
  let country = encodeURIComponent(document.getElementById('country').value)
  let url = `https://app.zipcodebase.com/api/v1/search?apikey=25c0f6a0-7baf-11eb-89aa-4f0f18dc4032&codes=${cityZip}&country=${country}`
  fetch(url)
    .then(res => res.json()) // parse response as JSONabcs
    .then(data => {
      console.log(cityZip)
      console.log(data)
      document.querySelector('#city').innerText = data.results[cityZip][0].city
      document.querySelector('#lat').innerText = data.results[cityZip][0].longitude
      document.querySelector('#long').innerText = data.results[cityZip][0].latitude
      let long = data.results[cityZip][0].longitude
      let lat =  data.results[cityZip][0].latitude
      console.log(long)
      console.log(lat)
      let timezone = `http://api.timezonedb.com/v2.1/get-time-zone?key=VJROAX4I8ZU0&format=json&by=position&lat=${lat}&lng=${long}`
      fetch(timezone)
        .then(res => res.json()) // parse response as JSON
        .then(zones => {
          console.log(zones)
          document.querySelector('#zone').innerText = zones.formatted
          document.querySelector('#abbreviation').innerText = zones.abbreviation
        })
    })
.catch(err => {
  console.log(`error ${err}`)
});
}
