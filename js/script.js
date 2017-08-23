// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var viewedQuotes = [];
var html = '';


// All the quotes containing the text of quote, source, citation, year
var quotes = [
  {quote: 'The art of dining well is no slight art, the pleasure not a slight pleasure.',
   source: 'Michel de Montaigne'
  },
  {quote: 'All I can say about life is, Oh God, enjoy it!',
   source: 'Bob Newhart'
  },
  {quote: 'What\'s another word for Thesaurus?',
   source: 'Steven Wright'
  },
  {quote: 'Are you going to come quietly, or do I have to use earplugs?',
   source: 'Spike Milligan',
   citation: '\"The Goon Show\"'
  },
  {quote: 'You cannot fly like an eagle with the wings of a wren.',
   source: 'William Henry Hudson',
   citation: 'Afoot in England',
   year: '1909',
  },
];


function print(quote) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quote;
}

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length );
  var splicedQuote = quotes.splice(randomNumber,1)[0];
  viewedQuotes.push(splicedQuote);

  if (quotes.length == 0) {
    quotes = viewedQuotes;
    viewedQuotes = [];
  }
  return splicedQuote;
}


function printQuote() {
  var selectedQuote = getRandomQuote();

  html = '<p class="quote">' + selectedQuote.quote + '</p>';
  html += '<p class="source">' + selectedQuote.source;

  if( selectedQuote.citation ) {
    html += '<span class="citation">' + selectedQuote.citation + '</span>';
  } else {
    html += '';
  }
  if( selectedQuote.year ) {
    html += '<span class="year">' + selectedQuote.year + '</span></p>'
  } else {
    html += '';
  }
  print(html);


}
