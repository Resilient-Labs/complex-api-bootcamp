function getPokemon (){
    let pokeResult = document.querySelector("input");
    pokeResult = document.querySelector("input").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeResult}`)
      .then(res => res.json())
      .then(res =>{
        let pokemon = res.name;
        let name = res.name[0].toUpperCase() + res.name.slice(1);
        let base_experience = res.base_experience
        let height = res.height
        let weight = res.weight
        document.querySelector("#title").textContent = "Pokémon: " + name;
        document.querySelector("#base").textContent = "Base Experience: " + base_experience;
        document.querySelector("#height").textContent = "Height (decimetres): " + height;
        document.querySelector("#weight").textContent = "Weight (hectograms): " + weight;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=vXLfTIwMsOyyAKrldBFWwsZeAQUGlTX7&q=${pokemon}&limit=25&offset=0&rating=g&lang=en`)
      .then(res =>res.json())
      .then(res => {
        document.querySelector("img").src = res.data[1].images.downsized_large.url;
      })
    })
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeResult}`)
      .then(res =>res.json())
      .then(res => {
        document.querySelector("#result").textContent = res.flavor_text_entries[2].flavor_text
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert('Sorry, there are no results for your search');
    });
  }
  
  document.querySelector("button").addEventListener('click', (e) => {
    getPokemon()
  })
  document.querySelector("input").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      getPokemon()
    }
  })