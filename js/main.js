let key = `e3e292ca`
//let searchThis = 'cats'

let sec = document.querySelector(`section`)

document.querySelector(`#btn`).addEventListener('click',onClick)


function onClick(){

  if(sec.hasChildNodes() === true){ //removes all children nodes from sec
    
    while (sec.firstChild) {
      sec.removeChild(sec.lastChild);
    }
  }

 let pick = Math.floor( (Math.random()*20))
 getMovie(pick)
 //getMovieInfo('cats')
}



 


function getMovie(movieSelected){
  fetch(`https://ghibliapi.herokuapp.com/films `)
    .then(res => res.json()) 
    .then(response => {
     // console.log(response)
        let moviePicked = response[movieSelected].title
        getMovieInfo(moviePicked)
      
    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there seem to be something wrong with our servers")
    });
}






function getMovieInfo(movie){

  fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${key}`)
    .then(res => res.json()) 
    .then(response => {

      formatDom(response.Title, response.Year, response.Plot, response.Awards, response.imdbRating)
     
})

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no movies found")
    });
  }







function formatDom(title,year,plot,awards,imdbRating){

  let spanTitle =document.createElement('span')
  let spanYear = document.createElement(`span`)
  let plotBlurb = document.createElement(`p`)
  let spanAwards = document.createElement(`span`)
  let spanImdb = document.createElement(`span`)
    spanTitle.textContent = title
    spanYear.textContent = year
    plotBlurb.textContent = plot
    spanAwards.textContent = awards
    spanImdb.textContent = imdbRating

  sec.appendChild(spanTitle)
  sec.appendChild(spanYear)
  sec.appendChild(plotBlurb)
  sec.appendChild(spanAwards)
  sec.appendChild(spanImdb)

}
