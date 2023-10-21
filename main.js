//API 1: GET https://api.geocod.io/v1.7/reverse
// b525252218b63d21b5bd68f8b61fd5d2bd524df
//API 2: https://earthquake.usgs.gov/
// no key needed

document.querySelector('button').addEventListener('click', findCity);

function findCity() {
    console.log('findCity runs');

    let address = document.querySelector('#address').value;

    const apiKey1 = 'b525252218b63d21b5bd68f8b61fd5d2bd524df';

    const url1 = `https://api.geocod.io/v1.7/geocode?api_key=${apiKey1}&q=${address}`;

    fetch(url1)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            if (data.results && data.results.length > 0) {
                const latitude = data.results[0].location.lat;
                const longitude = data.results[0].location.lng;

                console.log(latitude);
                console.log(longitude);
                document.querySelector('#lat').innerText = `Lattitude: ${latitude}`;
                document.querySelector('#long').innerText = `Longitude: ${longitude}`;

                const url2 = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradius=5`;

                fetch(url2)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);

                        // Extract and display the relevant data
                        const earthquakeData = data.features;
                        const container = document.getElementById('earthquake-data');
                        container.innerHTML = ''; // Clear previous data

                        if (earthquakeData.length === 0) {
                            container.innerHTML = '<p>No earthquake data available.</p>';
                        } else {
                            const ul = document.createElement('ul');
                            earthquakeData.forEach((earthquake) => {
                                const li = document.createElement('li');
                                li.textContent = `Magnitude: ${earthquake.properties.mag}, Location: ${earthquake.properties.place}`;
                                ul.appendChild(li);
                            });
                            container.appendChild(ul);
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching earthquake data:', error);
                    });
            } else {
                console.log('No results found for the provided address.');
            }
        })
        .catch((err) => {
            console.log(`Error in geocoding API: ${err}`);
        });
}




