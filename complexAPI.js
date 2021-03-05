  /* let apikey="LKs9RANezjfhNZR2AKVvdM1oyPN5t1NG" */
  //  worked with my House Hayden :) 
//  one api will get a random quote from TV show Friends
//  The random quote will then go to 2nd API to fetch a GIF related to
//  random quote

document.getElementById("quote").textContent;
const quoteGenerator = document
  .getElementById("button")
  .addEventListener("click", () => {
    let generatedQuote;
    fetch(`https://friends-quotes-api.herokuapp.com/quotes/random`)
      .then((res) => res.json())
      .then((response) => {
        generatedQuote = response.quote;
        generatedCharacter = response.character;

        document.getElementById("quote").innerHTML = generatedQuote;
        document.getElementById("character").innerHTML = generatedCharacter;

        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=LKs9RANezjfhNZR2AKVvdM1oyPN5t1NG&q=${generatedQuote}&${generatedCharacter}&limit=5&offset=0&rating=G&lang=en`
        )
          .then((res) => res.json())
          .then((response) => {
            document.querySelector("iframe").src =
              response.data[0].images.downsized_large.url;
          })

          .catch((err) => {
            console.log(`error ${err}`);
            alert("Sorry, there are no results for your search");
          });
      });
  });
