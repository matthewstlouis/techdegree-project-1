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
const quotes = [
  {
    quote:'Testing',//the quote itself
    source:'Testing',//creator of quote
    citation:'Testing',//where the quote was said/written
    year:'Testing',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  },
  {
    quote:'',//the quote itself
    source:'',//creator of quote
    citation:'',//where the quote was said/written
    year:'',
  }
];//array currently contains 10 empty objects to be plugged with information later


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
};


/***
 * `printQuote` function
***/
function printQuote(){
  let randQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randQuote.quote}</p><p class="source">${randQuote.source}`
  if(randQuote.citation){
    htmlString += `<span class="citation">${randQuote.citation}`;
  };
  if(randQuote.year){
    htmlString += `<span class="year">${randQuote.year}`;
  }
  return document.getElementById('quote-box').innerHTML = htmlString; 
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);