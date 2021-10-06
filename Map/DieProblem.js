let numOfRolls = 5;
let mapOfDieRolls = new Map();
for(let i = 1; i<=6; i++){
    mapOfDieRolls.set(i,0);
}
while(true){
    roll = Math.ceil(Math.random()* 6);
    let count =  mapOfDieRolls.get(roll);
    mapOfDieRolls.set(roll,count+1);
    if(count+1 == 10)
        break;
}
console.log(mapOfDieRolls);
let minValue=11;
let maxValue=0;
let minKey=0;
let maxKey=0;
for([key,value] of mapOfDieRolls.entries()){
    if(value>maxValue){
        maxValue=value;
        minKey=key;
    }
    if(value<minValue){
        minValue=value;
        minKey=key;
    }
}
console.log("Maximum value occurs at:"+ maxKey);
console.log("Minimum value occurs at:"+ minKey);