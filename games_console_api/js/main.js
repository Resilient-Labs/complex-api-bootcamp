// api for games 
// api for discounts 
// user enters data such as games they are looking for 
// returns the game and discounts 

document.querySelector('button').addEventListener('click',games)

function games(){
 const selection = document.querySelector('input').value   
const url = `https://api.rawg.io/api/games?key=10e65335a29f4b4792bcc6fda8fd242e&dates=2000-09-01,2019-09-30&platforms=18,1,7&search=${selection}`

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data.results[0])
    document.querySelector('img').src = data.results[0].short_screenshots[1].image
})
.catch(error =>{
     console.log(`error:${error}`)
})
   
const url2 = `https://www.pricecharting.com/api/product?t=c0b53bce27c1bdab90b1605249e600dc43dfd1d5&q=${selection}`;
fetch(url2)
        .then(res => res.json())
        .then(data2=>{
         console.log(data2);  
         document.querySelector('h2').innerText =  data2['console-name']
        })
	
 .catch (error =>{
    console.error(error);
 }) 
}// first api


	
