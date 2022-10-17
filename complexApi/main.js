const url = "https://random-words-api.vercel.app/word"
const urlTwo = "https://api.dictionaryapi.dev/api/v2/entries/en/"


document.querySelector("button").addEventListener("click", myFacts);

function myFacts(){
fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)
console.log(data[0].word)
let randomWord = (data[0].word)
document.querySelector("h2").innerText = randomWord;





fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=d258e0b7-25a2-49b5-85be-767d70cd9be5`)
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data)
console.log(data[0].shortdef[0])



document.querySelector("p").innerText = data[0].shortdef[0];

})
.catch(err => {
    console.log(`error ${err}`)
    });

})
.catch(err => {
    console.log(`error ${err}`)
    });
}