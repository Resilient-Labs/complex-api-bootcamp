document.querySelector('.randomizer').addEventListener('click', getRandomImage)
//const input = document.querySelector('.value')

function getRandomImage() {
    //let imageSelection = input.value
    //console.log(imageSelection)
    fetch('http://www.randomnumberapi.com/api/v1.0/randomnumber')
        .then(res => res.json())

        .then(data => {
            let randomNumber = data
             //console.log(data)
            //console.log(randomWord)
             fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
             .then(res => res.json())

             .then(data => {
                let type = document.querySelector('.pokemonType')
                let pokemon = document.querySelector('.pokemonName')
                pokemon.innerText = data.name 
                console.log(data)
            //     // randomWord = data.urls
            //     // let random = document.querySelector('.randomImage')
            //     // random.src = randomWord.urls
             })
        })
    }
