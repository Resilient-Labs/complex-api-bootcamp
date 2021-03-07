

document.querySelector('button').addEventListener('click', getRandomDog)

function getRandomDog() {
  // let breeds = document.querySelector('h2').innerHTML

  let apiLink = `https://dog.ceo/api/breeds/image/random`
  fetch(apiLink)
    .then(res => res.json()) // parse response as JSON
    .then(dogData => {
      console.log(dogData);
      const breedName = dogData.message.split(`/`)[4]

      reportDogBreed(breedName, dogData)
    })
    .catch(err => {
      console.error(`error ${err}`);
    })
}

function reportDogBreed(breedName, dogData) {
  fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breedName}&api_key=bd954b02-3ff4-4074-94e1-85849dd284fb`)
    .then(res => res.json()) // parse response as JSON
    .then(breedData => {
      if (breedData.length > 0) {
        document.querySelector('img').src = dogData.message
        document.querySelector('h2').innerText = breedData[0].name
        document.querySelector('h3').innerText = `This doggo is` + ` ` + breedData[0].temperament
      } else {
        getRandomDog()
      }
  })
  .catch(err => {
    console.error(`error ${err}`);
  })
}
