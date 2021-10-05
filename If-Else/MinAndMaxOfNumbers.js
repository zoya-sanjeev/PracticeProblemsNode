function getRandomNumber(){
    let num = Math.floor(100 + Math.random()* 900);
    return num;
}
let num1=getRandomNumber();
let num2= getRandomNumber();
let num3= getRandomNumber();
let num4= getRandomNumber();
let num5= getRandomNumber();

console.log("The numbers are: "+num1+ ","+num2+ ","+num3+ ","+num4+ ","+num5);
console.log("Minimum number is :"+ Math.min(num1,num2,num3,num4,num5));
console.log("Maximum number is :"+ Math.max(num1,num2,num3,num4,num5));