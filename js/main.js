
document.querySelector('button').addEventListener('click', getLyrics)


function getLyrics() {

    let character = document.querySelector('input').value
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${character}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data[0].character
            document.querySelector('p').innerText = `"${data[0].quote}"`
            
            const photoUrl = `http://api.giphy.com/v1/gifs/search?api_key=KEY&q=${data[0].character}`
            
            fetch(photoUrl)
                .then(res => res.json())
                .then(gifData => {
                    document.querySelector('iframe').src = gifData.data[0].embed_url
                })

                .catch(err => {
                    console.log(`error ${err}`)
                });

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


