
let button = document.querySelector('#button')
let form = document.querySelector('.form')
let song = document.querySelector('#song')
let artist = document.querySelector('#artist')
const musicSearch = () =>{
  let userArtist = artist.value;
  let userSong = song.value;
  fetch(`https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=${userArtist}&t=${userSong}`)
  .then( res => res.json())
  .then(data => {
    console.log("audiodb api", data)
    let album = data.track[0].strAlbum;
    console.log("album name:", album);
    fetch(`https://itunes.apple.com/search?term=${album}`)
      .then( res => res.json())
      .then(data => {
        console.log("itunes",data);
        let thumbnailCover = data.results[0].artworkUrl100;
        let songPreview = data.results[0].previewUrl;
        console.log("thumb", thumbnailCover)
        console.log("song preview", songPreview)
        document.querySelector('iFrame').classList.remove("hidden");
        document.querySelector('audio').classList.remove("hidden")
        document.querySelector('#thumbnail').src = thumbnailCover;
        document.querySelector('#audio').src = songPreview;
      })
    });
}
button.addEventListener('click', musicSearch);
form.addEventListener("submit", (event) => {
  event.preventDefault()
})
