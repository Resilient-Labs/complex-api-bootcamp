// const api = "";
const btn = document.querySelector("button")
let input;

btn.addEventListener('click', ()=>{
input = document.querySelector("input").value
fetch(`https://api.punkapi.com/v2/beers/`)
    .then(res => res.json())
    .then(response => {
      var ul = document.querySelector('#make');
        for (let i=0; i<response.length; i++) {
          let beerName = response[i].name;
          let foodPairing = response[i].food_pairing[0];
          fetch(`http://www.recipepuppy.com/api/?q=${foodPairing}`)
            .then(res => res.json())
            .then(response => {
              // console.log(beerName);
              // console.log(foodPairing);
              let result = response.results[0].href;
              var li = document.createElement("li");
              li.appendChild(document.createTextNode(beerName + " | " + foodPairing + " | " + link))
              ul.appendChild(li)
              // li.appendChild(document.createTextNode(" | " + foodPairing))
              // ul.appendChild(li)
            })
        }
    })
    .catch(err =>{
      console.log(`error ${err}`)
      alert("Sorry, no results for this search")
    });

})
