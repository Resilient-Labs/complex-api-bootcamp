// take image from first API and diplay it
//
//take img from first api and display it
//get brand name and push it thru wiki api

makeup();
document.querySelector(".next").onclick = next;
document.querySelector(".prev").onclick = back;

const makeupArray = [];
const descriptionA = [];

let i = 0;
let j = 0;

function makeup() {
  let apiURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.forEach(function(el) {
        console.log(el.image_link);
        makeupArray.push(el.image_link);
        brand(el.brand);
      });
      document.querySelector("img").src = makeupArray[0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("nope.");
    });
}

function brand(brand) {
  var apiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
    brand +
    "&format=json";
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      descriptionA.push(response[2][0]);
      document.querySelector("p").innerHTML = descriptionA[0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("can't find this description.");
    });
}

// when click go to the next fact which starts in array
function next() {
  i--;
  if (i == -1) {
    i = makeupArray.length - 1;
  }
  document.querySelector("img").src = makeupArray[i];

  j--;
  if (j == -1) {
    j = descriptionA.length - 1;
  }
  document.querySelector("p").innerHTML = descriptionA[j];
}
// when click go to the previous fact which starts in array
function back() {
  i++;
  if (i == makeupArray.length) {
    i = 0;
  }
  document.querySelector("img").src = makeupArray[i];

  j++;
  if (j == descriptionA.length) {
    j = 0;
  }
  document.querySelector("p").innerHTML = descriptionA[i];
}
