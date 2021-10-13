//function to grab the data
document.querySelector('button').addEventListener('click', getImage)

function getImage(){
    fetch(`https://random-word-form.herokuapp.com/random/animal`)
    .then (response => response.json()) 
    .then (data => { 
        console.log(data[0])
        document.querySelector('.animalName').innerHTML = data[0]
        //document.querySelector('#last').innerHTML = data.names[1]
        let random = data[0]
        console.log(random)

        let animalNameUrl = `https://api.unsplash.com/search/photos?query=${random}&client_id=`

        fetch(animalNameUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            document.querySelector('img').src = data.results[0]['urls'].raw
        })

    //DIRECTLY UNDERNEATH FUNCTION
    /*const animalUrl = `https://random-word-form.herokuapp.com/random/animal`
    let animalNameUrl = `https://api.unsplash.com/search/photos?page=1&query=${animal}`
    
    

        fetch(animalPicUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.urls.raw)
            document.querySelector('.animalPic').src = `${data.urls.small}`
          //  console.log(data.results[0].urls.raw)
            //document.querySelector('.landscapePic').data = data
      */            

});

};


