

// 

document.querySelector("button").addEventListener("click", getLyrics)

function getLyrics(){

    let song = document.getElementById("song").value
    let artist = document.getElementById("artist").value

    fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=TibJStcK2J0m8rOQyhrNNWLXYDxSd3rvWRIyfS3Pwv3PvVu5aOD8dS5PaR5spEmI`)
    .then( res => res.json())
    .then(data =>{
        console.log(data)
        
        let getSuggestButton = document.querySelector("#getSuggestion")
        getSuggestButton.style.display = "block"
        getSuggestButton.addEventListener("click",()=>getSuggest(artist))
        document.querySelector("#results").innerHTML = data.result.track.text.replace(/(\r\n|\r|\n)/g, "<br>")
    })
    
}
function getSuggest(artist){

    fetch(`https://api.lyrics.ovh/suggest/${artist}`)
    .then( res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector("#suggestions").innerHTML = `<ul> ${data.data.map((item)=>`<li>${item.title}, by ${item.artist.name} </li><button id="btnTwo" data-artist="${item.artist.name}" data-song="${item.title}">Get Lyrics</button>`).join("")}</ul>`
    })
    
}
let buttons = [...document.querySelectorAll("btnTwo")]
buttons.forEach(x => x.addEventListener("click",()=>{
    console.log(x.getAttribute("data-song"))

    // let song =
    // let artist = 

    // fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${song}?apikey=TibJStcK2J0m8rOQyhrNNWLXYDxSd3rvWRIyfS3Pwv3PvVu5aOD8dS5PaR5spEmI`)
    // .then( res => res.json())
    // .then(data =>{
    //     console.log(data)
        
    //     let getSuggestButton = document.querySelector("#getSuggestion")
    //     getSuggestButton.style.display = "block"
    //     getSuggestButton.addEventListener("click",()=>getSuggest(artist))
    //     document.querySelector("#results").innerHTML = data.result.track.text.replace(/(\r\n|\r|\n)/g, "<br>")
    // })
}))

