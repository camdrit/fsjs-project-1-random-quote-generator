/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    id: 0,
    quote: "Commander, set a new course. There's coffee in that nebula.",
    source: "Captain Kathryn Janeway",
    citation: "Star Trek Voyager S1E6 \"The Cloud\"",
    year: 1995,
    tags: ["TV", "Star Trek", "Humor"]
  },
  {
    id: 1,
    quote: "It is possible to commit no mistakes and still lose. That is not a weakness. That is life.",
    source: "Captain Jean-Luc Picard",
    citation: "Star Trek: The Next Generation S2E21 \"Peak Performance\"",
    year: 1989,
    tags: ["TV", "Star Trek", "Inspirational"]
  },
  {
    id: 2,
    quote: "The humblest of tasks get beautified if loving hands do them. Never forget that.",
    source: "Greg Davies",
    citation: "Taskmaster S1E5 \"Little Denim Shorts\"",
    year: 2015,
    tags: ["TV", "Taskmaster", "Inspirational", "Wisdom"]
  },
  {
    id: 3,
    quote: "Stay hungry. Stay foolish.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: 2005,
    tags: ["Influential Figures", "Inspirational", "Wisdom"]
  },
  {
    id: 4,
    quote: "An individual has not begun to live until he can rise above the narrow horizons of his particular individualistic concerns to the broader concerns of all humanity.",
    source: "Dr. Martin Luther King, Jr.",
    citation: "The Words of Martin Luther King, Jr, Second Edition",
    year: 2011,
    tags: ["Influential Figures", "Wisdom", "Inspirational"]
  }

];

// I believe if I spent lots of time workshopping different ways of achieving a truly random but also
// valid color string I certainly could, but for the purposes of this static page I think this works well!

const colorChars = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const getRandomColor = () => {
  let colorString = "#";

  while (colorString.length < 7)
    colorString += colorChars[Math.floor(Math.random() * colorChars.length)];

  return colorString;
}


/***
 * `getRandomQuote` function
***/
const getRandomQuote = (quoteID) => {
  // I didn't like how sometimes the quote returned would be the same as the previous one
  // so I added an id property to the quote objects to try and uniquely identify them
  // that way I could just tell the getRandomQuote function to try again until it came back with something new

  let quoteObj = quotes[Math.floor(Math.random() * quotes.length)];

  if (quoteObj.id === quoteID)
    return getRandomQuote(quoteID);

  return quoteObj;
}


/***
 * `printQuote` function
***/
const printQuote = () => {
  let quoteIDNode = document.querySelector('.quote-id');
  let quoteID = quoteIDNode ? parseInt(quoteIDNode.textContent) : undefined;

  const quoteObj = getRandomQuote(quoteID);

  let quoteHTML = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;

  if (quoteObj.citation)
    quoteHTML += `<span class="citation">${quoteObj.citation}</span>`;

  if (quoteObj.year)
    quoteHTML += `<span class="year">${quoteObj.year}</span>`;

  quoteHTML += "</p>";

  // A for loop worked nicely for iterating over the tags array -- if it exists.
  // A challenge was how to figure out how to add commas, but not on the last item
  // I did overthink it a bit but it just took saying the problem to myself out loud to realize
  // that the answer was hidden in the description of the problem itself!
  if (quoteObj.tags) {
    quoteHTML += `<p class="tags">`
    for (let tagNumber in quoteObj.tags)
      quoteHTML += `<span class="tag">${quoteObj.tags[tagNumber]}${parseInt(tagNumber) === (quoteObj.tags.length - 1) ? "" : ", "}</span>`;


    quoteHTML += "</p>";

    quoteHTML += `<span class="quote-id" style="display: none;">${quoteObj.id}</span>`;
  }

  document.getElementById('quote-box').innerHTML = quoteHTML;

  document.getElementsByTagName('body')[0].style.backgroundColor = getRandomColor();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// let's make the page show another quote every five seconds...
// A fun idea for the future is to animate the background color of the 'Show Another Quote' button 
// like a progress bar as the interval counts down.
// I'd like to come back to this project in the future and expand on it to add stuff like this :)

setInterval(function () {
  document.getElementById('load-quote').click();
}, 5000);