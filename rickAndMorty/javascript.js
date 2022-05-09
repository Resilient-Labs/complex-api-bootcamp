document.getElementById('button').addEventListener('click', first)

const url = 'https://rickandmortyapi.com/api/character'

function first() {

    let randomNum = Math.floor(Math.random() * 21)

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(dataFromMorty => {
            console.log(dataFromMorty)

            document.querySelector('h2').innerText = dataFromMorty.results[randomNum].name

            const giphy = `https://api.giphy.com/v1/gifs/search?api_key=edBSJcPTXw0vWiZjWV2EnCPgxue8xT4O&q=${dataFromMorty.results[randomNum].name}`

            fetch(giphy)
                .then(res => res.json()) // parse response as JSON 
                .then(data => {
                    
                    let secondRandomNum = Math.floor(Math.random() * data.data.length)

                    document.querySelector('iframe').src = data.data[0].embed_url
                })
        })
}