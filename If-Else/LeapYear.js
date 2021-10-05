var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);
var year;
rl.question('Enter year ', (yearInput) => {
    year=yearInput
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
    
});
rl.close;