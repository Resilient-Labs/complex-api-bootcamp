//The user will enter a word, the APi will search 
//the ART API data base for matching key words & use those matching keywords to search a second API for images and display an image associated with those words

//ALT API: https://metmuseum.github.io 


document.querySelector('button').addEventListener('click',getArt)


function getArt(){
  let artVibes = document.querySelector('input').value

  // let imageId= `https://www.artic.edu/iiif/2/images/{id}`

  //url 2
  
  let url = `https://api.artic.edu/api/v1/artworks/search?q=${artVibes}&[is_public_domain]=true&fields=id,title,image_id`
  
 

// let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?&q=${artVibes}&hasImages`
  
// Api access key:	 	4f61bc3ca9e84347
// Api secret key:	 	aaf2d2d87ffc884f

//** let url = `https://www.wikiart.org/en/api/2/PaintingSearch?term=${artVibes}&imageFormat=“Large”`


// let url = `https://www.wikiart.org/en/Api/3/login?accessCode=[4f61bc3ca9e84347]&secretCode=[aaf2d2d87ffc884f]${artVibes}`
  
// let url = `https://www.artic.edu/iiif/2/?q=${artVibes}/full/843,/0/default.jpg`




  //auth request URL: https://www.deviantart.com/oauth2/authorize 
  // access token: https://www.deviantart.com/oauth2/token 
  //client ID: 19600 
  //key=da273e0fdefd26973b31c7a7f655177e

fetch(url)
//res= result ---> parse it into JSON syntax (parse response as JSON)
.then(res => res.json())
// data ---> pass the data retrieved into the function 
.then(data => {

  //  console.log(data)
  // document.querySelector('h2').innerText=
  // document.querySelector('img').src= 
  // document.querySelector('h3').innerText =

  //  console.log(data.drinks[0])
  //  document.querySelector('p').innerText=data

  //* let imageId = data.data[0].image_id


  // console.log(imageId)

  //* let url2 =`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
  
  //  console.log(url2)

  let imageId = data.data[0].image_id
  let url2 =`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg` 

  fetch(url2)
  
  // .then(res => res.json())

  .then(data => {
  
    console.log(data)
    console.log(imageId)
    console.log(url2)

    document.querySelector('img').src= url2

  })


})

.catch(err =>{
  console.log(`error ${err}`)
})
}