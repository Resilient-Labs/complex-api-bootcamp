// Use data returned from one api to make a request to another api and display the data returned
// CREDIT TO HOUSE GARDNER

document.getElementById('button').addEventListener('click', getCharacter)

const pokemon = 'https://pokeapi.co/api/v2/pokemon/'

function getCharacter() {

  let randomNum = Math.floor(Math.random() * 899)

  fetch(pokemon + randomNum)
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
      // We're pulling the name from HTML
      document.querySelector('h2').innerText = "You are: " + data.name

      const giphy = `https://api.giphy.com/v1/gifs/search?api_key=&q=${data.name}`

      fetch(giphy)
        .then(res => res.json()) // parse response as JSON 
        .then(data => {
          // Pulling random gif
          let secondRandomNum = Math.floor(Math.random() * data.data.length)

          document.querySelector('iframe').src = data.data[0].embed_url
        })
        .catch(err => {
          console.log(`error ${err}`)
        });

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
