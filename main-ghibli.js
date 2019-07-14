
  //function gif() {
    //fetch(`http://api.giphy.com/v1/gifs/random?api_key=L9lGx1zfoWPOhlGdFom5AGFGPhWojvlW&tag=${title.toUpperCase()}&limit=1`)
      //.then(res => res.json())
      //.then(response => {
      //  document.getElementById("gifs").src = response.data.images.original.url
      //})
  //}


document.querySelector("button").addEventListener('click', function() {
  var title =document.querySelector("input").value
  console.log(title)
  let url = "https://ghibliapi.herokuapp.com/films"
  fetch(url)
    .then(res => res.json())
    .then (response => {
    response.forEach(function(movieInfo, index) {
      //console.log(movieInfo)
      if(movieInfo.title.toUpperCase() === title.toUpperCase()) {
        console.log(movieInfo)
        document.querySelector("p").innerHTML = movieInfo.description
      }
    })
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=L9lGx1zfoWPOhlGdFom5AGFGPhWojvlW&tag=${title.toUpperCase()}&limit=1`)
      .then(res => res.json())
      .then(response => {
        document.querySelector("img").src = response.data.images.original.url
      })
  })
})




//   fetch("https://ghibliapi.herokuapp.com/films")
//     .then(res => res.json())
//     .then(response => {
//   //response.forEach(function(element, index) {
//     //let title = response[index].title
//     //let release = response[index].release_date
//     //let director = response[index].director
//     //let description = response[0].description
//     //console.log(description, title, release, director)
//   })
//   document.querySelector("section").innerHTML = description
