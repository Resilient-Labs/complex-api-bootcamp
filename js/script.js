document.querySelector('button').addEventListener('click', btn)

function btn(){
    let url = 'http://acnhapi.com/v1a/villagers/'
    
    let random = Math.floor(Math.random()*390)
    fetch(url)
    .then(res =>res.json())
    .then (data => {
        console.log(data)
        let colour = data[random].name["name-USen"]
        document.querySelector('h2').innerText = data[random].name["name-USen"]
        document.querySelector('h3').innerText = data[random].id
    

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=p3SEqXd5GtSBARju8tlnKR8lg5dvDurx&q=${colour}&limit=25&offset=0&rating=g&lang=en`)
        .then(res =>res.json())
        .then (data => {
            console.log(data)
            document.querySelector('.pic1').src = data.data[0].images["480w_still"].url
            document.querySelector('.pic2').src = data.data[1].images["480w_still"].url
            document.querySelector('.pic3').src = data.data[2].images["480w_still"].url
            document.querySelector('.pic4').src = data.data[3].images["480w_still"].url
            document.querySelector('.pic5').src = data.data[4].images["480w_still"].url
            console.log(data.data[0].images["480w_still"].url)
    })  
    .catch(err=> {
        console.log(`error ${err}`)
    })
})
}