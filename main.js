let search = document.querySelector("input").value;
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
  .then(res => res.json())
  .then(response =>{
    // console.log(response.text)
    document.querySelector("p").textContent = response.text
    const apikey = "BD7of2s8BxdXdgo4Y0uW60V9QqwVXsBK"
fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
  .then(res =>res.json())
  .then(response => {
    // console.log(response.data.image_url)
    document.querySelector("img").src = response.data.image_url;
  })
    .catch(err => {
      console.log(`error ${err}`);
      alert('sorry, there are no results for your search');
  })
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
})
