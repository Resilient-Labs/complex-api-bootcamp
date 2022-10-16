let result = document.querySelector('#result')
let animeResult = ''

fetch(`https://animechan.vercel.app/api/random`)
     .then(response => response.json())
     .then(data => {
        console.log(data)
        console.log(data.anime)
        console.log(data.character)
        console.log(data.quote)
        animeResult = data.anime
                result.innerHTML = 
                 `<h2>Anime: ${data.anime}</h2>
                 <h2>Character: ${data.character}</h2>
                 <h2>Quote: ${data.quote}</h2>`

         
})

function getImage (){
    fetch(`https://api.jikan.moe/v4/anime?q=${animeResult}&sfw`)
        .then(res => res.json())
        .then(data => {
    console.log(data)
    document.querySelector('#image').innerHTML = 
    `<img src="${ data.data[0].images.jpg.image_url}" alt=""></img>`
 
    
})


}

    
  
    


