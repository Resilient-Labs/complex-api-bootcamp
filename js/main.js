document.querySelector('button').addEventListener('click', run)

function run() {
  let model = document.querySelector('.model').value
  console.log(model)
  const url1 = `https://api.api-ninjas.com/v1/cars?limit=5&model=${model}`

  let options = {
    method: 'GET',
    headers: { 'x-api-key': 'd3FBQsNaOed6pB4pZs62yw==NpduHXbVBG1LmGg1' }
  }

  fetch(url1, options)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data)
      let make = data[0].make
      document.querySelector('.modelResult').innerText = make

      const url2 = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${make})&api-key=qwn6QITAN8AGVzbk7RCHcDpSciQBi9pH`

      fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(news => {
          console.log(news)
          for(let i = 0; i < news.response.docs.length; i++){
            let snip = news.response.docs[i].snippet
            let webUrl = news.response.docs[i].web_url
            let section = document.querySelector('section')
            let a = document.createElement('a')
            a.appendChild(document.createTextNode(snip))
            a.href = webUrl
            section.appendChild(a)
          }

        })
        .catch(err => {
          console.log(`error ${err}`)
        });



    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}