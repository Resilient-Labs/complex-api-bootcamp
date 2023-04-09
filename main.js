const button = document.querySelector("button");

function getNewCharacter() {
  let url = "https://www.dnd5eapi.co/api/classes";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const i = Math.floor(Math.random() * 12);
      let selection = data.results[i].url;

      let newUrl = `https://www.dnd5eapi.co${selection}`;

      fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          document.querySelector(".display").innerText = data.name;
          let num = data.hit_die;
          // Move this block of code outside the DND API fetch
          let ul = document.querySelector("ul");
          ul.innerHTML = "";

          fetch(
            `https://randommer.io/api/Name?nameType=fullname&quantity=${num}`,
            {
              method: "GET",
              headers: {
                accept: "*/*",
                "X-Api-Key": "2bbef98adbde490faa1cb1ecfa4855ef",
              },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              for (let i = 0; i < data.length; i++) {
                let li = document.createElement("li");
                li.innerText = data[i];
                ul.appendChild(li);
              }
            })
            .catch((error) => console.error(error));
        });
    })
    .catch((error) => console.error(error));
}

button.addEventListener("click", getNewCharacter);

// const button = document.querySelector("button");

// //function to retrieve information from both DND and Random name APIs
// function getNewCharacter() {
//   let url = "https://www.dnd5eapi.co/api/classes"; //accesses the array of DnD classes

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       const i = Math.floor(Math.random() * 12) + 1; // generate random index from 1 to 13 (the num of classes available)
//       let selection = data.results[i].url;

//       let newUrl = `https://www.dnd5eapi.co${selection}`; //changes the pathway so we can access the class' stats.

//       fetch(newUrl)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           document.querySelector("h2").innerText = data.name; //name of class

//            //Targets the ul in the HTML
//   let ul = document.querySelector("ul");
//   ul.innerHTML = ""; // Clear the existing list before adding new items
//   let num = data.hitdice;
//   // fetch to Random Name generator.
//   fetch(`https://randommer.io/api/Name?nameType=fullname&quantity=${num}`, {
//     method: "GET",
//     headers: {
//       accept: "*/*",
//       "X-Api-Key": "2bbef98adbde490faa1cb1ecfa4855ef", //authorization
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       //cycles thru the array and appends all 10 names onto the DOM and when clicked again, a new list replaces it.
//       for (let i = 0; i < data.length; i++) {
//         let li = document.createElement("li");
//         li.innerText = data[i];
//         ul.appendChild(li);
//       }
//     })

//     //catches errors
//     .catch((error) => console.error(error));
//         });
//     })

//     //in case of errors
//     .catch((error) => console.error(error));

// }

// //event listeners

// button.addEventListener("click", getNewCharacter);

// OLD CODE

//     let ul= document.querySelector('ul')

//     fetch('https://randommer.io/api/Name?nameType=fullname&quantity=10', {
//         method: 'GET',
//         headers: {
//           'accept': '*/*',
//           'X-Api-Key': '2bbef98adbde490faa1cb1ecfa4855ef'
//         }
//       })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             let li = document.createElement('li')
//             for(let i=0; i < data.length; i++){
//             li.innerText = data[i];
//             ul.appendChild(li)
//             }
//         })

//         .catch(error => console.error(error));
// }
