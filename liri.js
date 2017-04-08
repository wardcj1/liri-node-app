// Instructions -----------------------------------------------------

// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

//    something like this-->     var request = require("twitterKeys");

// Instructions  -----------------------------------------------------

// Make it so liri.js can take in one of the following commands: 1. **my-tweets**, 2. **spotify-this-song**, 3. **movie-this**, 4. **do-what-it-says**

// 1. -----------------------------------------------------
// **my-tweets**
// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.

// 2. -----------------------------------------------------

// **spotify-this-song**
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to
// "The Sign" by Ace of Base

// 3. -----------------------------------------------------
// **movie-this**
// node liri.js movie-this '<movie name here>'

var request = require("request");
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
var movie = process.argv[2] || "Mr. Nobody";

// We then run the request module on a URL with a JSON
//this is a callback function (Think Gwen Stefani "Holla Back")
// callback is asychronus; that's why you use it
// ? query parameters
// node is "error 1st response"
// response is an object with properties (METADATA)
// 'body' returns as a string
// so, JSON.parse converts 'body' into an object
// as an object, you can parse/select the properties you want to see, example: imdbRating
// research "examples using JSON.parse()"  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json", function(error, response, body) {

  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

  	console.log("The title of the movie is: " + JSON.parse(body).Title);
  	console.log("The year the movie came out is: " + JSON.parse(body).Year);
   	console.log("The IMDB rating of the movie is: " + JSON.parse(body).imdbRating);
   	console.log("The country where the movie was produced is: " + JSON.parse(body).Country);
   	console.log("The language of the movie is: " + JSON.parse(body).Language);
   	console.log("The plot of the movie is: " + JSON.parse(body).Plot);
   	console.log("The actors in the movie are: " + JSON.parse(body).Actors);
   	console.log("Rotten Tomatoes Rating is: " + JSON.parse(body).Ratings[1, [0]]);
   	console.log("Rotten Tomatoes URL is: " + JSON.parse(body).Website);
	   	
   }
});

// 4. -----------------------------------------------------
// **do-what-it-says**
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.

// -----------------------------------------------------