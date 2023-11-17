# Game of Thrones Characters & Quotes App 🗡️

### Description
Explore the Game of Thrones universe with this web application, which fetches and seamlessly integrates data from two APIs: 
1. The <a href="https://gameofthronesquotes.xyz/">Game of Thrones Quotes API</a> randomly generates the name of a character and a matching quote.
2. The name retrieved from API #1 is used in the <a href="https://thronesapi.com/">Game of Thrones Character API</a> to fetch an accompanying image.

Check out the app <a href="https://xsarahyu.github.io/complex-api-bootcamp/">here</a>!

<img src="got-characters-quotes-api.png">

### Tech Used
- HTML
- CSS
- JavaScript

### Lessons Learned
- <strong>API Integration</strong>: Using data returned from one API to make a request to another.
- <strong>Data Editing</strong>: Implementing conditionals, string methods, and/or regular expressions to edit API data, addressing grammar mistakes, misspellings, and other inconsistencies.
    - E.g. Not all quotes from API #1 end in a period. I used the `slice()` method to return the last character of every quote. Next, I checked if it was a lowercase character using the `match()` method with the regex `/[a-z]/i`. If it was a lowercase character, then the conditional statement simply added a period.
- <strong>Data Overwriting</strong>: Resolving discrepancies in character names between the two APIs by overwriting or modifying the data as needed.
    - E.g. Some character names didn't match between the two APIs; one listed the character's full name, while the other used a nickname. I edited the nickname to reflect full name.
- <strong>Data Insertion</strong>: Employing class constructors to add characters to API #2, along with their ID, first name, and image URL.
    - E.g. The character Mance Rayder exists in API #1 but not API #2, so I manually added his information to API #2.

### Notes
I'm really proud of this project because of the meticulous effort I invested in editing and matching the data from the two APIs. I hope you have as much fun using the app as I did building it. 😄✨