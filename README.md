# fsjs-project-1-random-quote-generator
Treehouse Fullstack Javascript Techdegree Project 1 - A Random Quote Generator

This project was to create a static web page that displays a quote from an array of quotes.

I was aiming for an 'Exceeds Expectations' grade, which along with the regular requirements,
also required the following additions:

* At least one of the quote objects has an additional property, which would be displayed to the page. I achieved this by adding a 'tags' array that describe the nature of the quote. I added these to every quote in my project.
* Quotes automatically refresh at regular intervals. I achieved this using a simple setInterval().
* Background color changes to a random color each time the quote refreshes. I achieved this by creating an array of individual characters that are valid in a hex color string (A-F, 0-9) then I used a while loop to keep adding a random character from this array until I had a full color string.