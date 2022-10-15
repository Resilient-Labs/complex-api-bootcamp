const activity_name = document.querySelector('.activity_name');
const activity_type = document.querySelector('.activity_type');
const gif = document.querySelector('.gif');
const activityButton = document.querySelector('#activityButton')
activityButton.addEventListener('click', loadApiData)


function loadApiData(){
  let activity_name_data, activity_type_data;
  let url = 'https://www.boredapi.com/api/activity'
  


  fetch(url)  // fetch is saying can you go grab(fetch) this url link
    .then((response) => response.json()) // response is saying can you give me a response back in json. The browser says sure heres a bag called json with the response you wanted
    .then((data) => { //then I am going to put the bag of information you gave me in a parameter called data
      console.log(data)
      activity_name_data = data.activity;
      activity_type_data = data.type;
      activity_name.innerText = 'Activity Name: ' + activity_name_data
      activity_type.innerText = 'Activity Type: ' + activity_type_data
      second(activity_type_data)

      
    .catch(err => {
      console.log(`error ${err}`)
    })
  });
}

function second(run){
  let gif_data;
  let url2 = `https://api.giphy.com/v1/gifs/search?api_key=3RfurSnyBwBefmamJtK1XJ4NYiinAzvs&q=${run}&limit=1&offset=0&rating=g&lang=en`
  fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    gif_data = data.data[0].images.original.url
    console.log(gif_data)
    
    
    // gif.src = gif_data
    document.getElementById("jump").src = gif_data

})
.catch(err => {
console.log(`error ${err}`)
})
}


console.log('button')