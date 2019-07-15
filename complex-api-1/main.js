//Soccer Video API: https://www.scorebat.com/video-api/v1/
//New York Times API: https://developer.nytimes.com/

// NYT API - AUH KEY: A8xiVuALZg7fUyg3aWrfcHXv3wrfbZPu

//Goal: User writes a soccer team into an input, we take the value of the soccer team and report a video from the soccer team and any article written about the soccer team.

//goal: List of available soccer stream videos (current day), create a randomnizer to get back 5 videos


let orange = ""

document.querySelector('form').addEventListener('submit',function (e){
  e.preventDefault()
  let searchSoccer = document.querySelector("input").value
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchSoccer}&api-key=A8xiVuALZg7fUyg3aWrfcHXv3wrfbZPu`)
  .then(res=> res.json())
  .then(response => {
    console.log(response.response.docs.length)
    console.log("test", response.response.docs)
    console.log("test2", response.response.docs[0].headline.main)
    let articles = response.response.docs
    articles.forEach((el,i) => {
    let h3 = document.querySelector("h3")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    p.appendChild(document.createTextNode(el.headline.main))
    h3.appendChild(p)

    h2.appendChild(document.createTextNode(el.snippet))
    h3.appendChild(h2)
    })
  })
})

  document.querySelector('button').addEventListener('click',function(e){
    const url = `https://www.scorebat.com/video-api/v1/`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(response => {
      document.querySelector('#result1').textContent = response[1].title;
      document.querySelector('#result2').src = response[1].thumbnail;
      document.querySelector('iframe').src = response[1].videos[2].embed;
      document.querySelector('#result3').textContent = response[1].competition.name;
      document.querySelector('#result4').textContent = response[1].competition.url;



      console.log("response from fetch");
      console.log(response);
      response.forEach((element,index) => {
        // let h4 = document.querySelector("h4")
        // let iframe = document.createElement("iframe")
        // let p = document.createElement("p")
        //
        // // p.appendChild(document.createTextNode(el.title))
        // // h4.appendChild(p)
        //
        // iframe.appendChild(document.createTextNode(response[0].videos[0].embed))
        // h4.appendChild(iframe)



      })
    })
  })

//   let soccerTeam = document.querySelector('input').value
//   console.log(soccerTeam)
//   const url = `https://www.scorebat.com/video-api/v1/`
//   console.log(url)
//   fetch(url)
//   .then(res => res.json())
//   .then(response => {
//     console.log("response from fetch");
//     console.log(response);
//     response.forEach((element,index) => {
//       // console.log("test",response.forEach(element,index))
//     })
//     document.querySelector('#result1').textContent = response[0].title;
//     document.querySelector('#result2').src = response[0].thumbnail;
//     // findArticle(response)
//
// })
//   })
//   // .catch(err =>{
//   //   console.log(`error ${err}`)
//   //   alert("Sorry, there are no results for your search.")
//   // })
// })




// response.forEach(function(element){
//   let ol = document.querySelector("ol")
//   let li = document.createElement("li")
//   li.appendChild(document.createTextNode(element.date))
//   ol.appendChild(li)

// function findArticle(response){
//   console.log(response)
//


//   const url2 = `` //different API URL
//   console.log(url2)
//   fetch(url2)
//   .then(res => res.json())
//   .then(response => {
//
// }




//Notes - alternative way
// document.querySelector('button').addEventListener('click',function (e){
// let drugName = document.querySelector('input').value
// console.log(drugName)
// const url = `https://api.fda.gov/drug/ndc.json?search=generic_name:"${drugName}"&limit=1`
// console.log(url)
// fetch(url)
