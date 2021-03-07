
document.querySelector('button').addEventListener('click', findRecipe)

function loadClient() {
    gapi.client.setApiKey("AIzaSyAZipRqc1B-UzTJAV5yCJKWWBtHAy2xr9c");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
}

function findRecipe(){
    const appid = "19ba583d"
    const appkey = "8c8e3ddb6c681221560aab52ef5b6281"
    const search = document.querySelector('input').value
    const url = `https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}`
    


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let i = 0; i < 8; i++){

            document.querySelector('.by' + i ).innerText = "By: "+data.hits[i].recipe.source
            document.querySelector('.name' + i ).innerText = data.hits[i].recipe.label
            document.querySelector('.ingred' + i ).innerText = "Ingredients: "+ data.hits[i].recipe.ingredientLines.length
            document.querySelector('.calories' + i ).innerText = "Calories: "+ parseInt(data.hits[0].recipe.calories)
            document.querySelector('.img' + i ).src = data.hits[i].recipe.image
            document.querySelector('.link' + i ).href = data.hits[i].recipe.url
            document.querySelector('.linnk' + i ).href = data.hits[i].recipe.url
        }
        document.querySelector('.arrow').src = 'arrow.jpg'    
        })
        const ytsearch = search + " Recipe"
        const ytapikey = 'AIzaSyAZipRqc1B-UzTJAV5yCJKWWBtHAy2xr9c'
        const yturl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${ytsearch}&key=${ytapikey}`

        fetch(yturl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for(let x = 0; x < 4; x++){
                document.querySelector('h2').innerText = "Youtube Recipes for: " + search
                document.querySelector('.ytvidtitle' + x).innerText = data.items[x].snippet.title
                document.querySelector('.ytvid' + x).src = "https://www.youtube.com/embed/"+data.items[x].id.videoId
                document.querySelector('.ytlink' + x).href = "https://www.youtube.com/watch?v="+data.items[x].id.videoId
                }
        })
    .catch(err => {
        console.log(`error ${err}`)
    })

}