document.querySelector("button").addEventListener("click", meal);

function meal(e) {
  e.preventDefault();
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(response => {
      document.querySelector("img").src = response.meals[0].strMealThumb;
      food(response.meals[0].strArea);
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("Sorry! We couldn't find anything! Try something else!");
    });
}

function food(info) {
  let foodType = info + "%20cuisine";
  let apiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
    foodType +
    "&format=json";
  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      document.querySelector("p").innerHTML = response[2][0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("Sorry! We couldn't find that!");
    });
}
