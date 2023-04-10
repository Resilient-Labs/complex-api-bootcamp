  const button = document.querySelector('button').addEventListener('click',checkComapnion)
  let Moves = document.querySelector('#moves')

  function checkComapnion(){
  let url = `https://www.dnd5eapi.co/api/classes/ranger`
  fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
      console.log(data)
     let hitDie = data.hit_die //I Decided to use the Ranger Hit Die as the key element of this complex api.
     let final = hitDie * Math.ceil(Math.random()*(50-1))//im using final tor randomize that number which will be fed into the pokmeon api as their poke-id.
     console.log(final)
    getPokemon(final)
    }) 
    .catch(err => { 
        console.log(`error ${err}`)  
    });
  
  }

  function getPokemon(final){
    let url = `https://pokeapi.co/api/v2/pokemon/${final}`

    let name = document.querySelector('h2')
    let hit = document.querySelector('#hitPoints')
    let description = document.querySelector('h3')
    let imageA = document.querySelector('img')

    fetch(url) 
      .then(res => res.json()) 
      .then(data => { 
        console.log(data)
        let hp = Math.floor(data.weight/10)// I divided the weight of the pokemon by 10 to get their base HP, the bigger the pokemon, the bigger the HP pool.
        //i made this conditional to even out some of the health numbers to fit a little more closely into a DND campaign, I also took a few of the pokemon base stats and  converted them into strength, charisma, and dexterity stats.
        if(hp === 0){
          hp = 10
        }else if(hp > 50){
          hp = 50
        }
        description.innerText = `${data.name} has ${Math.ceil(data.stats[0].base_stat/8)} strength  ${Math.ceil(data.stats[1].base_stat/8)} dexterity and ${Math.ceil(data.stats[2].base_stat/8)} charisma`
        hit.innerText = `Your compainion has ${hp} Hit Points!`
       imageA.src = `${data.sprites.front_shiny}`
       Moves.innerText = `${data.name} can perform the following moves : ${data.moves[0].move.name}, ${data.moves[5].move.name}, and ${data.moves[10].move.name}`
      
        name.innerText = `Hmm what a strange creature! it looks like your companion is a ${data.name} !`
      }) 
      .catch(err => { 
          console.log(`error ${err}`)  
      });
    
    }
  

