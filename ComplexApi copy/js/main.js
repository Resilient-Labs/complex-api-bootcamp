document.getElementById('button').addEventListener('click', giphy)
const pokemonurl = 'https://pokeapi.co/api/v2/pokemon/'
function giphy(){
   let randomNum = Math.floor(Math.random()* 899)

    fetch(pokemonurl+randomNum)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
        document.querySelector('h2').innerText = data.name
     

     const giphyurl = `https://api.giphy.com/v1/gifs/search?api_key=REqpaGTA5UMz80BirR7w6yQI2ruILLwR&q=${data.name}`

      fetch(giphyurl) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
        let secondRandomNum = Math.floor(Math.random()* data.data.length)

      document.querySelector('iframe').src = data.data[0].embed_url
    })
    .catch(err => { 
        console.log(`error ${err}`) 
    });
 

    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}