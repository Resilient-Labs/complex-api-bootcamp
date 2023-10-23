// Getting references to HTML elements
const numberInput = document.getElementById("numberInput");
const fetchButton = document.getElementById("fetchButton");
const numberFactDiv = document.getElementById("numberFact");
const encyclopediaDiv = document.getElementById("encyclopedia");

// Set up an event listener (smurf) for the button
fetchButton.addEventListener("click", handleFetchButtonClick);

function handleFetchButtonClick() {
	// Only proceed if there's input
	if (numberInput.value) {
		const number = numberInput.value; // Grabbing the value entered by the user
		fetchNumberFact(number); // Fetch the fact for the entered number
	}
}

function fetchNumberFact(number) {
	// Using a proxy to bypass Mixed Content errors when fetching data from non-HTTPS APIs in an HTTPS environment.
	const proxyUrl = "https://api.allorigins.win/raw?url=";
	const targetUrl = `http://numbersapi.com/${number}`;

	// Make a call to the Numbers API through the proxy to get a fact
	fetch(proxyUrl + targetUrl)
		.then((response) => response.text())
		.then((fact) => {
			// Display the fact on the page
			numberFactDiv.innerText = fact;

			// Get the main content of the fact by skipping the "X is..." part
			const terms = fact.split(" ").slice(2);

			// Search for a related Wikipedia article using those terms
			searchWikipediaWithFullFact(terms);
		})
		.catch((error) => {
			// If there's an error, let the user know
			numberFactDiv.innerText = "Error fetching number fact.";
		});
}

function searchWikipediaWithFullFact(terms) {
	// If there are fewer than 5 words, just say no relevant articles were found
	if (terms.length < 5) {
		encyclopediaDiv.innerText = "No relevant articles found.";
		return;
	}

	const query = terms.join(" "); // Convert the list of words back into a single string
	// Use that string to search Wikipedia
	fetchEncyclopediaData(query).then((found) => {
		if (!found) {
			// If no article was found, remove the first word and try again
			terms.shift();
			searchWikipediaWithFullFact(terms);
		}
	});
}

function fetchEncyclopediaData(query) {
	// This is the URL to search Wikipedia
	const searchURL = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${encodeURIComponent(
		query
	)}&utf8=1&format=json`;

	return fetch(searchURL)
		.then((response) => response.json())
		.then((data) => {
			// If we find articles related to the search
			const articles = data.query.search;
			if (articles.length > 0) {
				const article = articles[0];
				// Display the top article's title, a snippet of its content, and a link to the full article
				encyclopediaDiv.innerHTML = `<strong>${article.title}</strong>: ${
					article.snippet
				}... 
                    <a href="https://en.wikipedia.org/wiki/${article.title.replace(
											/ /g,
											"_"
										)}" target="_blank">Read more</a>`;
				return true; // Let the calling function know we found an article
			} else {
				// If no articles were found, let the user know
				encyclopediaDiv.innerText = "No relevant articles found.";
				return false;
			}
		})
		.catch((error) => {
			// If there was an error searching Wikipedia, let the user know
			encyclopediaDiv.innerText = "Error fetching encyclopedia data.";
		});
}

// use this code instead if your running this project locally.

// const numberInput = document.getElementById("numberInput");
// const fetchButton = document.getElementById("fetchButton");
// const numberFactDiv = document.getElementById("numberFact");
// const encyclopediaDiv = document.getElementById("encyclopedia");

// fetchButton.addEventListener("click", handleFetchButtonClick);

// function handleFetchButtonClick() {

// 	if (numberInput.value) {
// 		const number = numberInput.value;
// 		fetchNumberFact(number);
// 	}
// }

// function fetchNumberFact(number) {

// 	fetch(`http://numbersapi.com/${number}`)
// 		.then((response) => response.text())
// 		.then((fact) => {

// 			numberFactDiv.innerText = fact;

//             const terms = fact.split(" ").slice(2);

// 			searchWikipediaWithFullFact(terms);
// 		})
// 		.catch((error) => {

// 			numberFactDiv.innerText = "Error fetching number fact.";
// 		});
// }

// function searchWikipediaWithFullFact(terms) {

// 	if (terms.length < 5) {
// 		encyclopediaDiv.innerText = "No relevant articles found.";
// 		return;
// 	}

// 	const query = terms.join(" ");
// 	fetchEncyclopediaData(query).then((found) => {
// 		if (!found) {
// 			terms.shift();
// 			searchWikipediaWithFullFact(terms);
// 		}
// 	});
// }

// function fetchEncyclopediaData(query) {

// 	const searchURL = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${encodeURIComponent(
// 		query
// 	)}&utf8=1&format=json`;

// 	return fetch(searchURL)
// 		.then((response) => response.json())
// 		.then((data) => {

// 			const articles = data.query.search;
// 			if (articles.length > 0) {
// 				const article = articles[0];
// 				encyclopediaDiv.innerHTML = `<strong>${article.title}</strong>: ${
// 					article.snippet
// 				}...
//                     <a href="https://en.wikipedia.org/wiki/${article.title.replace(
// 											/ /g,
// 											"_"
// 										)}" target="_blank">Read more</a>`;
// 				return true;
// 			} else {
// 				encyclopediaDiv.innerText = "No relevant articles found.";
// 				return false;
// 			}
// 		})
// 		.catch((error) => {
// 			encyclopediaDiv.innerText = "Error fetching encyclopedia data.";
// 		});
// }
