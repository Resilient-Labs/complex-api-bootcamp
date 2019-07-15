document.querySelector('button').addEventListener("click", function() {
  let inputValue = document.querySelector('input').value
  inputValue = inputValue.split(' ').join('-')

  //FETCH 1 GETS SHOW INFORMATION FROM INPUT VALUE
  fetch("https://api.tvmaze.com/search/shows?q="+`${inputValue}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

      let poster= response[0].show.image.medium
      let name= response[0].show.name
      let network= response[0].show.network.name
      let genres= response[0].show.genres
      let rating= response[0].show.rating.average
      let summary= response[0].show.summary
      let id=response[0].show.id

      document.querySelector('.poster').src= poster
      document.querySelector('.name').innerHTML= name
      document.querySelector('.network').innerHTML= network
      for (let i=0;i<genres.length;i++){
        document.querySelector('.genres').innerHTML= genres
      } //for shows with multiple genres
      if (rating===null){
        document.querySelector('.rating').innerHTML= "Rating: n/a"
      }else{
        document.querySelector('.rating').innerHTML= "Rating: " + rating
      }
      document.querySelector('.summary').innerHTML="Summary: " + summary

      //GET SHOW ID TO INPUT INTO FETCH 2 AND GETS CHARACTERS FROM SHOW
      var person= ""
      var character=""
      const characters=[]
      const charNames=[]
      fetch("https://api.tvmaze.com/shows/"+`${id}`+"/cast")
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
          for (let count=0;count<response.length;count++){
            person = response[count].person.name
            character = response[count].character.name
            charNames.push(person + " as " + character)
            characters.push(character)
          }

          document.querySelector('h3').innerHTML= "Cast:"
          var list= document.querySelector('ul')
          charNames.forEach((display)=> {
            let item=document.createElement('li')
            item.innerText=display
            list.appendChild(item)
          })//display "person as character" in DOM

            //FETCH 3 TO GET GIFS OF THEM (SEARCH BY CHARACTER NAME ON SHOW)

            characters.forEach((char)=> {
              if (char.length===1){
                char=char
              } else{
                char = char.split(' ').join('+')
              }//full names joined by + sign in fetch 3 link
              fetch("https://api.giphy.com/v1/gifs/search?api_key=k46lpa8QXu73qx6IYMqAVaNDOzw72Wlo&q="+`${char}`+"&limit=1&offset=0&rating=PG-13&lang=en")
                .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
                .then(response => {
                    let section= document.querySelector('.characters')
                    let div= document.createElement('div')
                    let img= document.createElement('img')
                    img.src = response.data[0].images.downsized.url
                    div.appendChild(img)
                    section.appendChild(div)
                })
                .catch(err => {
                  console.log(`error ${err}`)
                  alert("sorry, there are no results for your search")
                });
            })
        })
        .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
        });
  })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
});
