//

const quoteUrl = "https://api.goprogram.ai/inspiration"

fetch(quoteUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector("h2").innerText = data.author
      document.querySelector("h3").innerText = `"${data.quote}"`

    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${data.author}&format=json&origin=*

`

    fetch(wikiUrl)
        .then(res => res.json()) // parse response as JSON
        .then(wikiData => {
          document.querySelector("p").innerText = wikiData.query.search[0].snippet
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
    })
    .catch(err => {
        console.log(`error ${err}`)
});
