document.querySelector("button").addEventListener("click", () => {
  fetch (`https://catfact.ninja/breeds?limit=98`)
    .then (responseData => responseData.json())
    .then(jsonRes =>{
      let randB = Math.floor(Math.random() * Math.floor(jsonRes.data.length));
    let query =  document.querySelector("span").innerHTML = jsonRes.data[randB].breed;

    }).then( res => {

      let query =  document.querySelector("span").innerHTML
      fetch (`https://pixabay.com/api/?key=15524169-4fd95808384de69dd66cd26ef&q=${query}&image_type=photo`)
        .then (responseData => responseData.json())
        .then(jsonRes =>{
          console.log(query);
          document.querySelector("img").src = jsonRes.hits[0].largeImageURL;
          console.log(jsonRes);
        })

    })
})
