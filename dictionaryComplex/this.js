/* pseudocode what is the purpose of this api to find the part of speech of a word and a synonym, it's so that you can look up words to know other meanings and when to correctly use them 

1. fetch the api, res via j.son. then ask the data through arrowfunction to iterate

https://api.dictionaryapi.dev/api/v2/entries/en/<word>*/

document.querySelector("button").addEventListener("click", getTheInfo);

function getTheInfo() {
  let word = document.querySelector("input").value;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].phonetics[0].text);
      console.log(data[0].meanings[0].partOfSpeech);
      // console.log(data[0].meanings)
      // data[0].meanings[0].forEach(each => document.querySelector('#wordResult').innerText = each)
      const theBeg = "https:";
      let wordRef = data[0].word;
      console.log(wordRef);
      document.querySelector("#theWord").innerText = wordRef;
      document.querySelector("#wordResult").innerText =
        data[0].phonetics[0].text;
      document.querySelector(
        "#howTo"
      ).src = `${theBeg}${data[0].phonetics[0].audio}`;
      document.querySelector("#partOfSpeech").innerText =
        data[0].meanings[0].partOfSpeech;

      let url2 = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${wordRef}?key=use_your_own_key`
      fetch(url2)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(data[0].meta.syns[0]);

          let synonyms = data[0].meta.syns[0];

          let text = "";
          for (let x of synonyms) {
            text += x + "   |    ";
          }
          document.getElementById('synoResults').innerText = text;
          // for (let i = 0; i < synonyms.length; i++) {
          //   let p = document.createElement("p");
          //   let text = document.createTextNode(synonyms[i]);
          //   p.appendChild(text);
          //   document.querySelector(".synonyms").appendChild(p);
          // }
          // synonyms.forEach( syns => function(){
          //   let p = document.createElement('p')
          //   p.innerText = syns
          //   console.log(syns)
          //   document.querySelector('.synonyms').appendChild(p)
          // })
          //post the correct synonyms for the part of speech
        });
    });
}

//issues, needing to post multiple elements of an array in a line, how to
