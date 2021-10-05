var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter number ', (num) => {
    let i=0;
    while(i<=num){
        console.log(i+":"+ Math.pow(num,i));
        i++;
    }
});