document.querySelector(".button").addEventListener("click", getRecipe)
let ulIngredientsList = document.querySelector(".ingredientsList")
let cookingStepsList = document.querySelector(".cookingSteps")


function getRecipe() {
    cookingStepsList.innerHTML = " "
    ulIngredientsList.innerHTML = " "
    let selection = document.querySelector(".userInput").value

    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=3f39fdf966e54d62b53e8da0aa556039&query=${selection}`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector(".foodTitle").innerText = data.results[0].title
            let foodID = data.results[0].id
            console.log(foodID)

            let urlID = `https://api.spoonacular.com/recipes/${foodID}/information?apiKey=3f39fdf966e54d62b53e8da0aa556039`


            fetch(urlID)
                .then((res) => res.json())
                .then((idIngredients) => {

                    let dietsArray = ""
                    for (let i = 0; i < idIngredients.diets.length; i++) {
                        dietsArray += `${idIngredients.diets[i]} | `
                        document.querySelector(".diets").innerText = dietsArray
                    }

                    for (let i = 0; i < idIngredients.analyzedInstructions[0].steps.length; i++) {
                        let licooking = document.createElement("li")
                        licooking.innerText = `${idIngredients.analyzedInstructions[0].steps[i].step}`
                        cookingStepsList.appendChild(licooking)
                    }

                    let totalCalories = 0
                    for (let i = 0; i < idIngredients.extendedIngredients.length; i++) {
                        console.log(idIngredients)
                        let oneIngredient = idIngredients.extendedIngredients[i].original
                        console.log(oneIngredient)


                        let urlTwo = `https://api.api-ninjas.com/v1/nutrition?query=${oneIngredient}`
                        let apininjakey = "2Tp3uhRmB2SAG4siCB1yZw==gq4Xcpbe2rJ4gTl0"
                        fetch(urlTwo, { headers: { "X-Api-Key": apininjakey } })
                            .then((res) => res.json())
                            .then((foodInfo) => {
                                let caloriesPerItem = 0
                                for (let i = 0; i < foodInfo.length; i++) {
                                    caloriesPerItem += foodInfo[i].calories
                                }
                                totalCalories += caloriesPerItem
                                console.log(totalCalories)

                                let liIngredients = document.createElement("li")
                                liIngredients.innerText = `${oneIngredient} (${Math.floor(caloriesPerItem)} calories)`
                                ulIngredientsList.appendChild(liIngredients)



                                console.log(foodInfo)
                                document.querySelector(".calories").innerText = `Total Calories: ${Math.floor(totalCalories)}`

                            })
                            .catch(err => {
                                console.log(`error ${err}`)

                            })

                    }

                })

        })
    document.querySelector(".userInput").value = ""

}