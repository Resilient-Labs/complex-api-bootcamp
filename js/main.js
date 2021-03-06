//Goal: Grab cat fact from API, Grab random cat picture, and make a Meme!
//Property of GardnerGang

function makeMeme(){
  let outside

  fetch('https://catfact.ninja/fact?max_length=80')
    .then(res => res.json())
    .then(data => {
      //Inside cat Fact
      let fact = data.fact

      // console.log(data)
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          //inside catPic
          let catPic = data[0].url
          // console.log(data)
          let memeText = fact.split(' ').join('_')
          memeText = fact.split('?').join('~q')
          memeText += '.jpg'
          let apiLink = `https://api.memegen.link/images/custom/_/${memeText}?background=${catPic}`

          fetch(apiLink)
            .then(res => res.blob())
            .then(img => {
              outside = URL.createObjectURL(img)
              document.querySelector('img').src = outside
              // console.log(catPic)
              // console.log(outside)
              // console.log(memeText)
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

makeMeme()
