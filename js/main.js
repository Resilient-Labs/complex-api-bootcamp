// enter a pokemon name in the input and press battle and a cat will appear along with the pokemon's photo and type data
//
// cat api key a29f9943-e9c4-4356-b76f-48e097af6f54

document.querySelector('button').addEventListener('click',battleDemThangs)

function battleDemThangs() {


const url = 'https://dog.ceo/api/breeds/image/random';
const pokemonName = document.querySelector('input').value;
const url2 = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;


console.log(url);

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data);

      document.querySelector('img').src = data.message;
      //
      // document.querySelector('img').src = data.url
      //
      //
      // document.querySelector('h3').innerText = data.explanation


    })
    .catch(err => {
        console.log(`error ${err}`)
});

fetch(url2)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data);

      document.querySelector('.poke').src = data.sprites.other["official-artwork"].front_default;
      //
      
      // document.querySelector('img').src = data.url
      //
      //
      // document.querySelector('h3').innerText = data.explanation


    })
    .catch(err => {
        console.log(`error ${err}`)

});
}
