let ul = document.querySelector('ul')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
  let input = document.querySelector('input').value
  fetch(`https://api.edamam.com/api/food-database/parser?app_key=${app_key}&app_id=2178ec15&ingr=${input}`)
    .then(res => res.json())
    .then(response => {
      ul.innerHTML = ''
      let li = document.createElement('li')
      let food;
      if (response.hints[0].food.label) {
        food = input
      }
      li.appendChild(document.createTextNode(food))
      ul.appendChild(li)
      fetch(`https://api.edamam.com/search?q=${food}&app_id=f7c72d49&app_key=${app_key_two}`)
        .then(res => res.json())
        .then(response => {
          response.hits.forEach(function(x){
            let subItems = document.createElement('li')
            let recipes = x.recipe.label
            let url = x.recipe.url
            subItems.appendChild(document.createTextNode(`${recipes} - ${url}`))
            ul.appendChild(subItems)
          })
        })
        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`);
    })
})
