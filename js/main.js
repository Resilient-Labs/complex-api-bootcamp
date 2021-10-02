
// CASS group help work together with the last .thendata to get the temp to dispaly. 

document.querySelector('button').addEventListener('click', advice)

function advice(){
    const url = `https://api.adviceslip.com/advice`
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
        })
        .then(data =>{
            document.querySelector('h3').innerText= data.slip.advice
    console.log(data.slip)
        
    const gifurl = `https://api.giphy.com/v1/gifs/search?api_key=6SZD7JEgPJpoKZbbJAtylZhgwsKfNAsw&q=${data.slip}`
    fetch (gifurl)
    .then(response => {
        console.log(response)
        return response.json()
        })
        .then(gifdata =>{ 
            document.querySelector('iframe').src= gifdata.data[0].embed_url})
        console.log(gifData.data[0].embed_url);
        })
    }
