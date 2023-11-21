// COMPLEX API ONE - SPOTIFY API + GIPHY API - GET A RANDOM SONG AND A RANDOM GIF :)
const songButton = document.querySelector('#btn')
songButton.addEventListener('click', getSong)
let giphyAPIKey = `mQLhcbm24tQO3dgjAmmzYm09OnW9PjWg` // giphy api key
let accessToken = 'BQBV8mLyfHvA12iD1I8qldKqjBF3Jtj3TpmI6tj9CxG0P8BEF8RHykRpG7L6Jzv22-GxIUIh_MQ0WEA31lN5KDKXTCq6gW7fH2yaSIpl8iLTGkcnmultdeHfWWGJ0m9z95QE5lInXVkEB_Qs2whCH6yVQPJHC8yFBVVt0QsGnRjGzkfQP_VQLPCVbozAxLrx3iI7cgSph4BTOnM-P3SyyJ_Of7DjyMoqMbT6MtLyDBMOrhaflocXlDag9BQS28Kh87l8vaTyZbAK5AK3XB0RyGW2mmif0fVJA2kbXVaJWXBXo7epEHhvGrK05ANpYGV14Ts' // access token for the spotify api

function getSong() {
    // api call to spotify
    fetch('https://api.spotify.com/v1/recommendations?seed_genres=indie-pop%2C+house%2C+pop%2C+latino%2C+hip-hop', {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    })

        // api response
        z.then(response => response.json())
        .then(data => {
            let uriCode = data.tracks[0].uri.split(":")
            let uri = uriCode[2]
            let embedLink = `https://open.spotify.com/embed/track/${uri}?utm_source=generator`
            let artist = data.tracks[0].artists[0].name

            // document.querySelector('.musicPlayer').classList.toggle('hidden')
            document.querySelector('iframe').src = embedLink
            
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${artist}&limit=100&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`)
            .then(giphyResponse => giphyResponse.json())
            .then(giphyData => {
                let gifList = giphyData.data
                let gifUrls = []
                gifList.forEach(gif => {
                    gifUrls.push(gif.embed_url)
                })

                let gif = gifUrls[(Math.floor(Math.random() * gifUrls.length))]
                document.querySelector('.giphy-embed').src = gif
        })     
})}