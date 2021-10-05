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
let min = num1;
if(num2< min)
    min=num2;
if(num3<min)
    min=num3
if(num4<min)
    min=num4;
if(num5<min)
    min=num5;

let max = num1;
if(num2> max)
    max=num2;
if(num3> max)
    max=num3;
if(num4> max)
    max=num4;
if(num5> max)
    max=num5;

console.log("Minimum number is :"+min);
console.log("Maximum number is :"+ max);