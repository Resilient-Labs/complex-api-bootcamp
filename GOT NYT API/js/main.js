
let apiKey = "fEwKqW0TTGNNzW2peMY5yrIxF9qWTAdW"
let randomNum = Math.floor(Math.random() * 1000) + 1
let ul = document.querySelector("ul")
fetch(`https://anapioficeandfire.com/api/characters/${randomNum}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(characters => {
    let character = characters.name
    document.querySelector("p").textContent = character
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${character}&api-key=${apiKey}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(article => {
          article.response.docs.forEach( (articles, i) => {
            let li = document.createElement("li")
            let a = document.createElement("a")
            ul.appendChild(li);
            li.appendChild(a)
            a.appendChild(document.createTextNode(`${articles.headline.main}`))
            a.href = `${articles.web_url}`
          })
        })
      })

.catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });






// function getTheWu (location, i){
//   let zip = location.zipcode.slice(0,5)
//   fetch(`https://wunameaas.herokuapp.com/wuami/${gotCharacter}`)
//     .then(res => res.json())
//     .then(weather => {
//       let locationWeather = weather.main.temp
//       let li = document.createElement("li") //built in element thats create element so you have a click event that creates a new li; if the input is null, you might want to add something to say a value is entered
//       let listItem = document.querySelector("#centerName").textContent = `The NASA ${location.center}, ${location.facility} is located in ${location.city},
//       ${location.state} and the temperature today is ${locationWeather}`
//       ul.appendChild(li);// for the ul, want to append the children into the ul to make the li (this li calls upon the variable stated above)
//       li.appendChild(document.createTextNode(listItem)); // now w these li, create a text node which is the list item and create that list item variable, take in each of the grocery items you are putting in
//       })
// }




// fetch("https://anapioficeandfire.com/api/characters")
//   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//   .then(characters => {
//     console.log(characters)
//     // characters.forEach( getNasaLocationWeather )
//     }
//     )
// .catch(err => {
//       console.log(`error ${err}`)
//       alert("sorry, there are no results for your search")
//   });
