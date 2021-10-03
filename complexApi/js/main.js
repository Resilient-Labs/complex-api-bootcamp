document.querySelector("button").addEventListener("click", getInfo);

function getInfo() {
  let word = document.querySelector("input").value;
  const url = `https://openlibrary.org/search/authors.json?q=${word}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const firstItem = data.docs[0];
      if (firstItem && firstItem.name) {
        console.log(data);
        fetch(
          `https://pixabay.com/api/?key=23659212-81331bbcf2e36b38013765ef7&q=${firstItem.name}`
        )
          .then((res) => res.json())
          .then((dataPics) => {
            if (
              dataPics &&
              dataPics.hits &&
              dataPics.hits[0] &&
              dataPics.hits[0].largeImageURL
            ) {
              console.log(dataPics);
              document.querySelector("img").src =
                dataPics.hits[0].largeImageURL;
              document.querySelector("h2").innerText = firstItem.name;
            } else {
              document.getElementById(
                "errorMsg"
              ).innerText = `No images found for ${word}.`;
            }
          });
      }
    })

    .catch((err) => console.log(err));
}
