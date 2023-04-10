function picBook() {
    let picFind = document.querySelector('input').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${picFind}`;
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data[0].meanings[0].definitions[0].definition);
        console.log(data[0].word)
        document.querySelector('h3').innerText = data[0].word
        document.querySelector('p').innerText = data[0].meanings[0].definitions[0].definition
        
       

        
        const secondUrl = `https://api.unsplash.com/search/photos/?page=1&query=${data[0].word}.&client_id=GsTYXyEKLSPqtxZHmjmtLtSc4Gr9-6Txtu35Ox_C66o`
        console.log(secondUrl)
        fetch(secondUrl)
        .then(response => response.json())
        .then(data2 => {
        console.log(data2);
        console.log(data2.results[0].urls.regular)
        document.querySelector('img').src = data2.results[0].urls.regular
    });
})
}
document.querySelector('button').addEventListener('click', picBook);