document.querySelector('button').addEventListener('click', generate)
let searchInput = document.querySelector('input')
let select = document.querySelector('select')

function generate() {
    const url = (`https://www.dictionaryapi.com/api/v3/references/spanish/json/${searchInput.value}?key=redacted`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let word = data.find(w => w.fl.includes(select.value))
            //find is going through the array and putting it into 'w' and if its true
            //then it'll return the element of word in order to filter+closely match options
            document.querySelector('#translation').innerText = 'Translation:' + ' ' + (word.shortdef[0])
            getImage(word)
        })
        .catch(err => {
            alert("Error - couldn't find results, sorry!")
        })
}

function getImage(word) {
    let imageUrl = (`https://api.unsplash.com/search/photos/?query=${word.shortdef[0]}&client_id=RQf2Q1FonDZkdjLWZ6-rOnE8iADraDdFKTNCZSWLntQ`)
    fetch(imageUrl)
        .then(res => res.json())
        .then(data => {
            document.querySelector('#description').innerText = "Image description:" + " " + data.results[0].alt_description
            document.querySelector('#imageResult').src = data.results[0].urls.regular
        })
}
