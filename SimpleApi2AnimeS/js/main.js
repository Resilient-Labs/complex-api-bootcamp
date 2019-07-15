let client_id = "dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd"

document.querySelector("button").addEventListener('click', function(){

setup()

function setup() {

fetch("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0", {
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    "Authorization": "Bearer <dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd>",
  }
})
.then(res => res.json())
.then (response =>{
  console.log("random", Math.floor(Math.random() * response.data.length-1))
  console.log("yo",response)
  let animeResults = response.data

for(let i =0; i<=5;i++) {
    let randomIndex = Math.floor(Math.random() * response.data.length-1)
    console.log(response.data[randomIndex])
    let firstSection = document.querySelector("section")
    let image = document.createElement("img")
    let p = document.createElement("p")
    let p1 = document.createElement("p")

    p.appendChild(document.createTextNode(response.data[randomIndex].attributes.abbreviatedTitles))
    firstSection.appendChild(p)

    p1.appendChild(document.createTextNode(response.data[randomIndex].attributes.synopsis))
    firstSection.appendChild(p1)

    image.src = response.data[randomIndex].attributes.posterImage.large
    firstSection.appendChild(image)
}

})
}
})
