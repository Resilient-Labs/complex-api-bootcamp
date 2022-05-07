document.querySelector('#quoteBtn').addEventListener('click', randomQuote)
document.querySelector('#quoteBtn').addEventListener('click', textBackground)


function textBackground(){
  document.querySelector('.hidden').classList.remove('hidden')
}


function randomQuote(){
  document.querySelector('h3').innerText = "" 

fetch(`https://thronesapi.com/api/v2/Characters`)
  .then(res => res.json()) 
  .then(data => {

    console.log(data)

    let randomIndex = Math.floor(Math.random() * data.length )

    let randomCharacter = data[randomIndex].firstName.toLowerCase()
    
    document.querySelector('h2').innerText = randomCharacter.charAt(0).toUpperCase() + randomCharacter.slice(1);

  fetch(`https://game-of-thrones-quotes.herokuapp.com/v1/author/${randomCharacter}/1`)
    .then(res => res.json()) 
    .then(dataTwo => {

      document.querySelector('h3').innerText = `"${dataTwo.sentence}"`

      console.log(dataTwo)
    })
    .catch(err => {
        console.log(`error ${err}`)
      }) 
})
.catch(err => {
  console.log(`error ${err}`)
});
}













// document.querySelector('#quoteBtn').addEventListener('click', randomQuote)

// function randomQuote(){

//     fetch(`https://game-of-thrones-quotes.herokuapp.com/v1/random/`)
//     .then(res => res.json())
//     .then(data => {

//       console.log(data)
//       // console.log(data.character.name.split(" ")[0])


//       document.querySelector('h2').innerText = data.character.name.toUpperCase()
//       document.querySelector('h3').innerText = `"${data.sentence}"`

//   let characterName = data.character.name.split(" ")[0]

//     fetch(`https://thronesapi.com/api/v2/Characters`)
//     .then(res => res.json())
//     .then(dataTwo => {



//   let characterName = data.character.name.split(" ")[0]

//       dataTwo.forEach(el => { 
//         console.log(el.firstName)
//       })



//       // if ( characterName === dataTwo.firstName ){ 
//       //   alert('it works')
//       // }

//     })

//   })
//     .catch(err => {
//       console.log(`errors $(err)`)
//     })

  
// }



     // document.querySelector('h2').innerText = data.character.name.toUpperCase()
      // document.querySelector('h3').innerText = `"${data.sentence}"`

// class Starship {

//   constructor(name, model) {
//     this.name = name;
//     this.model = model;

//     this.corvette = document.querySelector('#cr90Corvette').addEventListener('click', corvetteImages)

//     this.starDestroyer = document.querySelector('#starDestroyer').addEventListener('click', starDestroyerImages)

//     this.SentinelClass = document.querySelector('#SentinelClass').addEventListener('click', SentinelClassImages)

//     this.deathStar = document.querySelector('#deathStar').addEventListener('click', deathStarImages)

//     this.millenniumFalcon = document.querySelector('#millenniumFalcon').addEventListener('click', millenniumFalconImages)

//     this.yWing = document.querySelector('#yWing').addEventListener('click', yWingImages)

//     this.xWing = document.querySelector('#xWing').addEventListener('click', xWingImages)

//     this.tieAdvanced = document.querySelector('#tieAdvanced').addEventListener('click', tieAdvancedImages)

//     this.executor = document.querySelector('#executor').addEventListener('click', executorImages)

//     this.rebelTransport = document.querySelector('#rebelTransport').addEventListener('click', rebelTransportImages)

//   }

// }

// let cr90 = new Starship("CR90 corvette", "model: CR90");
// let destroyer = new Starship("Star Destroyer", "model: Imperial I-class");
// let sentinel = new Starship("Sentinel-class landing craft", "model: Imperial I-class");

// function corvetteImages() {
//   console.log(cr90.name)
//   document.querySelector('h2').innerText = cr90.name.toUpperCase()
//   document.querySelector('h3').innerText = cr90.model
// }

// function starDestroyerImages() {
//   console.log(destroyer.name)
//   document.querySelector('h2').innerText = destroyer.name.toUpperCase()
//   document.querySelector('h3').innerText = destroyer.model
// }

// function SentinelClassImages() {
//   document.querySelector('h2').innerText = sentinel.name.toUpperCase()
//   document.querySelector('h3').innerText = sentinel.model
// }

// function deathStarImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[3].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[3].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }

// function millenniumFalconImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[4].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[4].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }

// function yWingImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[5].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[5].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }

// function xWingImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[6].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[6].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }

// function tieAdvancedImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[7].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[7].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }

// function executorImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[8].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[8].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }

// function rebelTransportImages() {

//   fetch(`https://swapi.dev/api/starships/`)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('h2').innerText = data.results[9].name.toUpperCase()
//       document.querySelector('h3').innerText = data.results[9].model
//     })

//     .catch(err => {
//       console.log(`errors $(err)`)
//     })
// }









// /*

// fetch(`https://swapi.dev/api/starships/`)
// .then(res => res.json())
// .then(data => {

//   document.querySelector('h2').innerText = data.results[2].name
//   document.querySelector('h3').innerText = data.results[2].model
// })

// .catch(err => {
//   console.log(`errors $(err)`)
// })

// */






















