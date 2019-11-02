// gif ComplexAPI1

let key="lUp1kyDaobvnVmKoggdx9CtWbInPTviG"
let result=document.querySelector('#result')
const button=document.querySelector("#button")

function secondAPI(countryName){
  // const input=document.querySelector("#input").value
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${countryName}`)
  .then(res =>res.json())
    .then(response =>{
      for(let i=1;i<=response.data.length;i++){
        document.querySelector('img').src=response.data[i].images.original.url
      }
      console.log(response.data.length);
      // let img=document.createTextNode(response.data[0].images.original.url)




    })

}


function firstAPI(){
  let input=document.querySelector('#input').value.toUpperCase()
fetch(`https://www.travel-advisory.info/api?`)
.then(res => res.json())
.then(response =>{
  console.log(response);
let firstInput=response.data[input].name
secondAPI(firstInput)
// let mess=document.createTextNode(response.data.EG.advisory.score)
// result.appendChild(mess)
})
.catch(err=>{
  alert("Sorry, no giphy present with current country code")
})
}

button.addEventListener('click',()=>{
  firstAPI()
  secondAPI()

})
