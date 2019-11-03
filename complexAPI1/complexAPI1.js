const button = document.querySelector('#thing')
let ul = document.querySelector('ul')
let result = document.querySelector('h2')
let apiKey = '6873435a182dd2bba509bce88f27e215'

button.addEventListener('click', ()=>{
let countryCode = document.querySelector('#input').value
countryCode = countryCode.toUpperCase()

fetch(`https://www.travel-advisory.info/api/?countrycode=${countryCode}`)
  .then(res => res.json())
  .then(response => {
     //console.log(response.data[`${countryCode}`].name)
     let countryName = response.data[`${countryCode}`].name
     result.innerHTML = response.data[`${countryCode}`].name

    fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryName}&api_key=${apiKey}&format=json`)
      .then(res => res.json())
      .then(response =>{
        //console.log(responsetopartists.artist)
        let artistArray = response.topartists.artist
        artistArray.forEach(function(artistName, index){
          //console.log(artistName.name)
          let num = index+1
          let p = document.createElement('p')
          let li = document.createElement('li')
          p.innerHTML = `${num}. ${artistName.name}`
          li.appendChild(p)
          ul.appendChild(li)
        })
      })

   })
   .catch(err => {
       //console.log(`error ${err}`)
       alert("Sorry, there are no results for your search.")
    })

})
