const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=825e3828e8d560f330f90e751147d7f3';
      const imageAPI = 'https://api.unsplash.com/photos/random?query=london&client_id=bJippHgHd-WIf15lcLC73qi97llSLWj7l5CYzr769Fg';

      const weatherContainer = document.querySelector('#weather-container');
      const imageContainer = document.querySelector('#image-container');
      const searchButton = document.querySelector('#search-button');
      const searchInput = document.querySelector('#search-input');

      // Function to fetch data
      function fetchData(place) {
        // Fetch weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=825e3828e8d560f330f90e751147d7f3`)
          .then(response => response.json())
          .then(data => {
            // Display weather data
            const tempC = Math.round(data.main.temp - 273.15);
            const tempF = Math.round((data.main.temp - 273.15) * 9 / 5 + 32);
            const weatherData = `
              <p>Current weather in ${place}:</p>
              <p>${data.weather[0].description}</p>
              <p>${tempC}°C / ${tempF}°F</p>
            `;
            weatherContainer.innerHTML = weatherData;
          })
          .catch(error => console.log(error));

        // Fetch image data
        fetch(`https://api.unsplash.com/photos/random?query=${place}&client_id=bJippHgHd-WIf15lcLC73qi97llSLWj7l5CYzr769Fg`)
          .then(response => response.json())
          .then(data => {
            // Display image data
            const imageData = `
              <img src="${data.urls.regular}" alt="${data.alt_description}">
            `;
            imageContainer.innerHTML = imageData;
          })
          .catch(error => console.log(error));
      }

      // Add event listener to search button
      searchButton.addEventListener('click', () => {
        const place = searchInput.value;
        fetchData(place);
      });