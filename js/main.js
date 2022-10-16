document.querySelector("button").addEventListener("click", () => {

    // Get the zip code value from the input
    let zipCode = document.querySelector("input").value

    // Make a request to the zippopotam api. 
    fetch(`https://api.zippopotam.us/us/${zipCode}`)
        .then(res => res.json())
        .then(data => {

            // Store coordinates location. We'll need this for the travel advisor fetch call
            let longitudeNum = data.places[0].longitude
            let latitudeNum = data.places[0].latitude


            // Make a request to the travel-advisor api. 
            fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${latitudeNum}&longitude=${longitudeNum}&currency=USD&lunit=mi&lang=en_US`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": "ed90666f5emsh2a3f430f2550497p1e9a1fjsn54a56b4ac2d7"
                }
            })
                .then(res => res.json())
                .then(data =>{

                    // Loop through each element in the array
                    data.data.forEach((element, index) => {

                        // If the properties have value in them, follow the below steps.
                        if (data.data[index].address != undefined && data.data[index].address != undefined && data.data[index].phone != undefined) {

                            // Create a section
                            let section = document.createElement("SECTION")
                            // Add the section to the body
                            document.body.appendChild(section)

                            // Create ul
                            let ul = document.createElement("ul") 

                            // Create 3 list item
                            let liName = document.createElement("li") 
                            let liAddress = document.createElement("li") 
                            let liPhone = document.createElement("li") 
                            
                            // Add text into the li
                            liName.appendChild(document.createTextNode(`${data.data[index].name}`))
                            liAddress.appendChild(document.createTextNode(`${data.data[index].address}`))
                            liPhone.appendChild(document.createTextNode(`${data.data[index].phone}`))

                            // Append li to ul
                            ul.appendChild(liName)
                            ul.appendChild(liAddress)
                            ul.appendChild(liPhone)

                            //append ul to section
                            section.appendChild(ul)

                        }
                
                    })

                })
                .catch(err => {
                    console.error(err);
                });

        })
        .catch(err => {
            console.error('this' + err);
        });

})