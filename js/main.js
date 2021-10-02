//We are pulling the zip code location from the user and utilzing that data to find restaurants in the other API

document.querySelector('button').addEventListener('click', pullZipCode)

const ul = document.querySelector('ul')

function pullZipCode(){
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
            "x-rapidapi-key": "4a37cfef91msh0df2a69bd1fdf53p18e25cjsnff91dee88b0e"
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