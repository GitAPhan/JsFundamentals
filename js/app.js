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

// Practice starts here

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

