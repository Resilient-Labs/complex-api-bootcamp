//add an event listener to the button to run the program
document.querySelector('form').addEventListener('submit', coordinates)

function coordinates(e){
  e.preventDefault()
  //search up latitude and longitude of the location user inputted
  let location = document.querySelector('#location').value
  //fetch api
  fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=n79W0KPfAZvUf32xLiiGZO4Akq1uAIiC
&location=boston`)
  .then(res => res.json())
  .then(response => {
    //take the lat lon from the api and put them into variables
      let lat = response.results[0].locations[0].latLng.lat
      let lng = response.results[0].locations[0].latLng.lng
      //call a new function to find venues utlizing latitude and longitude
      findVenue(lat, lng)
  })
  .catch(err => console.log(`ouch ${err}`))
} //closes coordinates function

//pass in latitude and longitude data into new function
function findVenue(lat, lng){
  //get api from zomato and put lat lon into it
  let venue = document.querySelector('#type').value
  let box = document.querySelector('#type')
//get venue api to search the latitude and longitude from the location and a venue category from the user input
  fetch(`https://api.foursquare.com/v2/venues/search?client_id=AY1DIEV12PEI3PMGIINX1BTOTNA5O1ISEISDBSO3AD5BYCMP&client_secret=MS4L3S52UQZT42DK40OJFZY0K3KMZQ22LDPN0ST24C4VGPYJ&v=20180323&limit=1&ll=${lat},${lng}&query=${venue}`)
  .then(res => res.json())
  .then(response =>{
    if(box.value = venue){
      box.value = "";
      //store venue name and address into variables to display into DOM
      let name = response.response.venues[0].name
      let addressList = response.response.venues[0].location.formattedAddress
      let address = addressList.join(' ');
      document.querySelector('h2').textContent = name;
      document.querySelector('p').textContent = address;
    }
  }) //closes venue then promise
  .catch(err => console.log(`ouch ${err}`))

} //closes venue function
