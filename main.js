// document.querySelector('button').addEventListener('click', )
document.querySelector('button').addEventListener('click', nbaSearch);



function nbaSearch() {

  let firstName = document.querySelector('[placeholder= "First Name"]').value
  let lastName = document.querySelector('[placeholder= "Last Name"]').value

  if (!firstName) {
    alert('No First Name Entered')
    return
  }
  if (!lastName) {
    alert('No Last Name Entered')
    return
  }


  let fullName = `${firstName} ${lastName}`
  let playerList = document.querySelector('.playerList')
  // let url =  `https://www.balldontlie.io/api/v1/players?search=${firstName}`
  let url = `https://www.balldontlie.io/api/v1/players?search=${fullName}`
  // tried adding lastName and receieve and error
  console.log(url);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.data.length === 0) {
        alert('No Player Returned')
        return
      }
      //Adding a list of all the names that is entered from input
      for (i = 0; i < data.data.length; i++) {
        let item = document.createElement('li');
        let player = data.data[i]
        let playerName = `${player.first_name} ${player.last_name} | ${player.team.full_name}`
        let playerHeight = 'Height: N/A'
        let playerPosition = 'Position: N/A'
        if(player.height_inches){
            playerHeight = `Height: ${player.height_feet}' ${player.height_inches}"`
        }
        if(player.position){
          playerPosition = `Position: ${player.position}`
        }
        let playerInfo = `${playerHeight} | ${playerPosition}`
        // let newURL = `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=${playerName}&from=2021-02-05&sortBy=publishedAt&apiKey=da5d216ba0374aaebf31210d5d1484c3`
        let newURL = `http://api.mediastack.com/v1/news?access_key=23799bad4652d20cc7206bd081656bd0&keywords=${playerName}&countries=us`
        console.log(newURL);

        item.appendChild(document.createTextNode(playerName + ' | ' + playerInfo));
        playerList.appendChild(item);
        console.log(data.data[i].last_name)

        fetch(newURL)
        .then(res => res.json())
        .then(newsData => {
          console.log(newsData);
          for(let i = 0; i < newsData.data.length; i++){
            let item = document.createElement('li');

          item.innerHTML = `<a href="${newsData.data[i].url}"> ${newsData.data[i].title}</a>`
          document.querySelector('.article').appendChild(item)
          }
        })
      }


    })
}
