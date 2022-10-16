document.querySelector('.button').addEventListener('click', getNationalParkInfo)
document.querySelector('ol').style.display = 'none'


function getNationalParkInfo(){
  document.querySelector('ol').style.display = 'block'
  let park = document.querySelector('.text').value
  if(!park){
    document.querySelector('p').innerText = 'you forgot to type something'
    return
  }
  fetch(`https://developer.nps.gov/api/v1/parks?q=${park}&api_key=yjRo7wzQKbkYdyV91oRQ6vgi1dAblr34zFfpGnsE`)
  .then (res => res.json())
  .then (data =>  {
    let name = data.data[0].fullName
    document.querySelector('h2').innerText = name
    document.querySelector('li').innerText = data.data[0].directionsInfo
    document.querySelector('p').innerText = data.data[0].description
    getPicture(name)
  })
}
// call and give it the right parameters to connect apis (functions)

function getPicture(parkName){
  fetch(`https://api.unsplash.com/search/photos/?query=${parkName}&client_id=r6AQBp-_9OQs27iEpkHO94uuy76n7dyomJ8cCwZGYRk`)
  .then (res => res.json())
  .then (data => {
    console.log(data)
    document.querySelector('img').src = data.results[0].urls.small
  })
} 