document.querySelector("button").addEventListener('click', getInformation);

function getInformation() {
  let countryName = document.querySelector("input");
  fetch(`https://restcountries.com/v3.1/name/${countryName.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        let capital = document.getElementById("capital");
        let population = document.getElementById("population");
        let flag = document.querySelector('h4')
       
        let countryCode = data[i].altSpellings[0]

        capital.innerText = `Capital of Country: ${data[i].capital[0]}`;
        flag.innerText = `${data[i].flag}`

        let secondUrl = `https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/${countryCode}.json`;

        fetch(secondUrl)
    
      
        .then((res) => res.json())
        .then((data2) => {
          console.log(data2);
          population.innerText = `Administrative Division: ${data2}`

        });

      }
    })

    .catch((err) => {
      console.log(`err ${err}`);
    });
}

getInformation();

// //
