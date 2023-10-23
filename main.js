//first API will generate random word
//second api will fetch that random word's definition
const listUl = document.querySelector('#list')
document.querySelector('button').addEventListener('click', randomWord)


function randomWord() {
    const randomWordUrl = 'https://random-word-api.vercel.app/api?words=1'
    fetch(randomWordUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            console.log(data["0"])

            let randomWord = data[0]

            document.querySelector('h2').innerText = randomWord



            const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`

            fetch(dictionaryUrl)
                .then(res => res.json())
                .then(wordInfo => {

                    // console.log(wordInfo)
                    console.log(wordInfo["0"].meanings["0"].definitions["0"])
                    console.log(wordInfo["0"].meanings["0"].definitions["0"].definition)
                    // console.log(wordInfo["0"].meanings["0"].definitions["1"].definition)
                    // console.log(wordInfo["0"].meanings["0"].definitions["2"].definition)



                    let definitionUno = document.querySelector('li')
                    definitionUno.classList.toggle('hidden')
                    definitionUno.innerText = wordInfo["0"].meanings["0"].definitions["0"].definition

                    // let definitionDos = document.createElement('li')
                    // definitionDos.appendChild(document.createTextNode(`${wordInfo["0"].meanings["0"].definitions["1"].definition}`))

                    // listUl.appendChild(definitionDos)

                    // let definitionTres = document.createElement('li')
                    // definitionTres.appendChild(document.createTextNode(`${wordInfo["0"].meanings["0"].definitions["2"].definition}`))

                    // listUl.appendChild(definitionTres)
                    // }

                })

        })

        .catch(err => {
            console.log(`err ${err}`)
        })

}