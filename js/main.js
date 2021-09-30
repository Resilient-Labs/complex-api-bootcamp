document.querySelector('button').addEventListener('click', findAnime)

function findAnime() {
    let input = document.querySelector('input').value

    fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].type === 'TV') {
                    let animeID = data.results[i].mal_id
                    fetch(`https://api.jikan.moe/v3/anime/${animeID}/characters_staff`)
                        .then(res => res.json())
                        .then(data => {
                            let randomNumber = Math.floor(Math.random() * data.characters.length)
                            document.querySelector('h2').innerText = data.characters[randomNumber].name
                            document.querySelector('img').src = data.characters[randomNumber].image_url
                        })
                        .catch(err => {
                        console.log('error')
                        })
                    i = data.results.length
                }
            }
        })
        .catch(err => {
            console.log('error')
        })
}