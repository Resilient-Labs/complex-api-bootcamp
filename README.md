#Random holiday generator
I used a holiday API and searched the randomized holiday result into wikipedia, displaying a description of that holiday.

## How It's Made:

**Tech used:** HTML, CSS, Javascript

Really just used some basic HTML & CSS along with the ES6 I used after fetching the data from NASA.

## Optimizations
There's obviously a great deal of styling to be done here. Because of the limitations of the original holiday API, I'd like to make the input field a drop-down of the countries I know return results. Likewise, I want to add conditionals to the response to the wikipedia search so that if no information is found, one of the other indices in the response object are checked, as the wiki API can be weird and inconsistent about that.

## Lessons Learned:

Another way to partially randomize a number to use in selecting an item out of an array.
