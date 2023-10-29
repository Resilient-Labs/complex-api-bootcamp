# Anime Recs on Deck

An anime recommendation application that allows the user to enter in an anime and get recommendations based off that anime's season and season year.+

Link to project: https://animerecsondeck.netlify.app

![Anime Recs on Dec Gif](<(img/Anime-Recs-on-Dec.gif)>)

## How It's Made:

Tech used: HTML, CSS, JavaScript

I used HTML to create the frame of the website. I used CSS to style the sections where the information of the API data will show on the DOM. Then I used JavaScript to create an event listener on the button so that when the user submits a input through the index element, it runs the function animeLove. This function uses fetch with the Jikan API. From the Jikan API data, I pulled information from the database regarding the anime that the user inputted. The data I pulled was the title of the anime, the synopsis, the trailer for the anime, and the anime cover image.  Then I nested a second fetch to pull from another anime API called Kitsu. I used the data from the Jikan API regarding the anime's season and season year as query parameters for the Kitsu API. The Kitsu API then uses that data to recommend other animes for the user to watch. 


## Lessons Learned:

With this project, I had a issue where each time the user searched a new anime through the api, the recommendation list would add to the previous list of recommendations. I learned that I could stop this by setting the innerHTML of the ul element of the list and set it's value to an empty so each time an anime was searched it would clear the list then add new list of recommendations to the ul after it was cleared.