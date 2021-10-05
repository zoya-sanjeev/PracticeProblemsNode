var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter number ', (num) => {
    switch(Number(num)){
        case 1: console.log("Unit");
                break;
        case 10: console.log("Tens");
                break;
        case 100: console.log("Hundered");
                break;
        case 1000: console.log("Thousand");
                break;
    }
    rl.close();
});