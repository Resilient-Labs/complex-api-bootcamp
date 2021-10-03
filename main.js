//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=mykey
// elGWR0g4h26An2R1rpiORtTG4Xre34gt

let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=elGWR0g4h26An2R1rpiORtTG4Xre34gt"; //
//created new key so this one is old
// require('dotenv').config();
// console.log(process.env);

let news = document.getElementById('worldHeadlines');

fetch(url)
  .then(res => res.json()) //fetch all data from url and then we take the string (json) and return this data
  .then(data => {
    console.log(data);

    data.results.map(newspaper => {
      console.log(newspaper.title);
      //the variable starts with results and when you use map it 
      let a = document.createElement("a");
      a.setAttribute('href', newspaper.url)

      a.innerHTML = newspaper.title;

      let p = document.createElement("p");//creating variable in js
      p.innerHTML = newspaper.abstract;

      let img = document.createElement("img");
      img.setAttribute('src', newspaper.multimedia[0].url);

      worldHeadlines.appendChild(img);
      worldHeadlines.appendChild(a);
      worldHeadlines.appendChild(p);

    })
    // line 19=20 notes: creating variable in js 
    //set an attribute of href, set the newspaper url as an attribute to the a tag (element)
  })