document.querySelector("button").addEventListener("click", newDog);

function newDog(e) {
  e.preventDefault();
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let firstChar = response.message.indexOf("breeds") + 7;
      let lastChar = response.message.lastIndexOf("/");
      let breed = response.message.substring(firstChar, lastChar);
      console.log(response.message);
      console.log(breed);
      dogBreed(breed);
      document.querySelector("img").src = response.message;
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, no doggie");
    });
}

function dogBreed(breed) {
  var apiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
    breed +
    "&format=json";
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response);
      document.querySelector("p").innerHTML = response[2][0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("can't find this description.");
    });
}
