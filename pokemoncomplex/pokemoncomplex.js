document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {
  let pokemon = document.querySelector('input').value.toLowerCase()
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let pokemonName = data.species.name
      console.log(pokemonName)
      let pokemonId = data.id
      console.log(pokemonId)
      document.querySelector('img').src = data.sprites.front_default
      document.querySelector('h2').innerText = data.species.name
      document.querySelector('h3').innerText = data.id
      // console.log(data.species.url)

      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data.data[0].images.large)
          document.querySelector('#card').src = data.data[0].images.large
        })
        .catch(err => {
          ;`error ${err}`
        })
    })
}