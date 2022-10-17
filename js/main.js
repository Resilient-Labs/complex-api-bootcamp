document.querySelector('button').addEventListener('click', getJob)

function getJob(){
    let num = document.querySelector('input').value
    const url = `https://xivapi.com/classjob?private_key=4df61bdc63694ddf900f30f963c066caa29014c5427b42079879aea91b7f8dd4`
    //get classes from ff14 api with data.Results[<number 0-39>].Name
   
    // const url = `https://serpapi.com/search.html?engine=google&q=marauder&google_domain=google.com&tbm=isch&ijn=0&device=desktop&api_key=f992c1cfedeb96457f305dd10e313e4c3bb195039d77532796fb86a9aa033091`
   // tried to get images from google. Got Cors errors....

    
    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
       console.log(data.Results[num].Name)
       document.querySelector('#job').innerText = `You got the ${data.Results[num].Name}!`
       let character = `https://www.moogleapi.com/api/v1/characters/search?job=${data.Results[num].Name}`
        //api with ff characters
       fetch(character)
       .then(res => res.json()) // parse response as JSON 
       .then(data => { 
         console.log(data)
         console.log(data[Math.floor(Math.random(data.length))].name)
         document.querySelector('#character').innerText = `${data[Math.floor(Math.random(data.length))].name} from ${data[Math.floor(Math.random(data.length))].origin} also has this job.`
         
           }) 
       .catch(err => { 
           console.log(`error ${err}`) 
       });
         

    })
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}
