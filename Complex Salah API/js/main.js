document.querySelector('button').addEventListener('click', getTimes)




function getTimes(){
    let URL = `https://ipgeolocation.abstractapi.com/v1/?api_key=bd0c0ed148014f0ea09ab35dd2b55b0c`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data.ip_address)
        let IP = data.ip_address
        fetch(`http://www.islamicfinder.us/index.php/api/prayer_times/?user_ip=${IP}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('.location').innerText = 'Prayer Times in ' + data.settings.location.city
            document.querySelector('.fajr').innerText = 'Fajr: ' + data.results.Fajr.substr(0,5) + ' AM'
            document.querySelector('.duhr').innerText = 'Duhr: ' + data.results.Dhuhr.substr(0,5) + ' PM'
            document.querySelector('.asr').innerText = 'Asr: ' + data.results.Asr.substr(0,5) + ' PM'
            document.querySelector('.maghrib').innerText = 'Maghrib: ' + data.results.Maghrib.substr(0,5) + ' PM'
            document.querySelector('.isha').innerText = 'Isha: ' + data.results.Isha.substr(0,5) + ' PM'
        })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
})}
