// Goal: Use data returned from one api to make a request to another api and display the data returned

document.querySelector('button').addEventListener('click', astroGirl)

function astroGirl() {
  let name = document.querySelector('#name').value
  let month = document.querySelector('#month').value
  let day = document.querySelector('#day').value
  let year = document.querySelector('#year').value
  let time = document.querySelector('#time').value
  console.log(name, month, day, year, time)

  let splitTime = time.split(':')
  console.log(splitTime)

  let hours = splitTime[0]
  let minutes = splitTime[1]
  console.log(hours, minutes)


  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'e0274df07dmsh9703d3b2f29e073p180f44jsn3a90850fd518',
      'X-RapidAPI-Host': 'vedicrishi-horoscope-matching-v1.p.rapidapi.com'
    },
    body: `{"day":"${day}","month":"${month}","year":"${year}","hour":"${hours}","min":"${minutes}","name":"${name}"}` 
  };

  const options2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0274df07dmsh9703d3b2f29e073p180f44jsn3a90850fd518',
      'X-RapidAPI-Host': 'giphy.p.rapidapi.com'
    }
  };


  fetch('https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/numero_table/', options)
    .then(response => response.json())
    .then(response => {
      let stone = response.fav_stone //1. create elements in html to innerText here 
    console.log(response)
    let userName = response.name
    let birthday = response.date
    let destinyNumber = response.destiny_number
    let color = response.fav_color
    let favDay = response.fav_day
    document.querySelector('#userName').innerText = `Your Name: ${userName}` //to show header title for the info being displayed in the inner text 
    document.querySelector('#birthday').innerText = `Your Birthday: ${birthday}`
    document.querySelector('#destinyNumber').innerText = `Your Destiny Number: ${destinyNumber}` 
    document.querySelector('#color').innerText = `Your color: ${color}` 
    document.querySelector('#favDay').innerText = `Your favorite day: ${favDay}` 
    document.querySelector('#stone').innerText = `Your stone: ${stone}`

      fetch(`https://giphy.p.rapidapi.com/v1/gifs/search?api_key=k46lpa8QXu73qx6IYMqAVaNDOzw72Wlo&q=${stone}`, options2) //only quering by the stone here 
        .then(response2 => response2.json())
        .then(response2 => {
          let gif = response2.data[0].images.original.url
          document.querySelector('img').src = gif
          console.log(gif)
        })
        .catch(err => console.error(err));


    })
    .catch(err => console.error(err));
}


