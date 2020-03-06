let key = `N2X7YV6CcMVkM7ykUk8QdDNpUvc1sgZ7`
let searchThis = 'cats'
let movie


document.querySelector(`#btn`).addEventListener('click',onClick)


function onClick(){
 let pick = Math.floor( (Math.random()*20))
 getMovie(pick)
}



 


function getMovie(movieSelected){
  fetch(`https://ghibliapi.herokuapp.com/films/ `)
    .then(res => res.json()) 
    .then(response => {
     // console.log(response)
        let moviePicked = response[movieSelected].title
        console.log(moviePicked)
        getGif(moviePicked)
      

    // for(let i=1; i<= response.length;i++){
    //   title= response[i-1].title
    //   console.log(title)
    // }

    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there seem to be something wrong with our servers")
    });
}






function getGif(movie){

  fetch(`https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/search?q=${movie}&api_key=${key}&limit=5&lang=en`)
    .then(res => res.json()) 
    .then(response => {
     console.log(response)
  for (let i = 1; i <= response.data.length;i++){

     url = response.data[i-1].url

     formatDom(movie,url)}

    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no gifs found")
    });
  }







function formatDom(m,u){
  let img =document.createElement('img')
  let span = document.createElement(`span`)
    img.src = u
    span.textContent = m
  document.querySelector(`section`).appendChild(img)
  document.querySelector(`section`).appendChild(span)

}
