//Worked with Kiany Ortega
document.querySelector('button').addEventListener('click', getResturants);
document.querySelector('input').addEventListener('keydown', enterKey);
const uL = document.querySelector('#restaurants');

function enterKey(e) {
    console.log(e.code);
    if(e.code === 'Enter' || e.code === 'NumpadEnter')
        getResturants();
}
function getResturants(){
    uL.innerHTML = ``;
    const zipCode = document.querySelector('input').value;
    const apiKey = 'ca9e37aca72be750f8e4a5fa2ad1bc7c'
    const url = `https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=${apiKey}&page=1`
    fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    data.data.forEach( result => {
        getGif(result);
    })
    }).catch(err => `getRestaurants() API Error: ${err}`)
}

function getGif(restaurant) {
    const apiKey = '6SZD7JEgPJpoKZbbJAtylZhgwsKfNAsw'
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${restaurant['restaurant_name']}&limit=1&offset=0&rating=G&lang=en`)
    .then(res => res.json())
    .then(data => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${restaurant["restaurant_name"]}</h3><img src="https://media.giphy.com/media/${data.data[0].id}/giphy.gif">`;
        uL.appendChild(listItem);
    })
    .catch(err => `getGif() API error: ${err}`)
}