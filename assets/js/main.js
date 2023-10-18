//connects button to functions searchWord, getJokes
document.querySelector("button").addEventListener("click", getJoke);

//used this function below b/c decodeURI was not working, so used  from function below. Got this function from stackoverflow to solve it : https://stackoverflow.com/questions/44195322/a-plain-javascript-way-to-decode-html-entities-works-on-both-browsers-and-node
function decodeEntities(encodedString) {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">",
  };
  return encodedString
    .replace(translate_re, function (match, entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function (match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
}


//this event occurs when you click on the word of joke, prompting the link to learn more about the word selected (learning more about the programming )
function searchWord(event) {
  console.log(event.target.innerText)
  const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${event.target.innerText}&site=stackoverflow`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //confirming stackoverflow results come back from element of index with link to learn more and the title of that link 
      console.log( "stackoverflow result: ", data.items[0].link, data.items[0].title );

     //variable holds link from html <a></a>
      const link = document.querySelector("#stackoverflowLink");
     
      //give us the anchor for the link 
      console.log(link)

      //Note: decodeURI method did not work so i used decodeEntities. The function is located at top of pg 
      //created variable title to use method decode entities to ensure no code prompted with title
      const title = decodeEntities(data.items[0].title);
      //text of title displays due to decodingEntities of link
      link.innerText = title
      //targeted anchor elements href property in HTML to inset link
      link.href = data.items[0].link;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// params 
// access_token used to pass in any method
//inbox_item  global inbox 



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
       
        //split text to make words clickable
        joke = data.joke;
      }

      //using this conditional to filter whether it is a two part joke
      else {
        console.log(data.setup, data.delivery);
        joke = data.setup + "<br>" + data.delivery;
      }

      //*Note: that when using the same "h2" it will clear joke, after clicking button

      //Note: In api it produced a one part or two part joke. Below ensures it puts it as a string puts it on pg
      const jokeWords = joke.split( " "  );
      console.log(jokeWords)

      //using both to to clear my  title, link, and joke displayed on html
      document.querySelector("#stackoverflowLink").innerHTML = "";
      document.querySelector("h2").innerHTML = "";

      //going through each element at that index of the array and putting that element <span> </span> onto the word 
      jokeWords.forEach( word => { 
        
        //confirming span is wrapping on every word
        console.log(`<span> ${word} </span>`)
     
        //span is wrapping on every word
        document.querySelector("h2").innerHTML += `<span class="word" > ${word} </span>`;
       
      });
      
      //my for loop is adding an event listener on every word that prompts from joke generator
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
