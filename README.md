# 📊 Project: Complex API 
## Star Wars Age
With this intergalactical website, find out the *real* age of your favorite Star Wars characters.  

**Link to site:** https://starwarsage-nktruong.netlify.app/

## APIs used
1. Star Wars API: https://swapi.dev/
2. Agify API: https://agify.io/

## A Picture of the Simple Website:
![Jango Fett's estimated age is 67](https://user-images.githubusercontent.com/88857875/135514943-d457f18f-5bc7-4dfc-b1c9-d5f72f8dbedc.png)


## How It's Made:

**Tech used:** HTML5, JavaScript ES6+

Since the Agify API only wanted their first name, I used the split method to cut off the last name.

## Optimizations

* Some of the names are numbers or not comprehensible to the Agify API, so the age is not computed.

## Lessons Learned

I learned how to create a complex API using Fetch that used Star Wars character data and sent the first name over to the Agify API that generates estimates their age. In the same fetch request for the first API, in the .then promise I made another fetch request using that data. For both APIs, I looked into the objects to find out where the data was located.
