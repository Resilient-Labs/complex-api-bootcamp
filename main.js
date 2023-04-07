let randomCountry

document.querySelector('button').addEventListener('click', look)

function look(){

fetch(`https://restcountries.com/v2/all`)
.then(res =>res.json()).then(data => {
   let lisOfCountries= []
   console.log(data)
  
   data.forEach((element) => {
     document.querySelector('#result').innerHTML =
     ` <h1>${element.name}</h1>`;
    lisOfCountries.push(element.alpha2Code)

   });
   
    randomCountry= lisOfCountries[Math.floor(Math.random()*lisOfCountries.length)]
  
    document.querySelector('#result').innerHTML =
    ` <h1>${randomCountry}</h1>`;
    console.log()
    
fetch(`https://date.nager.at/api/v3/CountryInfo/${randomCountry} `)
.then(res =>res.json()).then(data => {
   console.log(data)
   document.querySelector("#result2").innerHTML= 
   `<h1> Official Country Name: ${data.officialName} </h1>
   <h1> Region Name: ${data.region} </h1>`
})
.catch(err =>{
    console.log(`error ${err}`)
});

})
.catch(err =>{
    console.log(`error ${err}`)
});
}





