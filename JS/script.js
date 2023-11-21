//User will enter a movie, get a blurb about movie from 1 api and additional info about film's director

//need event listener that runs user's input
document.querySelector('button').addEventListener('click', getMovie)

function getMovie() {
    let title = document.querySelector('input').value
    let movieURL = `https://www.omdbapi.com/?t=${title}&apikey=3942147d`
    fetch(movieURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#title').innerText = data.Title 
        document.querySelector('#plot').innerText = data.Plot
        document.querySelector('#director').innerText = data.Director
        //this info will be used for 2nd api
        let director = data.Director
        document.querySelector('h4').innerText = `Check out the latest news about ${director}`
        const newsURL = `https://newsapi.org/v2/everything?q=${director}&language=en&apiKey=7dbd214e569f402e957d4fed4d214eb2`
        fetch(newsURL)
        .then(res => res.json())
        .then(data => {
            //get query selector and put it to an empty string to refresh list of articles upon second fetch
            document.querySelector('.news').innerHTML = ''
            console.log(data)
            // document.querySelector('.news').innerText = `Check out the latest news about ${director}`
            //define what you want to show on DOM
                //since array index is showing here, do I need to loop through somehow to show atleast 5 on DOM?
            for (let i = 0; i < 5; i++) {
            let articleTitle = data.articles[i].title
            let articleContent = data.articles[i].content
            let articleAuthor = data.articles[i].author 
            let artSource = data.articles[i].url
            //make it appear on DOM
            let artDiv = document.createElement('div')
                artDiv.innerHTML = `
                    <h4 class="titleauthor">${articleTitle} by ${articleAuthor}</h4> 
                    <p class="content">${articleContent}</p>
                    <p class="source">${artSource}</p>` // how to make
                document.querySelector('.news').appendChild(artDiv)
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    })
    .catch(err => {  
        console.log(`error ${err}`)
    });
}


