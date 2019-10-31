
const apikey= 'a12c3a3210a4ac5c7001420f998e410b'

let btn = document.querySelector('button')
const result = document.querySelector('#result')

btn.addEventListener('click',()=>{

  const recipe = document.querySelector('#recipe').value.toLowerCase()
  fetch(`https://www.food2fork.com/api/search?key=${apikey}&q=${recipe}`)
    .then(res => res.json())

    .then(response =>{

      const results =document.createTextNode(response.recipes[0].title)
      result.appendChild(results)
      let mood= response.recipes[0].title
  fetch(`http://www.recipepuppy.com/api/?&q=${mood} `)
    .then(res => res.json())

    .then(response =>{
      // const results =document.createTextNode(response.results)
      // result.appendChild(results)
      if('img'=== 0){
      document.querySelector('img').src = response.results[0].thumbnail
    }else{
      console.log(response.results[0].thumbnail)

      // console.log(response)
      // //
      // const results= document.createTextNode(response.results[0].ingredients`)
      // result.appendChild(results)
      let zebra= response.results[0].ingredients
      //
      let ingredient= Object.values(zebra)
      console.log(ingredient)
      let ing= (ingredient.join(''))
      console.log(ing)
      let joinning= ing.split(",")
      console.log(joinning)

      for(const x of joinning){
         let ol= document.querySelector('#list')
         let li= document.createElement('li')
         li.appendChild(document.createTextNode(x))
         ol.appendChild(li)
      }
      // for(let ingredients)

       // zebra.forEach((el) =>{
       //  let ol= document.querySelector('#list')
       //  let li= document.createElement('li')
       //  li.textContent = el;
       //  ol.appendChild(li)
      }
    })
    })

    })
    .catch(err =>{
      alert(err)
    })
    .catch(err =>{
      alert('sorry')
    })
