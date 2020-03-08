let userRequest = prompt("Enter Number From 1 - 100")

fetch("https://api.pokemontcg.io/v1/cards")
    .then(res => res.json())
    .then(response => {
      console.log(response);
      console.log(response.cards[userRequest].name)
      document.querySelector('h3').innerHTML = response.cards[userRequest].name
      console.log(response.cards[userRequest].imageUrl);
      document.getElementById('pokeImg').src = response.cards[userRequest].imageUrl

      fetch(`https://api.giphy.com/v1/gifs/random?api_key=oLzLpayYD5GfXirtnBvkOXwLHBm6EErE&tag=${response.cards[userRequest].name}&rating=G`)
          .then(res => res.json())
          .then(gif => {
            console.log(gif);
            document.querySelector('iframe').src = gif.data.images.downsized_large.url
          })
    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
