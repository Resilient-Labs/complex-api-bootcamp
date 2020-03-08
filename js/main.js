//let apiKey = "9eb4df23-23e9-4f0d-8ff0-53fd60912aeb"
document.querySelector("button").addEventListener("click", articleFinder)
let article = document.querySelector("input")


function articleFinder (){       //this is teh function and parameters, the fetch comes from nasa. the temperal literal is for a day and month that will be changed.

fetch(`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article.value}&api-key=fGrXEDu8i5x31fACKaD0L8lp7udsB1pz`)
.then(res => {return res.json()}) //jason makes it so i can access the info
.then(response => {  //grabbing what we want from the response.
  let data = response.response.docs.forEach(articles => {
  let ul = document.querySelector("#list")
  let li = document.createElement("li")
  let text = document.createTextNode(articles.headline.main) //grab string from property main pass to createtextnode which creates text node to be appended to li.
  console.log(text)
  li.appendChild(text)  // the text is being appended to the li, adding text to li. append means to add to. in parent child relationship its like html parent relationship.
  ul.appendChild(li)  // the li is being appended to the ul.

  })


})
 //ApiKey =3513a633-66de-47a6-a4d2-b160ad3ed34c

fetch(`https://content.guardianapis.com/search?q=${article.value}&api-key=3513a633-66de-47a6-a4d2-b160ad3ed34c`)
  .then(res => {return res.json()}) //jason makes it so i can access the info
  .then(response => {
    console.log(response)
    let data = response.response.results.forEach(articles => {
    let ul = document.querySelector("#info")
    let li = document.createElement("li")
    let text = document.createTextNode(articles.webTitle) //grab string from property main pass to createtextnode which creates text node to be appended to li.
    console.log(text)
    li.appendChild(text)  // the text is being appended to the li, adding text to li. append means to add to. in parent child relationship its like html parent relationship.
    ul.appendChild(li)  // the li is being appended to the ul.

    })
  })
}
