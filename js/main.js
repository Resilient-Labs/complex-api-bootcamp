//Worked with Garner Gang to complete - Asianna, Julie, Brian, Ziya, Dash, Wade, Tanecia
document.querySelector('a').addEventListener('click', makeMeme)
function makeMeme(){
  fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data => {
      let fact = data.fact
      // console.log(data)
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          let catImg = data[0].url
          // console.log(data)
          let text = fact.split(' ').join('_')
          text = fact.split('?').join('~q')
          text += '.jpg'

          fetch(`https://api.memegen.link/images/custom/_/${text}?background=${catImg}`)
            .then(res => res.blob())
            .then(img => {
              outside = URL.createObjectURL(img)
              document.getElementById('section').style.backgroundImage = `url(${outside})`
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
