const cardInput = document.querySelector("#cardInput");
const searchButton = document.querySelector("#searchButton");

cardInput.addEventListener("keyup", event => {
    if(event.key === "Enter") {
        cardLookup();
    }
});

searchButton.addEventListener("click", cardLookup);

function cardLookup() {

    const cardToSearch = cardInput.value;
    if(!cardToSearch) {
        return;
    }

    fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${encodeURIComponent(cardToSearch)}`, {
        headers: {
            "x-rapidapi-key": apikey
        }
    })
        .then(res => res.json())
        .then(response => {
            console.table(response);
            var targetUrl = `https://art.hearthstonejson.com/v1/orig/${encodeURIComponent(response[0].cardId)}.png`;
            document.querySelector("#cardTitle").textContent = cardToSearch;
            document.querySelector("#cardImage").src = targetUrl;
            document.querySelector("#cardCost").textContent = `Cost: ${response[0].cost}`;
            document.querySelector("#cardAttack").textContent = `Attack: ${response[0].attack}`;
            document.querySelector("#cardHealth").textContent = `Health: ${response[0].health}`;
            document.querySelector("#cardText").textContent = `Text: "${response[0].text}"`;
            document.querySelector("#cardFlavor").textContent = `Flavor: "${response[0].flavor}"`;
        })
        .catch(err => console.log(err));

}
