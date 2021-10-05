var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);
var flag=0;
rl.question('Enter number ', (num) => {
    for(let i =2; i<num; i++){
        if(num%i==0){
            console.log("Not Prime")
            flag=1;
            break;
        }
    }
    if(flag==0)
        console.log("Prime");
    rl.close();
});
