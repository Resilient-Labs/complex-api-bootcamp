// Use data returned from one api to make a request to another api and display the data returned
//input a name, identify what nationality the name is by iso code
//use country code to search for country data
// API 1:    https://nationalize.io/
//API 2:    https://www.bigdatacloud.com/docs/api/country-info-api



document.querySelector('button').addEventListener('click', getHolidays)

function getHolidays(){
    
     const name = document.getElementById('name').value

    fetch(`https://api.nationalize.io?name=${name}`)
    .then(res => res.json())
    .then(data => {
        const iso = data.country[0].country_id
        
            fetch(`https://api.bigdatacloud.net/data/country-info?code=${iso}&localityLanguage=en&key=bdc_d13dd5415aa04ee996dd126b474cb47c`)
            
            .then(res => res.json())
            .then(data2 => { 
                console.log(data2)  
                 const countryName = data2.name
                 const emoji = data2.countryFlagEmoji
                 const continent = data2.continents[0].continent
                 const region = data2.unRegion
                 const language =data2.isoAdminLanguages[0].isoName
                 const nativeLanguage =data2.isoAdminLanguages[0].nativeName
                 const currency = data2.currency.name
                 const inputName = document.getElementById('name').value.toUpperCase()
                 
                    
                     document.getElementById('countryName').innerText = `The name ${inputName} comes from ${countryName}`
                     document.getElementById('continent').innerText = `Continent: ${continent}`
                     document.getElementById('region').innerText = `UN Region: ${region}`
                     document.getElementById('language').innerText = `The language spoken here is ${language}`
                     document.getElementById('nativeLanguage').innerText = `The Native language is named ${nativeLanguage}`
                     document.getElementById('currency').innerText = `The currency is named ${currency}`
            })
            .catch(err => {
                document.getElementById('countryName').innerText = `Sorry we may not have much research on the name ${name.toUpperCase()}.`
                console.log(`error ${err}`)
            })
     })
     .catch(err => {
        console.log(`error ${err}`)
    })
     }