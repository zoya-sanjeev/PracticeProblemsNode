var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter number ', (num) => {
    if(num == 1)
        console.log("Unit");
    else if(num == 10)
        console.log("Tens");
    else if(num == 100)
        console.log("Hundered");
    else
        console.log("Thousand");
    rl.close();
});