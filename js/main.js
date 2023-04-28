// goal: Use data returned from one api to make a request to another api and display the data returned

// got help from Christina on setting up the YouTube API key/video in browser




const input = document.querySelector('input')
const selectBtn = document.querySelector('#getVideoBtn')
const resetBtn = document.querySelector('#resetBtn')
const movieName = document.querySelector('#movieName')
const videoPlayer = document.querySelector('.videoPlayer')

// getting input from the user
// taking the user's input and connecting it to the api
// getting information from the api
// how to render

function getMovieAndVideo() {
    let selector = document.querySelector('input').value
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=fbde084f&s=${selector}`

    // sending a fetch or call to the website --from the URL it's promising a response 
    // .then is the response from the fetch 
    // res => converted to json format
    // data is the object
    fetch(url)
        .then(res => res.json())
        .then(movieData => {
            console.log(movieData.Search[0].Title)

            if (movieData.Search[0].length === 0) {
                movieName.innerText = "NO MOVIES FOUND! Please check your spelling and try again"
            }

            if (movieData.Search[0].Title === undefined) {
                movieName.innerText = "No Movie Name Available"
            } else {
                movieName.innerText = movieData.Search[0].Title
            }


            const url2 = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaxB0s7tzKgmksv0qtL52CGgm6Obt7qI4&type=video&order=viewCount&order=relevance&q=${movieName.innerText}`

            fetch(url2)
                .then(res => res.json())
                .then(ytData => {
                    console.log(ytData.items[0].id.videoId)

                    videoPlayer.src = `https://www.youtube.com/embed/${ytData.items[0].id.videoId}`

                })

        })

        .catch(err => {
            console.log(`error ${err}`)
        });

}

function resetPage() {
    window.location.reload()
}

selectBtn.addEventListener('click', getMovieAndVideo)
resetBtn.addEventListener('click', resetPage)
