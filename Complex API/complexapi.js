// Goal: Use data returned from one api to make a request to another api and display the data returned

document.querySelector('#button').addEventListener('click', getDogAndQuote)
// let dogFacts =`https://randomfox.ca/floof/`

function getDogAndQuote(){

const searchMe = document.querySelector('input').value
let dogUrl = 'https://dog.ceo/api/breeds/image/random'
    fetch(dogUrl)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('#randomDog').src = data.message
let randomHistory =`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchMe}&format=json&page=5`
    fetch(randomHistory)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    let articleTitle = data.items[0].title
    let articleEssay = data.items[0].essay[0]
    let articleCounty = data.items[0].county[0]
    let articleCity = data.items[0].city[0]
    let articlePlace = data.items[0].place[0]
    let articleState = data.items[0].state[0]
    let articleSubject = data.items[0].subject[0]
    let articleNote = data.items[0].note[0]
    let articleStartYear = data.items[0].start_year
    let articleEndYear = data.items[0].end_year
    let articleFreq = data.items[0].frequency
    let articlePlaceOfPub = data.items[0].place_of_publication
    let articleList = `Title: ${articleTitle}\n Place of Publication: ${articlePlaceOfPub}\n Essay: ${articleEssay}\n Start Year: ${articleStartYear}\n End Year: ${articleEndYear}\n County: ${articleCounty}\n Subject: ${articleSubject}\n City: ${articleCity}\n State: ${articleState}\n Place: ${articlePlace}\n Frequency: ${articleFreq}\n Note: ${articleNote}`
    document.querySelector('#historyArticle').innerText = articleList
    })
    })
}

