document.getElementById('button').addEventListener('click', rickRickRick)

const url = 'https://rickandmortyapi.com/api'

function rickRickRick() {

    let randomNum = Math.floor(Math.random() * 21)

    fetch(url)
        .then(res => res.json()) 
        .then(dataFromMorty => {
            console.log(dataFromMorty)

            document.querySelector('h2').innerText = dataFromMorty.results[randomNum].name

            const giphy = `https://api.giphy.com/v1/gifs/search?api_key=mcEJjdDawHyYLuEb2p9XPjTwprB2GfNd=${dataFromMorty.results[randomNum].name}`
        })
            fetch(giphy)
                .then(res => res.json()) 
                .then(data => {
                    
                    let secondRandomNum = Math.floor(Math.random() * data.data.length)

                    document.querySelector('iframe').src = data.data[0].embed_url
                })
            