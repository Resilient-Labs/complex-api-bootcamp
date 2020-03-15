let apiKey = "03cea0fdac2a4f828e6186348083d2ee"
let artistChoice = document.getElementById('artist');
let titleChoice = document.getElementById('song')
const sendFetch = document.querySelector('button')


sendFetch.addEventListener('click', () => {
  fetch(`https://api.lyrics.ovh/v1/${artistChoice.value}/${titleChoice.value}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
        let realResponse = document.createElement('p');
        realResponse.innerText = response.lyrics;
        document.querySelector('#showLyrics').appendChild(realResponse);
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });


  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistChoice.value}&api_key=${apiKey}&format=json`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      let artistInfo = document.createElement('p');
      artistInfo.innerText = response.artist.bio.content;
      document.querySelector('#artistInfo').appendChild(artistInfo);
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})

sendFetch.addEventListener('click', () => {
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistChoice.value}&api_key=${apiKey}&format=json`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
          let artistPic = document.createElement('img');
          artistPic.setAttribute("src", `${response.artist.image[5]['#text']}`);
          document.querySelector('#artistFlick').appendChild(artistPic);
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})
