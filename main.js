let img = document.querySelector('img')
let age = document.querySelector('#age')
let gender = document.querySelector('#gender')
let happiness = document.querySelector('#happiness')
let btn = document.querySelector('button')

let url = `https://fakeface.rest/face/json`

btn.addEventListener('click', getRandomFace)

// Fake Face Generator - 1st API
function getRandomFace(){
    fetch(url)
    .then(res => res.json()) //get json
    .then(data => {
        console.log(data, 'Random Face')
        img.src = data.image_url
        getIdentity(data)

    })
}



// Get Face Token From Pic - 2nd API
function getIdentity(data){
    const apiKey = 'juv-Hwa0RWMBk5v7PHruUBJtS4BQSQUX';
    const apiSecret = 'Ea1XicA6wQ_TdNMT6PpAgPyNSr0Yv1K6';
    const imageUrl = data.image_url

    let formData = new FormData();
    formData.append('api_key', apiKey);
    formData.append('api_secret', apiSecret);
    formData.append('image_url', imageUrl);

    fetch('https://api-us.faceplusplus.com/facepp/v3/detect', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.faces[0].face_token, 'Face Token')
        let faceToken = data.faces[0].face_token
        analyzePic(faceToken)
        
      })
      .catch(error => console.error(error));
}



//Analyze Face Token - 3rd API
function analyzePic(faceToken){
    const apiKey = 'juv-Hwa0RWMBk5v7PHruUBJtS4BQSQUX';
    const apiSecret = 'Ea1XicA6wQ_TdNMT6PpAgPyNSr0Yv1K6';
    const returnAtrs= 'gender,age,emotion,beauty,facequality,skinstatus';

    let formData = new FormData();
    formData.append('api_key', apiKey);
    formData.append('api_secret', apiSecret);
    formData.append('return_attributes', returnAtrs);
    formData.append('face_tokens', faceToken);

    fetch("https://api-us.faceplusplus.com/facepp/v3/face/analyze", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'Results From Analysis')  
        age.innerText = `Age: ${data.faces[0].attributes.age.value}`
        gender.innerText = `Gender: ${data.faces[0].attributes.gender.value}`
        happiness.innerText = `Happiness: ${data.faces[0].attributes.emotion.happiness}`
        
      })
      .catch((error) => {
        // handle error
      });
}
//Get Random Name Based On Gender 4th API
