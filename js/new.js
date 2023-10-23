// COMPLEX API ONE - SPOTIFY API + GIPHY API - GET A RANDOM SONG AND A RANDOM GIF :)
const songButton = document.querySelector('#btn')
songButton.addEventListener('click', getSong)
let giphyAPIKey = `mQLhcbm24tQO3dgjAmmzYm09OnW9PjWg` // giphy api key
let refreshToken = 'AQCgjEbnuNjyDc5I-NqJlQcF2Vbrxoazw7HAr-1sEqIIl8BIQ5KA96-MrFqml91T-fsXkya2CHYgNdpdUTnBGtBstWeevlKlnVzD-1hnflOGaEwwAXNaiq3D8VRMtDtLyxUOybqIjpdlMiI8nqIM2c827oyQ1avLrbxbeOpgR4cRwzoMrcaiscyVi8qvcGvmPQBNDSbygT2J3Amo0JYCtAN1oj1JsMNvmO1gHA4IImPVT8oQr-3SwKRqpxQRpwTHjVm_7NMy17aEXvcphKpNEBxn5fgm8iXHlE6L1XndDpRSscMHT0uqADfD6ajlQ8AJFnF2c4I6IOl-dhVwtjSMVGkdPAgm57Lg4u_YhKDfWIss-ejEQKlusXL9h6c5BzxwsKMoE0FyeNHnDDpcHeXR_kBlbY28kQf5W0t7FC1pzplB6nQ0I8dD0VQO-b39Sf9zSfcKFv5kO4xhaJzV-Hgyo9yXITLuzDwBwGln-DNN1Cyh_bMEwhU4VDpVVJDLaXZzOQQW2AXMBO5lFSTuyjGOXt4T4kRsJ1QjXBNz4F5-OJyPQeCtIyv3gASWMzkj-EHbUXFqzp0iZi9xWrt-fvBpKQOgj4YFkFMDWfzszO-59TyAAT9FENBMiZmOdu1zWWpyI4DSnKIVDS7PJOjeiLmbflyc6MQegw0uWoopF0rZcExrz-_xiHFcQ4k1-FUIb_iS566dUvMWnVQKkvm0xO4u2GsfREt7qGZ2BE0NRH8VW48'

let token = 'BQCsrDxWQwBrf0-uHxYKECnJf6fKh-HGeoUkI3zDcwNQj6Az61aM5x0M4DaUurJoqN4hgtBUmYIwTraLA_ROplRsUJg9-VgHRL1B4YfXviA0_oZ6efbdbzSiZuFwqwJEKENgzksC67JTSxY9ljKC0U3G8j3WorV1Gu_yPgVhS3fU_V-ZxnjpfQGsnprsbi050wyoDs5ZZluOPK-EZgCx8Id-XOnMusbeg513BQq9Sivh5LbJpEN_ezyfO0yhrIJwUtD4S8ma75LQeNxHrBFD_FNjJPns11ugzZIjh2-xG5iJCcaqO5pnlBhjS5IZKzB1-Fo' // access token for the spotify api

function getSong() {
    // api call to spotify
    fetch('https://api.spotify.com/v1/recommendations?seed_genres=indie-pop%2C+house%2C+pop%2C+latino%2C+hip-hop', {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                // Handle 401 Unauthorized error
                refreshAccessToken(refreshToken)
            } else {
                throw new Error('Failed to fetch data from Spotify API')
            }
        }
        return response.json()
    })

    .then(data => {
        if (document.querySelector('#mediaSection').classList.contains('hidden')) {
            document.querySelector('#mediaSection').classList.toggle('hidden')
        }
        let uriCode = data.tracks[0].uri.split(":")
        let uri = uriCode[2]
        let embedLink = `https://open.spotify.com/embed/track/${uri}?utm_source=generator`
        let artist = data.tracks[0].artists[0].name
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
        .catch(err => {
            console.log(`error with giphy api call : ${err}`)
        })
    .catch(err => {
        console.log(`error with spotify api call ${err}`)
        
    })  
})}


function refreshAccessToken(refreshToken) {
    // Replace these with your actual client ID and client secret
    const clientId = 'f4f72a0d7fcd4f7f97d7d2c49d197a36'
    const clientSecret = 'a9f7be414fff4754933107f86dd94598'

    const authOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`
    }

    fetch('https://accounts.spotify.com/api/token', authOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Failed to refresh the access token')
            }
        })
        .then(data => {
            let accessToken = data.access_token
            // Do something with the access token, like sending it in a response
            console.log('Access token refreshed:', accessToken)
            token = accessToken
            getSong()
        })
        .catch(error => {
            console.error('An error occurred getting access token:', error)
        })
}