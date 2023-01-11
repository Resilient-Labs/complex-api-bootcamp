document.querySelector('#button').addEventListener('click', getTimes)




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
            document.querySelector('.location').innerText = 'Prayer in ' + data.settings.location.city
            document.querySelector('.fajr').innerText = data.results.Fajr.substr(0,5) + ' AM'
            document.querySelector('.duhr').innerText = data.results.Dhuhr.substr(0,5) + ' PM'
            document.querySelector('.asr').innerText = data.results.Asr.substr(0,5) + ' PM'
            document.querySelector('.maghrib').innerText = data.results.Maghrib.substr(0,5) + ' PM'
            document.querySelector('.isha').innerText = data.results.Isha.substr(0,5) + ' PM'
        })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
})}
