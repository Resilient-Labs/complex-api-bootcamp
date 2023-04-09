const giphyKey = 'l3TMl9kbguNhwxSZGBE1fExtg8hm2Irx'
document.querySelector('button').addEventListener('click', getStarted)
function getStarted(){
    document.querySelector('img').src = ''
    document.querySelector('ul').innerHTML = ''
    fetchMemes()
}
function fetchMemes(){
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data =>{
            let randomNum = Math.round(Math.random()*(100-0)+0)
            let randomMeme = data.data.memes[randomNum].name
            document.querySelector('img').src = `${data.data.memes[randomNum].url}`
            document.querySelector('h2').innerText = `${randomMeme}`
            getGif(randomMeme)
        })
    }
function getGif(randomMeme){
    console.log(randomMeme)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=l3TMl9kbguNhwxSZGBE1fExtg8hm2Irx&q=${randomMeme}&limit=25&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(resData =>{
        resData.data.forEach((gif) =>{
            let html =`
            <li>
                <img src="${gif.images.downsized_large.url}">
            </li>
            `
            document.querySelector('ul').innerHTML += html
        })
    })
}