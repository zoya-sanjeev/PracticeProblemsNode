const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function palindrome(num){
    const reverseNum =  parseFloat(num.toString().split('').reverse().join(''));
    console.log(reverseNum);
    if(num==reverseNum)
        return true;
    else
        return false;
}
function prime(num){
    let flag=0;
    for(let i =2;i<num;i++){
        if(num%i==0){
            flag=1;
            break;
        }
    }
    if(flag==1)
        return false;
    else
        return true;
}

readLine.question("Enter number", (num) =>{
    if(palindrome(num))
        console.log("Number is palindrome");
    else
        console.log("Number is not palindrome");
    if(prime(num))
        console.log("Number is prime");
    else
        console.log("Number is not prime");
});