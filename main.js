//Create an event listener for the button so when it is clicked it runs a function 
document.querySelector('button').addEventListener('click', animeLove)

//create an event listener on the input so if the user want to press enter to submit their anime instead of clicking on the button it will also run the fucntion
document.querySelector("#anime-title").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        animeLove()
    }

})


//create the animeLove function, inside the function I want to the user to enter an anime title and the api returns information about the anime. The second api will give recommendation based off the anime's season and year of release

function animeLove() {

    //store the user input of the title into a variable
    let animeTitle = document.querySelector('input').value


    //store the url of the first anime API as a value of a variable with the user input as a query parameter

    const url = `https://api.jikan.moe/v4/anime?q=${animeTitle}`

    //call first fetch with the url as a parameter 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            //from the respond data pull the title of the anime title input in the array, and placed in an element in the DOM
            document.querySelector('h2').innerText = data.data[0].title

            //from the respond data pull the description of the anime title input in the array, and placed in an element in the DOM
            document.querySelector('#description').innerText = data.data[0].synopsis

            //from the respond data pull the cover image of the anime title input in the array, and placed in an img element in the DOM
            document.querySelector('img').src = data.data[0].images.jpg.image_url

            //from the respond data pull the trailer of the anime title input in the array, and placed in an iframe element in the DOM
            document.querySelector('iframe').src = data.data[0].trailer.embed_url
            
            //create the variable to store the second api url. This api should pull from the respond data of the first api. I want to pull the season and year of the anime searched and use them as query parameters in the second api's url.
            const url2 = `https://kitsu.io/api/edge/anime?filter[season]=${data.data[0].season}&filter[seasonYear]=${data.data[0].year}`
            
            //call the second fetch with the second url as a parameter, nested in the first fetch. 
            fetch(url2)
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    //clear the ul that the ul element each time the function is ran, so if the user searches multiple animes, the recommendation list doesn't continue to add the new information to the previous list. 
                    document.querySelector('#recs').innerHTML = ''

                    //create a loop that goes through each element of the data array received from the response data 
                    data.data.forEach((el) => {
                        
                        //create an li element 
                        let li = document.createElement('li')

                        //within the li element store each element's title 
                        li.innerText = el.attributes.canonicalTitle

                        //add each element's title to the end of the ul element as a list item 
                        document.querySelector('#recs').appendChild(li)
                    })



                })

                //catch errors
                .catch(err => {
                    console.log(`error${err}`)
                })
        })



        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })

    //clear input box once the user submit the data 
    document.querySelector('input').value = ''


}