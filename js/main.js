/*
search for movie, get poster & get NYT movie // REVIEW
*/

// omdb http://www.omdbapi.com/?i=tt3896198&apikey=a4ec3341

// nyt review https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=c5G9z83f2lMNnFt7yu7t2DtRo5PIkywG
document.querySelector('#search').addEventListener('click', searchMovieInfo)


 //  const url2 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=c5G9z83f2lMNnFt7yu7t2DtRo5PIkywG"

function searchMovieInfo(){
  const whatMovie = document.querySelector('#movieSearch').value
  const url = `http://www.omdbapi.com/?apikey=a4ec3341&t=${whatMovie}`


  fetch(url)
  .then(res => res.json())
  .then(data => {
   console.log(data)
   if (data.Response === 'True') {
     // many variable because it makes me irrationally angry that the api properties are capitalized
     let title = data.Title
     let cast = data.Actors
     let poster = data.Poster
     let director = data.Director
     let rating = data.Rated
     let release = data.Year

     document.querySelector('#movieTitle').innerText = title
     document.querySelector('#moviePoster').src = poster
     document.querySelector('#movieCast').innerText = cast
     document.querySelector('#movieDirector').innerText = director
     document.querySelector('#movieYear').innerText = rating
     document.querySelector('#movieRating').innerText = release

   }else {
     document.querySelector('#movieTitle').innerText = "Please choose another title"
   }

    const url2 = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${data.Title}&api-key=c5G9z83f2lMNnFt7yu7t2DtRo5PIkywG`

   fetch(url2)
   .then(res => res.json())
   .then(nytData =>{

     if (nytData.num_results > 0) {
       console.log(nytData)
       // end of 2nd fetch
       document.querySelector('#reviewHeadline').innerText = nytData.results[0].link.suggested_link_text
       document.querySelector('#critic').innerText = nytData.results[0].byline
       console.log(nytData.results[0].link.url)
       document.querySelector('#reviewLink').href = nytData.results[0].link.url
       document.querySelector('#summary').innerText = nytData.results[0].summary_short

     }else {
       document.querySelector('#reviewHeadline').innerText = 'the NYT has not reviews this movie'
     }
   })
   .catch(err => {
     console.log(`error ${err}`)

     // end of catch - one catch for both fetches
   })

   // end of 1st fetch
  })
  // end of searchMovieInfo function
}
