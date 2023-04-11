document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
      let nutrition = document.querySelector('input').value // variable for user to input a nutritional value
      fetch(
            `https://api.api-ninjas.com/v1/nutrition?query=${nutrition}`, {
                  method: 'GET',
                  headers: { 'X-Api-Key': 'gaTWJlAOTWBR/b1TDalnog==Me2VbFeT56FOFHuQ' },
                  contentType: 'application/json'
                }



      )
            .then(res => res.json()) // parse response as json
            .then(data => {
                  document.querySelector('h2').innerText = data[0].name   // assign objects 
                  document.querySelector('h3').innerText = data[0].calories   // assign objects 
                  console.log(data)

                  const nameOfIngredient = data[0].name
                  let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=2c1c9e3500614d519ad95c038e9cff08&ingredients=${data[0].name}`

                  fetch(url)                                                        // fetch inside of a fetch 
                  .then(res => res.json()) // parse response as json
                  .then(data => {
                              
                        document.querySelector('h4').innerText = data[0].title
                        document.querySelector('img').src = data[0].image 
                        
                        console.log(data)





                  })
            .catch(err => {
                  console.log(`error ${err}`)
            });


            })
      .catch(err => {
            console.log(`error ${err}`)
      });


}