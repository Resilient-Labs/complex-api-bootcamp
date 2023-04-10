const kanyeSays = document.querySelector('.kanye')
const redneckSays = document.querySelector('.redneck')
const bttn = document.querySelector('button')

function getText() {

  const url = (`https://api.kanye.rest/text=`)
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      kanyeSays.innerText = `Kanye : ${data.quote}`
      const text = data.quote
     
      
      
      const url2 = (`https://api.funtranslations.com/translate/redneck.json?text=${text}`)
      fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(redneckData =>{
          console.log(redneckData)
          redneckSays.innerText = `Redneck : ${redneckData.contents.translated}`
        })

        

        



      
    })

    .catch(err => {
      console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', getText)