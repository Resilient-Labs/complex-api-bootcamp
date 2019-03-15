document.querySelector('form').addEventListener('submit',holidays)
function holidays(e){
  e.preventDefault();
  let country = document.getElementById('code').value;
  fetch(`https://calendarific.com/api/v2/holidays?country=${country}&year=2019&api_key=54eeb4a86f30cdf31143364a5917108179176f07`)
    .then(response => response.json())
    .then(response => {
      let h = Math.floor(Math.random()*(413 + 1)),
      y= response.response.holidays[h],
      name= y.name;
      document.querySelector("h2").innerText=name;
    wikiSearch(name)
  })
}

//function for wiki api
function wikiSearch(day){
  //pass drink through wiki api
  fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${day}&format=json`)
  .then(res => res.json())
  .then(response =>{
    console.log(response)
    //if the description doesn't exist have user pick a new random drink
    if(response[2][0] === [] || response[2][0] === ''){
      document.querySelector('p').textContent = 'try again'
    }else{
      //when a description does exist, display it
      let description = response[2][0]
      document.querySelector('p').textContent = description;
    }
  }) //closes response promise
  .catch(err => {
    console.log(`error ${err}`)
  })
}
