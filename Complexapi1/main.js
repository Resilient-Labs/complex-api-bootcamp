document.querySelector('button').addEventListener('click', getNbaPlayer)

function getNbaPlayer() {

    let name = document.querySelector('input').value

    fetch(`https://api.genderize.io?name=${name}`)
        .then(res => res.json())
        .then(firstName => {
            console.log(firstName)

            let nationality = firstName.name

            fetch(`https://api.nationalize.io?name=${nationality}`)
                .then(res => res.json())
                .then(nationalityGuess => {
                    console.log(nationalityGuess.country[0].country_id)
                    document.querySelector('.nationality').innerText = nationalityGuess.country[0].country_id
                    document.querySelector('.probability').innerText = nationalityGuess.country[0].probability
                
        })
})
}










/* document.querySelector('.imgs').innerHTML = ''

 fetch(`https://api.thecatapi.com/v1/images/search`)
     .then(res => res.json())
     .then(kitty => {
         console.log(kitty)

         kitty.forEach(p => {
             let randomCat = p.url
             let para = document.createElement('img')
             para.src = randomCat
             document.querySelector('.imgs').appendChild(para)

             fetch(`https://catfact.ninja/fact?max_length=140`)
                 .then(res => res.json())
                 .then(kittyFact => {
                     console.log(kittyFact)
                     document.querySelector('.facts').innerText = kittyFact.fact
                 })
                 .catch(err => {
                     console.log(`error ${err}`)
                 })
         })
     }) */