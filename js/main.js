document.querySelector('button').addEventListener('click', getZipcode)

const ul = document.querySelector('ul')

function getZipcode(){
    ul.innerHTML = ''
    const zipCode = document.querySelector('input').value
   
    fetch(`https://api.zippopotam.us/us/${zipCode}`)
        .then(res => res.json())
        .then(data => {
            let lat = data.places[0].latitude
            let lon = data.places[0].longitude
            getRestaurants(lat,lon)
            console.log(data);

        })
        .catch(err => {
            console.error('this' + err);
        });
    }


function getRestaurants(lat,lon){
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lon}&limit=20&currency=USD&distance=5&open_now=false&lunit=mi&lang=en_US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": "ed90666f5emsh2a3f430f2550497p1e9a1fjsn54a56b4ac2d7"
        }
    })
    .then(res => res.json())
    .then(data =>{
        
        for(let i = 0;i < data.data.length;i++){
            if(!data.data[i].ad_position && data.data[i].phone){
            const li = document.createElement('li')
            const span = document.createElement('span')
            ul.append(li)
            li.innerText = `${data.data[i].name} (${data.data[i].phone}): `
            li.append(span)
            span.innerText = `${data.data[i].address}`
            }
        }
        console.log(data.data);
    })
    .catch(err => {
        console.error(err);
    });
}