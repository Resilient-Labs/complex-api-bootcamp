


const url = `https://api.adviceslip.com/advice`
// https://api.unsplash.com/search/photos?page=1&query=office

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)
console.log(data.slip.advice)
// document.querySelector
document.querySelector('.reg').innerText = data.slip.advice

let advice = data.slip.advice
const urlTwo = `https://api.funtranslations.com/translate/chef.json?api_key=l8fd9sdGx9BjXE1dHGWHugeF&text=${advice}`

fetch(urlTwo)
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)
// document.querySelector('.reg2').innerText = data.contents.text
document.querySelector('.pir').innerText = 'Mr.Chef says: ' + data.contents.translated
})
.catch(err => {
  console.log(`error ${err}`)
});

const url = `https://api.funtranslations.com/translate/pirate.json?api_key=hay9DFclgJR2gAGTaUShpAeF&text=${advice}`


fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)
// document.querySelector('.reg2').innerText = data.contents.text
document.querySelector('.pir2').innerText = 'Mr.Pirate says: ' + data.contents.translated
// document.querySelector('span').innerText = data.contents.translation
// document.querySelector('').innerText += data.

let term = data.contents.translation
console.log()
const url = `https://api.giphy.com/v1/gifs/search?api_key=toqlVYXbdNIubNTOGsRA6LuY3S2pNfsn&q=${term}&limit=25&offset=0&rating=g&lang=en`

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)

document.querySelector('img').src = data.data[Math.floor(Math.random() * 25)].images.original.url


})
.catch(err => {
  console.log(`error ${err}`)
});

})
.catch(err => {
  console.log(`error ${err}`)
});

// const urlTwo = `https://api.funtranslations.com/translate/chef.json?api_key=l8fd9sdGx9BjXE1dHGWHugeF&text=${advice}`
//
// fetch(urlTwo)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
// console.log(data)
// // document.querySelector('.reg2').innerText = data.contents.text
// document.querySelector('.pir2').innerText = data.contents.translated
// })
// .catch(err => {
//   console.log(`error ${err}`)
// });


})
.catch(err => {
  console.log(`error ${err}`)
});





// https://random-word-api.herokuapp.com/word?number=3
// https://api.adviceslip.com/advice/search/spiders`
// https://api.unsplash.com/search/photos/?client_id=YsA78_PNphhwqWHsPLC1YFwMgypEE9DCuQyYtf31WQU&page=1&query=offi
// https://api.discogs.com/database/search?token=QIMaPKKoNghzSLXIvyKcAAlazlPtvdIWOOrFutAA&q=Nirvana&format=album
