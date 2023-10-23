# Input Ingredient Receive Recipe

![Input Ingredient Receive Recipe](recipeapi.png)

## Overview 🍗🍳🥬

Web application that allows you to input an ingredient, search for recipes that include that ingredient, and receive information about the recipe. The project includes an HTML file, a CSS file, and a JavaScript file to make it functional.

## Project Structure

The project is structured as follows:

- `index.html`: This is the main HTML file that provides the structure and user interface of the application.

- `css/normalize.css`: This is a CSS file used to normalize the default styles across different browsers.

- `css/style.css`: This is a custom CSS file that defines the styling for the application.

- `js/main.js`: This JavaScript file contains the functionality of the application. It listens for user input, sends requests to external APIs to fetch data, and displays the results on the web page.

## How It Works

1. When you open the application, you will see a text input field and a "Search" button.

2. Enter the name of an ingredient you want to search for in the text input field.

3. Click the "Search" button.

4. The application will send a request to the USDA Food Data API to search for the ingredient. It will then display the description of the first matching food item from the API.

5. After that, it will send a request to the Spoonacular API to find recipes that include the ingredient. The title of the first recipe and an image of the recipe will be displayed on the page.


## APIs

This project relies on the following APIs:

- [USDA Food Data API](https://fdc.nal.usda.gov/api-key-signup): This API is used to search for the ingredient and retrieve its description.

- [Spoonacular API](https://spoonacular.com/food-api): This API is used to find recipes that include the ingredient.

Please note that you need to obtain API keys for these services and replace the placeholders in the JavaScript code with your actual API keys for the application to work.
