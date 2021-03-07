//In this first, event listener, we create  an event listener on the 'Get Definition' button. When we click on the button, it runs the function named 'getDefinitionAndPhoto'. 

document.querySelector('button').addEventListener('click', getDefinitionAndPhoto)

//In this second event listener, we ensure the user can simply click the enter key to call the function. 

document.querySelector('input').addEventListener('keypress', runGetDefinitionAndPhoto)

function runGetDefinitionAndPhoto(e){
    if(e.keyCode === 13){
        e.preventDefault()
        getDefinitionAndPhoto()
    }
}


//The following function returns 1) a definition and 2) a photo.

function getDefinitionAndPhoto() {

//The following variable 'query' is assigned a word (obtained from the user's input). Ex. Dance

    let query = document.querySelector('.inputSearch').value

//The following variable 'url' is assigned the API path. It is a template literal and takes one string expression. In this example, our string expression contains the content of the 'query' variable. 

//https://www.dictionaryapi.com/api/v3/references/thesaurus/json/dance?key=9a69d441-2694-47e8-8abf-f9e3f818dbb3

    let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=9a69d441-2694-47e8-8abf-f9e3f818dbb3`

//The following is a fetch statement that takes the url as a parameter. 

    fetch (url)

//First, the fetch statement will return a response in a JSON string from the API. In the following statement, we take the response and parses the JSON string so that it is easier to read. 

        .then(response => response.json())

//Next, we target the objects returned from the response. 'Data' represents these objects. In this case, we receive an array of arrays as a reeponse.

        .then(data => {

//Next, we target the first object and its 'shortdef' property. In this case, we target the array at index 0 and its shortdef property (which provides the definition). The definition is printed to the DOM. Ex. a social gathering for dancing

            document.querySelector('.h2Definition').innerText = data[0].shortdef


//Next, we create a variable named 'definition' and store the definition. 

        let definition = data[0].shortdef

//Next, we prepare for our next fetch by creating a new variable named 'url2' that stores our Stock Photo API path. We use the string that was stored to the 'definition' variable in the following template literal. Basically, we want to enter our definition and searched for a related photo. 

        let url2 = `https://api.unsplash.com/search/photos/?client_id=2vAoc_zs73pmQGlzynGD8AsbJmMCu-V3TjCKc5Kqu3I&query=${definition}& page=1`

//Next, we fetch the API and are given a response.

        fetch(url2)

//Next, we parse the JSON string that we received so it's easier to read. 

            .then(response => response.json())

//Next, we print the photo of people dancing to the DOM. We do this by looking at the object that we received, going to the 'results' property. The 'results' property is an array. We target the array at index 0, go to the 'urls' property, go to the 'small' property and get the value there.  

//Ex. https://images.unsplash.com/photo-1591621840329-3d7fbe7b7f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTE3Njl8MHwxfHNlYXJjaHwxfHxhJTIwc29jaWFsJTIwZ2F0aGVyaW5nJTIwZm9yJTIwZGFuY2luZ3xlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=400

            .then(data => {

                document.querySelector('#imgPhoto1').src = data.results[0].urls.small 
        })
  

    })

//Finally, we catch and report any errors that may occur. 

    .catch(err => {
        console.log(`error ${err}`)
    });


}




