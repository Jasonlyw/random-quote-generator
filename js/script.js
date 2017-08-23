// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var viewedQuotes = [];
var html = '';
var red;
var green;
var blue;


// All the quotes containing the text of quote, source, citation, year
var quotes = [
  {quote: 'The art of dining well is no slight art, the pleasure not a slight pleasure.',
   source: 'Michel de Montaigne',
   tag: 'Art'
  },
  {quote: 'All I can say about life is, Oh God, enjoy it!',
   source: 'Bob Newhart',
   tag: 'thoughts'
  },
  {quote: 'What\'s another word for Thesaurus?',
   source: 'Steven Wright',
   tag: 'philosophy'
  },
  {quote: 'Are you going to come quietly, or do I have to use earplugs?',
   source: 'Spike Milligan',
   citation: '\"The Goon Show\"',
   tag: 'humor'
  },
  {quote: 'You cannot fly like an eagle with the wings of a wren.',
   source: 'William Henry Hudson',
   citation: 'Afoot in England',
   year: '1909',
   tag: 'philosophy'
  },
  {quote: 'If two men agree on everything, you may be sure that one of them is doing the thinking.',
   source: 'Lyndon B. Johnson'
  },
  {quote: 'Comedy is nothing more than tragedy deferred.',
   source: 'Pico Iyer',
   citation: 'Time',
   tag: 'thoughts'
  },
  {quote: 'Success is meaningless if you can\'t sleep at night because of harsh things said, petty secrets sharpened against hard and stony regret, just waiting to be plunged into the soft underbelly of a \'friendship.\'',
   source: 'Margaret Cho',
   citation: 'Margaret Cho\'s Weblog',
   year: '2006',
   tag: 'thoughts'
  }
];

// Add a help function print().
function print(quote) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quote;
};

// The getRandomQuote() function
function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length );
  var splicedQuote = quotes.splice(randomNumber,1)[0];
  viewedQuotes.push(splicedQuote);

  if (quotes.length == 0) {
    quotes = viewedQuotes;
    viewedQuotes = [];
  };
  return splicedQuote;
};


// get a random rgb color using Math.random()
function randomColorGenerator() {
  var randomColor;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor;
}


// printQuote() function with html element using helper function print().
function printQuote() {
  var selectedQuote = getRandomQuote();

  html = '<p class="quote">' + selectedQuote.quote + '</p>';
  html += '<p class="source">' + selectedQuote.source;

  if( selectedQuote.citation ) {
    html += '<span class="citation">' + selectedQuote.citation + '</span>';
  } else {
    html += '';
  };
  if( selectedQuote.year ) {
    html += '<span class="year">' + selectedQuote.year + '</span></p>'
  } else {
    html += '';
  };
  if( selectedQuote.tag ) {
    html += '<p class="tag">' + selectedQuote.tag + '</p>'
  } else {
    html += '';
  }
  print(html);

  randomColorGenerator();
  document.getElementById('randomColor').style.backgroundColor = randomColorGenerator();
  console.log(selectedQuote.quote);
};
