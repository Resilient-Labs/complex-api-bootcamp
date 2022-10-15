const giphyApiKey = apiKeys.giphy;
const ghibliApi = "https://ghibliapi.herokuapp.com/films/";
const giphyApi = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=`;
const ghilbiFilm = []

fetch(ghibliApi)
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((element, i) => {
        ghilbiFilm.push(element)
      const option = document.createElement("option");
      option.setAttribute("data-id", element.id);
      option.value = element.title;
      option.innerHTML = element.title;
      let select = document.querySelector("select");
      select.appendChild(option);
    });
  })
  .catch((err) => console.error("error:" + err));
document.querySelector("select").addEventListener("change", (e) => {
  console.log(e.target.value);
  console.log(e.target.selectedOptions[0].dataset.id, "yo");
  const selectedFilm = ghilbiFilm.find(film => film.id === e.target.selectedOptions[0].dataset.id)
  console.log(selectedFilm)
  fetch(giphyApi + e.target.value)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        const gif = document.querySelector('img').src = json.data[0].images['480w_still'].url
    })
    .catch((err) => console.error("error:" + err));
});
