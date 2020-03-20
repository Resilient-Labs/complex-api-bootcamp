const ol = document.getElementById("listOne")
const ul = document.getElementById("listTwo")

document.getElementById("findWord").addEventListener("click", () => {
  let word = document.querySelector("input").value

   fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${word}?key=e5c734ea-998a-4c8a-b484-5e66bfde9746`)
         .then(res => res.json())
         .then(dictionary => {

      document.getElementById("searchWord").innerHTML = word + " [" + dictionary[0].hwi.prs[0].mw + "]"

      for (let i = 0; i < dictionary.length; i++) {
        let entry = dictionary[i];
        let li = document.createElement('li');
        ol.appendChild(li);
        li.innerHTML = li.innerHTML + entry.meta.id + ": " + entry.fl + ", " + entry.shortdef
    }

    fetch(`https://words.bighugelabs.com/api/2/3d63cb92223d853dbba314b9a38109ed/${dictionary[0].meta.id}/json/`)
        .then(res => res.json())
        .then(response => {

       document.getElementById("synonyms").innerHTML = "Synonyms"
       document.getElementById("synNoun").innerHTML = "Nouns:" + " " + response.noun.syn
       document.getElementById("synVerb").innerHTML = "Verbs:" + " " + response.verb.syn
       document.getElementById("synAdj").innerHTML = "Adjectives:" + " " + response.adjective.syn

  })
})
       .catch(err => {
        console.log(`error ${err}`)
  })
})

document.getElementById("findWord").addEventListener("click", () => {
  const li = document.querySelectorAll("LI");
  for(let i = 0; i < li.length; i++){
    ol.removeChild(li[i]);
  }
})

document.getElementById("findWord").addEventListener("click", () => {
  let addToList = document.querySelector("input").value
  let li = document.createElement('LI');
  let newLi = document.createTextNode(addToList);

  li.appendChild(newLi);
  ul.appendChild(li);
  document.getElementById("history").innerHTML = "Search History"
})
