document.querySelector("#button").onclick = click


function click(e) {
  e.preventDefault()
  let artist = document.querySelector("#userInput").value
  let title  = document.querySelector("#moreInput").value
  let apiUrl = (`https://api.lyrics.ovh/v1/${artist}/${title}`)
  let wikiUrl = ` https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${artist}`

  fetch(apiUrl)
  .then(res => res.json())
  .then(response =>{
    console.log(response)
    document.querySelector("#lyrics").innerHTML = response.lyrics
  })

  fetch(wikiUrl)
  .then(res => res.json())
  .then(response =>{
    console.log(response)
    document.querySelector("#wiki").innerHTML = response.query.search[19].snippet
  })
  .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, we do not have information on that song")
    });

}
