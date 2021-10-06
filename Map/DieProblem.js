let numOfRolls = 5;
let mapOfDieRolls = new Map();
for(let i = 0; i<5; i++){
    roll = Math.ceil(Math.random() * 6);
    mapOfDieRolls.set(i,roll);
}