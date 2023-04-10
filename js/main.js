document.querySelector('img').addEventListener('click', getDogFacts)
let btn = document.querySelector('img')
let h3 = document.querySelector('h3')
let iframe = document.querySelector ('iframe')

function getDogFacts(){
    h3.innerHTML = ''
    const urlFacts = "https://dogapi.dog/api/v2/facts?"

fetch(urlFacts)
    .then(res => res.json()) // parse response as JSON
    .then(dataFacts => {
        console.log(dataFacts)
    
        let dogFacts = dataFacts.data[0].attributes.body
        h3.innerText = dogFacts 

    const urlGiphy = "https://api.giphy.com/v1/gifs/search?api_key=JyxThoKSTkl0ZsqvTRMlnmSGsJN4KWyf&q=dog&limit=25&offset=0&rating=g&lang=en"


    fetch(urlGiphy) 
        .then(res => res.json()) // parse response as JSON 
        .then(dataGiphy => { 
        console.log(dataGiphy) 

        // for(let i = 0; i < dataGiphy.data.length; i++){
       
        // console.log(dogGiphy)
        // } 
           let dogGiphy = dataGiphy.data[Math.floor(Math.random()*25)].embed_url
        iframe.src = dogGiphy

    // .catch(err => { 
    //     console.log(`error ${err}`) 
    // });
})
    })

    .catch(err => { 
    console.log(`error ${err}`) 
});
}
