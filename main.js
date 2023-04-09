let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');
let definition = document.getElementById('definition');
let translation = document.getElementById('translation');
let definitionSection = document.getElementById('definition-section');
let translationSection = document.getElementById('translation-section');

searchButton.addEventListener("click", getDefinition);

function getDefinition () {
  let word = searchInput.value.trim().toLowerCase()
  if (!word) {
    definition.innerText = "";
    translation.innerText = "";
    definitionSection.style.display = "none";
    translationSection.style.display = "none";
    alert("Please enter a word to search.");
    return
  }

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  let url2 = `https://api.funtranslations.com/translate/dothraki.json?text=`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.length) {
        definition.innerText = "";
        translation.innerText = "";
        definitionSection.style.display = "none";
        translationSection.style.display = "none";
        alert(`No definition found for "${word}".`);
        return
      }

      let definitionText = data[0].meanings[0].definitions[0].definition
      definition.innerText = definitionText
      definitionSection.style.display = "block";

      let translationUrl = `${url2}${definitionText}`
      fetch(translationUrl)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            translation.innerText = "";
            translationSection.style.display = "none";
            alert(`Error: ${data.error.message}`);
          } else {
            translation.innerText = `"${data.contents.translated}"`;
            translationSection.style.display = "block";
          }
        })
        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
