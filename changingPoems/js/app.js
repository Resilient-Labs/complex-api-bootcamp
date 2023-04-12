const butt = document.querySelector('button')

function generatePoem() {
    let title = document.querySelector('input').value
    const poemUrl = (`https://poetrydb.org/title/${title}/lines.json`)
    fetch(poemUrl)
    .then(res => res.json())
    .then(data => {
        let poem = data[0].lines
        let fullPoem = ""
        for (let i = 0; i < poem.length; i++) {
            fullPoem += poem[i] + '\n'
        }
        document.querySelector('#original').innerText = fullPoem

        makeKeywords(fullPoem)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function makeKeywords(fullPoem) {
  let poemArray = fullPoem.split(' ')
      wordsArray = []

  for(let i = 0; i < 3; i++){
    wordsArray.push(poemArray[i])
  }

  let keywords = wordsArray.join(' ')

  poemImage(keywords)
}

function poemImage(keywords) {
    const simpleUrl = (`https://pixabay.com/api/?key=imageApi&q=${keywords}&per_page=10&page=1`)
    fetch(simpleUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        document.querySelector('img').src = data.hits[0].userImageURL
    })
}

butt.addEventListener('click', generatePoem)