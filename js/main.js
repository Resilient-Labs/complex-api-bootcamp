document.querySelector('button').addEventListener('click', getRecipe)

function getRecipe(){
    let foodSearch = document.querySelector('input').value.toLowerCase()

    let url = `https:api.nal.usda.gov/fdc/v1/foods/search?api_key=XcUKCrdeTO8hny2X5qeAdv2v8oV20mlKyqzA3pTl&query=${foodSearch}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.foods[0])
        document.querySelector('h2').innerText = data.foods[0].description
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=72a6741f5595442db032e8e231ab0a97&ingredients=${data.foods[0].ingredients}`)
        .then(res => res.json())
        .then(recipeData => {
            console.log(recipeData)
            document.querySelector('h3').innerText = recipeData[0].title
            document.querySelector('img').src = recipeData[0].image    
        })
    })
}