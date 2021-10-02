document.querySelector('button').addEventListener('click', getInfo)




function getInfo (){
    let book = document.querySelector('input').value
    
    

    const url =`http://openlibrary.org/search.json?title=${book} `

    fetch(url) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data.url) 
        console.log(data)

       
        document.querySelector('.name').innerText = `Author's Name: ${data.docs[0].author_name[0]}`
        document.querySelector('.birthdate').innerText = `Title of Book: ${data.docs[0].title}`
        document.querySelector('.topwork').innerText = `The first sentence of the novel: ${data.docs[0].first_sentence[0]}`

        let author = data.docs[0].author_name[0]
        const url2 = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${author}&api-key=JsugZluow5yPMhbbdzOMuNwQFEadLAXv`
        fetch(url2) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data.url) 
        console.log(data)
        console.log(data.results[1].book_title)
        console.log(data.results[1].summary)
        if(data.results[1].summary === ""){
            document.querySelector('.summary').hidden = true
               
        }else {
            document.querySelector('.summary').hidden = false
        }
        document.querySelector('.booktitle').innerText = `A book you should read by the author: ${data.results[1].book_title}`
        document.querySelector('.summary').innerText = `A summary of ${data.results[1].book_title}: ${data.results[1].summary}`
        
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 

        const url3 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=909d4cbb7fc95f7f7e649b30d0a2b353&format=json&nojsoncallback=1&text=${author}&extras=url_o`
        fetch(url3)
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data)
        document.querySelector('img').src = data.photos.photo[0].url_o

        }) 

        })
       
       
       
       

      

}