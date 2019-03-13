getPlayer();
function getPlayer() {
  let apiURL =
    "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal";

  let players = [];
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.player.forEach(function(player) {
        wiki(player.strPlayer.split("  ")[0]);
      });
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}

function wiki(name) {
  console.log(name);
  let apiURL ="https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + encodeURI(name) + "&format=json";
//encodeURI is for text that has a space in between it
  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      console.log(response);
      let listItem = document.createElement("li");
      document.querySelector("ul").appendChild(listItem);
      // inserts api information to the dom
      listItem.innerHTML = `<p>${response[2][0]}</p>`;
    })
    .catch(err => {
        console.log(`error ${err}`);
        alert("sorry, there are no results for your search");
    });
}