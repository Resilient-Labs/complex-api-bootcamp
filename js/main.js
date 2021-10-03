document.querySelector('button').addEventListener('click', getDish) 

function getDish(){
    const quoteApi = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    console.log(quoteApi)
    fetch(quoteApi)
        .then(response => response.json())
        
        .then(data => {
        console.log(data)
        // document.querySelector('img').src = data.image
        document.querySelector('.quote').innerHTML = data[0].quote
        document.querySelector('.character').innerHTML = '- ' + data[0].author
        
        const character = data[0].author
        const giphApi = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}=${character}&limit=5&offset=0&rating=G&lang=en`
        fetch(giphApi)
            .then(response => response.json())
            
            .then(giphData => {
            console.log(giphData)
            
            let random = Math.ceil(Math.random()*5);
            function getRandom(){
                if(random === 1){
                    random = giphData.data[0].images.downsized.url
                    
                }
                else if(random === 2){
                    random = giphData.data[1].images.downsized.url
                    
                }
                else if(random === 3){
                    random = giphData.data[2].images.downsized.url
                    
                }
                else if(random === 4){
                    random = giphData.data[3].images.downsized.url
                
                }
                else if(random === 5){
                    random = giphData.data[4].images.downsized.url
                
                }
                return random
            }
            getRandom()
            document.querySelector('img').src = random
            })
            
            
            .catch(error => {
            console.log(`Error ${error}`)
            })
        
        
        
        .catch(error => {
        console.log(`Error ${error}`)
        })
        })
        
        
        .catch(error => {
        console.log(`Error ${error}`)
        })
}

// ZXXFJM7EB927