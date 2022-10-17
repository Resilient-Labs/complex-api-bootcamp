
//listener
document.querySelector("#submit").addEventListener("click", userInput);
//
let size = "100"
let format = "png"
let url = "isaiahlowebrown.com"


function userInput(event) {
    //stops refreshing on submit, Shout on Leon
    event.preventDefault()
    //I am grabbing the user input date

    //fetch api
    fetch(`https://api.nationalize.io/?name=nathaniel`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then((data) => {
        console.log(data)

    
        console.log(data.country[0].country_id)
        // console.log(data.results.media_type)
        // console.log(data.results[0].media_type)

        
       
    })

    

}