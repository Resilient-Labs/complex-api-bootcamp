// created an app similar to the pokedex where you type in a pokemon game ,it returns its number id, moves , abilities, and flavor text



function pkmnFind(e) {
    e.preventDefault()
    const pkmn = document.querySelector('input').value
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${pkmn}`;
    fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
    console.log(data.data[0].attacks[0].name);
    const pkmnAttack = data.data[0].attacks[0].name
    let pkmnArr = data.data.filter( text => {
        return text.flavorText
    })
    const pkmnText = pkmnArr[0].flavorText

    const url = `https://pokeapi.co/api/v2/pokemon/${pkmn}`

        fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(url)
            const pokemon = document.querySelector('h2')
            const sprite = document.querySelector('img')
            const info = document.querySelector('.text')
            const abilityOne = document.querySelector('.ability1')
            const abilityTwo = document.querySelector('.ability2')
            const typeOne = document.querySelector('.type1')
            const typeTwo = document.querySelector('.type2')
            const attackMove = document.querySelector('.attack')

            pokemon.innerText = `${data.name} No.${data.id}`
            sprite.src = data.sprites.front_default
            document.querySelector('.num').innerText = data.id
            attackMove.innerText = pkmnAttack
            info.innerText = pkmnText
            if ( data.types.length == 2){
                typeOne.innerText = data.types[0].type.name
                typeTwo.innerText = data.types[1].type.name
            } else {
                typeOne.innerText = data.types[0].type.name
            }
            if (data.abilities.length == 2 ) {
                abilityOne.innerText = data.abilities[0].ability.name
                abilityTwo.innerText = data.abilities[1].ability.name
            } else {
                abilityOne.innerText = data.abilities[0].ability.name
            }

        })
        .catch(err => {
        console.log(`error ${err}`)
        });

    })
    .catch(err => {
    console.log(`error ${err}`)
    });    
}

document.querySelector('button').addEventListener('click', pkmnFind)