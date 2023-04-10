let button = document.querySelector('button').addEventListener('click', nyt)

function nyt() {
  let userInput = document.querySelector('input').value
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInput}&api-key=9tTUiimp90TedVu2JYhIDyyL4BkB6cRE`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h1').innerText = data.response.docs[0].headline.main
      let imgSrc = data.response.docs[0].multimedia[0].url
      document.querySelector('img').src = `https://nytimes.com/${imgSrc}`
      document.querySelector('h2').innerText = data.response.docs[0].lead_paragraph
      document.querySelector('h3').innerText = data.response.docs[0].byline.original
      let str = data.response.docs[0].keywords[0].value
      let strSplit = str.split(' ')[0]
      console.log(strSplit)

      fetch(`https://api.urbandictionary.com/v0/define?term=${strSplit}`)
        .then(res => res.json())
        .then(urbanData => {
        console.log(urbanData)
        document.querySelector('h4').innerText = 'Disclaimer! Results may be intense: ' + urbanData.list[0].definition
        })

        .catch(err => {
          console.log(`error ${err}`)
        })
    })

    .catch(err => {
      console.log(`error ${err}`)
    })


}

