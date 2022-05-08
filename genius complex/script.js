document.querySelector("button").addEventListener("click", getSongs);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "genius.p.rapidapi.com",
    "X-RapidAPI-Key": "b789b2c408msh5fd26b2f70ddca0p16bf13jsnb25cac59113f",
  },
};
function getSongs() {
  let search = document.querySelector("input").value;

  fetch(
    `https://genius.p.rapidapi.com/search?q=${search.split(" ").join("%20")}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
          document.querySelector('h3').innerText = response.response.hits[0].result.primary_artist.name
          document.querySelector('h4').innerText = response.response.hits[0].result.title
          document.querySelector('h5').innerText = response.response.hits[0].result.url
      let newPath = response.response.hits[0].result.api_path
      const optionTwo = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "genius.p.rapidapi.com",
          "X-RapidAPI-Key":
            "b789b2c408msh5fd26b2f70ddca0p16bf13jsnb25cac59113f",
        },
      };
      fetch(`https://genius.p.rapidapi.com${newPath}`, optionTwo)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            document.querySelector('.one').src = response.response.song.album.cover_art_url
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}
