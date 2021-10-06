let numArray = new Array();

for (let count = 0; count < 10; count++) {
  let number = Math.floor(100 + Math.random() * 900);
  numArray.push(number);
}
console.log(numArray);
let numArrayCopy = [...numArray];
let max =0;
let min=1000;
for(let i=0; i<numArray.length; i++){
    if(numArray[i]>max)
        max=numArray[i];
    if(numArray[i]<min)
        min=numArray[i];
}
let secondMax=0;
let secondMin=1000;
for(let i =0; i< numArray.length; i++){
    if(numArray[i]> secondMax && numArray[i]!=max)
        secondMax=numArray[i];
    if(numArray[i]<secondMin && numArray[i]!= min)
        secondMin= numArray[i];
}
console.log("Second largest number: "+ secondMax);
console.log("Second smallest number: "+ secondMin);