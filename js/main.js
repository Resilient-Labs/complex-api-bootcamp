let url = `https://cors.bridged.cc/https://thronesapi.com/api/v2/Characters/${id}
`
let url2 = `https://www.anapioficeandfire.com/api/houses`

document.querySelector("button").addEventListener("click", findCharacter)

function findCharacter(){
  //get information from input -> turn name into corresponding ID use conditional?
  const userInput = document.querySelector("input").value
    if(userInput === data.[].firstName || userInput === data.[].lastName || data.[].fullName ){
      let id = data.[i].id
      
      //take the id put it in the URL and fetch that sketch
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        console.log(data);// structure: data[i].firstName | other relevant properties, lastName, fullName, imageUrl, title


      //placing data in the DOM
      document.querySelector(".name").innerText = data[].fullName
      document.querySelector(".title").innerText = data[].title
      document.querySelector("img").src = data[].imageUrl

      })
      .catch(err =>{
        console.log(`error ${err}`)
      })
    }

}



//
// fetch(url)
// .then(res => res.json())
// .then(data =>{
//   console.log(data);
// })
// .catch(err =>{
//   console.log(`error ${err}`)
// })
