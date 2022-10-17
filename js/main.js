//Goal: Use data returned from one api to make a request to another api and 
//display the data returned
document.querySelector('button').addEventListener('click', getEvent)

function getEvent(e){
    e.preventDefault()
    let zip = document.querySelector('input').value
    let zipUrl = `https://api.zippopotam.us/us/${zip}`
    fetch(zipUrl)
    .then(res => res.json()) // parse response as JSON
    .then(zipData => {
            console.log(zipData.places[0].longitude)

            //secondAPI
            let latNum = zipData.places[0].latitude
            let lonNum = zipData.places[0].longitude
            let sgKey = '8148fcb872d9e4bf52d20251d060e78f7b7b710d89f83b2c1e3b8761a6c99b66'
            let clientId = 'Mjk3NjMzMDF8MTY2NTk1NDEyMy4wMDM2Mjg1'
            // let firstUrl = `https://api.seatgeek.com/2/performers/?client_id=${clientId}&client_secret=${sgKey}`
            let locationUrl = `https://api.seatgeek.com/2/events?lat=${latNum}&lon=${lonNum}&range=12mi&client_id=${clientId}&client_secret=${sgKey}`
            fetch(locationUrl)
            .then(res => res.json()) // parse response as JSON
            .then(eventData => {
                    console.log(eventData)
                    for(let i = 0; i < eventData.events.length; i++){
                        
                        let eventName = document.createElement('h2') //title
                        eventName.innerText = eventData.events[i].short_title
                        document.querySelector('main').appendChild(eventName)

                        let eventDate = document.createElement('h3') //date
                        eventDate.innerText = `${eventData.events[i].datetime_local.substring(0, 10)} / ${eventData.events[i].datetime_local.substring(11, 16)}`
                        document.querySelector('main').appendChild(eventDate)

                        let eventVenue = document.createElement('h4') //event venue
                        eventVenue.innerText = eventData.events[i].venue.name
                        document.querySelector('main').appendChild(eventVenue)

                        let eventType = document.createElement('span') //event type
                        eventType.innerText = eventData.events[i].taxonomies[0].name
                        document.querySelector('main').appendChild(eventType)
                    }
                })
        })
        .catch(err => {
        console.log(`error ${err}`)
        });
    }
