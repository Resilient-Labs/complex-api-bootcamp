// get button
const btn = document.querySelector('#btnSearch')
// add event listener
btn.addEventListener('click', (e)=>{
  // prevent default of input from refreshing
  e.preventDefault();
  // get input value
  const yodaInput = document.querySelector('#yodaInput').value
  // set const for API
  const YodaTranslation = `https://api.funtranslations.com/translate/yoda.json?text=${yodaInput}`
  // run api via fetch
  fetch(YodaTranslation)
  // return promise in an object
    .then(res => res.json())
    // take object and run this funtion
    .then(response =>{
      // grab the translated text content
      const translatedContent = response.contents.translated
      // create a text node to put the text content into
      const translatedMessage = document.createTextNode(translatedContent)
      // append the text node to the span in HTML
      // translateOutput.appendChild(translatedMessage)
      translateOutput.textContent = translatedContent;
      // let apiKey = "E3fj35dAgTLDkWaHjeD69r1rvJcIHaVx";
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=E3fj35dAgTLDkWaHjeD69r1rvJcIHaVx&q=${translatedContent}%20yoda&limit=25&offset=0&rating=G&lang=en`)
        // return promise in an object
        .then(res => res.json())
        // take object and run this funtion
        .then(response =>{
          // hold space for img tag
          let img = document.querySelector('#yodaImage')
          //create img element
          // let image = document.createElement('img')
          //give image the source of data in object
          img.src = response.data[0].images.downsized.url
          //append image to held image space
          // imgSpace.appendChild(image)

        })
        //if there is an error, log this function
        .catch(err=>{
          //console log error message
          console.log(`err ${err}`)
          //alert user that something has gone wrong
        })

    })
    //if there is an error, log this function
    .catch(err => {
      //console log error message
      console.log(`error ${err}`)
      //alert user that something has gone wrong
    })
})
