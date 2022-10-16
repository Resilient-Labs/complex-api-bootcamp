document.querySelector('.button').addEventListener('click', getFetch)

function getFetch(){
    const dog = document.querySelector('input').value
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json`

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(products => {
            console.log (products)
        document.querySelector('h1').innerHTML = products.brand
        })
    //         fetch('http://makeup-api.herokuapp.com/api/v1/product.json')
    //         .then(response => response.json())
    //         .then(data => { console.log(data.facts);
    //         document.querySelector('p').innerText = data.facts
    //     })
    // }
        //  .catch(err => {
        //     console.log (`error ${err}`)
        
        //     })
}
