//worked with gardner gang, wade, dash, asaianna
document.querySelector('button').addEventListener('click',catMeme)
function catMeme(){
  let outside
  fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(data => {
      // choosing a random fact from the fact api by creating a random number for the index of data
      let fact = data[Math.floor(Math.random() * Math.floor(4))].text
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          let catPic = data[0].url
          let factText = fact.split(' ').join('_')
          factText = fact.split('?').join('~q')
          factText += '.jpg'
          // creating the meme with text inside the cat picture 
          let apiLink = `https://api.memegen.link/images/custom/_/${factText}?background=${catPic}`
          // variable for link with picture and fact to create a meme with both
          fetch(apiLink)
            .then(res => res.blob())
            .then(newMeme => {
              outside = URL.createObjectURL(newMeme)
              // the url will return an image and styling the background as the returned image
              document.querySelector('div').style.backgroundImage = `url(${outside}`
              //inside blob
            })
            .catch(err => {
              console.log(`error ${err}`)
            })
        })
        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
