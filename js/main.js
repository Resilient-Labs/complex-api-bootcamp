document.querySelector('button').addEventListener('click', getTranslation)


//create a function that will produce the translation
function getTranslation(){
    const url =  'https://southparkquotes.onrender.com/v1/quotes' //url for southpark api
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
         document.querySelector('#translation1').innerText = `South Park: " ${data[0].quote}"`
        const quote = data[0].quote


        const apiTwo = `https://api.funtranslations.com/translate/valspeak.json?text=${quote}` //url for translation api
        
         fetch(apiTwo)
        .then(res => res.json()) // parse response as JSON
        .then(valley => {
             console.log(valley)
            document.querySelector('#translation2').innerText = `Valley Girl: "${valley.contents.translated}"`
            let msg = new SpeechSynthesisUtterance(valley.contents.translated);
            window.speechSynthesis.speak(msg);
     })


})

    .catch(err => {
        console.log(`error ${err}`)
});

}
