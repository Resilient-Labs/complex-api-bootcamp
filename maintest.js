const yourkey = "eff1c224"
const nytKey = "HUvhkz1532sUysWLEheWl0OR87CqABMB"

var key_11mc = config.KEY_11mc;
var key_12mc = config.KEY_12mc;

const btn = document.querySelector("#submit")


// const btnNyt = document.querySelector("#nyt")
//
// btnNyt.addEventListener('click', function (){
//
//   //const apiImbdInput = response.Search[i].Title.value//change def to be title //will need forEach method
//   for(let i = 0; i < response.Search.length; i++)
//   fetchReviews(apiImbdInput)
// })//could be used to fetch more reviews and movies



btn.addEventListener('click', ()=>{

  const input = document.querySelector("input").value

  fetchMovies(input)
  // for(let i = 0; i < response.Search.length; i++){
  // const apiImbdInput = response.Search[i].Title.value
  // fetchReviews(apiImbdInput)
  // }

})


function fetchReviews(apiImbdInput){

  fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${key_11mc}&query=${apiImbdInput}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log("test: " +response)
        if (response["num_results"] == 0) {
          throw new Error("sorry, there are no results for your search")
        }else{
          //we need to create sections that equal the total number of movie results from our api
          // document.querySelector('#results').innerHTML = JSON.stringify(response)

          // document.createElement("li").appendChild(document.createElement("li"))


          // let newHtxt = document.createElement("ul")
          // //add li txt into ol tag
          // resultsNyt.appendChild(newHtxt)
          // //document.querySelector('#results').innerHTML = JSON.stringify(response)
          // for(let i = 0; i < response.results.length; i++){
          //
          //
          //   //create list for new movie result item
          //   let linkList = document.createElement("li")
          //   //add list to ol
          //   newHtxt.appendChild(linkList)
          //   //create h3 for url links
          //   let newH3 = document.createElement("H3")
          //
          //   //create new anchor tag for urls
          //   let newAnchor = document.createElement("a")
          //   //change anchor tag to text of url link
          //   newAnchor.innerHTML = response.results[i].link.url
          //   //change anchor tag to hyperlink text
          //   newAnchor.title = "Link to review"
          //   newAnchor.href = newAnchor.innerHTML
          //   //get H3 in section and then our section inside of results container
          //   linkList.appendChild(newH3)
          //   linkList.appendChild(newAnchor)
          //   resultsNyt.appendChild(newHtxt)
          //   // fetch reviews
          return response.json()
          }


      })
      .catch(err => {
          console.log(`error ${err}`)
          // console.log("sorry, there are no results for your search")
      });
}

 let page = 1

 let nextButton = document.querySelector('#nextButton')
nextButton.addEventListener('click', function (){
  for(let i = 1; i < response.totalResults; i++){
    page++
  }
})


function fetchMovies(input){

   let page = document.querySelector("#page").value
  console.log(page)//next goal would be to have the html clear after a new page value has been input

  fetch(`http://www.omdbapi.com/?apikey=${key_11mc}&s=${input}&page=${page}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)

        if (response["Response"] == "False") {
          throw new Error("sorry, there are no results for your search")
        }else{


          let newHtxt = document.createElement("ol")
          //add li txt into ol tag
          resultsImbd.appendChild(newHtxt)

          //we need to create sections that equal the total number of movie results from our api
          //document.querySelector('#results').innerHTML = JSON.stringify(response)
          for(let i = 0; i < response.Search.length; i++){
            //create li tag for each section to number the sections
            let movieList = document.createElement("li")
            newHtxt.appendChild(movieList)
            //create new section for movie
            let newSection = document.createElement("SECTION")
            movieList.appendChild(newSection)
            //create h3 for title
            let newH3 = document.createElement("H3")
            //create img tag to convert link to visual dom element
            let newImg = document.createElement("img")
            //change H3 to title of movie
            newH3.innerHTML = `Title -
            ${response.Search[i].Title}
            <br></br>
            Year -
            ${response.Search[i].Year}`

            newImg.src = response.Search[i].Poster

            let newHtxt2 = document.createElement('ul')

            // fetch reviews
             for(let i = 0; i < response.Search.length; i++){
              const apiImbdInput = response.Search[i].Title
              console.log("title: "+ response.Search[i].Title)
              fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${nytKey}&query=${apiImbdInput}`)
                  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
                  .then(response => {
                    console.log("test: " +response)
                    if (response["num_results"] == 0) {
                      throw new Error("sorry, there are no results for your search")
                    }else{
                        console.log(response.results[0].link.url)
                        let forLinklist = document.createElement('li')
                        forLinklist.innerHTML = response.results[0].link.url
                        newHtxt2.appendChild(forLinklist)
                      }
                  })
                  .catch(err => {
                      console.log(`error ${err}`)
                      // console.log("sorry, there are no results for your search")
                  });
                }

            //let forLinklist = document.createElement('li')
            //get H3 in section and then our section inside of results container
            newSection.appendChild(newH3)
            newSection.appendChild(newImg)
            newSection.appendChild(newHtxt2)
            //newHtxt2.appendChild(forLinklist)


          }
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
          // console.log(err)
      });
}

//new api key and test ??

// //delete pages ??
// if( currentPage !== page){
//   console.log('currentPage !== page')
//   while (newHtxt.children.length > 0){
//     let child = newHtxt.children[0]
//     newHtxt.removeChild(child);
//     console.log('hi')
//   }
//   // for(let i = 0; i < newHtxt.children.length; i++){
//   //   newHtxt.removeChild();
//   //
//   // }
// }
