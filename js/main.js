document.querySelector('#submit').addEventListener('click', runTheCode)

function runTheCode() {
  let searchKeyword = document.querySelector('input').value
  let objectIdUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?tags=true&q=${searchKeyword}`

  fetch(objectIdUrl)
    .then(res => res.json()) 
    .then(idData => {
      let artworkId = idData.objectIDs[0]
      let artworkUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`

      fetch(artworkUrl)
        .then(res => res.json()) 
        .then(artworkData => {
          document.querySelector('#artist').innerText = artworkData.artistDisplayName
          document.querySelector('img').src = artworkData.primaryImage

          let searchName = artworkData.artistDisplayName.replaceAll(' ', '+')
          let urlPageId = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchName}`

          fetch(urlPageId)
            .then(res => res.json()) 
            .then(pageIdData => {
              let bioPageId = pageIdData.query.search[0].pageid

              let urlBio = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&pageids=${bioPageId}`

              fetch(urlBio)
                .then(res => res.json()) 
                .then(bioData => {
                  document.querySelector('#bio').innerText = bioData.query.pages[bioPageId].extract
                })
                .catch(err => {
                  console.log(`error ${err}`)
                });
            })
            .catch(err => {
              console.log(`error ${err}`)
            });

        })
        .catch(err => {
          console.log(`error ${err}`)
        });
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

/*
source for the &origin=* parameter:
https://stackoverflow.com/questions/23952045/wikipedia-api-cross-origin-requests
*/