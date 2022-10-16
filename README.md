# 📊 Project: Complex API 

### Goal: Use data returned from one api to make a request to another api and display the data returned

**Link to project:** https://nearbyrestaurants.netlify.app/

![git_AdobeExpress](https://user-images.githubusercontent.com/91163017/196013738-1b44550b-235f-49c5-abfe-5c1336580a0a.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript and web API

User is able to enter a zip code and receive a list of restaurants close by. When the zip code is entered a request it made to the zippopotam api which returns data about the zip code including the longitude and latitude coordinates. Another request is made to the Travel Advisor api passing in the longitude and latitude. This request returns an array with information about restaurants nearby. A loop is used to traverse through the array elements and add them to the DOM.
