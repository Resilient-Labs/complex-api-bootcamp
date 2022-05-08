document.querySelector('.submitBtn').addEventListener('click', randomPark)

function randomPark() {
    //create a variable for the url, connect value of input to state search query. append information to the DOM
    const state = document.querySelector('#state').value.toLowerCase()
    const key1 = config.MY_GOV_KEY
    const url1 = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${key1}`
    function getRandomNumber(x) {
        return Math.floor(Math.random() * x)
    }

    fetch(url1)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let random = data.data[getRandomNumber(data.total)]
            console.log(random)
            document.querySelector('.parkName').innerText = random.fullName
            document.querySelector('.parkState').innerText = "State(s): " + random.states
            document.querySelector('.parkDesc').innerText = random.description
            document.querySelector('.photoHere').src = random.images[getRandomNumber(random.images.length)].url
            
            const key2 = config.MY_OP_KEY
            const lat = random.latitude
            const lon = random.longitude
            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key2}&units=imperial`

            fetch(url2)
                .then(res => res.json())
                .then(data2 => {
                    console.log(data2)
                    document.querySelector('.currentWeather').innerText = 'Current Weather'
                    document.querySelector('.temp').innerText = data2.main.temp + " degrees farenheit"
                    document.querySelector('.weatherCond').innerText = "Weather Conditions: " + data2.weather[0].description
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
}
