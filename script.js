document.querySelector('button').addEventListener('click', getColor)

function getColor(){
    let colorVal = document.querySelector('input').value
    let url = `https://www.thecolorapi.com/scheme?hex=${colorVal}&mode=analogic`

fetch(url)
.then(res => res.json())
.then(color => {
    console.log(color)
    document.querySelector('img').src = color.image.named
    document.querySelector('h3').innerText = color.seed.name.value
let colorName = color.seed.name.value

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${colorName}`)
.then(response => response.json())
.then(define => {
    // console.log(synonym.definition)
    console.log(define)
    document.querySelector('h4').innerText = define[0].meanings[0].partOfSpeech
    document.querySelector('h5').innerText = define[0].meanings[0].definitions[0].definition
    
})
.catch(err => {
    console.log(`error ${err}`)
});
})
}




// this is the original synonym
// let colorName = color.seed.name.value
// fetch('https://www.stands4.com/services/v2/syno.php?uid=1001&tokenid=tk324324&word=${colorName}&format=json')
// .then(res => res.json())
// .then(synonym =>{
//     document.querySelector('h4').innerText = synonym.description
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });
// })
// }


// document.querySelector('button').addEventListener('click', getColor)

// function getColor(){
//     let colorVal = document.querySelector('input').value
//     let url = `https://www.thecolorapi.com/scheme?hex=${colorVal}`

// fetch(url)
// .then(res => res.json())
// .then(color => {
//     console.log(color.seed.name.value)
//     document.querySelector('img').src = color.image.named
//     document.querySelector('h3').innerText = color.seed.name.value
// let colorName = color.seed.name.value
// let url2 = 'https://wordsapiv1.p.rapidapi.com/words/${colorName}/definitions';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
//         'X-RapidAPI-Key': '33b8442f0amsh8a1d74649b4471bp13e100jsne2ea3d6922c8'
//     }
// };

// fetch(url2, options)
// .then(res => res.json())
// .then(synonym =>{
//     document.querySelector('h4').innerText = synonym.description
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });
// })
// }

// document.querySelector('button').addEventListener('click', getColor)

// function getColor(){
//     let colorVal = document.querySelector('input').value
//     let url = `https://www.thecolorapi.com/scheme?hex=${colorVal}`

// //add &date to set date parameters 
// fetch(url)
// .then(res => res.json())
// .then(color => {
//         console.log(color)
//         document.querySelector('img').src = color.image.named
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });
// }

// let url2 = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${colorName}`;

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
// 		'X-RapidAPI-Key': '33b8442f0amsh8a1d74649b4471bp13e100jsne2ea3d6922c8'
//     }
// };

// fetch(url2, options)