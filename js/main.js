// waits for button click to start randomizer
document.querySelector('button').addEventListener('click', getCharacterAndAge)

function getCharacterAndAge(){
    // gets random # for the Star Wars URL
    let num = Math.ceil(Math.random() * 82)

    const url = `https://swapi.dev/api/people/${num}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // inputs name on site and gets the first name for Agify
            document.querySelector('#name').innerHTML = data.name
            let name = data.name
            let firstName = name.split(" ")[0]
            console.log(data)

            // inputs first name to agify, gets random age
            const url2 = `https://api.agify.io?name=${firstName}`
            fetch(url2)
                .then(res2 => res2.json())
                .then(data2 => {
                    document.querySelector('#age').innerHTML = data2.age
                    console.log(data2.age)
                })
                .catch(err2 => console.log(err2))
        })
        .catch(err => console.log(err))
}

