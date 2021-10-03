document.querySelector('button').addEventListener('click', getRecipe) 


function getRecipe(){

    const recipeApi = 'https://www.themealdb.com/api/json/v1/1/random.php'
    console.log(recipeApi)
    fetch(recipeApi)
        .then(response => response.json())
        
        .then(data => {
        console.log(data)
        document.querySelector('img').src = data.meals[0].strMealThumb
        document.querySelector('.name').innerHTML = data.meals[0].strMeal
        document.querySelector('.instructions').innerHTML = data.meals[0].strInstructions

        const instructions = data.meals[0].strInstructions
        const translateApi = `https://api.funtranslations.com/translate/fudd.json?text=${instructions}`
        fetch(translateApi)
            .then(response => response.json())
            
            .then(translateData => {
            console.log(translateData)
            document.querySelector('.instructions').innerHTML = translateData.contents.translated

            })
            
            
            .catch(error => {
            console.log(`Error ${error}`)
            })
        })
        
        
        .catch(error => {
        console.log(`Error ${error}`)
        })
}

