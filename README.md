# complex-api-dictionary

This is a dictionary app that take the user's input and generates a corresponding definition and photo. For example, if the user types in 'dance' in the input, the definition returned to the DOM is 'a social gathering for dancing' and the image is of a group of people dancing on the street. 

Link to Project: https://dictionary-api.netlify.app/

![Project Image](/pic/dictionary.png)


### How It's Made:

Tech used: HTML, CSS, JavaScript

This dictionary app uses 2 APIs: 1) a Dictionary API and 2) a Stock Photo API. First, the user inputs a word (i.e. dance). Next, the word is sent to the dictionary API where a definition is fetched (dance -> a social gathering of people dancing). Then, the definition is sent to the stock photo API where the photo is fetched. (a social gathering of people dancing -> image of people dancing) 

word -> definition -> photo


### Lesson Learned

I learned how to use 2 APIs in an app. I did this by writing a fetch statement and nesting another fetch statement inside of it. 
 

###