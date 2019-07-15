//var proxy = 'https://cors-anywhere.herokuapp.com/'


//Generate Random food
let send = document.querySelector('button')
send.addEventListener('click',() => {
let api = `https://www.themealdb.com/api/json/v1/1/random.php`
fetch(api)
.then(res => res.json())
.then(response => {
  insertFoodName(response)
})
.catch(err => {
  console.log(`error ${err}`)
  alert("sorry, there are no results for your search")
  })
});

// Inserts data to the DOM
function insertFoodName(response) {
  document.getElementById('foodName').innerHTML = ""
  var foodName = response.meals[0].strMeal
  var element = document.getElementById('foodName')
  var makeText = document.createTextNode(foodName)
  element.appendChild(makeText)
  getRecipe(foodName)
}

//Generate's Recipe
function getRecipe(x){
  let food = document.getElementById('foodName').innerHTML
  let convertedFood = food.replace(new RegExp(" ", 'g'), "%20");
  let api = `https://www.food2fork.com/api/search?key=0afb787f598d36dc5d05c1a9a038caa0&q=${convertedFood}`
  fetch(api)
  .then(res => res.json())
  .then(data => {
    if(data.count === 0){
      alert("sorry no Recipe's found")
    }else{
      insertRecipes(data)
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
    })
  };


  function insertRecipes (data){
    const ul = document.getElementById('recipes')
    data.recipes.forEach((el,i) => {
    let image = document.createElement('img')
    let link = document.createElement('a')
    let recipeLink = data.recipes[i].f2f_url
    let foodImage = data.recipes[i].image_url
    image.src = foodImage
    let text = document.createTextNode('Recipe')
    //creates and appends recipe link
    let li = document.createElement('li')
    link.appendChild(text)
    link.href = recipeLink
    li.appendChild(link)
    li.appendChild(image)
    ul.appendChild(li)
  })
};
