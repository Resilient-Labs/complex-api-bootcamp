// // GLOBALS
const emojiClick = document.querySelectorAll('button')

// CLICK
emojiClick.forEach(stanEmoji =>
    stanEmoji.addEventListener('click', () => {

        // CONDITIONALS
        let artistName = stanEmoji.innerText == '🐝' ? 'Beyoncé' :
            stanEmoji.innerText == '🐴' ? 'Megan Thee Stallion' :
                stanEmoji.innerText == '🧜‍♀️' ? 'Azealia Banks' :
                    stanEmoji.innerText == '🥀' ? 'SZA' :
                        stanEmoji.innerText == '🛥️' ? 'Rihanna' :
                            stanEmoji.innerText == '🦄' ? 'Nicki Minaj'

                                : ''
        document.querySelector('h3').innerText =
            artistName == 'Beyoncé' ? 'QUEEN BEE: "U-NIQUE!"' :
                artistName == 'Megan Thee Stallion' ? 'HOTGIRL: "Handle me? (Huh) Who gon\' handle me? (Who?)"' :
                    artistName == 'Azealia Banks' ? 'WITCH BITCH: "I\'m two kinds of potential."' :
                        artistName == 'SZA' ? 'GONE GIRL: You like 9-5, I\'m the weekend.' :
                            artistName == 'Rihanna' ? 'FENTY: "Bitch Better Have My Money."' :
                                artistName == 'Nicki Minaj' ? 'IT\'S BARBIE: I was on the play with Dwaaaayne.' :
                                    '';

        console.log(artistName)

        // FETCH REQUEST 1
        // lastFM API key
        const lastfmUrl = `https://ws.audioscrobbler.com//2.0/?method=artist.getInfo&artist=${artistName}&api_key=4005c207aac54bb00accd00ee3e0b258&format=json`
        fetch(lastfmUrl)
            .then(res => res.json())
            .then(artistData => {
                console.log(artistData)

                // VARIABLES
                let stanResults = document.querySelector('#stan-results')
                let bioResults = document.querySelector('#bio-results')
                let squadResults = document.querySelectorAll('.squad-results')

                //HTML RESULTS 1
                stanResults.innerHTML = '✨' + artistName + '✨'
                bioResults.value = artistData.artist.bio.content

                // FETCH REQUEST 2
                const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=O9CsFByOY4e8dJiwv3ZXDZzafELtzgeq&q=${artistName}&limit=25&offset=0&rating=g&lang=en`
                fetch(giphyUrl)
                    .then(res => res.json())
                    .then(gifData => {
                        console.log(gifData)

                        // HTML RESULTS 2
                        for (let i = 0; i < 30; i++) {
                            let randomIndex = Math.floor(Math.random() * gifData.data.length)
                            let squadResult = squadResults[i]
                            squadResult.innerHTML = `<img src="${gifData.data[randomIndex].images.original.url}">`
                        }
                    })
            })
    })
)
// //IMAGE API KEY : AcK7hi3L0gSSWBoq5hlh9eJsFA1FevYw-jKDAI5IQ7w
// // OPEN AI API KEY : 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





