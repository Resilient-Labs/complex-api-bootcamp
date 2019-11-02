
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
      if( response.results[0].thumbnail !== '' ){
      document.querySelector('img').src = response.results[0].thumbnail
    }else {
      console.log(response.results[0].thumbnail)

      let zebra= response.results[0].ingredients
      let ingredient= Object.values(zebra)
      let ing= (ingredient.join('').split(","))


      for(const x of ing){
         let ol= document.querySelector('#list')
         let li= document.createElement('li')
         li.appendChild(document.createTextNode(x))
         ol.appendChild(li)
      }

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
