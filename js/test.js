//Plan: I want to use one api to input data in another api
//First api: Spotify 

    //App works with keys inside 
    // Refuses to work from config.js file 
    const clientId = config.MY_API_TOKEN
    const accessToken = config.MY_API_TOKEN
    



    document.querySelector("#submit").addEventListener("click", searchArtist);

    function searchArtist(event) {
        event.preventDefault()
        artistInput = document.getElementById('term').value
        let clear = document.getElementById("clear")
        //gets rid of previous artist or mentions in the main
        clear.innerHTML = ""
        //spotify api works only with token in this case
        //token only last a hour 
        fetch(`https://api.spotify.com/v1/search?q=${artistInput}&type=track&limit=5` , {
            method: 'GET', headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then((data) => {
            console.log(data)
            //artist name most of the time
            console.log(data.tracks.items[0].artists[0].name)
            //popular single 
            console.log(data.tracks.items[0].name)
            //release day for song 
            console.log(data.tracks.items[0].album.release_date)
            //date is update to release date from Spotify
            date = data.tracks.items[0].album.release_date
            //user input 
            console.log(artistInput)
            //artist is update to data.artist from Spotify
            var artist = ""
            // data.tracks.items[0].artists[0].name
            const main = document.querySelector(".main")
            const section = document.createElement("section")
            //Generate "Top 5 songs of ${artist}"
            const TopFive = document.createElement("h1")
            artist = data.tracks.items[0].artists[0].name
            //not working, I wanted to return the right artist if a song is a feature
            //Returns for artist but Kendrick Lamar currently 
            // for (i=0; i<data.tracks.items;i++){
            //     if (artist === artistInput) {
            //         artist = data.tracks.items[i].name
                
            //     }
            // }
            TopFive.innerHTML = `Top Tracks of ${artist}`
            const area = document.createElement("ol")
            main.appendChild(TopFive)
            main.appendChild(section)
            section.appendChild(area)
            //for loop for getting all songs
            for(i=0;i<data.tracks.items.length;i++) {
                const lineForTrack = document.createElement("li")
                area.appendChild(lineForTrack)
                lineForTrack.innerHTML = data.tracks.items[i].name
            }
                
             
            //Create section that hold the songs
            //append section to main
            //make sure to append the ul/li to section
            

            newsAPIKey = "26a5f2dccb9b4797818ba99a69d61641"
            // `https://newsapi.org/v2/everything?q=${artist}&from=2022-10-16&sortBy=popularity&apiKey=${newsAPIKey}`
            fetch(`https://newsapi.org/v2/everything?q=${artist}&apiKey=${newsAPIKey}`) 
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE ERROR");
                }
            })
            .then((data) => {
                console.log(data)
                console.log(data.articles[0].title)
                console.log(data.articles[0].urlToImage)
                console.log(data.articles[0].url)

                const TopMention = document.createElement("h1")
                main.appendChild(TopMention)

                if (artist )
                TopMention.innerHTML = `Top Mentions of ${artist}`
                
                for(i=0;i<5;i++) {
                    
                    const sectionTwo = document.createElement("section")
                    const areaTwo = document.createElement("ul")
                    main.appendChild(sectionTwo)
                    sectionTwo.appendChild(areaTwo)
                    // const lineForImage = document.createElement("image")
                    const lineForTitle = document.createElement("li")
                    const lineForUrl = document.createElement("li")
                    const a = document.createElement("a")
                    // sectionTwo.appendChild(lineForImage)
                    areaTwo.appendChild(lineForTitle)
                    areaTwo.appendChild(lineForUrl)
                    lineForUrl.appendChild(a)
                    
                    // lineForImage.src += data.articles[i].urlToImage
                    lineForTitle.innerHTML += data.articles[i].title
                    lineForTitle.style.listStyleType="none"
                    lineForUrl.style.listStyleType="none"
                    a.innerHTML += data.articles[i].url
                    a.href += data.articles[i].url
                    a.target="_blank"
                    


                }
                    


            })


        })


    }

        



// url = " https://api.spotify.com	/v1/artists/{id}"
// key = "53f3d21cfca54c469239db007a04c092"
// fetch(`${url}`) {

// }

