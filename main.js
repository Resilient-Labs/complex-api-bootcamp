const myOptions = {
    headers:{
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": "6f8461f352mshc9bffc995f651a9p164ddejsn0d84ba56dfac"}
    }



document.querySelector("button").addEventListener('click', function(){
  let yourName = document.getElementById("firstName").value
  let partnerName = document.getElementById("soName").value
  var fetchResp = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${yourName}&sname=${partnerName}`
  fetch(fetchResp, myOptions)
  .then(response => response.json())
  .then(response => {
  console.log(response)
  })
  .catch(err => {
   console.log(`error ${err}`)
   alert("no results")
 });
})
