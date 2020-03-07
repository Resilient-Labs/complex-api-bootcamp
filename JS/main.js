let ul = document.querySelector('ul')

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=48f9f2d101e28f0aec99d6686573ffce&language=en-US&page=1`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    for (var i = 0; i < response.results.length; i++) {
      let movieList = document.createElement('li')
      ul.appendChild(movieList)
      movieList.innerHTML = response.results[i].title
      movieList.addEventListener( "click", function () {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=LTBHmTUIGHyN7nx50vnvss4CyHjwWDao&q=${movieList.innerHTML}&limit=25&offset=0&rating=G&lang=en`)
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(res => {
            console.log(res.data[1].images.downsized_large.url);
            document.querySelector('img').src = res.data[1].images.downsized_large.url
          })
          .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
          });
      })
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
