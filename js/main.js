document.querySelector('button').addEventListener('click', getGhibli)

function getGhibli(){
    let info = document.querySelector('input').value
    console.log(info)
   
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        for (let i = 0; i < data.length; i++){
            // console.log(data[i].title)
            if (data[i].title === info){
                console.log(data[i].url)
                fetch(data[i].url)
                .then (res => res.json())
                .then (newData => {
                    console.log(newData)

                    let banner = newData.movie_banner
                    
                    document.querySelector('.titles').style.backgroundImage = `url(${banner})`
                    document.querySelector('.titles').style.backgroundSize = `contain`
                    document.querySelector('.titles').style.backgroundRepeat = `no-repeat`
                    document.querySelector('.titles').style.backgroundPositionX = `center`

                    document.querySelector('h2').innerText = newData.title

                    document.querySelector('h3').innerText = `${newData.original_title} - ${newData.original_title_romanised}`

                    document.querySelector('.date').innerText = newData.release_date

                    document.querySelector('.time').innerText = `${newData.running_time} min`

                    document.querySelector('.dir').innerText = `Director: ${newData.director}`

                    document.querySelector('.score').innerText = `Rotten Tomatoes: ${newData.rt_score}/100`

                    document.querySelector('.prod').innerText = `Producer: ${newData.producer}`

                    document.querySelector('img').src = newData.image

                    document.querySelector('p').innerText = newData.description
                })
            }
        }
    })
    document.querySelector('input').value = ''
}




