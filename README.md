# Movies and More - Complex API

## What

This dynamic app enables users to input a movie title, offering detailed information about the film, as well as additional insights into the director. This app caters to more than just movie enthusiasts; it appeals to those interested in ratings, box office results, and the latest updates on the director.

## How it works
Tools: HTML, CSS, JavaScript, APIs

To fulfil the requirements of this project I used two API's. One API gathered all the information about the movie, and another provided articles about the movie's director.

Once I gathered my API's, I tested each one individually to ensure that they work. I ensured that after typing in a value input, upon clicking the event listener, I'd receive an object with the movie's information (e.g. director, plot, release date) in key value pairs. I took note of the keys and considered which one would supply me with the most interesting information upon its interaction with my second API which receives news articles. I used the "director" key from my first API and passed it as a parameter into my second API, which provides news articles about the director.

First, I created an event listener to initialize the function after the user clicks a button. With this single function, I nested two fetch APIs. The first fetch API requests data from the Open Movie Database server, providing me with information about the movie via user's input. I grabbed relevant key/values to either display on the DOM or to pass through the query parameters of my second API.

Then, I nested a second fetch method to access the news API. To make the two API's interact, I took  a key (director) from the first API, turned into a variable, and passed it into the news URL as a parameter. I used a for-loop to loop through the first recent 5 articles to refrain from overloading the user with excessive articles. Finally, I used the appendchild method to show the results of the articles to the DOM.

## Lessons learned
I'm continuously learning about the powers of the DOM and javascript, in particular when appending elements to it and still being able to target each element as its own class for styling purposes. I am also learning about the power of API's and its ability to provide user's with a dynamic experience, with little code and updating requirements from the developer themselves.