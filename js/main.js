function tacogiph (){
  fetch('http://taco-randomizer.herokuapp.com//random/?full-taco=true')
      .then(res => res.json())
      .then(response => {
        console.log(response.name)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${response.name}`)
          .then(res2 => res2.json())
          .then(response2 => {
            console.log(response2);
            let theImage = document.querySelector('#thetaco')

            theImage.src = response2.data[0].images.downsized_large.url;
            theImage.alt = `${response.name} Gif`;
            document.querySelector('#tacotype').textContext = response.name;
          })
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
}

document.querySelector('#click').addEventListener('click', tacogiph);
