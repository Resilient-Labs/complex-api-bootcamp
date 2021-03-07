// document.querySelector('.onebutton').addEventListener('click' , ranAnime)
// document.querySelector('.ranani').addEventListener('click' , findAnime)

// function ranAnime(){
//     fetch('https://animechan.vercel.app/api/random')
//     .then(res => res.json())
//     .then(data => {
        
//     console.log(data)
//     let ranchar= data.character
//     let ranani= data.anime
//     let ranquo= data.quote
//     document.querySelector('.ranchar').innerText = ranchar
//     document.querySelector('.ranani').innerText = ranani
//     document.querySelector('.ranquo').innerText = ranquo
// })
// .catch(err => {
//     console.log(`error ${err}`)
// })
// }

// document.querySelector('.button').addEventListener('click' , findAnime)

// function findAnime(){
//     const real = document.querySelector('.ranani').innerText
    
//     const url = `https://api.jikan.moe/v3/search/anime?q=${real}`
    
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {

//         console.log(data)
        
//         let syn = data.results[0].synopsis
//         let real = data.results[0].start_date
//         let photos = data.results[0].image_url
//         let type = data.results[0].type
//         let finder = data.results[0].url
//         document.querySelector('.syn').innerText = syn
//         document.querySelector('img').src = photos
//         document.querySelector('.real').innerText = real
//         document.querySelector('.type').innerText = type
//         document.querySelector('.finder').innerText = finder
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }

document.querySelector('.onebutton').addEventListener('click', ranAnime)
function ranAnime() {
  fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let ranchar = data.character
      let ranani = data.anime
      let ranquo = data.quote
      document.querySelector('.ranchar').innerText = ranchar
      document.querySelector('.ranani').innerText = ranani
      document.querySelector('.ranquo').innerText = ranquo
      const real = document.querySelector('.ranani').innerText
      const url = `https://api.jikan.moe/v3/search/anime?q=${real}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          let syn = data.results[0].synopsis
          let real = data.results[0].start_date
          let photos = data.results[0].image_url
          let type = data.results[0].type
          let finder = data.results[0].url
          document.querySelector('.syn').innerText = syn
          document.querySelector('img').src = photos
          document.querySelector('.real').innerText = real
          document.querySelector('.type').innerText = type
          document.querySelector('.finder').innerText = finder
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
    

  

    