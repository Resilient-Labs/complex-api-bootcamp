document.querySelector('button').addEventListener('click', getAnimeInfo);

function getAnimeInfo(){
  
  let characterName = document.querySelector('input').value.toLowerCase()
  
  const url = `https://animechan.vercel.app/api/random/character?name=${characterName}`
  fetch(url) 
  .then(res => res.json()) // parse response as JSON 
  .then(data => { 
    console.log(data)
    document.querySelector('h2').innerText = `Let's hear from ${data.character}`
    document.querySelector('p').innerText = data.quote
    document.querySelector('h3').innerText = `Starring in ${data.anime}`
    
    fetch(`https://api.jikan.moe/v4/anime?q=${data.anime}&sfw`)
    .then(res => res.json())
    .then(animeData => {
      console.log(animeData.data)
      document.querySelector('img').src = animeData.data[0].images.jpg.image_url
    })
  }) 
}