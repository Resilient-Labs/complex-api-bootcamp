document.getElementById('btnInput').addEventListener('click', function (e) {
  e.preventDefault();
  let urlApi = `https://dog.ceo/api/breeds/image/random`
  fetch(urlApi)
  .then(res => res.json())
  .then(response => {
    console.log(response);
    console.log(response.message);
    let img=document.getElementById("img")
    var element = document.createElement("img");
    img.innerHTML="";
    element.src= response.message
    element.height="500"
    element.width="500"
    img.appendChild(element)
    var start=response.message.indexOf("breeds")+7
    var end=response.message.lastIndexOf("/")
    let search=response.message.substring(start, end)
    // https://images.dog.ceo/breeds/retriever-curly/n02099429_630.jpg
    let wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`
    console.log(wikiUrl)
    fetch(wikiUrl)
    .then(res => res.json())
    .then(response => {
        console.log(response.query.search[0].snippet);
        document.querySelector("#text").innerHTML = response.query.search[0].snippet
    });

  });


})
