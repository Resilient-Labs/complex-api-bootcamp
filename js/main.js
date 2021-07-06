//music api
let button = document.querySelector('#button') //var declared 
let form = document.querySelector('.form')
let song = document.querySelector('#song')
let artist = document.querySelector('#artist')


const musicSearch = () =>{
  let userArtist = artist.value; // vars for user input
  let userSong = song.value;
  fetch(`https://theaudiodb.com/api/v1/json/1/searchtrack.php?s=${userArtist}&t=${userSong}`)
  .then( res => res.json()) //parse json data 
  .then(data => {
    console.log("audiodb api", data)
    let album = data.track[0].strAlbum; //grabs data from fetch 1 to search in fetch 2
    console.log("album name:", album);
    fetch(`https://itunes.apple.com/search?term=${album}`)
      .then( res => res.json()) //parse json data 
      .then(data => {
        console.log("itunes",data);
        let thumbnailCover = data.results[0].artworkUrl100; //targets cover and song preview 
        let songPreview = data.results[0].previewUrl;
        console.log("thumb", thumbnailCover)
        console.log("song preview", songPreview)
        document.querySelector('iFrame').classList.remove("hidden"); //hidden class removed to display when btn is clicked
        document.querySelector('audio').classList.remove("hidden")
        document.querySelector('.media').classList.remove("hidden")
        document.querySelector('#thumbnail').src = thumbnailCover; //puts music cover in iframe
        document.querySelector('#audio').src = songPreview;//puts music cover in mp4
      })
    });
}
button.addEventListener('click', musicSearch); //function called when btn pressed.
form.addEventListener("submit", (event) => {
  event.preventDefault()
})
