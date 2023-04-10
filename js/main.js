const wine = document.querySelector('input')
const API_KEY = `boYIIxSHPubUo9_S76Sx-jaxPn7N1DzfMWGBUCBrvy8` //api Key code for Unsplash
const apiKey = `cd44942bf17c49369249d57e0cb14dcd` // key for wine searcher and pairings


function getWasted() {

  let selection = document.querySelector('input').value.trim()
  if (selection === ''){
    alert('Enter a Wine name, Please!')
    return
  }

  const url = (`https://api.spoonacular.com/food/wine/dishes?apiKey=${apiKey}&wine=${selection}`)

  fetch(url)
    .then(res => res.json())
    .then(wineResponse => {
      console.log(wineResponse) // results of pairings 
      // const addtoDom = (foody) => {
      // const {}
      //  innerText = data.pairings
      let description = document.querySelector('p').innerText = wineResponse.text

      let foodIdea = wineResponse.pairings[Math.floor(Math.random() * wineResponse.pairings.length)]//generate a random index, y agregamos esto por que vamos a multiplicar la cantidad de pairings que tenemos.

     
      const url2 = (`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${foodIdea}`)

      fetch(url2)
        .then(res => res.json())
        .then(food => {
          console.log(foodIdea)
          console.log(food)
          //get the recepi name from food.meals[0].strMeal - this will be names foodNames
          // let foodName = document.querySelector('.mealName').innerText = food.meals[0].strMeal
          let recipeLink = document.querySelector("img").src = food.results[0].urls.thumb
          console.log(recipeLink)
        })

      //second fetch should go inside of this one
    }
    )



}
document.querySelector('button').addEventListener('click', getWasted)