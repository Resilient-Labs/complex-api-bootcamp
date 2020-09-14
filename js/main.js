function loca(){
  fetch(`https://cat-fact.herokuapp.com/facts`)
    .then (res => res.json())
    .then (data => {
      console.log(data)
      let i = Math.floor(Math.random() * Math.floor(254))
      let text = data["all"][i]["text"]
      document.getElementById("name").innerHTML = data["all"][i]["text"]
      document.getElementById("title").style.paddingTop = ("24px")
      fetch(`https://api.thecatapi.com/v1/images/search`)
        .then (res => res.json())
        .then (data => {
          console.log(data)
          document.getElementById('pic').src = data[0]["url"]
      })
      fetch(`https://api.funtranslations.com/translate/pig-latin.json?text=${text}`)
        .then (res => res.json())
        .then (cata => {
          console.log(cata)
          document.getElementById("catlatin").innerHTML = (`In Cat-latin : ${cata["contents"]["translated"]}`)
        })
  })
}
