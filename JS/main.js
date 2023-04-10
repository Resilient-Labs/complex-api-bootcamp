//making javascript where everytime you put in the name of an anime it will come up with a quote from a random character and also display the picture of that charecter.

//when button is pressed it will pull from the function
const btn = document.querySelector('button')

//the function for the anime qoutes
function getAnimeQuote(){
    let animeName = document.querySelector('input').value
    const url = (`https://animechan.vercel.app/api/random/anime?title=${animeName}`)
    fetch(url)
        .then(res => res.json())
        //parse response as JSON
        .then(data => {
            console.log(data)
            //shows the character on the DOM
            document.querySelector('h2').innerText = data.character
            //shows the quote on the DOM
            document.querySelector('h3').innerText = data.quote


            function getGif(){
                const character = document.querySelector('h2').innerText
                console.log(character)
                const url = (`https://api.giphy.com/v1/gifs/search?api_key=KBqwhbup5O9y6R0tHSJa6UaauaFfM0Zx&q=${character}&limit=2&offset=5&rating=pg-13&lang=en`)
                fetch(url)
                .then(res => res.json())
                .then(gif => {
                    console.log(gif)
    
                    document.querySelector('img').src = gif.data[0].images.fixed_height.url
        
                })
                .catch(err => {
                    console.log(`error ${err}`)
                    // document.querySelector('img').src = 'default-image.png'
                })
            }
            getGif()
        
        })
        .catch(err => {
            console.log(`error ${err}`)
            document.querySelector('h2').innerText = 'Error'
            document.querySelector('h3').innerText = 'Unable to fetch quote.'
        })
    }

btn.addEventListener('click', getAnimeQuote)