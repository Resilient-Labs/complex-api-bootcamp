document.querySelector('button').addEventListener('click',getPlayerInfo)

function getPlayerInfo(){
    let playerVal = document.querySelector('input').value
    let url = `https://www.balldontlie.io/api/v1/players?search=${playerVal}`
    let playerImg = document.querySelector('input').value

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    document.querySelector('h1').innerText = data.data[0].first_name
    document.getElementById('last').innerText = data.data[0].last_name
    })
    .catch(err => {
    console.log(`error ${err}`)
    })
    // CODE FROM SECOND API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd0e7a901f3mshefc28659b5329afp174d4ajsnce432c63adc0'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/seasons', options)
        .then(response => response.json())
        .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data.results
        })
        .catch(err => {
        console.log(`error ${err}`)
        })


}