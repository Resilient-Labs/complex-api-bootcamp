document.querySelector('button').addEventListener('click', getAPI)

function getAPI() {
  let input = document.getElementById('userIn').value
  // let catz = document.getElementById('cats')
  let url = ` https://api.thecatapi.com/v1/images/search`
  let url2 = `https://catfact.ninja/facts`
  let breed = document.getElementById('para')
  console.log(url)


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // document.querySelector('img').src =

      document.querySelector('img').src = data[0].url
      let yourImg = document.getElementById('cats');
      if (yourImg && yourImg.style) {
        yourImg.style.height = '300px';
        yourImg.style.width = '30%';
        // yourImg.style.align = 'center';
      }
      // document.getElementById('catz').src
      // console.log(data)
      // console.log(data)
    })


  fetch(url2)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      // console.log(data.data[0].breed)
      // document.querySelector('img').src =
      // document.getElementById('para').innerHTML = data[0]
      for (let i = 0; i <= data.data.length; i++){

       document.getElementById('para').innerHTML = data.data[i].fact
     }
    })

}
