const result = document.querySelector("h1")
const key ='vIlgQJKIwLQ0gzGUdqZZIWOz9Z1R7YYg'
const gifkey='nocuUPGvNFlMAt0a975QwypOj9ZX0y1K'
let btn = document.querySelector("button")



btn.addEventListener("click", ()=>{
  let input = document.querySelector("input").value

fetch(`http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_per/${input}.json?fields=pages,links,scope_notes&api-key=${key}`)
  .then(res => res.json())
  .then(response => {


    result.innerHTML = response.results[0].concept_name
    const param = response.results[0].concept_name


    fetch(`http://api.giphy.com/v1/gifs/search?q=${param}&api_key=${gifkey}`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        document.querySelector("img").src = response.data[0].images.original.url

      })
      .catch(err => {
          console.log(err)
      });
})
.catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
});
  })
  // event listener ending^


// 3 functions for fetch and input/button
