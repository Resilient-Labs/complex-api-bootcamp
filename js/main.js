




document.querySelector('button').addEventListener('click', getTranslation)





function getTranslation() {


    const inputPhrase = document.querySelector('#translateBox').value
    const partOfSpeechWord = document.querySelector('#partOfSpeech').value

    //Use this for the user entering a city
    fetch(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${inputPhrase}?key=006d0a7f-292c-4f09-b895-7fbfc8351439`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data[0].shortdef[0])


            let word = data.find(word => word.fl.includes(partOfSpeechWord)) //<---- Rio helped with this one. 
            //i understand the syntax but im still developing the intuition of when to use techniques like this.

            document.querySelector('#display').innerText = word.shortdef[0]
            //getPicture(word.shortdef[0])




            fetch(`https://api.unsplash.com/search/photos/?query=${word.shortdef[0]}&client_id=1c0bz1D1Tq7IQ1WWwnFuQvMAuTgOYCr0vFhUtrzRTXk`)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    //console.log(data)
                    console.log(data)

                    document.querySelector('img').src = data.results[0].urls.regular
                })
                .catch(err => {

                });




        })
        .catch(err => {
            console.log(`error ${err}`)

        });




}

function getPicture() {

    fetch(`https://api.unsplash.com/photos/?query=${word}&client_id=1c0bz1D1Tq7IQ1WWwnFuQvMAuTgOYCr0vFhUtrzRTXk`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data["main"])
            console.log(data["main"].temp)



        })
        .catch(err => {
            console.log(`error ${err}`)

        });

}


