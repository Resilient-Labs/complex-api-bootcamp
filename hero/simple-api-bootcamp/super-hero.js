document.querySelector('button').addEventListener('click', pop)

function pop(){
    let ant = document.querySelector('input').value
    console.log(ant)
    const url = `https://superheroapi.com/api.php/482975827217387/search/${ant}}`
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        // console.log(data)
        console.log(data)
        document.querySelector('h2').innerText = data.results[1].biography.publisher
        document.querySelector('h3').innerText = data.results[1].powerstats.speed
        document.querySelector('img').src = data.results[1].image.url

        let poop = data.results[1].biography.publisher
        fetch(`http://www.omdbapi.com/?apikey=92e36a7b&t${poop}`)
        //  console.log(word)
         .then(res => res.json()) 
         .then(data => {
             console.log(word)   
             console.log(data)
             document.querySelector('p').innerText = data.Title
             // document.querySelector('h3').innerText = data.results[1].powerstats.speed
             // document.querySelector('img').src = data.results[1].image.url
         })
       
    })

    .catch(err => {
        console.log('error ${err}')
        
    });
    
} 