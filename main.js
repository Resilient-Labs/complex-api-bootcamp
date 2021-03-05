document.querySelector('button').addEventListener('click', getFacts)

function getFacts() {


  let catUrl = `https://api.thecatapi.com/v1/images/search`
  fetch(catUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector('img').src = data[0].url

      let url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=30'
      fetch(url)
        .then(res => res.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            document.querySelector('h2').innerText = data[i].text
          }
        })

    })
}
