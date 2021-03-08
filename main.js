
//Worked with Kiany Ortega
document.querySelector('button').addEventListener('click', getResturants);
const uL = document.querySelector('#restaurants');
function getResturants(){
    let zip = document.querySelector('input').value;
    const url = `https://api.documenu.com/v2/restaurants/zip_code/${zip}?key=d2742dcef78e36acc44f109a098f3fb3&page=1`
    fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    data.data.forEach( result => {
        getGif(result);
        console.log(result['restaurant_name'])
    })
    }).catch(err => `getRestaurants() API Error: ${err}`)
}
function getGif(restaurant) {
    const apiKey = '6SZD7JEgPJpoKZbbJAtylZhgwsKfNAsw'
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${restaurant['restaurant_name']}&limit=1&offset=0&rating=G&lang=en`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${restaurant["restaurant_name"]}</h3><img src="https://media.giphy.com/media/${data.data[0].id}/giphy.gif">`;
        uL.appendChild(listItem);
    })
    .catch(err => `getGif() API error: ${err}`)
}
