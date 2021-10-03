
//-----------------------------fetch syntax 1

    //what i want to do IS:
    //get a random breed
    //get information of that random breed
    //get an image of the random breed


    fetch("https://api.TheDogAPI.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
    //gives random interger between 1 and 172 which is the size of the array
    let randomNumber = Math.ceil((Math.random( )*172))
    //console.log(data)

    //dog facts
    let name = data[randomNumber].name  //name
    //console.log(name)
    let breedGroup = data[randomNumber].breed_group //breed group
    //console.log(breedGroup)
    let bredFor = data[randomNumber].bred_for  //bred for
    //console.log(bredFor)
    let picture = data[randomNumber].image.url 
    //console.log(picture)

    //Dom Placement
    document.querySelector('img').src = picture
    document.querySelector('#dogFacts').innerHTML += `name: ${name}</br>breed group: ${breedGroup}</br>bred for: ${bredFor}`

    //------------------------------fetch syntax 2

    //what i want to do IS:
    //get a random breed, be able to look up if that breed is available for adoption by:
    //plugging in breed to the fetch url to give me object data for that specific breed.
    //be able to grab organization data  and plug into the dom


    //create fetch syntax to retrieve token for auth

    const api_Key = process.env.API_KEY;

    const client_Secret = process.env.CLIENT_SECRET;


    fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${api_Key}&client_secret=${client_Secret}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
    })
    .then(res =>res.json())
    .then(data => {
        let token = data.access_token

        //--------------second fetch for JSON DATA
        fetch(`https://api.petfinder.com/v2/animals?type=dog&breed=${breedGroup}`, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        .then(res =>res.json())
        .then(result => {
            
            //console.log(result.animals)
            for(i=0 ; i<= result.animals.length; i++){
                console.log(result.animals[i].url)
                document.querySelector('#adoptionResults').innerHTML += `${result.animals[i].url} </br>` 
            }
        })
        .catch(err =>{
            console.log(`Error: ${err}`)
        })
        //---------------second fetch
    })
    .catch(err =>{
        console.log(`Error: ${err}`)
    })

    //--------------------------------------scoped

})
.catch(err => {
    console.log(`error: ${err}`)
    
});