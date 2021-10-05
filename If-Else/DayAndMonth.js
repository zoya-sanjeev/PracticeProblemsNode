var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);
     
var day;
var month;

rl.question('Enter day ', (dayInput) => {
    day = dayInput;
    rl.question('Enter month ', (monthInput) => {
        month = monthInput;
        if(month>=3 && month<=6){
            console.log("True");
        }else
            console.log("False");
    });
    });

