document.querySelector('button').addEventListener('click', bobBoberson)
function bobBoberson(){
  const url = `https://api.adviceslip.com/advice
  `
  fetch(url, {
    method: 'Get'
  })
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    document.querySelector('h3').innerText = data.slip.advice
let charT = `https://bobsburgers-api.herokuapp.com/characters/`
    fetch(charT)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let A = Math.floor(Math.random()*50) 
      let charName = data[A].name
      let charPic = data[A].image
      document.querySelector('img').src = charPic
      document.querySelector('h2').innerText =charName
      
    })
    
  })
  
}