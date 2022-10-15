
document.querySelector('button').addEventListener('click', getLatLong)

let latt = 20;
let long = "null";

function getLatLong() {
    let rest = document.querySelector('input').value;


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
            'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
        }
    };

    fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${rest}&language=en`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0].geometry.location.lat)
            console.log(data.results[0].geometry.location.lng)
            latt = data.results[0].geometry.location.lat
            long = data.results[0].geometry.location.lng


            const options1 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com',
                    'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
                }
            };

            fetch(`https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${latt}&lon=${long}&page=1&per_page=15&radius=100`, options1)
                .then(response => response.json())
                .then(data1 => {
                    console.log(data1)
                    document.querySelector('#trailName1').innerText = data1.data[0].name
                    document.querySelector('#image1').src = data1.data[0].thumbnail
                    document.querySelector('#description1').innerText = data1.data[0].description
                    document.querySelector('#city1').innerText = data1.data[0].city
                    document.querySelector('#country1').innerText = data1.data[0].country
                    document.querySelector('#length1').innerText = data1.data[0].length

                    document.querySelector('#trailName2').innerText = data1.data[3].name
                    document.querySelector('#image2').src = data1.data[3].thumbnail
                    document.querySelector('#description2').innerText = data1.data[3].description
                    document.querySelector('#city2').innerText = data1.data[3].city
                    document.querySelector('#country2').innerText = data1.data[3].country
                    document.querySelector('#length2').innerText = data1.data[3].length

                    document.querySelector('#trailName3').innerText = data1.data[2].name
                    document.querySelector('#image3').src = data1.data[2].thumbnail
                    document.querySelector('#description3').innerText = data1.data[2].description
                    document.querySelector('#city3').innerText = data1.data[2].city
                    document.querySelector('#country3').innerText = data1.data[2].country
                    document.querySelector('#length3').innerText = data1.data[2].length


                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));

    return {
        long: long,
        latt: latt,
    }
}










