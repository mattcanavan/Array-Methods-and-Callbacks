import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
//  M  V P  //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(`******Task1******`);
const arrayA = fifaData.filter(function(item) {
    return item.Year === 2014 && item.Stage === 'Final';
  });
  
  console.log(`(a) Home Team name for 2014 world cup final: ${arrayA[0]['Home Team Name']}`);
  console.log(`(b) Away Team name for 2014 world cup final: ${arrayA[0]['Away Team Name']}`);
  console.log(`(c) Home Team goals for 2014 world cup final: ${arrayA[0]['Home Team Goals']}`);
  console.log(`(d) Away Team goals for 2014 world cup final: ${arrayA[0]['Away Team Goals']}`);
  if (arrayA[0]['Home Team Goals'] > arrayA[0]['Away Team Goals']) {
    console.log(`(e) Winner of 2014 world cup final: ${arrayA[0]['Home Team Name']}`)
  } else {
    console.log(`(e) Winner of 2014 world cup final: ${arrayA[0]['Away Team Name']}`)
  };


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log(`******Task2******`);
function getFinals(dataIn) {

    const dataOut = dataIn.filter(function (item) {
        return item.Stage === 'Final';

    });

    console.log(dataOut);
    return dataOut;
};
getFinals(fifaData);


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
console.log(`******Task3******`);
function getYears(paramCallback, dataIn) {
    
    const years = [];

    paramCallback(dataIn).filter(function (item) {
      return years.push(item.Year);
    });

    console.log(years);
    return years;

};
getYears(getFinals, fifaData);


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
console.log(`******Task4******`);
function getWinners(paramCallback, dataIn) {

    const winners = [];

    paramCallback(dataIn).filter(function (item) {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            return winners.push(item['Home Team Name']);
        } else if(item['Home Team Goals'] === item['Away Team Goals']){
            return winners.push(item['Win conditions']);
        } else {
            return winners.push(item['Away Team Name']);
        }
    });
    console.log(winners)
    return winners
};
getWinners(getFinals, fifaData);


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log(`******Task5******`);
function getWinnersByYear(paramCallback1, paramcallback2, dataIn) {

    const allWinners = getWinners(getFinals, dataIn);
    const allYears = getYears(getFinals, dataIn);

    for (let i = 0; i < allWinners.length; i++){
        console.log(`In ${allYears[i]}, ${allWinners[i]} won the world cup!`)
    }

};

getWinnersByYear(getWinners, getYears, fifaData);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(dataIn) {

    const homeGoals = dataIn.reduce(function(accumulator, item) {
    //   console.log(`goals: ${item['Home Team Goals']}`);
    //   console.log(`accumulator: ${accumulator}`);
      return accumulator + item['Home Team Goals']
    }, 0);

    const awayGoals = dataIn.reduce(function(accumulator, item) {
    //   console.log(`goals: ${item['Home Team Goals']}`);
    //   console.log(`accumulator: ${accumulator}`);
      return accumulator + item['Home Team Goals']
    }, 0);

    
};

getAverageGoals(fifaData);

/// STRETCH  //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
