# Pronunciation and Thesaurus App

<b>project link coming soon</b>

![image of website](complex-api-bootcamp/appscreenshot.png)

### How It’s Made

<b>Langs used</b> Javascript, HTML CSS. 

The purpose of this app is for writers and performers; allowing individuals to search the pronunciation of word of words for speech and allowing them to find synonyms for the words, allowing their writing to be more dynamic. What I first did was create a fetch call to the a dictionary api to find the pronunciation of that word AND the part of speech. I then used the property of the name from that serach to initiate a second fetch call which finds synonyms, via the Web-Mir thesaurus api. It's a combination of targeting empty tags for rendering text, while using a for of loop to render the text onto the correct html tag. 

### optimizations

### Lessons Learned

I had the most difficult time getting the various elemenets of an array to render on the dom. I tried doing using appendChild(), which worked... however it consistently kept appending new search results to older results instead of replacing them in the specified. I new that I needed to use a loop, but I had trouble with the certian loop to implement. After researching various loops, and thinking heavily about what I needed done, I made sure to utilize for...of loop. Tada!