//Top artist song lyrics
let apiKey ='d3393040deb7717023fddf6ba335cc33'
//http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=d3393040deb7717023fddf6ba335cc33
//http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=d3393040deb7717023fddf6ba335cc33&format=json


//api for lyrics from artists and song
//https://api.lyrics.ovh/v1/adele/hello
document.querySelector('button').addEventListener('click', findLyrics)

function findLyrics(){
    let artist = document.querySelector('input').value
    console.log(artist)

    let url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${apiKey}&format=json`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
     console.log(data) 
    // Insert name of song
     document.querySelector('span').innerText = data.toptracks.track[0].name
     
     let song = data.toptracks.track[0].name
     let lyricsURL = `https://api.lyrics.ovh/v1/${artist}/${song}`

        fetch(lyricsURL) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data) 
        // Insert name of sont.
        //document.querySelector('span').innerText = data.toptracks.track[0].name
        console.log(data.lyrics)
        document.querySelector('p').innerText = data.lyrics
        
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 


    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}