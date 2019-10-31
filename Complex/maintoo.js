
// food2fork
const apikey= '755cf35f62d8dc1fc1b58e4017f6402a'
// Edamam
// const apiKey='203269e5f76241de95c830b47c4ad198'
//  const id ='4da88101'
let btn = document.querySelector('button')
const result = document.querySelector('#result')


btn.addEventListener('click',()=>{

const recipe = document.querySelector('#recipe').value.toLowerCase()
fetch(`https://www.food2fork.com/api/search?key=${apikey}&q=${recipe}`)
  .then(res => res.json())

  .then(response =>{
    // console.log(response)
    const results = document.createTextNode(response.recipes[0].title)
    result.appendChild(results)
    let mood= response.recipes[0].title
fetch(`http://www.recipepuppy.com/api/?&q=rice`)
  .then(res => res.json())

  .then(response =>{
    console.log(response)
  })

.catch( err =>{
  console.log(`error ${err}`)
  alert('Sorry')


})
})
.catch( err => {
// console.log(`error ${err}`)
alert(err)

})
})
})


// https://www.themealdb.com/api/json/v1/search.php?s=${mood}

// btn.addEventListener('click',())
// const input = document.querySelector('input').value
//
//
//
// )
