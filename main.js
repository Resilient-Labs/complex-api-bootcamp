

document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {

  let character = document.querySelector('input').value
  let urlQuote = `https://api.gameofthronesquotes.xyz/v1/author/${character}/2`
  


  fetch(urlQuote) 
  .then(res => res.json()) // parse response as JSON 
  .then(dataQuote => { 
    console.log(dataQuote) 
    
    document.querySelector('.fullName').innerText = dataQuote[0].character.name
    document.querySelector('.quote').innerText = dataQuote[0].sentence

    let urlImage = 'https://thronesapi.com/api/v2/Characters'

     





    fetch(urlImage) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 

      
      if( dataQuote[0].character.slug === 'jon' ) {
        document.querySelector('img').src = data[2].imageUrl
       }
       else if( dataQuote[0].character.slug === 'sansa' ) {
        document.querySelector('img').src = data[4].imageUrl
       }
       else if( dataQuote[0].character.slug === 'ned' ) {
        document.querySelector('img').src = data[6].imageUrl
       }
       else if( dataQuote[0].character.slug === 'catelyn' ) {
        document.querySelector('img').src = data[10].imageUrl
       }
       else if( dataQuote[0].character.slug === 'jaime' ) {
        document.querySelector('img').src = data[8].imageUrl
       }
       else if( dataQuote[0].character.slug === 'tyrion' ) {
        document.querySelector('img').src = data[14].imageUrl
       }
       else if( dataQuote[0].character.slug === 'cersei' ) {
        document.querySelector('img').src = data[9].imageUrl
       }
       else if( dataQuote[0].character.slug === 'joffrey' ) {
        document.querySelector('img').src = data[13].imageUrl
       }
       else if( dataQuote[0].character.slug === 'daenerys' ) {
        document.querySelector('img').src = data[0].imageUrl
       }
       else if( dataQuote[0].character.slug === 'tywin' ) {
        document.querySelector('img').src = data[42].imageUrl
       }
       else if( dataQuote[0].character.slug === 'ramsay' ) {
        document.querySelector('img').src = data[35].imageUrl
       }
       else if( dataQuote[0].character.slug === 'arya' ) {
        document.querySelector('img').src = data[3].imageUrl
       }
       else if( dataQuote[0].character.slug === 'robert' ) {
        document.querySelector('img').src = data[7].imageUrl
       }
       else if( dataQuote[0].character.slug === 'samwell' ) {
        document.querySelector('img').src = data[1].imageUrl
       }
       else if( dataQuote[0].character.slug === 'varys' ) {
        document.querySelector('img').src = data[19].imageUrl
       }
       else if( dataQuote[0].character.slug === 'bran' ) {
        document.querySelector('img').src = data[5].imageUrl
       }
       else if( dataQuote[0].character.slug === 'brienne' ) {
        document.querySelector('img').src = data[23].imageUrl
       }
       else if( dataQuote[0].character.slug === 'baelish' ) {
        document.querySelector('img').src = data[16].imageUrl
       }
       else if( dataQuote[0].character.slug === 'tormund' ) {
        document.querySelector('img').src = data[44].imageUrl
       }
       else if( dataQuote[0].character.slug === 'melisandre' ) {
        document.querySelector('img').src = data[40].imageUrl
       }
       else if( dataQuote[0].character.slug === 'olenna' ) {
        document.querySelector('img').src = data[50].imageUrl
       }
       
       










    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });















  }) 
  .catch(err => { 
     // console.log(`error ${err}`) 
  })



}
















//'https://thronesapi.com/api/v2/Characters'
//'https://api.gameofthronesquotes.xyz/v1/characters'
 