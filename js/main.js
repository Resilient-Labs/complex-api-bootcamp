document.querySelector('button').addEventListener('click',getQuote)

function getQuote() {
     let name = document.querySelector('input').value
    fetch(`https://api.gameofthronesquotes.xyz/v1/character/${name}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    let fullName = data[0].name
    let houseName = data[0].house.name
    let quote = data[0].quotes
    document.querySelector('#name').innerText = fullName
    document.querySelector('#house').innerText = houseName
    document.querySelector('h3').innerText = quote
        for(let i=0; i < 26; i++){
         fetch(`https://api.nationalize.io?name=${name}`)
         .then(res => res.json())
           .then(data => {
           console.log(data)

             let country = data.country[i].country_id
            document.querySelector('#country').innerText = country
            console.log(country)
            
        
    })
    .catch(err => { 
        console.log(`error ${err}`)
    })
        
    }
    
    })
    .catch(err => { 
        console.log(`error ${err}`)
    })
    }

//code for cocktails 

// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//             .then(res => res.json())
//             .then(data => {
//             console.log(data)
//              document.querySelector('h2').innerText = data.drinks[0].strDrink
//              document.querySelector('img').src = data.drinks[0].strDrinkThumb
//         let drink = data.drinks[0].strDrink
//         console.log(drink)
//         })
//         .catch(err => { 
//             console.log(`error ${err}`)
//         })