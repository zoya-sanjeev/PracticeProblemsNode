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