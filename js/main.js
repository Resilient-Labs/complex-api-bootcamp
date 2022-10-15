document.querySelector('button').addEventListener('click', getQuotes)

function getQuotes(){

let url = `https://thronesapi.com/api/v2/Characters`

fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      data.forEach(element => {

      let ul = document.querySelector('ul')
       const li = document.createElement('li')
       ul.appendChild(li)
       let h2 = document.createElement('h2')
       li.appendChild(h2)
       h2.innerText = element.fullName
       let img = document.createElement('img')
       li.appendChild(img)
       img.src = element.imageUrl
       let words = document.createElement('p')
       li.appendChild(words)
       let author = element.fullName
       fetch(`https://web-series-quotes-api.deta.dev/quote/?series=game_of_thrones&author=${author}&count=2`) 
        .then(res => res.json()) // parse response as JSON 
        .then(quoteData => { 
        console.log(quoteData) 
        quoteData.forEach(element =>{
          words.innerText = element.quote
        })
    }) 
      })
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
  })}
