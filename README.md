# 📊 Week07 Bootcamp2019a Project: Complex API

This generator will give you a venue based on location and type. For example, displaying a lounge located in cleveland, ohio.

## How It's Made:

**Tech Used:** HTML, JS, mapquest api, forsquare venues API

When the user inputs a city and state, the mapquest api will take in those values and return a json object which I took the latitude and longitude from and placed within variables to use inside of the venues api. Then the venues api uses latitude, longitude and a venue type to search for the first venue that pops up with those values. I then display the name and address of that venue for the user to see.

## Lessons Learned:

In this project, I learned that It is entirely possible to call a function within a .then() promise, but that there is no need for a return for the function call if you can finish all your code in the new function. 
