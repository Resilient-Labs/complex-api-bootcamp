// complex #1 - bird app

// enter a country and receive a kind of bird in that country and how many there are

document.querySelector('button').addEventListener('click', getBird)

var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "ih8q0oqhkq4m");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getBird() {
    // enter a country to generate the corresponding region code
    const country = document.querySelector('input').value
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].cca2)
        let regionCode = data[0].cca2
        // puts region code in 2nd fetch to find birds in that region
        fetch(`https://api.ebird.org/v2/data/obs/${regionCode}/recent`, requestOptions)
        .then(res => res.json())
        .then(data => {
            // targets number and type of bird in region
            let number = data[0].howMany
            let bird = data[0].comName
            console.log(`There's ${number} ${bird}(s) in this country`)
            document.querySelector('h2').innerText = `🦉 There's ${number} ${bird}(s) in this country`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
    })
}





// animal crossing api
// document.querySelector('button').addEventListener('click', getTemp)

// function getTemp() {
//     const month = document.querySelector('input').value

//     fetch('https://api.nookipedia.com/villagers', {
//         method: 'GET',
//         headers: {
//             'X-API-KEY': 'fb89169f-4a67-4484-aa89-1d9ddc4ad168',
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)

//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// })
// }

// console.log(data[i].name + ' ' + data[i].birthday_month
// + ' ' + data[i].birthday_day)     

// for loop
// for(let i=0; i < data.length; i++) {
//     let villagerMonth = data[i].birthday_month;
//     if(villagerMonth === 'November') {
//         console.log(villagerMonth)
//     }   
//

// for each loop
// data.forEach( obj => console.log(obj.name + ' ' + obj.birthday_month
// + ' ' + obj.birthday_day) )