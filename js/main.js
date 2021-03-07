document.querySelector('button').addEventListener('click', checkRhymingWords)

function checkRhymingWords() {
  let keyword = document.querySelector('input').value
  const dataMuseUrl = `https://api.datamuse.com/words?rel_rhy=${keyword}&max=10`

  fetch(dataMuseUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(data.map((words) => words.word))
    //Got this li concatination from an article on google
    data.forEach((words) => {
      const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${words.word}`

      let subsection =  document.createElement('section')
      let rhymingWord = document.createElement('span')
      rhymingWord.innerText = words.word
      subsection.appendChild(rhymingWord)

      fetch(dictionaryUrl)
      .then(res => res.json())
      .then(data2 => {
        console.log(data2)
        let newMeanings = data2[0].meanings[0].definitions.forEach(meaning => {
          let wordMeaning = document.createElement('p')
          wordMeaning.innerText = meaning.definition
	        subsection.appendChild(wordMeaning)

          })
      }).catch( err => console.log(`error ${err}`))
      document.querySelector('.list').appendChild(subsection)
     })
  })
  .catch( err => console.log(`error ${err}`))
}
// let list = document.querySelector('.list').addEventListener('click',checkTheMeaning)
//
// function checkTheMeaning(event) {
//   if (event.target.tagName == 'LI') {   //Got help from Guthemberg for the event delegation
//     let returnedWord = event.target.childNodes[0].data
//     console.log('works');
//
//   const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${returnedWord}`
//
//   fetch(dictionaryUrl)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     document.querySelector('.meaning').innerHTML = data[0].meanings[0].definitions.map(meaning => '<li>' + meaning.definition + '</li>')
//   })
//   }
// }
