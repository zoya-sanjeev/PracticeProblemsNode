var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

var len=250;
rl.question('Enter choice 1.Feet to inch 2. feet to meter 3. inch to feet 4. meter to feet ', (num) =>{
    switch(Number(num)){
        case 1: console.log("feet to inch:"+len*12);
                break;
        case 2: console.log('feet to meter:'+len/3.281);
                break;
        case 3: console.log("inch to feet:"+ len/12);
                break;
        case 4: console.log("meter to feet:"+ len*3.281);
                break;
    }
});