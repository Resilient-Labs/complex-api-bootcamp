//class name of my buttons
let arrayOfFood = document.getElementsByClassName("food")
//to knw what my buttons are
console.log(arrayOfFood)
//i craeted an array var to hold each buttons element
let array = []
//pushing each button element into the array
for(let i=0; i< arrayOfFood.length; i++){

    array.push(arrayOfFood[i])

    console.log("food: ", array)

}
//for each elemnt i add an event listener so i can get the inner text form the element
array.forEach( function(el) {

    console.log("element: ", el)

    el.addEventListener("click", function(){


        console.log(el.innerText)
        // this is the varaible that will pass through the fecth and change the option
        //will change based on eaxh click
        
        let food = el.innerText

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res => res.json() )
        .then(response =>{
            console.log(response);
            console.log("meals: ", response.meals);
            //this is the the section that has everything inside
            let content = document.getElementById("results")
            // this is to clears current fetch
            content.innerHTML = ""
            // this loop is looping through the responsse to get all of the meals
            for(let i=0; i < response.meals.length; i++){
                //this area creates the the new element
                let section = document.createElement("section")
                
                let title = document.createElement("h1")

                let section2 = document.createElement("section")

                let  image= document.createElement("img")

                let link = document.createElement("a")
                //this area gives my new element classes
                section.setAttribute("class", "holder border")

                title.setAttribute("class", "title")
                // i gave title the class giving so that i can later use it to let the giff apear when you press it 
                section2.setAttribute("class", "giving holder border")

                image.setAttribute("class", "pics")
                //this area puts the contentent inside of the new element
                title.append(response.meals[i].strMeal)

                image.src = response.meals[i].strMealThumb

                link.href = response.meals[i].strYoutube

                link.append(image)

                section2.append(link)

                section.append(title)

                section.append(section2)

                content.append(section)

                // console.log("result: ", content.textContent)

            }
            // heres how I make it complex
            // this grabs the class frim the title
        let gif = document.getElementsByClassName("title")

        let arraygif = []
            //loooping through all the tiles and putting them into an array
        for(let i=0; i< gif.length; i++){

            arraygif.push(gif[i])

            console.log("gifs: ", arraygif)

        }
        // // this was to put the gifs pic nezx\t to the section2 repi img
        // let section2 = document.getElementsByClassName("giving")

        // let arraySection2 = []

        // for(let i=0; i< section2.length; i++){

        //     arraySection2.push(section2[i])

        //     console.log("section: ", arraySection2)

        // }
        // to see the array
        console.log("gif: ", arraygif)
        // to start each event listener by click for each title
        arraygif.forEach( function(el){
            // to see which title in the log
            console.log("element: ", el)

            el.addEventListener("click", function(){

                console.log(this.textContent)
                // targets the title i click on
                let word = this.textContent

                fetch(`http://api.giphy.com/v1/gifs/random?api_key=wltUx83cCzYPqCKFvIAKiL9GRtEg8kLV&tag=${word}&limit=1`)
                .then(res => res.json() )
                .then(response =>{
                    console.log(response);
                    console.log(response.data.images.original.url)
                    // creats the html elemet
                    let  image= document.createElement("img")
                    //target the section i display the giffs
                    let gifSection = document.getElementById("gif")

                    image.setAttribute("id", "moves")    

                    // puts the content inside of the elment
                    image.src = response.data.images.original.url

                    //we targeted the child nodes of that section to see whats inside that section
                    console.log(gifSection.childNodes, gifSection.childNodes[0], gifSection.hasChildNodes())
                    
                    //checks if the has any child nodes
                    if(gifSection.hasChildNodes()){

                        //if the section has a child node it changes the source of the image
                        let frame = document.getElementById("moves")

                        frame.src = response.data.images.original.url

                        console.log("true", response.data.images.original.url)

                    }else{

                        //if it doesnt have a child node it adds a new image
                      //add the gif into the section
                        gifSection.append(image)  
                    }

                    
                })
            })
        })

        })

    })
    
})

// http://api.giphy.com/v1/gifs/random?api_key=L9lGx1zfoWPOhlGdFom5AGFGPhWojvlW&tag=${title.toUpperCase()}&limit=1


