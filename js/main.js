//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// https://api.unsplash.com//search/photos/?page=1&query=chicken&client_id=wJsqilSYouNt4zaizgCu9_fDEEIn5iQ3QzN-vvRaZ1Y
document.querySelector('button').addEventListener('click', activityOfTheDay)

function activityOfTheDay(){
let url = 'https://www.boredapi.com/api/activity'

  fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(dataForActivity => { 
      console.log(dataForActivity)
      document.querySelector('h2').innerText = dataForActivity.activity
     let activity = dataForActivity.activity
      const apiKey = 'SLQEdNBZWEeFBKX9wA9tLSh9HCYdjEziyOggjmcsmnqRBmSHINKZctK9';
      const urlTwo = `https://api.pexels.com/v1/search?query=${activity}`
      fetch(urlTwo, {
        headers: {
          Authorization: apiKey
        }
      }) 
    .then(res => res.json()) // parse response as JSON 
    .then(dataForPic => { 
      console.log(dataForPic) 
     
      document.querySelector('img').src = dataForPic.photos[0].src.portrait
      
    


    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });


      


    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });

}
