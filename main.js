const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e25484792bmsh4701bd6b5b53443p1b25b5jsn7dbd2e6909b3',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
        'Access-Control-Allow-Origin': '*',
    }
};
const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ad6fc8f236msha463cc2bd57b198p1e71ffjsn9c7cffbb02d3',
        'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
    }
};

let date = '';

fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response[0]);
        document.getElementById('iframe').src = response[0].url;
        document.getElementById('title').innerHTML = response[0].title;
        date = response[0].date.slice(0, 10);
        document.getElementById('date').innerHTML = date;
    })
    .then(() => {
        fetch(`https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=${date}&federation=UEFA`, options2)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById('home_team').innerHTML = response.data[0].home_team;
            document.getElementById('away_team').innerHTML = response.data[0].away_team;
            document.getElementById('result').innerHTML = response.data[0].result;
        })
      
    })
    .catch(err => console.error(err))





    
