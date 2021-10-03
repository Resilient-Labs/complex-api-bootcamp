let anime = ''
fetch('https://animechan.vercel.app/api/random')
.then(res => res.json())
.then(data => {
    anime = data.anime
    quote = data.quote
    console.log(anime);
    console.log(data);
    document.querySelector('h2').innerText = anime
    anime = anime.replace(' ', '%20')
    fetch(`https://api.aniapi.com/v1/anime?title=${anime}`)
    .then(res => res.json())
    .then(aniData => {
        console.log(aniData);
        // let genres = aniData.genres.slice(0,3).join()
        // if(aniData.trailer_url !== undefined){
        // document.querySelector('iframe').src = aniData.data.documents[0].trailer_url
        // console.log(aniData.data.documents[0].cover_image);
                document.querySelector('img').src = aniData.data.documents[0].cover_image
                document.querySelector('span').innerText = aniData.data.documents[0].score
                let genres = aniData.data.documents[0].genres[0]
                document.querySelector('h4').innerText = genres

       

    })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });
    

})