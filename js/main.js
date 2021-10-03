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

        let animalNameUrl = `https://api.unsplash.com/search/photos?query=${random}&client_id=Reuu1lyPSuWjgqTznzVAdoHULIOEeZbvN1XLiPXiWwg`

        fetch(animalNameUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            document.querySelector('.animalPic').src = data.results[0]['urls'].small
        })

    

});

};

// Reuu1lyPSuWjgqTznzVAdoHULIOEeZbvN1XLiPXiWwg

/*Contributors:

Miriam
Alexa
Roxana
David
Shannon
*/
