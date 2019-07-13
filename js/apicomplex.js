document.querySelector("button").addEventListener("click", function() {
  const inputValue = document.querySelector("input").value
  const url = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=" + inputValue + "&countryCode=US&apikey=3fvhpOiM6yotCjbatCR9SZtmIaalQmXy"
  fetch(url)

    .then(res => res.json())
    .then(response => {

      let venues = response._embedded.events[0]._embedded.venues[0].name
      let city = response._embedded.events[0]._embedded.venues[0].city["name"]
      let state = response._embedded.events[0]._embedded.venues[0].state["name"]
      // console.log(venues,city,state)

      let ul = document.querySelector('ul')
      let li = document.createElement('li');
      let li2 = document.createElement('li')
      li.appendChild(document.createTextNode(venues));
      li2.appendChild(document.createTextNode(`${city}, ${state}`));
      ul.appendChild(li);
      ul.appendChild(li2)
    })

    .catch(err => {
      console.log("error")
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
  // ***********************************************

  // to check the artist and their top track name--
  // Use Uppercase: Lizzo, Ariana Grande, Khalid, Tyler, the creator for examples


  fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=9f03710054f2f267a33e3ad5a52f0ef1&format=json")
    .then(res => res.json())
    .then(response => {


      let artist = document.getElementById('artist')
      let tracks = response.tracks.track

      // created a variable for the track array below
      let trackArr = tracks.length
      let trackName

      for (let i = 0; i < trackArr; i++) {
        if (tracks[i].artist['name'] === artist.value) {
          trackName = tracks[i].name
        }
      }
      let pTag = document.querySelector('#track-name');
      pTag.innerHTML = trackName


      console.log(artist.value)
      // console.log(response)  < -- console log the response to pull other artist names!
    })



})
