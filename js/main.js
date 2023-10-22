document.querySelector('button').addEventListener('click', getPlayer)

function getPlayer(){

    fetch(`https://www.balldontlie.io/api/v1/players`)
    .then(res => res.json()) // parse response as JSON 
    .then(info => { 

        random = Math.round(Math.random(0,1) * 24)
        document.querySelector('h1').innerText = `${info.data[random]['first_name']} ${info.data[random]['last_name']}`
        document.querySelector('h2').innerText = `Team: ${info.data[random].team['full_name']}`
        
        let team = info.data[random].team['full_name']

        getNews(team)
    })


    .catch(err => { 
        console.log(`error ${err}`) 
    })
}   


function getNews(team){

    fetch(`https://newsdata.io/api/1/news?apikey=pub_3159471376c8f5d27dacf823d1fd4c6b893c2&language=en&q="${team}"`)
    .then(res => res.json()) // parse response as JSON 
    .then(info => { 

        let emptyList = document.querySelector('ol')
        emptyList.innerHTML= ''
        //remove duplicate articles
        let arr = []
        let arr2 =[]
        for (let i = 0; i < info.results.length; i++){ 
            if (!arr.includes(info.results[i].title)){
                arr.push(info.results[i].title)
                arr2.push(info.results[i])
            }
        }
        

        let list = document.querySelector('ol')

        arr2.forEach(element => {

            let listItems = document.createElement('li')
            let links = document.createElement('a')
            list.appendChild(listItems)
            links.innerText = `${element.title}`
            links.href= `${element.link}`
            links.target = "_blank"
            listItems.appendChild(links)
        }); 
    
    })

    .catch(err => { 
        console.log(`error ${err}`) 
    })

}
