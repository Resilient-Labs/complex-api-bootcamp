
document.querySelector('button').addEventListener('click', randomNum)
function randomNum() {
    const val = document.querySelector('input').value
    const url = `http://openlibrary.org/search.json?q=${val}`
   fetch(url)
    .then(res => res.json())
    .then(data => {
        // let url2 = ``
        console.log(data.docs[0])
        let url2 = `http://openlibrary.org/search.json?author=${data.docs[0].author}`
        fetch(url2)
        .then(res => res.json())
        .then(data2 => {
            document.querySelector('h2').innerHTML = `Popular Book: ${data.docs[0].title}. Author: ${data.docs[0].author_name}`
            document.querySelector('h3').innerHTML = `Another Recommendation: ${data2.docs[1].title}`
            console.log(data2)
        })
    })
    .catch(err => {
        console.log(`error ${res.error}`)
    })

}

