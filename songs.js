document.getElementById('button1').addEventListener('click', definitionChecker)





function definitionChecker(){

    let input1 = document.getElementById('inputBox').value
    let input2 = document.getElementById('inputBox2').value
    
   
     
    let url = `https://api.lyrics.ovh/v1/${input1}/${input2}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => { 
    console.log(data)
    let lyrics = data.lyrics
    document.getElementById('outPut').innerText = lyrics 
       // firstGrab = document.getElementById('h2').innerText
    if( lyrics === undefined){
        document.getElementById('outPut').innerText= "Sorry no lyrics found!!"
    } 

   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'genius.p.rapidapi.com',
            'X-RapidAPI-Key': '11768ef5dfmshd06127c1ccad9a9p119cc0jsn41acb94f82b9'
        }
    };
        fetch(`https://genius.p.rapidapi.com/search?q=${input1}`, options)
        .then(res => res.json())
        .then(topSong => {
        console.log(topSong)
        let response1 = topSong.response.hits[0].result.full_title
        document.getElementById('songRec').innerText=response1
        let release = topSong.response.hits[0].result.release_date_for_display
        document.getElementById('releaseDate').innerText=release
    })
    })}
        
