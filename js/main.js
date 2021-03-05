// Access-Control-Allow-Origin: https://javascript.info

/********
Display weather
*********/
const key1 = config.API_KEY1
const key2 = config.API_KEY2
const urlNews = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key1}`
const urlBooks = `https://www.googleapis.com/books/v1/volumes?key=${key2}&filter=free-ebooks&maxResults=3&q=`

//Input Constants
const category = document.querySelector('#category')

//reponse Constants
const responseHeader = document.querySelector('#responseHeader')
const articles = document.querySelector('#articles')

document.querySelector('button').addEventListener('click', clicky)

function clicky() {
  articles.innerHTML = ''
  fetch(urlNews)
    .then(res => res.json())
    // parse response as JSON
    .then(data => {
      console.log(data)

        //limiting to account for async
        console.log(data)
        let randomIndex = Math.floor(Math.random() * Math.floor(data.results.length))
        console.log(randomIndex)
        let item = data.results[randomIndex]
        console.log('****News Item:***')
        console.log(item);
        let url = document.createElement('a')
        url.href = item.url
        let title = document.createElement('h3')
        title.innerText = item.title
        url.appendChild(title)

        let author = document.createElement('h4')
        author.innerText = item.byline === null ? 'No Author' : `${item.byline}`
        let description = document.createElement('p')
        description.innerText = item.abstract


        let li = document.createElement('li')

        //Google Book Stuff Here
        let searchTerms = item.des_facet[0]
        for (var i = 1; i < 4; i++) {
          searchTerms+= `+${item.des_facet[i]}`
        }


        // item.des_facet.forEach((item, i) => {
        //   searchTerms += `+${item}`
        // });
        console.log('****searchTerms:***')
        console.log(searchTerms)

        let booksHeader = document.createElement('h5')
        let ul = document.createElement('ul')


        console.log(`****Searching for Related Books for ${item.title}...***`)

        fetch(urlBooks+searchTerms)
          .then(res => res.json())
          // parse response as JSON
          .then(data2 => {
            // console.log(data2)
            console.log(data2.items)
            if(data2.items){
              booksHeader.innerText = 'Related Books'
              console.log('related Books')
              data2.items.forEach((item, i) => {
                let bookLink = document.createElement('a')
                bookLink.href = item.volumeInfo.canonicalVolumeLink
                let bookTitle = document.createElement('h6')
                bookTitle.innerText = item.volumeInfo.title

                console.log(item.volumeInfo.title)

                let bookAuthor = document.createElement('p')
                //if authors exist
                if (item.volumeInfo.authors){
                  bookAuthor.innerText = `Author(s): `
                  item.volumeInfo.authors.forEach((authors, i) => {
                    bookAuthor.innerText += `${authors}, `
                  });
                } else {
                  bookAuthor.innerText = 'No Author'
                }


                let liBook = document.createElement('li')

                bookLink.appendChild(bookTitle)
                liBook.appendChild(bookLink)
                liBook.appendChild(bookAuthor)
                ul.appendChild(liBook)

              });

            } else {
              booksHeader.innerText = 'No Related Books Found'
            }
          })
          .catch(err => {
            console.log(`error ${err}`)
          });
        //Append to DOM
        li.appendChild(url)
        li.appendChild(author)
        li.appendChild(description)
        li.appendChild(booksHeader)
        li.appendChild(ul)
        articles.appendChild(li)

      // data.results.forEach((item, i) => {
      //
      // });


    })
    .catch(err => {
      console.log(`error ${err}`)
    });


}






// working Book fetch
//
// fetch(urlBooks)
//         .then(res => res.json())
//         // parse response as JSON
//         .then(data2 => {
//           console.log(data2)
//         })
//         .catch(err => {
//           console.log(`error ${err}`)
//         });
