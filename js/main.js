const getWord = document.getElementById('bigbluebutton');
const getPokemon = document.getElementById('yellowBox1');
const pokemonImage = document.getElementById('pokemonImage')
const ima = document.getElementById('picture')



getWord.addEventListener('click',pokemon)


        function pokemon() {

         
          pokeData(`https://pokeapi.co/api/v2/pokemon/${getPokemon.value}`) 
          .then(data => { 
           
              document.querySelector('#stats').innerHTML = `<strong>Name:</strong>${data.name}<br/>
              <strong>Type:</strong>${data.types[0].type.name}<br/>
              <strong>Height:</strong> ${data.height}<br/>
              <strong>Weight:</strong> ${data.weight} lbs.<br/>`
               pokemonImage.setAttribute('src' , data.sprites.front_default)
               imgData(`https://picsum.photos/id/${data.order}/200/300`) 
               .then(data => { 
               
               ima.style.backgroundImage = `url(${data.url})`
           
              
          })
         
          })
          .catch(err =>{
           
               document.querySelector('#error').innerText = "Pokemon Not Found"
           })
      
     }
     
     async function pokeData(url) {
          const response = await fetch(url); 
          return response.json();
         }
          
     
      async function imgData(url) {
          const response = await fetch(url); 
          return response;
         }
     
  









