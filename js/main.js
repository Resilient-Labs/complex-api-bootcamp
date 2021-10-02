document.querySelector("button").addEventListener("click", animeFinder);

function animeFinder() {
  const link = `https://api.jikan.moe/v3/anime/20`;
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      const animeTitle = data.title;
      console.log(animeTitle);
      const link2 = `https://animechan.vercel.app/api/quotes/anime?title=${animeTitle}`;
      fetch(link2)
        .then((res2) => res2.json())
        .then((data2) => {
          console.log(data2);
          let x = Math.floor(Math.random() * 11);
          document.querySelector('span').innerText = data2[x].character;
          document.querySelector("h3").innerText = data2[x].quote;
        })
        .catch((err2) => console.log(err2));
    })
    .catch((err) => console.log(err));
}
