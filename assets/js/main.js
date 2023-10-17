//connect button  function "getTemp"
document.querySelector("button").addEventListener("click", getJoke);
  //the veent thathappens when u click
function searchWord(event) {
  console.log(event.target.innerText)
  // const url = `https://v2.jokeapi.dev/joke/Programming`;
  // .then((res) => res.json())
  // .then((data) => {
    
}

function getJoke() {
 
  const url = `https://v2.jokeapi.dev/joke/Programming`;
  

  //using method fetch to request my data from that api using url
  fetch(url) // go get api

    //.then property passes param res which responds with JSON parsing out the data you requested
    .then((res) => res.json())
    .then((data) => {
      let joke;

      //using this conditional to filter whether it is a single joke
      //if the data.joke exists
      if (data.joke) {
        console.log(data.joke);

        //split text to make words lcickable
        joke = data.joke;
      }

      //using this conditional to filter whether it is a two part joke
      else {
        console.log(data.setup, data.delivery);
        joke = data.setup + "<br>" + data.delivery;
      }

      //*note that when using the same "h2" it will clear the next joke
      // there is a joke whether its one part or two parts its sting and puts it on my page and onlybthing it needs to know is there is ajoke and puts it on pg
      //putting joke into one place
      const jokeWords = joke.split( " "  );
      console.log(jokeWords)
      //going thru each element at each array and putting that element into the word 
      jokeWords.forEach( word => { 
        
        console.log(`<span> ${word} </span>`)
        document.querySelector("h2").innerHTML += `<span class="word" > ${word} </span>`;
       
      });
    
      const spans = document.querySelectorAll(".word")
      for(let i = 0; i < spans.length; i ++){
        //if i is  0 give me first span (example)
        console.log(spans[i])
        spans[i].addEventListener('click', searchWord) 

      }

      

    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
