const selectButt = document.querySelector("#butt");
const table = document.querySelector("#table");
const tableData = document.querySelector("#tablelist");

function getBrew() {
  const url = `https://api.openbrewerydb.org/v1/breweries?`;

  fetch(url)
    .then((res) => res.json())
    .then((brewData) => { //getting the data from the object json

      const addToDom = (obj) => {
        const longitude = obj.longitude;
        const latitude = obj.latitude;

        if(longitude === null || latitude === null){
            return
        }
        const name = obj.name;
        const postalCode = obj.postal_code;
        const breweryType = obj.brewery_type;
        const phone = obj.phone;

        // const brewItems = document.createElement("td");
        const brewName = document.createElement("td");
        const brewP = document.createElement("td");
        const brewType = document.createElement("td");
        const brewPhone = document.createElement("td");
        const brewLat = document.createElement("td");
        const brewLon = document.createElement("td");
        const bikeName = document.createElement('td');

        brewName.innerText = `${name}`
        brewP.innerText = `${postalCode}`
        brewType.innerText = `${breweryType}`
        brewPhone.innerText = `${phone}`
        brewLat.innerText = `${latitude}`
        brewLon.innerText = `${longitude}`

        // brewItems.innerText = ${postalCode},${breweryType},${phone},${lat},${lon}`;
        

        const brewRow = document.createElement("tr"); // create new element to hold brewItems
        
        table.appendChild(brewRow); // append brewItems to new element
        brewRow.appendChild(brewName)
        brewRow.appendChild(brewP)
        brewRow.appendChild(brewType)
        brewRow.appendChild(brewPhone)
        brewRow.appendChild(brewLat)
        brewRow.appendChild(brewLon)

        const url2 = `http://api.citybik.es/v2/networks?latitude=${latitude}&longitude=${longitude}`

        fetch(url2)
          .then((res) => res.json())
          .then((bikeData) => {
            console.log(bikeData.networks[0].name)
            const bike = bikeData.networks[0].name
            bikeName.innerText = `${bike}`
            brewRow.appendChild(bikeName)
          });
      };
      brewData.map(addToDom); 
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

selectButt.addEventListener("click", getBrew);
