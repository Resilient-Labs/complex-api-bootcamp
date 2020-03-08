//nyah muigui asiah joshua finesse div zahmir eric worked together

(async function() {
  let userID = 1
  const jsonPlaceholder_url = "https://jsonplaceholder.typicode.com/" //until ".com/"

  const response = await fetch(`${jsonPlaceholder_url}albums`)
  const result = await response.json()

  async function getDataFromJSON(route, id) {
    const apiResponse = await fetch(`${jsonPlaceholder_url}${route}/${id}`)
    const apiResult = await apiResponse.json()
    return apiResult

  }
  document.getElementById("makeAPICall").addEventListener("click", async () => { //with an anonomous function call (fat arrow notation)
    let user = (await getDataFromJSON("users", userID))
    // let firstName = user.username
    userID++ // >=(userID.length) - WANT TO MAKE IT STOP AT THE LENGTH
    // document.getElementById("response").innerHTML = user //JSON.stringify(await getDataFromJSON("users")) //function call WITH PARAMETER
    console.log(result)
    // document.getElementById("name").innerHTML = user["name"]
    document.getElementById("username").innerHTML = user.username
    // document.getElementById("phone").innerHTML = user["phone"]
    // document.getElementById("email").innerHTML = user["email"]
    // document.getElementById("company_catchPhrase").innerHTML = user["company"]["catchPhrase"]
    // document.getElementById("company_name").innerHTML = user["company"]["name"]
    // document.getElementById("website").innerHTML = user["website"]
    //let newName = `https://www.behindthename.com/api/related.json?key=er246792804&name=${user.username}`
    fetch(`https://www.behindthename.com/api/related.json?key=er246792804&name=${user.username}`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
       if(response.names === undefined){
         console.log(response.names);
         document.querySelector("#nickName").innerHTML = "No Nicknames Found in our database"
       }else{
         document.querySelector("#nickName").innerHTML = response.names
       }
      //console.log(response)

        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("sorry, there are no results for your search")
        });

  })
})()
// .catch(err => {
//   console.error(err.message);
// });
//1. Start with Asyncronnous Iife
//2. Console log to make sure its connected
//3. Create a variable for your api url
//4. Making a fetch to your api
//5. Turning what we get back from url into JSON
//6. get rid of console log- THROW UOP ALL THE JSON ON THE PAGE : USING JSON.stringify
//HOW TO SEE THE JSON IN THE DOM: DOCUMENT OBJECT MODEL AKA
// DOCUMENT.getElementById(PASS IN RESULT).INNERHTML = JSON.STRINGIFY//
//7.
//Make NEw function that will:
//call JSON placeholder api
//Return specified data from the JSON placeholder API based on a parameter passed into the function
