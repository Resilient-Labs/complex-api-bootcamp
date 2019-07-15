//Harry Poter API https://www.potterapi.com/?ref=public-apis
//Harry Poter Key: $2a$10$FzoRrseM/c0BLhDBBqJw8uRNHzHln2mUYkxATYlljnwhnq0hZ3JLa

//unsplash API https://api.unsplash.com
//unsplash Key: 58e7384a2d5a234efc6b69e4682a2b53ba68599c58098ad24ffe6d8c84780050

const key = '$2a$10$FzoRrseM/c0BLhDBBqJw8uRNHzHln2mUYkxATYlljnwhnq0hZ3JLa';
const unsplashKey = '58e7384a2d5a234efc6b69e4682a2b53ba68599c58098ad24ffe6d8c84780050';

async function getHouses() {
	const response = await fetch(`https://www.potterapi.com/v1/houses?key=${key}`);
  return response.json();
}

async function getHouseImage(houseName) {
	const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${houseName}&client_id=${unsplashKey}`);
  return response.json();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const houses = await getHouses();
	console.table(houses);

	// Get houses images
  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
		house.image = null;

		// Get house image
		const unsplashResponse = await getHouseImage(house.name);
		const unsplashResults = unsplashResponse.results;
		const randomImageIndex = getRandomInt(0, unsplashResults.length - 1);
		console.log(randomImageIndex)
		const firstResult = unsplashResults[randomImageIndex];
		const firstResultimage = firstResult.urls.regular;

		// Set house image
		house.image = firstResultimage;
  }

  // Display data
  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];

    const houseColumn = document.createElement("div");
    const houseImg = document.createElement("img");
    const columnTitle = document.createElement("h1");
    columnTitle.innerHTML = house.name;

    houseColumn.className = 'house-column';
    columnTitle.className = 'house-title';
		houseImg.src = house.image;

    houseColumn.appendChild(columnTitle);
    houseColumn.appendChild(houseImg);

    // add house column to result div
    document.getElementById("result").appendChild(houseColumn);
  }
};

main();
