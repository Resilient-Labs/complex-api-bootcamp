document.querySelector('button').addEventListener('click', getLyrics)

function getLyrics(){
    const artist = document.querySelector('#artist').value
    const title = document.querySelector('#song').value
    const lyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`
    const artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    console.log(lyricsUrl)
    fetch(lyricsUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.lyrics)  
            document.querySelector('#artistDisplay').innerText = artist.toUpperCase()
            document.querySelector('#songDisplay').innerText = title.toUpperCase()
            document.querySelector('#lyrics').innerText = data.lyrics
        })
        .catch(err => {
            console.log('error')
        })
    fetch(artistUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.artists[0].strArtistThumb
        })
        .catch(err => {
            console.log('error')
        })
}