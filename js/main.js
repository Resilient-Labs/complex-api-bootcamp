//when user click on button, the browser will relay random word (using random-word-api) and random gif (using api.giphy)

document.querySelector('button').addEventListener('click', getWordPic)

function getWordPic() {
    //since 2 urls are being  used and instead of creating const for url like previous-- insert url right into fetch

    //targeting random word api
    fetch(`https://random-word-api.herokuapp.com/all`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            //create a variable for random word to appear
            let randomWord = Math.floor(Math.random() * data.length)
            //create a variable for randomword to be placed in the data array
            let getWord = data[randomWord]
            document.getElementById('word').innerHTML = getWord
            //console.log(getWord)

            //targeting random gif api by using fetch inside the same function
            //-->given that 'getWord was not define ourside the first fetch, second fetch must be inside the first fetch 
            //putting some restriction on the url by selecting gif in english and g rated for education purposes
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=SDChF1nSUpRSYkENPMhbmSlzjYC1oGc3&q=${getWord}&rating=G&lang=en`)
                .then(res => res.json())
                .then(data => {

                    //create a variable for gif the the data data from the url
                    let gif = data.data[0]

                    //creating a variable for any large size gif to be smaller
                    let largeImages = gif.images.downsized_large.url

                    document.getElementById('image').src = largeImages
                })
        })

}