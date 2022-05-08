document.querySelector('button').addEventListener('click', getCurrency)

function getCurrency(){

let search = document.querySelector('input').value
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
		'X-RapidAPI-Key': '05e07e892cmshf8e9da6d4887826p120f64jsn1ceb7665356f'
	}
};

fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${search}`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		console.log(response.relatedSearches[0].thumbnail.thumbnailUrl)
		document.querySelector('img').src = response.relatedSearches[0].thumbnail.thumbnailUrl
		let currentUrl = `https://api.vatcomply.com/rates?base=USD`
	fetch(currentUrl) 
	.then(res => res.json()) // parse response as JSON 
	.then(data => { 
		console.log(data.rates) 
		// for every key and value in the object data.rates were going through the object to retrieve the key values
		for(const [key,value]of Object.entries(data.rates)){
			document.querySelector('ul').innerHTML += `<li>${key};${value}</li>`
		}
	}) 
	.catch(err => { 
			console.log(`error ${err}`) 
	});
	})
	.catch(err => console.error(err));
}
