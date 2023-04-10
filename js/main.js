


function getKanyeShit() {
  let url = `https://api.kanye.rest`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('h2').innerText = `"${data.quote}"`

      let url2 = `https://api.giphy.com/v1/gifs/search?&api_key=DHMRnWj25U9Xolkv4dhEHTUTRZs9kD7K&rating=r&q=kanye`

      fetch(url2)
        .then(res => res.json())
        .then(data => {
          let i = Math.floor(Math.random() * 50)
          document.querySelector('iframe').src = data.data[i].embed_url

        })


    })

    .catch(err => {
      console.log(`error ${err}`)
    });

}

document.querySelector('button').addEventListener('click', getKanyeShit)
