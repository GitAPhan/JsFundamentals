// variables examples

// boolean variable
var is_trusted = true;
// number variable
var user_age = 39;
// string variable
var user_name = 'bestUser';
user_name = 'RevokedUser';
// array of string variable
var user_names = ['oneUser', 'twoUser', 'threeUser'];
// object variable containing a string, a number, and a boolean
var user = {
    name: 'awesomeUser',
    age: 19,
    is_subscribed: true
}



// VARIABLES practice starts here

// Create a variable called player_name and set it to a string
// Console log the variable and verify your string value shows up:
var player_name = 'Awesome_Player';
console.log(player_name);

// Create a variable called player_number and set it to an integer
// Console log the variable and verify your number value shows up:
var player_number = 31;
console.log(player_number);

// Create a variable called is_playing and set it to either true or false\
// Console log the variable and verify your boolean value shows up:
var is_playing = true;
console.log(is_playing);

// Create a variable called player and set it to an object that contains the keys name set to a string, 
// number set to a number and is_playing set to either true or false
// Console log the players name, number and their playing status is a nicely structured way
var player = {
    Player_name: 'Great_Player',
    Player_number: 25,
    playing: true
}
console.log(player);

// Create a variable called players and set it to an array that contains objects that contains the keys name set to a string, 
// number set to a number and is_playing set to either true or false. Populate the array with at least 5 objects.
// Console log the 3rd and 5th players name, number and their playing status is a nicely structured way
var players = [
    {
        playersName: 'Player_One',
        playersNumber: 34,
        isPlaying: true
    }, {
        playersName: 'Player_Two',
        playersNumber: 64,
        isPlaying: false
    }, {
        playersName: 'Player_Three',
        playersNumber: 52,
        isPlaying: true
    }, {
        playersName: 'Wayne_Gretzky',
        playersNumber: 99,
        isPlaying: false
    }, {
        playersName: 'Player_Four',
        playersNumber: 11,
        isPlaying: true
    }, {
        playersName: 'Player_Five',
        playersNumber: 69,
        isPlaying: true
    }
]
console.log(players[2], players[4]);

// Modify each object in players and give each player a key called all_star_years set to an array of numbers
// Console log the first players name, number, their playing status and their first year as an all star.
//      created list of first all star year
var AllStarsList = [2018, 2000, 1998, 1999, 2012, 2011];
//      loop to add in key to objects
for (var i = 0; i < players.length; i++) {
    players[i].First_All_Star_Year = AllStarsList[i];
}
console.log(players[0]);



// Conditionals examples

// Create a variable called is_trusted and set it to either true or false.
// Create an if statement that will console log "We are trusted" if is_trusted is true and "We are not trusted" if is_trusted is false
var is_trusted = true;
if (is_trusted) {
    console.log('We are trusted');
} else {
    console.log('We are not trusted');
}

// Create a variable called tickets_sold and set it to either a number between 0 and 200.
// Create an if statement that will console log "Many tickets sold" if tickets_sold is more than 100,
// "A few tickets sold" if tickets_sold is between 50 and 100 and
// "Not many tickets sold" if tickets_sold is between 0 and 49
var tickets_sold = 150;
if (tickets_sold > 100) {
    console.log('Many tickets sold');
} else if (tickets_sold >= 50) {
    console.log('A few tickets sold');
} else {
    console.log('Not many tickets sold');
}

// Create a variable called has_paid and set it to either true or false.
// Create a variable called items_in_cart and set it to a number between 0 and 10
// Create an if statement that will console log "Valuable Customer" if has_paid is true AND items_in_cart is at least 5
var has_paid = true;
var items_in_cart = 7;
if (has_paid && items_in_cart >= 5) {
    console.log('Valuable Customer');
}

// CONDITIONALS practice starts here

// Using your players variable, create an if statement that will console log the first players name if the first player's is_playing is true
// Note that the console will log or not depending on what the is_playing of the first player in the array is set to
for (i = 0; i < players.length; i++) {
    if(players[i].isPlaying) {
        console.log(`${players[i].playersName} is playing`);
    }
}
