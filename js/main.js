document.getElementById('submit').addEventListener('click', brew)

function brew(e) {
    e.preventDefault();
    let input = document.getElementById("input").value
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${input}`)
    
    .then(response => response.json())
    .then(res => {
        
        res.forEach(function(brewery){
            // making a place for the description for the states to be held in HTML
            let description = document.createElement('p')
            document.getElementsByTagName('body')[0].appendChild(description);
            description.innerHTML = description.innerHTML + brewery.name
        });
    })

    //Second API to find information on the state input
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${input}`)
    .then(response => response.json())
    .then(response =>{
        //selects info id and changes the contents of the text within it to equal to snippet
        document.querySelector("#info").textContent = response.query.search[19].snippet
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}