document.querySelector("button").addEventListener('click', function(){
  let cardName = document.querySelector("input").value
  fetch(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      setCard(response.cards[0])
    // response.cards.forEach((card,i) => {
    //   console.log(card)
    //   setCard(response.cards[i])
    // })
    // .catch(err => {
    //     console.log(`error ${err}`)
    //     alert("sorry, there are no results for your search")
    // });
  })

// cardsContainer = document.getElementById("cardsContainer")
//
// response.cards.forEach((card, i) => {
//   card = createElement("div")
//
//   cardsContainer.appendChild(card)
// })

      function setCard(card){
        console.log(card)
        let name = card.name
            let number = card.number
            let type = card.type
            let rarity = card.rarity
        // console.log(name, number, type, rarity)
        document.getElementById("card").innerHTML = `${name}`
        document.getElementById("number").innerHTML = `${number}`
        document.getElementById("type").innerHTML = `${type}`
        document.getElementById("rarity").innerHTML = `${rarity}`
        setCardImg(name)

      }
      function setCardImg(cardName){
        fetch(`https://api.scryfall.com/cards/named?exact=${cardName}`)
            .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
            .then(response => {
                console.log(response.image_uris.normal)
                let imgURL = response.image_uris.normal
                document.getElementById("img").src = imgURL
            })
      }




      // .catch(err => {
      //     console.log(`error ${err}`)
      //     alert("sorry, there are no results for your search")
      // });


})
