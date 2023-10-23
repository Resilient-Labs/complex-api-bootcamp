//User need's to input a value of a ingredient item that needs to be converted to a id

// EX: apple, converted to an id

// Fetch URL
// GET https://api.spoonacular.com/recipes/{id}/information

//Example request & response
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

// https://api.spoonacular.com/recipes/complexSearch           Search by Recipe

// API KEY 14c67de71b9f40e1a62b858c72a940ce

// Search Recipes
// 1st API Utilization

document.querySelector("button").addEventListener("click", recipe);

function recipe() {
  let userInput = document.querySelector("input").value;

  let apiKey = "14c67de71b9f40e1a62b858c72a940ce";

  // let city = 'london'; //Test city to be removed
  // let apiKey = 'GJpIgQGyjWrmCbtUL1ITHw==iGJD1KipvjGZOm2f'; // API key

  // let urlapi2 = "https://api.spoonacular.com/recipes/{id}/information";

  // `${ingredients}`
  console.log(userInput);

  let urlapi1 = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}`;
  //Return's the ingredient by ID
  console.log(urlapi1);

  fetch(urlapi1, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((result) => {
      //target this
      //name result = [0] to grab the first item in the array
      //result[0].id to get the id of the item since
      console.log(result);
      console.log(result[0].title); //grabbing the first index of the array to select, ID
      let recipeTitle = result[0].title; //START OF API #2
      let recipeImage = result[0].image
      // Get Recipe Information
      // 2nd API Utilization

      //Example: Request                     /  ID /
      // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

      //EXAMPLE WITH ANOTHER URL STRUCTURE WHERE RECIPES IS IN A CONCEPTUAL FOLDER & ID
      //****PATH PARAMS****
      // Folder
      // let urlapi2 = `https://api.spoonacular.com/recipes/${id}/information`;

      let urlapi2 = `https://api.unsplash.com/search/photos/?query=${userInput}+${recipeTitle}&client_id=MqDhZ15ksfl9teRSJk88kIogSwrcYBG6ggGJ7z5ULr8`;

      fetch(urlapi2)
      .then(res => res.json())
    .then((data) => {
    console.log('image')
    console.log(data)
    const src = data.results[0].urls.regular
    const description = data.results[0].alt_description
    if(description.includes(userInput)){                      //Research Includes method
        document.querySelector('.imgTest').src = src
    }else{
        document.querySelector('.imgTest').src = recipeImage
    }


    //Needs further optimization for image
    document.querySelector('.list').innerText = recipeTitle
    document.querySelector('.info').innerText = description //currently only showing 2nd api description even that is unoptimized
      //we have the id from the user's item
      //grab the value
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
    })
}
//Things to take note of think of things logically & in order, some things need to be withing a function scope for it to work
//FORMAT DOCUMENT AFTER CODING/NOTETAKING
//make second fetch into a function to make the code dryer & to call within the scope of the first fetch





// https://unsplash.com/oauth/applications/518014
// API KEY    MqDhZ15ksfl9teRSJk88kIogSwrcYBG6ggGJ7z5ULr8