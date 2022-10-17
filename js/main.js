
document.querySelector("#submit").addEventListener("click", getNationality); 


function getNationality(event) {
    event.preventDefault(); 
    let name = document.querySelector("#nameInput").value; 
    let url = `https://api.nationalize.io?name=${name}`; 
    fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
         console.log(data); 
            let country = document.querySelector("#country") 
            country.innerHTML = data.country[0].country_id 
            let countryCode = data.country[0].country_id 
            let url2 = `https://restcountries.com/v2/alpha?codes=${countryCode}` 
            fetch(url2) 
            .then(res => res.json()) 
            .then(data => { 
                console.log(data); 
                let capital = document.querySelector("#capital") 
                capital.innerHTML = data[0].capital 
            })
            .catch(err => {
                console.log(`error ${err}`)
            }
            );
    })
    .catch(err => {
        console.log(`error ${err}`)
    }
    );
}
