//user will click a button to retrieve ron quotes
//1-need event listener to start
//2-create function that runs when button is clicked 
//3-console log to test api and see properties of the API
//https://public-api-lists.github.io/public-api-lists/#video 

document.querySelector('.getRon').addEventListener('click', function() {
    // Fetch Ron Swanson quote from the API
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes', {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(data => {
        // Get the entire Ron Swanson quote
        const fullRonQuote = data[0]

        // Limit the quote to 49 characters for the Giphy API request
        const truncatedRonQuote = fullRonQuote.slice(0, 49)

        // Fetch GIF based on truncated Ron quote from Giphy API
        const giphyApiKey = 'QBDuhnAkJNZ0cnCDbG8MTJMWKdYnnHVI'
        const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${truncatedRonQuote}&api_key=${giphyApiKey}`

        fetch(giphyApiUrl)
        .then(response => response.json())
        .then(giphyData => {
            if (giphyData.data && giphyData.data.length > 0) {
                const gifUrl = giphyData.data[0].images.fixed_height.url

                // Display Ron Swanson quote
                const displayRonQuote = document.querySelector('#ronQuote')
                displayRonQuote.textContent = fullRonQuote

                // Remove previous GIFs so they don't accumalate on the page
                const previousGifs = document.querySelectorAll('.gif-container')
                previousGifs.forEach(gif => {
                    gif.remove()
                })

                // Display GIF
                const gifContainer = document.createElement('div')
                gifContainer.classList.add('gif-container')
                const gifImage = document.createElement('img')
                gifImage.src = gifUrl
                gifContainer.appendChild(gifImage)
                document.body.appendChild(gifContainer)
            } else {
                console.log('No GIF found for the given quote.')
            }
        })
        .catch(giphyError => {
            console.log(`Error fetching GIF: ${giphyError}`)
        })
    })
    .catch(err => {
        console.log(`Error fetching Ron Swanson quote: ${err}`)
    })
})

//FIRST ATTEMPT
// document.querySelector('button').addEventListener('click', getRon)

// function getRon(){

//     fetch ('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
//     .then(res => res.json()) //parse response as a JSON
//     .then(data => { //data is object name for API ron quotes
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }

//SECOND ATTEMPT
//event listener for button click to run the function we will create
// document.querySelector('button').addEventListener('click', getRonSwansonQuote)

// function getRonSwansonQuote() {
//     fetch ('http://ron-swanson-quotes.herokuapp.com/v2/quotes', {
//         method: 'GET', //documentation states GET
//         mode: 'cors'
//         // headers: {'Access-Control-Allow-Origin': '*'} //documentation says: The Access-Control-Allow-Origin header is set to * so that you can make requests from any domain.
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => {
//             console.error(`error ${error}`)
//         })
// }

//THIRD ATTEMPT
// document.querySelector('button').addEventListener('click', getRonSwansonQuote)

// function getRonSwansonQuote() {
//     fetch ('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
//         .then(res => res.json())
//         res.setHeader("Access-Control-Allow-Origin", "*")
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => {
//             console.error(`error ${error}`)
//         })
// }

//without complex API
// document.querySelector('.getRon').addEventListener('click', function() {
//     // Fetch Ron Swanson quote from the API
//     fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes', {
//         method: 'GET', // the request method is set to 'GET' to fetch data,
//         mode: 'cors' // the mode is set to 'cors' to allow cross-origin requests because the API host used cors (Cross-Origin Resource Sharing) as a mechanism for integrating applications, it's how this host allows one domain to interact with resources in a different domain Enable CORS to allow requests from any domain
//     })
//     .then(res => res.json()) // parse responds as JSON
//     .then(data => {
//         const displayRonQuote = document.querySelector('#ronQuote')
//         displayRonQuote.textContent = data[0] // the API returns an array, so we get the first element 0
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// })

