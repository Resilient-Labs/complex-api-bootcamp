
document.querySelector('button').addEventListener('click', heroResult)
//
function heroResult(){
  let inputVal = document.querySelector('input').value
  // const url = `https://cors.bridged.cc/https://superheroapi.com/api/277898710358876/search/${inputVal}`
  const url2 = `https://cors.bridged.cc/http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8f96d63341c717062c76e82d00e76808&hash=6b8b25766dd3da4a0a50b18212985735/v1/public/${inputVal}`
  // console.log(url)
  console.log(url2)
    // fetch(url)
    //
    //   .then(res => res.json()) // parse response as JSON
    //   .then(data => {
    //     console.log(data)
    //     document.querySelector('#name').innerText = data.results[0].name
    //     document.querySelector('img').src = data.results[0].image.url
    //     document.querySelector('#combat').innerText = 'Combat: ' + data.results[0].powerstats.combat
    //     document.querySelector('#durability').innerText = 'Durability: ' + data.results[0].powerstats.durability
    //     document.querySelector('#intelligence').innerText = 'Durability: ' + data.results[0].powerstats.intelligence
    //     document.querySelector('#power').innerText = 'Intelligence: ' + data.results[0].powerstats.power
    //     document.querySelector('#speed').innerText = 'Power: ' + data.results[0].powerstats.speed
    //     document.querySelector('#strength').innerText = 'Speed: ' + data.results[0].powerstats.strength
    //     document.querySelector('#bio').innerText = 'Strength: ' + data.results[0].biography

          // })
        fetch(url2)

          .then(res =>res.json())
          .then(data => {
            console.log(data)

          })
          .catch(err => {
            console.log(`error ${err}`)
        });
}
