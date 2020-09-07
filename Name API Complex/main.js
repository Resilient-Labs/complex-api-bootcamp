//You press the button andyou run a function
document.getElementById('randomName').onclick = getRandomName

function getRandomName (){ //function declaration
  fetch('https://www.behindthename.com/api/random.json?usage=ita&gender=f&key=re686498655') //first API
    .then (response => response.json()) //convert to JSON
    .then (data => { //Handle the data
      console.log(data);
      document.getElementById('name').innerHTML = data.names[0]
      document.getElementById('last').innerHTML = data.names[1]
      let nameAnswer = data.names[0]
      let lastAnswer= data.names[1]
      document.getElementById('ava').src = `https://ui-avatars.com/api/?name=${nameAnswer}+${lastAnswer}` //Second api. Dependent on the first API
  }//closes the data w/ arrow bracket
  )// closes the .then parameter

} //closes getRandomName
