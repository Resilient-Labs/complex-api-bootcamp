//ADD EVENT LISTENER TO YES button
document.getElementById("button").addEventListener("click", () => {
  fetch(`https://api.kanye.rest`)
    .then(res => res.json())
    .then(response => {
      console.log(response.quote);
      document.querySelector("p").innerHTML = response.quote


  let api_key = "sXoqhVWmLvvgIgfePGe1YEA9uKWNwTcm",
      proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = `https://api.giphy.com/v1/gifs/random?apikey=${api_key}&tag=kanye`
  fetch (proxyUrl + targetUrl, {
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'Content-Type, Accept to Content-Type,     Accept, x-requested-with, cache-control, X-GIPHY-SDK-NAME, X-GIPHY-SDK-VERSION, X-GIPHY-SDK-PLATFORM'
       }
  })
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response.data.image_url)
          document.getElementById("gif").src = response.data.image_url
        })
        .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
        });
    })
})
