let flip = Math.random();
let headWin=0;
let tailWin=0;
while(headWin<=11 && tailWin<=11){
    if(flip>0.5)
        headWin++;
    else
        tailWin++;
}
if(tailWin==11)
    console.log("Tails won");
else
console.log("Heads won");