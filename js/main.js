document.querySelector('button').addEventListener('click', Pokedex)

function Pokedex() {

    let pokeSearch = document.querySelector('input').value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}/`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('#official').src = data.sprites.other["official-artwork"].front_default //displays the artwork of the Pokemon
            document.querySelector('h2').innerText = data.species.name //displays the name of the Pokemon
            let species = data.species.name //holding the name to use in our next API (line 16)

            fetch(`https://api.pokemontcg.io/v2/cards?q=name:${species}`)
                .then(res => res.json())
                .then(data => {
                    let qualityCheck = 1
                    
                    while (data.data[qualityCheck].name.toLowerCase() != species || data.data[qualityCheck].rarity == "Rare Shiny" || data.data[qualityCheck].artist == "Pokemon Rumble" || data.data[qualityCheck].artist == "Takashi Yamaguchi" || data.data[qualityCheck].artist == "Ryo Ueda") {
                        qualityCheck++
                    } /*this loop ensures that the card art displayed is the Pokemon species by itself 
                    (thank you Rowlet and Exeggutor GX), is not Shiny (thanks Ralts) and the art is not from Pokemon Rumble (it's just bad.)*/

                    document.querySelector('#card').src = data.data[qualityCheck].images.large
                    console.log(data.data[qualityCheck].name)
                    console.log(data.data[qualityCheck])

                })

        })

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeSearch}/`) //the pokemon endpoint doesn't have Pokedex entries so I'm using pokemon-species for it.
        .then(res => res.json())
        .then(data => {
            let langCheck = 0

            while (data.flavor_text_entries[langCheck].language.name != 'en') {
                langCheck++
            } //this loop will ensure that the pokedex entry displayed is always in English (thanks Snivy for having a French [0] entry.)

            let entry = document.querySelector('h3').innerText = data.flavor_text_entries[langCheck].flavor_text
            document.querySelector('h3').innerText = entry.replace(/\n/g, ' ').replace(/\f/g, ' ') //https://stackoverflow.com/questions/14072313/replace-n-in-javascript?noredirect=1&lq=1 gets rid of the unneccesary formatting

        })

        .catch(err => {
            console.log(`error${err}`)
        })
}
