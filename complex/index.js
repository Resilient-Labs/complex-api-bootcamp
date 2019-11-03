const api = '6873435a182dd2bba509bce88f27e215'
const api2 = 'DgVLgDRcZjPOKofVx83R7MX4IBdkeH6B21igAsHwI84uaaUcGbG190QSv7bkKO0V'
const secret = '6762c2dc89978b57f0de8c8395f59c38'
const btn = document.querySelector('button')
const result = document.querySelector('#result')

btn.addEventListener('click', ()=>{
const dropdwn = document.querySelector('#dropdown').value
let artist = '';
let song = ''

  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=blake shelton&api_key=${api}&format=json`)
    .then(res => res.json())
    .then(json =>{
      // console.log(json)
      if(dropdwn === 'sad'){
        artist = 'blake shelton'
        song = json.toptracks.track[4].name
        songUrl = json.toptracks.track[4].url
        console.log('wtf', document.getElementById('test'))
        let youtubeSong = "https://www.youtube.com/watch?v=xZjosn2u1gA".replace("watch?v=", "embed/")
        document.getElementById('test').src = youtubeSong
        let userChoosesSad = new IsUserChose('blake shelton',json.toptracks.track[4].name)
        userChoosesSad.userChooses()
      }     // end of the id statement
    })
      if (dropdwn === 'happy'){
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=florida georgia line&api_key=${api}&format=json`)
          .then(res => res.json())
          .then(json =>{
          console.log(json)
          artist = 'florida georgia line'
          song = json.toptracks.track[0].name
          songUrl = json.toptracks.track[0].url
          console.log(songUrl)
          let youtubeSong = "https://www.youtube.com/watch?v=8PvebsWcpto".replace("watch?v=", "embed/")
          document.getElementById('test').src = youtubeSong
          userChoosesHappy = new IsUserChose('florida georgia line',json.toptracks.track[4].name)
          userChoosesHappy.userChooses()
      })
    }
    if(dropdwn === 'angry'){
      fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=zac brown&api_key=${api}&format=json`)
        .then(res => res.json())
        .then(json =>{
        artist = 'zac brown'
        song = json.toptracks.track[9].name
        songUrl = json.toptracks.track[9].url
        console.log(songUrl)
        let youtubeSong = "https://www.youtube.com/watch?v=e4ujS1er1r0".replace("watch?v=", "embed/")
        document.getElementById('test').src = youtubeSong
        // object created for this
        userChoosesAngry = new IsUserChose('zac brown',json.toptracks.track[9].name)
        userChoosesAngry.userChooses()
    })
  }  if(dropdwn === 'tired'){
      fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=keith urban&api_key=${api}&format=json`)
        .then(res => res.json())
        .then(json =>{
          console.log (json)
        artist = 'keith urban'
        song = json.toptracks.track[8].name
        songUrl = json.toptracks.track[8].url
        console.log(songUrl)
        let youtubeSong = "https://www.youtube.com/watch?v=z3xtfNDoO3s".replace("watch?v=", "embed/")
        document.getElementById('test').src = youtubeSong
        // object created for this
        userChoosesTired = new IsUserChose('keith urban',json.toptracks.track[8].name)
        userChoosesTired.userChooses()
    })
  }

  if(dropdwn === 'unsure'){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=lil nas&api_key=${api}&format=json`)
      .then(res => res.json())
      .then(json =>{
        console.log (json)
      artist = 'lil nas'
      song = json.toptracks.track[0].name
      songUrl = json.toptracks.track[0].url
      console.log(songUrl)
      let youtubeSong = "https://www.youtube.com/watch?v=gUcisIlT7sM".replace("watch?v=", "embed/")
      document.getElementById('test').src = youtubeSong
      // object created for this
      userChoosesUnsure = new IsUserChose('lil nas',json.toptracks.track[0].name)
      userChoosesUnsure.userChooses()
  })
}


class IsUserChose{
  constructor (artist,song){
    this.artist = artist
    this.song = song
  }
  userChooses(){
    fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=${api2}`)
      .then(res => res.json())
      .then(json =>{
        let trackName = json.result.track.name
        let lyrics = json.result.track.text
        console.log(trackName , lyrics)

        var textNode = document.createElement("div");
         textNode.innerHTML = `${trackName},<br>${lyrics}`;
        result.appendChild(textNode);
      })
    }
  }
})
