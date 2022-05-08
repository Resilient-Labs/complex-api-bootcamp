document.querySelector('button').addEventListener('click', getInfo)

function getInfo(){
    let url = `https://ghibliapi.herokuapp.com/films`
        fetch(url)
            .then(res => res.json())
            //a fetch call will be responsed as an html
            // (res.json) takes the response and parses (translates) it to a json object
            //.json is a built in js method

            .then(data => {
                console.log(data)
                let ranNum =  data[Math.floor(Math.random() * data.length)]
                document.querySelector('h2').innerText = ranNum.title
                document.querySelector('h3').innerText = 'Director: ' + ranNum.director
                document.querySelector('h4').innerText = 'Release Date: ' + ranNum.release_date
                document.querySelector('p').innerText =  ranNum.description
                document.querySelector('img').src = ranNum.image
            
                let movieTitle = ranNum.title

                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer ee88fc48401579c6cbb177ad7c74bdb7bd61fcab");
                
                var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  redirect: 'follow'
                };
                
                    fetch(`https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=${movieTitle}`, requestOptions)
                        .then(response => response.json())
                        .then(result => {
                        console.log(result)
                        let secondPic = document.querySelector('.secondPic') 
                        let imgurLink = result.data[0].images[0].link
                        secondPic.innerHTML += `<img src='${imgurLink}'>`
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
})
}