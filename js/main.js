// document.querySelector("#centerName").value
// const ul = document.querySelector("ul")
// let gotCharacter =
let apiKey = "T0jznlsubW13V7xCOLsFgaXlMTwg8HId"

// tenor apiKey = DDXR9DZZM4RB

fetch("https://random-word-api.herokuapp.com/word?number=2")
  .then(res => res.json()) 
  .then(text => {
    document.querySelector(".randomWord").textContent = text
    fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${apiKey}&limit=1`)
        .then(res => res.json()) 
        .then(giffy => {
          document.querySelector("img").src = giffy.data[0].images.original.url
        })
      // })
    })
.catch(err => {
      console.log(`error ${err}`)
      alert(" No Results ")
  });