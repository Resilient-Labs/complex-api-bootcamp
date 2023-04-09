
function getWord(){
let wordM = document.querySelector('#word').value // create an input who is gonna go into the fetch looking for that word and give it data 

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordM}`
fetch(url)
    .then(res => res.json())
    .then(data => {

       document.querySelector('#wordOne').innerText = `Word: ${data[0].word}  ` //gives data word
        document.querySelector('#mean').innerText = `Means: ${data[0].meanings[0].definitions[0].definition}` //gives data definitions
       document.querySelector('a').href = data[0].sourceUrls[0] // makes url show for more info
       
        const url = `https://api.mymemory.translated.net/get?q=${wordM}&langpair=en|es`// tranlator wordM is gonna be in english to spanish
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
               document.querySelector('#esp').innerText = ` Spanish: ${data.responseData.translatedText}` // translate the word to spanish

            })
            .catch(err => {
                console.log(`error ${err}`)
            })
        
        }
    )}
    document.querySelector('button').addEventListener('click', getWord)
    
    
   //valery help me to figure to show the url in the click more
          
//document.querySelector('button').addEventListener('click', getWord)
          
            
    
    
       // getWord()