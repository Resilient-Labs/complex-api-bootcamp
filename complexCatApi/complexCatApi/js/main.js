//Goal: Grab cat fact from API, Grab random cat picture, and make a Meme!
//GardnerGang worked on together
document.querySelector("button").addEventListener("click", makeMeme);
function makeMeme() {
  let outside = document.querySelector.value;

  fetch("https://cat-fact.herokuapp.com/facts")
    .then((res) => res.json())
    .then((data) => {
      //Inside the one apI has a cat Fact that goes with api  well meme
      let fact = data[Math.floor(Math.random() * Math.floor(4))].text;
      console.log(data);
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((data) => {
          //inside catPic
          let catPic = data[0].url;
          console.log(data);
          let memeText = fact.split(" ").join("_");
          memeText = fact.split("?").join("~q");
          memeText += ".jpg";
          let apiLink = `https://api.memegen.link/images/custom/_/${memeText}?background=${catPic}`;

          fetch(apiLink)
            .then((res) => res.blob())
            .then((img) => {
              outside = URL.createObjectURL(img);
              document.querySelector(
                "body"
              ).style.backgroundImage = `url(${outside}`;
              console.log(catPic);
              console.log(outside);
              console.log(memeText);
              //inside blob
            })
            .catch((err) => {
              console.log(`error ${err}`);
            });
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

makeMeme();
