import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


const filteredObj = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage ==='Final';
});


console.log(filteredObj[0]['Home Team Name']);
console.log(filteredObj[0]['Away Team Name']);
console.log(filteredObj[0]['Home Team Goals']);
console.log(filteredObj[0]['Away Team Goals']);
if (filteredObj[0]['Home Team Goals'] > filteredObj[0]['Away Team Goals']) {
    console.log(`The winner is ${filteredObj[0]['Home Team Name']}`)
    } else {
        console.log(`The winner is ${filteredObj[0]['Away Team Name']}`)
    };

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finals = data.filter(function(item){
        return item.Stage === 'Final';
    });
    return finals;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {
    let finals = getFinals(data);
    let years = [];
    finals.forEach(function(item){
        return years.push(item.Year);
    });
    return years;
};

console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 



function getWinners(getFinals, data) {
    let finals = getFinals(data);
    let winners = [];
    finals.forEach(function(item){
        if(item['Home Team Goals'] < item['Away Team Goals']){
            return winners.push(item['Away Team Name']);
    } else if (item['Home Team Goals'] > item['Away Team Goals']){
                    return winners.push(item['Home Team Name'])

    }
})
return winners;
}

console.log(getWinners(getFinals, fifaData));



/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    let years = getYears;
    let winners = getWinners;
    const finals = winners.map(function(item, index){
        return `In ${years[index]}, ${item} won the world cup!`
    });
    return finals;
};

console.log(getWinnersByYear(getWinners(getFinals, fifaData), getYears(getFinals, fifaData)));
//getyears pulls the arrays of all finals years
//getwinners determines the winners of all finals games
/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


function getAverageGoals(data) {
let average = {};
    const averageAway = data.reduce(function(accumulator, item){
        return (item['Away Team Goals'] + accumulator);
    }, 0);

    const averageHome = data.reduce(function(accumulator, item){
        return (item['Home Team Goals'] + accumulator);
    }, 0);
 
    average = { 'Home Average (per match)': Math.round(averageHome / data.length), 
    'Away Average (per match)': Math.round(averageAway / data.length),
    }
    return average;
};

console.log(getAverageGoals(fifaData));

console.log(fifaData.length);




/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    
   let countryWins = data.map(function(item){
    if(item.Stage === 'Final'){
        if(item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Initials']
        } else if (item['Home Team Goals'] < item['Away Team Goals']) {
            return item['Away Team Initials']
        }
    }
   });
   let count = countryWins.reduce(function(accumulator, item){
        if(item === teamInitials){
            return accumulator + 1 
        }
        
   }, 0);
   return count;
}

console.log(getCountryWins(fifaData, "BRA"));


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


// function getWinners(getFinals, data) {
//     let finals = getFinals(data);
//     let winners = [];

//     finals.forEach(function(item){
//         if(item['Home Team Goals'] === item['Away Team Goals']){
//             return winners.push(item['Win conditions']);
//         }
//     });

//     finals.forEach(function(item){
//         if(item['Home Team Goals'] < item['Away Team Goals']){
//             return winners.push(item['Away Team Name']);
//     }
// })
//     finals.forEach(function(item){
//         if(item['Home Team Goals'] > item['Away Team Goals']){
//             return winners.push(item['Home Team Name'])
//     }
// });
// return winners;
// }

// console.log(getWinners(getFinals, fifaData));