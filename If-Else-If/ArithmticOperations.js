var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter number 1', (a) => {
    rl.question('Enter number 2', (b) => {
        rl.question('Enter number 2', (c) => {
            num1= a + b * c;
            num2 = a % b + c;
            num3 = c + a/b;
            num4 = a * b + c;

            console.log("Minimum of all is: "+ Math.min(num1,num2,num3,num4));
            console.log("Maximum of all is: "+ Math.max(num1,num2,num3,num4));
            rl.close();
    });
    });
});