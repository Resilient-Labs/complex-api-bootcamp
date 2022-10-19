//Goal: Use data returned from one api to make 
// a request to another api and display the data returned



// api key bfc2523de957459ca1a180259221710
// weatherapi
// http://api.weatherapi.com/v1/astronomy.json?key=bfc2523de957459ca1a180259221710&q=London&dt=1992-05-27


//astronomy api
// https://api.astronomyapi.com/api/v2/studio/moon-phase

// application id da28cc3e-020a-4854-8043-389c433e1702

//application secret 64d1e4872ae5df0de4054ef69926a4e974e5040a28e0b2248b7d4e03bc085f61512423363b5501c03374d4a29b4e6068ef768addb0aec35f6d8ada98b2c9696eb0103cf81ed2d66634b0579301f0c49aacf64316a9dd013cad2850f6593ab15abff8328e0e67f44041b5b5a062c9ffb8

document.querySelector('button').addEventListener('click', getFetch)

const h2 = document.querySelector('body h2');





function getFetch() {

	const inputValue = document.querySelector('.userFood').value
	



	// console.log(results)

	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)


		.then(res => res.json()) // parse response as JSON
		.then(data => {
			
			console.log(data.meals[0].strIngredient1)


		
		
			
				// console.log(results)
			
				fetch(`https://api.unsplash.com/search/photos?query=${data.meals[0].strIngredient1}&client_id=dMGHb55aR-viQgat4g9w8cog1_HJwPfIuCG9zwPJL-s`)
		
			
			
					.then(res => res.json()) // parse response as JSON
					.then(dataTwo => {
						
						console.log(dataTwo.results[0].urls.full)
						
						// debugger
			
						document.querySelector('img').src = dataTwo.results[0].urls.thumb
			
					})
					.catch(err => {
						console.log(`error ${err}`)
					});
			
			
			
			// debugger

			

		})
		.catch(err => {
			console.log(`error ${err}`)
		});

}




